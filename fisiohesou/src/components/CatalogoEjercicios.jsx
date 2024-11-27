import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable"; // Librería para tablas en PDF
import "./CatalogoEjercicios.css";

// Ejercicios disponibles (puedes expandirlo con más ejercicios)
const ejerciciosDisponibles = [
  { id: 1, nombre: "Plancha Lateral", imagen: "./Plancha_lateral.jpg" },
  { id: 2, nombre: "Puentes", imagen: "./Puentes.jpg" },
];

const CatalogoEjercicios = () => {
  const [nombrePaciente, setNombrePaciente] = useState("");
  const [rutina, setRutina] = useState([]); // Lista de días con sus ejercicios
  const [nuevoDia, setNuevoDia] = useState(""); // Día actual para añadir ejercicios
  const [modalVisible, setModalVisible] = useState(false); // Control del modal
  const [diaSeleccionado, setDiaSeleccionado] = useState(""); // Día seleccionado
  const [ejerciciosSeleccionados, setEjerciciosSeleccionados] = useState([]); // Ejercicios seleccionados
  const [ejerciciosSeleccionadosModal, setEjerciciosSeleccionadosModal] = useState([]); // Ejercicios seleccionados en el modal

  // Función para agregar un día a la rutina
  const agregarDia = () => {
    if (nuevoDia.trim() === "") {
      alert("Por favor ingresa un día.");
      return;
    }
    if (rutina.some((dia) => dia.dia === nuevoDia)) {
      alert("Este día ya existe en la rutina.");
      return;
    }
    setRutina([...rutina, { dia: nuevoDia, ejercicios: [] }]);
    setNuevoDia("");
  };

  // Función para agregar un ejercicio a un día específico
  const agregarEjercicio = (dia, ejercicio) => {
    setRutina((prevRutina) =>
      prevRutina.map((d) =>
        d.dia === dia
          ? { ...d, ejercicios: [...d.ejercicios, { ...ejercicio, descripcion: "" }] }
          : d
      )
    );
  };

  // Función para abrir el modal de ejercicios
  const abrirModal = (dia) => {
    setDiaSeleccionado(dia);
    setEjerciciosSeleccionadosModal([]); // Limpiar selección anterior
    setModalVisible(true);
  };

  // Función para cerrar el modal
  const cerrarModal = () => {
    setModalVisible(false);
  };

  // Función para seleccionar ejercicios en el modal
  const seleccionarEjercicio = (ejercicio) => {
    if (!ejerciciosSeleccionadosModal.includes(ejercicio)) {
      setEjerciciosSeleccionadosModal([...ejerciciosSeleccionadosModal, ejercicio]);
    } else {
      setEjerciciosSeleccionadosModal(
        ejerciciosSeleccionadosModal.filter((ej) => ej !== ejercicio)
      );
    }
  };

  // Función para confirmar la adición de ejercicios al día seleccionado
  const confirmarAgregarEjercicios = () => {
    setRutina((prevRutina) =>
      prevRutina.map((d) =>
        d.dia === diaSeleccionado
          ? { ...d, ejercicios: [...d.ejercicios, ...ejerciciosSeleccionadosModal] }
          : d
      )
    );
    cerrarModal();
  };

  // Función para actualizar la descripción de un ejercicio
  const actualizarDescripcion = (dia, index, descripcion) => {
    setRutina((prevRutina) =>
      prevRutina.map((d) =>
        d.dia === dia
          ? {
              ...d,
              ejercicios: d.ejercicios.map((ej, i) =>
                i === index ? { ...ej, descripcion } : ej
              ),
            }
          : d
      )
    );
  };

  // Función para eliminar un ejercicio de un día
  const eliminarEjercicio = (dia, indiceEjercicio) => {
    setRutina((prevRutina) =>
      prevRutina.map((d) =>
        d.dia === dia
          ? { ...d, ejercicios: d.ejercicios.filter((_, i) => i !== indiceEjercicio) }
          : d
      )
    );
  };

  // Función para limpiar toda la rutina
  const limpiarTodo = () => {
    if (window.confirm("¿Estás seguro de que deseas limpiar toda la rutina?")) {
      setRutina([]);
    }
  };

  // Función para convertir una imagen a Base64
  const convertirImagenABase64 = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "Anonymous"; // Asegúrate de que las imágenes estén disponibles sin restricciones CORS
      img.src = url;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        const base64 = canvas.toDataURL("image/jpeg"); // Puedes cambiar el formato si es necesario
        resolve(base64);
      };

      img.onerror = (err) => {
        console.error("Error al cargar la imagen:", err);
        reject(err);
      };
    });
  };

  // Función para exportar la rutina como PDF
  const exportarPDF = async () => {
    try {
      const doc = new jsPDF();
      doc.text(`Rutina de Ejercicios - ${nombrePaciente || "Sin Nombre"}`, 10, 10);
  
      let yPosition = 20;
  
      for (const dia of rutina) {
        // Cambié esta línea para eliminar el número antes del Día
        doc.text(`Día: ${dia.dia}`, 10, yPosition);
        yPosition += 10;
  
        for (const ejercicio of dia.ejercicios) {
          const textoEjercicio = `- ${ejercicio.nombre}: ${ejercicio.descripcion || "Sin descripción"}`;
          doc.text(textoEjercicio, 20, yPosition);
          yPosition += 10;
  
          if (ejercicio.imagen) {
            try {
              const base64Img = await convertirImagenABase64(ejercicio.imagen);
              const imgHeight = 30;
              doc.addImage(base64Img, "JPEG", 20, yPosition, 30, imgHeight);
              yPosition += imgHeight + 5;
            } catch (error) {
              console.warn("Error al cargar la imagen, se omitirá:", error);
            }
          }
        }
        yPosition += 10;
      }
  
      doc.save("Rutina_Ejercicios.pdf");
    } catch (error) {
      console.error("Error al generar el PDF:", error);
    }
  };

  return (
    <div className="catalogo">
      <div>
        <h2>Catalogo de Ejercicios</h2>
        <input
          type="text"
          placeholder="Nombre del paciente"
          value={nombrePaciente}
          onChange={(e) => setNombrePaciente(e.target.value)}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Día de la rutina (ej. Lunes)"
          value={nuevoDia}
          onChange={(e) => setNuevoDia(e.target.value)}
        />
        <button className="agregar-dia"  onClick={agregarDia}>Agregar Día</button>
      </div>

      <div className="rutina">
        {rutina.map((dia, index) => (
          <div key={index}>
            <h3>{dia.dia}</h3>
            <button onClick={() => abrirModal(dia.dia)}>Seleccionar Ejercicios</button>
            <ul>
              {dia.ejercicios.map((ejercicio, i) => (
                <li key={i}>
                  <span>{ejercicio.nombre}</span>
                  <input
                    type="text"
                    value={ejercicio.descripcion}
                    placeholder="Descripción"
                    onChange={(e) =>
                      actualizarDescripcion(dia.dia, i, e.target.value)
                    }
                  />
                  <button classname = 'Eliminar-Eje' onClick={() => eliminarEjercicio(dia.dia, i)}>Eliminar</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <button onClick={limpiarTodo} className="limpiar-btn">Limpiar Todo</button>

      <button onClick={exportarPDF}>Exportar PDF</button>

      {/* Modal de Ejercicios */}
      <div className={`modal-overlay ${modalVisible ? "show" : ""}`}>
        <div className="modal">
          <h3>Selecciona Ejercicios para el {diaSeleccionado}</h3>
          <div className="catalogo-ejercicios">
            {ejerciciosDisponibles.map((ejercicio) => (
              <div
                key={ejercicio.id}
                className={`ejercicio-item ${
                  ejerciciosSeleccionadosModal.includes(ejercicio) ? "selected" : ""
                }`}
                onClick={() => seleccionarEjercicio(ejercicio)}
              >
                <img
                  src={ejercicio.imagen}
                  alt={ejercicio.nombre}
                  className="ejercicio-imagen"
                />
                <p>{ejercicio.nombre}</p>
              </div>
            ))}
          </div>
          <div>
            <button onClick={confirmarAgregarEjercicios}>Agregar Ejercicios</button>
            <button onClick={cerrarModal}>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogoEjercicios;

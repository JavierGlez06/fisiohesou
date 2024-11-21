import React, { useState } from 'react';
import './FormularioFisioterapia.css';

const FormularioHistoriaClinica = () => {
  // Array de 17 preguntas
  const preguntas = [
    "Diabetes",
    "Enfermedades reumáticas",
    "Tabaco",
    "HA",
    "Accidentes",
    "Alcohol",
    "Cáncer",
    "Fracturas",
    "Drogas",
    "Alergias",
    "Quirúrgicos",
    "Sueño",
    "Otros",
    "Cardiovasculares",
    "Actividad fisica",
    "",
    "Psiquiatricos", 
    "Pasatiempo"
  ];

  // Función para generar un ID de paciente aleatorio
  const generatePatientID = () => {
    const randomNum = Math.floor(Math.random() * 10000); // Genera un número aleatorio
    return `PAC${randomNum.toString().padStart(5, '0')}`; // Da formato PAC00001
  };
  const [patientID] = useState(generatePatientID());

// new code
const guardarHistoriaClinica = async (datosFormulario) => {
  try {
    const response = await fetch('http://localhost:5000/guardar_historia_clinica', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datosFormulario),
    });

    const result = await response.json();
    if (response.ok) {
      // Actualiza el estado con el mensaje de éxito
      setMensajeExito("La historia clínica se guardó exitosamente.");
    } else {
      // Si hubo un error, mostrar un mensaje de error
      setMensajeExito("Error al guardar la historia clínica. Inténtalo nuevamente.");
    }
  } catch (error) {
    console.error('Error de conexión:', error);
    setMensajeExito("Hubo un problema de conexión. Intenta nuevamente.");
  }
};


const [formData, setFormData] = useState({
  nombre: '',
  apellidoPaterno: '',
  apellidoMaterno: '',
  fechaNacimiento: '',
  edad: '',
  sexo: '',
  talla: '',
  peso: '',
  imc: '',
  estadoCivil: '',
  ocupacion: '',
  lugarNacimiento: '',
  nacionalidad: '',
  domicilio: '',
  localidad: '',
  cp: '',
  municipio: '',
  estado: '',
  colonia: '',
  telefonoCasa: '',
  celular: '',
  emergenciaNombre: '',
  emergenciaCelular: '',
  frecuenciaCardiaca: '',
  sp02: '',
  temperatura: '',
  presionArterial: '',
  frecuenciaRespiratoria: '',
  motivoConsulta: '',
  padecimientoActual: '',
  tratamientoPrevio: '',
  preguntasAntecedentes: {} // Aquí guardas las respuestas a las preguntas
});

// Al hacer submit, enviar los datos
const handleSubmit = () => {
  guardarHistoriaClinica(formData);
};





//fin new code
  
  return (
    <div className="form-container">
      <table>
        <tbody>
          {/* Sección de Información Personal */}
          <tr>
            <td data-label="Nombre:">Nombre:</td>
            <td colSpan="2"><input type="text" className="input-cell" placeholder="Nombre" /></td>
            <td data-label="Apellido Paterno:">Apellido Paterno:</td>
            <td colSpan="2"><input type="text" className="input-cell" placeholder="Apellido Paterno" /></td>
          </tr>
          <tr>
            <td data-label="Apellido Materno:">Apellido Materno:</td>
            <td colSpan="2"><input type="text" className="input-cell" placeholder="Apellido Materno" /></td>
            <td data-label="ID-PACIENTE:">ID-PACIENTE:</td>
            <td colSpan="2"><input type="text" className="input-cell" value={patientID} readOnly /></td>
          </tr>
          <tr>
            <td data-label="Fecha de nacimiento:">Fecha de nacimiento:</td>
            <td><input type="date" className="input-cell" /></td>
            <td data-label="Edad:">Edad:</td>
            <td><input type="text" className="input-cell" /></td>
            <td data-label="Sexo:">Sexo:</td>
            <td><input type="text" className="input-cell" /></td>
          </tr>
          <tr>
            <td data-label="Talla:">Talla:</td>
            <td><input type="text" className="input-cell" /></td>
            <td data-label="Peso:">Peso:</td>
            <td><input type="text" className="input-cell" /></td>
            <td data-label="IMC:">IMC:</td>
            <td><input type="text" className="input-cell" /></td>
          </tr>
          <tr>
            <td data-label="Estado civil:">Estado civil:</td>
            <td colSpan="5"><input type="text" className="input-cell" /></td>
          </tr>
          <tr>
            <td data-label="Ocupación/profesión:">Ocupación/profesión:</td>
            <td colSpan="5"><input type="text" className="input-cell" /></td>
          </tr>
          <tr>
            <td data-label="Lugar de nacimiento:">Lugar de nacimiento:</td>
            <td colSpan="3"><input type="text" className="input-cell" /></td>
            <td data-label="Nacionalidad:">Nacionalidad:</td>
            <td><input type="text" className="input-cell" /></td>
          </tr>
          <tr>
            <td data-label="Domicilio actual:">Domicilio actual:</td>
            <td colSpan="5"><input type="text" className="input-cell" /></td>
          </tr>
          <tr>
            <td data-label="Localidad:">Localidad:</td>
            <td><input type="text" className="input-cell" /></td>
            <td data-label="C.P.:" >C.P.:</td>
            <td><input type="text" className="input-cell" /></td>
            <td data-label="Municipio:">Municipio:</td>
            <td><input type="text" className="input-cell" /></td>
          </tr>
          <tr>
            <td data-label="Estado:">Estado:</td>
            <td><input type="text" className="input-cell" /></td>
            <td data-label="Colonia:">Colonia:</td>
            <td colSpan="3"><input type="text" className="input-cell" /></td>
          </tr>
          <tr>
            <td data-label="Teléfono en casa:">Teléfono en casa:</td>
            <td><input type="text" className="input-cell" /></td>
            <td data-label="Celular:">Celular:</td>
            <td colSpan="3"><input type="text" className="input-cell" /></td>
          </tr>
          <tr>
            <td data-label="En caso de emergencia avisar a:">En caso de emergencia avisar a:</td>
            <td colSpan="3"><input type="text" className="input-cell" /></td>
            <td data-label="Celular:">Celular:</td>
            <td><input type="text" className="input-cell" /></td>
          </tr>

          {/* Sección de Signos Vitales */}
          <tr>
            <td colSpan="6">
              <div className="seccion-signos-vitales">
                <h3>Signos Vitales</h3>
                <table>
                  <tbody>
                    <tr>
                      <td data-label="Frecuencia Cardíaca">Frecuencia Cardíaca</td>
                      <td><input type="text" className="input-cell" /></td>
                      <td data-label="Sp02:">Sp02</td>
                      <td><input type="text" className="input-cell" /></td>
                    </tr>
                    <tr>
                      <td data-label="Temperatura">Temperatura</td>
                      <td><input type="text" className="input-cell" /></td>
                      <td data-label="Presión arterial">Presión arterial</td>
                      <td><input type="text" className="input-cell" /></td>
                    </tr>
                    <tr>
                      <td data-label="Frecuencia respiratoria">Frecuencia respiratoria</td>
                      <td><input type="text" className="input-cell" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>

          {/* Sección de Motivo de Consulta */}
          <tr>
            <td data-label="Motivo de consulta:">Motivo de consulta:</td>
            <td colSpan="5"><textarea className="input-cell" rows="4"></textarea></td>
          </tr>

          {/* Sección de Padecimiento Actual */}
          <tr>
            <td data-label="Padecimiento actual:">Padecimiento actual:</td>
            <td colSpan="5"><textarea className="input-cell" rows="4"></textarea></td>
          </tr>

          {/* Sección de Tratamiento Previo */}
          <tr>
            <td data-label="Tratamiento previo o farmacológico:">Tratamiento previo o farmacológico:</td>
            <td colSpan="5"><textarea className="input-cell" rows="4"></textarea></td>
          </tr>

          {/* Nueva sección de preguntas de Sí o No en una tabla de 6x3 */}
          <tr>
            <td colSpan="6">
              <div className="seccion-preguntas">
                <table>
                  <thead>
                    <tr>
                      <th className="titulo-antecedentes" colSpan="6">Antecedentes heredofamiliares y personales patológicos</th>
                      <th className="titulo-personales">Personales no patológicos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: Math.ceil(preguntas.length / 3) }).map((_, rowIndex) => (
                      <tr key={rowIndex}>
                        {preguntas.slice(rowIndex * 3, rowIndex * 3 + 3).map((pregunta, colIndex) => (
                          <React.Fragment key={colIndex}>
                            <td className="pregunta-antecedentes" colSpan="2">{pregunta}</td>
                            <td>
                              {pregunta === "" ? (
                                null
                              ) : pregunta === "Otros" ? (
                                <input type="text" 
                                  className="input-cell" 
                                  placeholder="Especificar"
                                  style={{ width: "100%" }}
                                />
                              ) : (
                                <select className="input-cell">
                                  <option value="sí">Sí</option>
                                  <option value="no">No</option>
                                </select>
                              )}
                            </td>
                          </React.Fragment>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </td>
          </tr>

          {/* Sección de Selección de Cuerpo Humano */}
          

          {/* Botón de Guardar */}
      <tr>
        <td colSpan="6" className="boton-container">
          <button className="boton-guardar" onClick={handleSubmit}>Guardar</button>
        </td>
      </tr>

                  

        </tbody>
      </table>
    </div>
  );
};

export default FormularioHistoriaClinica;

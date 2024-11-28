import React, { useState, useRef } from 'react'; // Importar React solo una vez, con ambos hooks
import './FormularioFisioterapia.css';
import logoIzquierdo from '../assets/logo_v1_lila.png';
import logoDerecho from '../assets/Icono_lila.png';
import figura from "../assets/figura.png"
import ClickableImage from "./ClickableImage";


const FormularioFisioterapia = () => {
    const [formData, setFormData] = useState({
      sp02: "",
      temperatura: "",
      presionArterial: "",
      frecuenciaResp: "",
      motivoConsulta: "",
      padecimientoActual: "",
      tratamientoPrevio: "",
      diabetes: "",
      reumaticas: "",
      tabaco: "",
      ha: "",
      accidentes: "",
      alcohol: "",
      cancer: "",
      fracturas: "",
      drogas: "",
      alergias: "",
      quirurgicos: "",
      sueno: "",
      otros: "",
      cardiovasculares: "",
      actividadFisica: "",
      psiquiatricos: "",
      pasatiempo: "",
      observacion: "",
      palpacion: "",
      examinacion: "",
      rom: "",
      fuerza: "",
      pruebasEspecificas: "",
      estructuraCorporal: "",
      funcionCorporal: "",
      actividad: "",
      participacion: "",
      barrerasFacilitadores: "",
      objetivoCorto: "",
      objetivoMediano: "",
      objetivoLargo: "",
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:5000/submit-form", formData);
        console.log(response.data);
        alert("Formulario enviado con éxito");
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
        alert("Hubo un error al enviar el formulario.");
      }
    };

    const clickableImageRef = useRef();

    const handleReset = () => {
        // Llamamos a la función `resetClicks` del componente hijo.
        clickableImageRef.current.resetClicks();
    };
    
    return (
        <div className="form-container">
            <h2>Formulario de Fisioterapia</h2>
            <div className="document-container">
                <div className="document-header">
                    <img 
                        src={logoIzquierdo} 
                        alt="Logo Izquierdo" 
                        className="logo-left" 
                    />
                    <img 
                        src={logoDerecho} 
                        alt="Logo Derecho" 
                        className="logo-right" 
                    />
                </div>
                <div className="document-details">
                    <div className="detail-left">
                        <label>
                            Expediente:
                            <input 
                                type="text" 
                                className="input-detail" 
                                placeholder="No de expediente" 
                            />
                        </label>
                    </div>
                    <div className="detail-right">
                        <label>
                            Fecha:
                            <input 
                                type="date" 
                                className="input-detail" 
                            />
                        </label>
                    </div>
                </div>
                {/* Campo Fisioterapeuta alineado a la izquierda */}
                <div className="detail-left">
                    <label>
                        Fisioterapeuta:
                        <input 
                            type="text" 
                            className="input-detail" 
                            placeholder="Nombre del fisioterapeuta" 
                        />
                    </label>
                </div>
                {/* Campos: Nombre, Fecha de nacimiento y Edad */}
                <div className="info-row">
                    <div className="info-cell">
                        <label>Nombre:</label>
                        <input 
                            type="text" 
                            className="input-detail" 
                            placeholder="Nombre" 
                        />
                    </div>
                    <div className="info-cell">
                        <label>Fecha de nacimiento:</label>
                        <input 
                            type="date" 
                            className="input-detail" 
                        />
                    </div>
                    <div className="info-cell">
                        <label>Edad:</label>
                        <input 
                            type="number" 
                            className="input-detail" 
                            placeholder="Edad" 
                        />
                    </div>
                </div>
                {/* Campos: Sexo, Talla, Peso, IMC */}
                <div className="info-row">
                    <div className="info-cell">
                        <label>Sexo:</label>
                        <input 
                            type="text" 
                            className="input-detail" 
                            placeholder="Sexo" 
                        />
                    </div>
                    <div className="info-cell">
                        <label>Talla:</label>
                        <input 
                            type="number" 
                            className="input-detail" 
                            placeholder="Talla" 
                        />
                    </div>
                    <div className="info-cell">
                        <label>Peso:</label>
                        <input 
                            type="number" 
                            className="input-detail" 
                            placeholder="Peso" 
                        />
                    </div>
                    <div className="info-cell">
                        <label>IMC:</label>
                        <input 
                            type="number" 
                            className="input-detail" 
                            placeholder="IMC" 
                        />
                    </div>
                </div>
                {/* Campos: Ocupación/Profesión y Estado Civil */}
                <div className="info-row">
                    <div className="info-cell-left">
                        <label>Ocupación/Profesión:</label>
                        <input 
                            type="text" 
                            className="input-detail" 
                            placeholder="Ocupación" 
                        />
                    </div>
                    <div className="info-cell-right">
                        <label>Estado Civil:</label>
                        <input 
                            type="text" 
                            className="input-detail" 
                            placeholder="Estado Civil" 
                        />
                    </div>
                </div>
                {/* Campos: Lugar de nacimiento y Nacionalidad */}
                <div className="info-row">
                    <div className="info-cell-left">
                        <label>Lugar de nacimiento:</label>
                        <input 
                            type="text" 
                            className="input-detail" 
                            placeholder="Lugar de nacimiento" 
                        />
                    </div>
                    <div className="info-cell-right">
                        <label>Nacionalidad:</label>
                        <input 
                            type="text" 
                            className="input-detail" 
                            placeholder="Nacionalidad" 
                        />
                    </div>
                </div>
                {/* Campos: Domicilio actual y Colonia */}
                <div className="info-row">
                    <div className="info-cell-left">
                        <label>Domicilio actual:</label>
                        <input 
                            type="text" 
                            className="input-detail" 
                            placeholder="Domicilio actual" 
                        />
                    </div>
                    <div className="info-cell-right">
                        <label>Colonia:</label>
                        <input 
                            type="text" 
                            className="input-detail" 
                            placeholder="Colonia" 
                        />
                    </div>
                </div>
                {/* Campos: Localidad, C.P., Municipio y Estado */}
                <div className="info-row">
                    <div className="info-cell">
                        <label>Localidad:</label>
                        <input 
                            type="text" 
                            className="input-detail" 
                            placeholder="Localidad" 
                        />
                    </div>
                    <div className="info-cell">
                        <label>C.P.:</label>
                        <input 
                            type="text" 
                            className="input-detail" 
                            placeholder="C.P." 
                        />
                    </div>
                    <div className="info-cell">
                        <label>Municipio:</label>
                        <input 
                            type="text" 
                            className="input-detail" 
                            placeholder="Municipio" 
                        />
                    </div>
                    <div className="info-cell">
                        <label>Estado:</label>
                        <input 
                            type="text" 
                            className="input-detail" 
                            placeholder="Estado" 
                        />
                    </div>
                </div>
                {/* Campos: Teléfono en casa y Celular */}
                <div className="info-row">
                    <div className="info-cell-left">
                        <label>Teléfono en casa:</label>
                        <input 
                            type="numeric" 
                            className="input-detail" 
                            placeholder="Teléfono en casa" 
                        />
                    </div>
                    <div className="info-cell-right">
                        <label>Celular:</label>
                        <input 
                            type="numeric" 
                            className="input-detail" 
                            placeholder="Celular" 
                        />
                    </div>
                </div>
                {/* Campos: En caso de emergencia avisar a y Celular */}
                <div className="info-row">
                    <div className="info-cell-left">
                        <label>En caso de emergencia avisar a:</label>
                        <input 
                            type="text" 
                            className="input-detail" 
                            placeholder="Nombre de contacto" 
                        />
                    </div>
                    <div className="info-cell-right">
                        <label>Celular:</label>
                        <input 
                            type="text" 
                            className="input-detail" 
                            placeholder="Celular de emergencia" 
                        />
                    </div>
                </div>
                {/* Signos Vitales */}
                <div className="signos-vitales-section">
                <h3>Signos Vitales</h3>
                    <div className="info-row-signos">
                        <div className="info-cell-signos">
                        <label>Frecuencia cardíaca:</label>
                        <input 
                            type="text" 
                            className="input-detail" 
                            placeholder="Frecuencia cardíaca" 
                        />
                        </div>
                        <div className="info-cell-signos">
                        <label>Sp02:</label>
                        <input 
                            type="text" 
                            className="input-detail" 
                            placeholder="Sp02" 
                        />
                        </div>
                        <div className="info-cell-signos">
                        <label>Temperatura:</label>
                        <input 
                            type="text" 
                            className="input-detail" 
                            placeholder="Temperatura" 
                        />
                        </div>
                        <div className="info-cell-signos">
                        <label>Presión Arterial:</label>
                        <input 
                            type="text" 
                            className="input-detail" 
                            placeholder="Presión Arterial" 
                        />
                        </div>
                        <div className="info-cell-signos">
                        <label>Frecuencia resp.:</label>
                        <input 
                            type="text" 
                            className="input-detail" 
                            placeholder="Frecuencia resp." 
                        />
                        </div>
                    </div>
                </div>
                {/* Sección para Motivo de Consulta */}
                <div className="motivo-consulta">
                    <label htmlFor="motivo-consulta">Motivo de consulta</label>
                    <textarea 
                        id="motivo-consulta" 
                        className="textarea-consulta" 
                        placeholder="Escribe el motivo de consulta..."
                    ></textarea>
                </div>
                {/* Sección para Padecimiento Actual */}
                <div className="padecimiento-actual">
                    <label htmlFor="padecimiento-actual">Padecimiento actual</label>
                    <textarea 
                        id="padecimiento-actual" 
                        className="textarea-padecimiento" 
                        placeholder="Describe el padecimiento actual..."
                    ></textarea>
                </div>
                {/* Sección para Tratamiento Previo o Farmacológico */}
                <div className="tratamiento-previo">
                    <label htmlFor="tratamiento-previo">Tratamiento previo o farmacológico</label>
                    <textarea 
                        id="tratamiento-previo" 
                        className="textarea-tratamiento" 
                        placeholder="Describe el tratamiento previo o farmacológico..."
                    ></textarea>
                </div>
                {/* Sección para Antecedentes */}
                <div className="antecedentes-container">
                    <span className="antecedentes-left">
                        Antecedentes heredofamiliares y personales patológicos
                    </span>
                    <span className="antecedentes-right">
                        Personales no patológicos
                    </span>
                </div>
                {/* Sección para las preguntas */}
                <div className="preguntas-container">
                    <div className="pregunta">
                        <label>Diabetes</label>
                        <div className="radio-options">
                            <input type="radio" name="diabetes" value="si" /> Sí
                            <input type="radio" name="diabetes" value="no" /> No
                        </div>
                    </div>
                    <div className="pregunta">
                        <label>Enf. Reumáticas</label>
                        <div className="radio-options">
                            <input type="radio" name="reumaticas" value="si" /> Sí
                            <input type="radio" name="reumaticas" value="no" /> No
                        </div>
                    </div>
                    <div className="pregunta">
                        <label>Tabaco</label>
                        <div className="radio-options">
                            <input type="radio" name="tabaco" value="si" /> Sí
                            <input type="radio" name="tabaco" value="no" /> No
                        </div>
                    </div>
                </div>
                <div className="preguntas-container">
                    <div className="pregunta">
                        <label>HA</label>
                        <div className="radio-options">
                            <input type="radio" name="ha" value="si" /> Sí
                            <input type="radio" name="ha" value="no" /> No
                        </div>
                    </div>
                    <div className="pregunta">
                        <label>Accidentes</label>
                        <div className="radio-options">
                            <input type="radio" name="accidentes" value="si" /> Sí
                            <input type="radio" name="accidentes" value="no" /> No
                        </div>
                    </div>
                    <div className="pregunta">
                        <label>Alcohol</label>
                        <div className="radio-options">
                            <input type="radio" name="alcohol" value="si" /> Sí
                            <input type="radio" name="alcohol" value="no" /> No
                        </div>
                    </div>
                </div>
                <div className="preguntas-container">
                    <div className="pregunta">
                        <label>Cáncer</label>
                        <div className="radio-options">
                            <input type="radio" name="cancer" value="si" /> Sí
                            <input type="radio" name="cancer" value="no" /> No
                        </div>
                    </div>
                    <div className="pregunta">
                        <label>Fracturas</label>
                        <div className="radio-options">
                            <input type="radio" name="fracturas" value="si" /> Sí
                            <input type="radio" name="fracturas" value="no" /> No
                        </div>
                    </div>
                    <div className="pregunta">
                        <label>Drogas</label>
                        <div className="radio-options">
                            <input type="radio" name="drogas" value="si" /> Sí
                            <input type="radio" name="drogas" value="no" /> No
                        </div>
                    </div>
                </div>
                <div className="preguntas-container">
                    <div className="pregunta">
                        <label>Alergias</label>
                        <div className="radio-options">
                            <input type="radio" name="alergias" value="si" /> Sí
                            <input type="radio" name="alergias" value="no" /> No
                        </div>
                    </div>
                    <div className="pregunta">
                        <label>Quirúrgicos</label>
                        <div className="radio-options">
                            <input type="radio" name="quirurgicos" value="si" /> Sí
                            <input type="radio" name="quirurgicos" value="no" /> No
                        </div>
                    </div>
                    <div className="pregunta">
                        <label>Sueño</label>
                        <div className="radio-options">
                            <input type="radio" name="sueno" value="si" /> Sí
                            <input type="radio" name="sueno" value="no" /> No
                        </div>
                    </div>
                </div>
                <div className="preguntas-container">
                    <div className="pregunta">
                        <label>Otros</label>
                        <div className="radio-options">
                            <textarea name="otros" rows="1" placeholder="Especifique..." style={{ width: "100%" }}></textarea>
                        </div>
                    </div>
                    <div className="pregunta">
                        <label>Cardiovasculares</label>
                        <div className="radio-options">
                            <input type="radio" name="cardiovasculares" value="si" /> Sí
                            <input type="radio" name="cardiovasculares" value="no" /> No
                        </div>
                    </div>
                    <div className="pregunta">
                        <label>Actividad Física</label>
                        <div className="radio-options">
                            <input type="radio" name="actividadFisica" value="si" /> Sí
                            <input type="radio" name="actividadFisica" value="no" /> No
                        </div>
                    </div>
                </div>
                <div className="preguntas-container">
                    <div className="pregunta">
                        <label>Psiquiátricos</label>
                        <div className="radio-options">
                            <input type="radio" name="psiquiatricos" value="si" /> Sí
                            <input type="radio" name="psiquiatricos" value="no" /> No
                        </div>
                    </div>
                    <div className="pregunta">
                        <label>Pasatiempo</label>
                        <div className="radio-options">
                            <input type="radio" name="pasatiempo" value="si" /> Sí
                            <input type="radio" name="pasatiempo" value="no" /> No
                        </div>
                    </div>
                </div>
                {/* Sección de Inspección Local */}
                <div className="inspeccion-local">
                    <h3>Inspección Local</h3>
                    <ClickableImage ref={clickableImageRef} imageSrc={figura} />
                    <button onClick={handleReset} className="reset-button">
                        Reiniciar Imagen
                    </button>
                </div>
                {/* Sección de Exploración Física */}
                <div className="exploracion-fisica">
                    <h3>Exploración Física</h3>
                    <div className="observacion">
                        <label htmlFor="observacion">Observación</label>
                        <textarea
                            id="observacion"
                            className="textarea-observacion"
                            placeholder="Escriba aquí..."
                        ></textarea>
                    </div>
                    {/* Sección para Palpación */}
                    <div className="palpacion">
                        <label htmlFor="palpacion">Palpación</label>
                        <textarea
                            id="palpacion"
                            className="textarea-palpacion"
                            placeholder="Escriba aquí..."
                        ></textarea>
                    </div>
                    {/* Sección para Examinación */}
                    <div className="examinacion">
                        <label htmlFor="examinacion">Examinación</label>
                        <textarea
                            id="examinacion"
                            className="textarea-examinacion"
                            placeholder="Escriba aquí..."
                        ></textarea>
                    </div>
                    {/* Sección para ROM */}
                    <div className="rom">
                        <label htmlFor="rom">ROM</label>
                        <textarea
                            id="rom"
                            className="textarea-rom"
                            placeholder="Escriba aquí..."
                        ></textarea>
                    </div>
                    {/* Sección para Fuerza */}
                    <div className="fuerza">
                        <label htmlFor="fuerza">Fuerza</label>
                        <textarea
                            id="fuerza"
                            className="textarea-fuerza"
                            placeholder="Escriba la fuerza aquí..."
                        ></textarea>
                    </div>
                    {/* Sección para Pruebas específicas */}
                    <div className="pruebas-especificas">
                        <label htmlFor="pruebas-especificas">Pruebas específicas</label>
                        <textarea
                            id="pruebas-especificas"
                            className="textarea-pruebas-especificas"
                            placeholder="Escriba las pruebas específicas aquí..."
                        ></textarea>
                    </div>
                </div>
                {/* Diagnóstico Funcional (CIF) */}
                <h3>Diagnóstico Funcional (CIF)</h3>
                <div className="info-row-diagnostico">
                    <div className="info-cell-diagnostico">
                        <label>Estructura corporal</label>
                        <textarea className="input-detail"></textarea>
                    </div>
                    <div className="info-cell-diagnostico">
                        <label>Función corporal</label>
                        <textarea className="input-detail"></textarea>
                    </div>
                    <div className="info-cell-diagnostico">
                        <label>Actividad</label>
                        <textarea className="input-detail"></textarea>
                    </div>
                    <div className="info-cell-diagnostico">
                        <label>Participación</label>
                        <textarea className="input-detail"></textarea>
                    </div>
                    <div className="info-cell-diagnostico">
                        <label>Barreras y facilitadores</label>
                        <textarea className="input-detail"></textarea>
                    </div>
                </div>
                {/* Objetivos */}
                <h3>Objetivos</h3>
                <div className="info-row-objetivos">
                    <div className="corto">
                    <label htmlFor="corto">Corto</label>
                    <textarea
                        id="corto"
                        className="textarea-corto"
                        placeholder="Escriba aquí..."
                    ></textarea>
                    </div>
                    {/* Mediano */}
                    <div className="mediano">
                    <label htmlFor="mediano">Mediano</label>
                    <textarea
                        id="mediano"
                        className="textarea-mediano"
                        placeholder="Escriba aquí..."
                    ></textarea>
                    </div>
                    {/* Largo plazo */}
                    <div className="largo-plazo">
                    <label htmlFor="largo-plazo">Largo plazo</label>
                    <textarea
                        id="largo-plazo"
                        className="textarea-largo-plazo"
                        placeholder="Escriba aquí..."
                    ></textarea>
                    </div>
                    <div className="save-button-container">
                    <button type="submit" className="save-button">Guardar</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default FormularioFisioterapia;

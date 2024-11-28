import React, { useState } from 'react';
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import './NotaReferencia.css';
import logoIzquierdo from '../assets/logo_v1_lila.png';
import logoDerecho from '../assets/Icono_lila.png';


const NotaReferencia = () => {
    const [estadoCiudad, setEstadoCiudad] = useState('');
    const [fecha, setFecha] = useState('');
    const [nombreProfesional, setNombreProfesional] = useState('');  // Nuevo estado para el nombre del profesional
    const [edadPaciente, setEdadPaciente] = useState('');
    const [nombrePaciente, setNombrePaciente] = useState('');  // Agregar estado para nombrePaciente
    const [descripcionProblema, setDescripcionProblema] = useState(''); // Nuevo estado para el problema
    const [descripcionTerapias, setDescripcionTerapias] = useState(''); // Nuevo estado para las terapias
    const [codigosCIF, setCodigosCIF] = useState('');  // Estado para los códigos de la CIF
    const [cedulaProfesional, setCedulaProfesional] = useState('');
    const [cargo, setCargo] = useState('');
    const [clinicaNombre, setClinicaNombre] = useState('');

    const generatePDF = async () => {
        try {
            const element = document.querySelector(".document-container");
            if (!element) {
                console.error("No se encontró el contenedor");
                return;
            }
    
            const canvas = await html2canvas(element, { scale: 3, useCORS: true });
            const imgData = canvas.toDataURL("image/png");
    
            const pdf = new jsPDF("p", "mm", "a4");
    
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = imgWidth / imgHeight;
    
            let yPosition = 0;
    
            while (yPosition < imgHeight) {
                const croppedCanvas = document.createElement("canvas");
                croppedCanvas.width = canvas.width;
                croppedCanvas.height = canvas.width / ratio;
    
                const context = croppedCanvas.getContext("2d");
                context.drawImage(
                    canvas,
                    0,
                    yPosition,
                    canvas.width,
                    croppedCanvas.height,
                    0,
                    0,
                    croppedCanvas.width,
                    croppedCanvas.height
                );
    
                const croppedImgData = croppedCanvas.toDataURL("image/png");
                pdf.addImage(
                    croppedImgData,
                    "PNG",
                    0,
                    0,
                    pdfWidth,
                    pdfWidth / ratio
                );
    
                yPosition += croppedCanvas.height;
    
                if (yPosition < imgHeight) {
                    pdf.addPage();
                }
            }
    
            pdf.save("Nota_Referencia.pdf");
        } catch (error) {
            console.error("Error al generar el PDF:", error);
        }
    };
    
    

    return (
        <div className="form-container">
            <h2>Nota de Referencia</h2>
            {/* Contenido del documento */}
            <div className="document-container">
                <div className="document-header">
                <img src={logoIzquierdo} 
                alt="Logo Izquierdo"
                className="logo-left" />
                <img src={logoDerecho}
                alt="Logo Derecho"
                className="logo-right" />
                </div>
                <div className="document-address">
                    <p>
                        Catalina 416A,<br />
                    Ex Hacienda el Tintero,<br />
                    Querétaro, Qro. Méx.
                    </p>
                </div>
                <div className="document-contact">
                    <p>
                        442 610 6666<br />
                        admin@hesouclinica.com<br />
                        Hesouclinica.com
                    </p>
                    <div className="document-date">
                        <p>
                            <input
                                type="text"
                                value={estadoCiudad}
                                onChange={(e) => setEstadoCiudad(e.target.value)}
                                placeholder="Estado, Ciudad"
                                className="input-date"
                            />
                            &nbsp;a&nbsp;
                            <input
                                type="date"
                                value={fecha}
                                onChange={(e) => setFecha(e.target.value)}
                                placeholder="Fecha"
                                className="input-date"
                            />
                        </p>
                    </div>
                </div>
                <div className="document-professional">
                    <p>
                        Estimado/a: &nbsp;
                        <input
                            type="text"
                            value={nombreProfesional}
                            onChange={(e) => setNombreProfesional(e.target.value)}
                            placeholder="Nombre del Profesional"
                            className="input-professional"
                        />
                    </p>
                </div>
                <div className="document-message">
                    <p>
                        Espero que se encuentre bien. Me dirijo a usted para referirle a 
                        <input
                            type="text"
                            value={nombrePaciente}
                            onChange={(e) => setNombrePaciente(e.target.value)}
                            placeholder="Nombre del Paciente"
                            className="input-message"
                        />
                        de&nbsp;
                        <input
                            type="number"
                            value={edadPaciente}
                            onChange={(e) => setEdadPaciente(e.target.value)}
                            placeholder="(Edad)"
                            className="input-message"
                        />
                        años de edad, quien ha sido paciente en nuestra clínica. El motivo de esta carta es recomendar 
                        a&nbsp;
                        <input
                            type="text"
                            value={nombrePaciente}
                            onChange={(e) => setNombrePaciente(e.target.value)}
                            placeholder="Nombre del Paciente"
                            className="input-message"
                        />
                        para una evaluación y orientación especializada en su área profesional.
                    </p>
                </div>
                <div className="document-situation">
                    <p>
                        Situación: 
                        <input
                            type="text"
                            value={nombrePaciente}
                            onChange={(e) => setNombrePaciente(e.target.value)}
                            placeholder="Nombre del paciente"
                            className="input-message"
                        />
                        presenta&nbsp;
                        <input
                            type="text"
                            value={descripcionProblema}
                            onChange={(e) => setDescripcionProblema(e.target.value)}
                            placeholder="breve descripción del problema o condición que ha sido tratado en fisioterapia"
                            className="input-message"
                        />
                        Durante el tratamiento, hemos trabajado en&nbsp;
                        <input
                            type="text"
                            value={descripcionTerapias}
                            onChange={(e) => setDescripcionTerapias(e.target.value)}
                            placeholder="descripción breve de las terapias"
                            className="input-message"
                        />
                    </p>
                </div>
                {/* Clasificación Internacional del Funcionamiento */}
                <div className="document-cif">
                    <p>
                        Clasificación Internacional del Funcionamiento, de la Discapacidad y de la Salud
                        <br />
                        <strong>
                            <input
                                type="text"
                                value={codigosCIF}
                                onChange={(e) => setCodigosCIF(e.target.value)}
                                placeholder="Códigos de la CIF"
                                className="input-cif" // Aplicamos la clase que alinea a la izquierda
                            />
                        </strong>
                    </p>
                </div>
                <div className="document-objective">
                    <p>
                        Objetivo: Dado que&nbsp;
                        <input
                            type="text"
                            value={nombrePaciente}
                            onChange={(e) => setNombrePaciente(e.target.value)}
                            placeholder="Nombre del paciente"
                            className="input-message"
                        />
                        está en proceso de recuperación y considerando el impacto que una orientación especializada puede 
                        tener en su bienestar y en la eficacia de su rehabilitación, creo que una evaluación adicional 
                        en su área de expertise sería extremadamente beneficiosa. La intervención especializada puede 
                        contribuir significativamente a su recuperación y a la mejora de su calidad de vida.
                    </p>
                </div>
                <div className="document-thankyou">
                    <p>
                        Agradezco de antemano su atención a esta recomendación. Si requiere información adicional 
                        sobre el historial médico o el tratamiento recibido por&nbsp;
                        <input
                            type="text"
                            value={nombrePaciente}
                            onChange={(e) => setNombrePaciente(e.target.value)}
                            placeholder="Nombre del Paciente"
                            className="input-message"
                        />
                        , no dude en ponerse en contacto conmigo. Estoy disponible para cualquier consulta o coordinación 
                        que pueda ser necesaria.
                    </p>
                </div>
                <div className="document-signature">
                    <p style={{ textAlign: 'left' }}>Atentamente,</p>
                </div>
                {/* Firma */}
                <div className="document-signature">
                    <p style={{ textAlign: 'center' }}>Firma</p>
                </div>
                {/* Nombre Completo */}
                <div className="document-name">
                <p style={{ textAlign: 'center' }}>
                        Tu nombre completo&nbsp;
                        <input
                            type="text"
                            value={nombreProfesional}
                            onChange={(e) => setNombreProfesional(e.target.value)}
                            placeholder="Nombre "
                            className="input-message"
                        />
                    </p>
                </div>
                {/* Cédula Profesional */}
                <div className="document-cedula">
                    <p style={{ textAlign: 'center' }}>
                        Cédula Profesional&nbsp;
                        <input
                            type="text"
                            value={cedulaProfesional}
                            onChange={(e) => setCedulaProfesional(e.target.value)}
                            placeholder="Cédula Profesional"
                            className="input-cedula"
                        />
                    </p>
                </div>
                {/* Cargo y Nombre de la Clínica */}
                <div className="document-cargo-clinica">
                    <p style={{ textAlign: 'center' }}>
                        <input
                            type="text"
                            value={cargo}
                            onChange={(e) => setCargo(e.target.value)}
                            placeholder="Tu Cargo"
                            className="input-cargo"
                        />
                        &nbsp;
                        <input
                            type="text"
                            value={clinicaNombre}
                            onChange={(e) => setClinicaNombre(e.target.value)}
                            placeholder="Nombre de tu Clínica o Centro"
                            className="input-clinica"
                        />
                    </p>
                </div>
            </div>
                        {/* Botón para generar PDF */}
                        <button onClick={generatePDF} className="generate-pdf-button">
                Generar PDF
            </button>
        </div>
    );
};

export default NotaReferencia;

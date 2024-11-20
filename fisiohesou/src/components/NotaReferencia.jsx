import React, { useState } from 'react';
import './NotaReferencia.css';  // Asegúrate de tener un archivo CSS adecuado

const NotaReferencia = () => {
    // Estado para almacenar los datos del formulario
    const [nombrePaciente, setNombrePaciente] = useState('');
    const [motivoReferencia, setMotivoReferencia] = useState('');
    const [diagnostico, setDiagnostico] = useState('');
    const [tratamientoRecomendado, setTratamientoRecomendado] = useState('');
    const [nombreProfesional, setNombreProfesional] = useState('');
    const [firmaProfesional, setFirmaProfesional] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío de los datos, por ejemplo, guardarlos o enviarlos a un backend.
        console.log('Nota de referencia enviada:', {
            nombrePaciente,
            motivoReferencia,
            diagnostico,
            tratamientoRecomendado,
            nombreProfesional,
            firmaProfesional,
        });
    };

    return (
        <div className="form-container">
            <h2>Nota de Referencia</h2>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        {/* Nombre del paciente */}
                        <tr>
                            <td>Nombre del paciente:</td>
                            <td>
                                <input
                                    type="text"
                                    value={nombrePaciente}
                                    onChange={(e) => setNombrePaciente(e.target.value)}
                                    placeholder="Ingrese el nombre del paciente"
                                    required
                                />
                            </td>
                        </tr>
                        {/* Motivo de la referencia */}
                        <tr>
                            <td>Motivo de referencia:</td>
                            <td>
                                <textarea
                                    value={motivoReferencia}
                                    onChange={(e) => setMotivoReferencia(e.target.value)}
                                    placeholder="Describa el motivo de la referencia"
                                    required
                                />
                            </td>
                        </tr>
                        {/* Diagnóstico */}
                        <tr>
                            <td>Diagnóstico:</td>
                            <td>
                                <textarea
                                    value={diagnostico}
                                    onChange={(e) => setDiagnostico(e.target.value)}
                                    placeholder="Escriba el diagnóstico"
                                    required
                                />
                            </td>
                        </tr>
                        {/* Tratamiento recomendado */}
                        <tr>
                            <td>Tratamiento recomendado:</td>
                            <td>
                                <textarea
                                    value={tratamientoRecomendado}
                                    onChange={(e) => setTratamientoRecomendado(e.target.value)}
                                    placeholder="Indique el tratamiento recomendado"
                                    required
                                />
                            </td>
                        </tr>
                        {/* Nombre del profesional que hace la referencia */}
                        <tr>
                            <td>Nombre del profesional:</td>
                            <td>
                                <input
                                    type="text"
                                    value={nombreProfesional}
                                    onChange={(e) => setNombreProfesional(e.target.value)}
                                    placeholder="Nombre del profesional"
                                    required
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/* Firma del profesional */}
                <div className="signature-container">
                    <p>Firma del profesional:</p>
                    <input
                        type="text"
                        value={firmaProfesional}
                        onChange={(e) => setFirmaProfesional(e.target.value)}
                        placeholder="Firma del profesional"
                        required
                    />
                </div>
                <button type="submit">Enviar Nota de Referencia</button>
            </form>
        </div>
    );
};

export default NotaReferencia;


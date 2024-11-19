import React, { useState } from 'react';
import './NotaEvolucion.css';  // Asegúrate de tener un archivo de estilo similar a FormularioFisioterapia.css

const NotaEvolucion = () => {
    // Estado para almacenar la información de la nota de evolución
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [nombreFisioterapeuta, setNombreFisioterapeuta] = useState('');
    const [observaciones, setObservacionesS] = useState('');  // Nuevo estado para el campo de texto grande
    const [observacionesO, setObservacionesO] = useState(''); // Estado para el campo O
    const [observacionesA, setObservacionesA] = useState(''); // Estado para el campo A
    const [observacionesP, setObservacionesP] = useState(''); // Estado para el campo P

    return (
        <div className="form-container">
            <h2>Nota de Evolución</h2>
            <table>
                <tbody>
                    {/* Fecha */}
                    <tr className="reduced-spacing">
                        <td data-label="Fecha:">Fecha:</td>
                        <td><input
                            type="date"
                            className="input-cell small-input"
                            value={fecha}
                            onChange={(e) => setFecha(e.target.value)}
                        /></td>
                    </tr>
                    {/* Hora */}
                    <tr className="reduced-spacing">
                        <td data-label="Hora:">Hora:</td>
                        <td><input
                            type="time"
                            className="input-cell small-input"
                            value={hora}
                            onChange={(e) => setHora(e.target.value)}
                        /></td>
                    </tr>
                    {/* Nombre del Fisioterapeuta */}
                    <tr className="reduced-spacing">
                        <td data-label="Nombre del fisioterapeuta:">Nombre del fisioterapeuta:</td>
                        <td><input
                            type="text"
                            className="input-cell small-input"
                            value={nombreFisioterapeuta}
                            onChange={(e) => setNombreFisioterapeuta(e.target.value)}
                            placeholder="Nombre"
                        /></td>
                    </tr>
                    {/* Campo S: con gran área de texto */}
                    <tr>
                        <td data-label="S:">S:</td>
                        <td><textarea
                            className="input-cell large-textarea"
                            value={observaciones}
                            onChange={(e) => setObservacionesS(e.target.value)}
                            placeholder=""
                        ></textarea></td>
                    </tr>
                    {/* Campo O */}
                    <tr>
                        <td data-label="O:">O:</td>
                        <td><textarea
                            className="input-cell large-textarea"
                            value={observacionesO}
                            onChange={(e) => setObservacionesO(e.target.value)}
                            placeholder=""
                        ></textarea></td>
                    </tr>
                    {/* Campo A */}
                    <tr>
                        <td data-label="A:">A:</td>
                        <td><textarea
                            className="input-cell large-textarea"
                            value={observacionesA}
                            onChange={(e) => setObservacionesA(e.target.value)}
                            placeholder=""
                        ></textarea></td>
                    </tr>
                    {/* Campo P */}
                    <tr>
                        <td data-label="P:">P:</td>
                        <td><textarea
                            className="input-cell large-textarea"
                            value={observacionesP}
                            onChange={(e) => setObservacionesP(e.target.value)}
                            placeholder=""
                        ></textarea></td>
                    </tr>
                </tbody>
            </table>
            {/* Línea para firma */}
            <div className="signature-container">
                <p>Firma del fisioterapeuta:</p>
                <div className="signature-line"></div>
            </div>
        </div>
    );
};

export default NotaEvolucion;

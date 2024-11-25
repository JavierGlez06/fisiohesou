import React, { useState } from 'react';
import './NotaEvolucion.css';
import logoIzquierdo from '../assets/logo_v1_lila.png';
import logoDerecho from '../assets/Icono_lila.png';

const NotaEvolucion = () => {
    const [fecha, setFecha] = useState(''); // Estado para la fecha
    const [hora, setHora] = useState('');
    const [nombreFisioterapeuta, setNombreFisioterapeuta] = useState('');
    const [textoS, setTextoS] = useState(''); // Estado para el texto en "S"
    const [textoO, setTextoO] = useState(''); // Estado para la sección "O"
    const [textoA, setTextoA] = useState(''); // Estado para la sección A
    const [textoP, setTextoP] = useState(''); // Estado para la sección P

    return (
        <div className="form-container">
            <h2>Nota de Evolución</h2>
            {/* Contenido del documento */}
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
                {/* Texto estático para la fecha */}
                <div className="document-date-left">
                    <p>
                        Fecha :&nbsp;
                        <span className="date-input">
                            <input
                                type="date"
                                value={fecha}
                                onChange={(e) => setFecha(e.target.value)}
                                placeholder="fecha"
                                className="input-date"
                            />
                        </span>
                    </p>
                </div>
                {/* Hora y Nombre del Fisioterapeuta */}
                <div className="document-additional-info">
                    <p>
                        Hora :&nbsp;
                        <span className="time-input">
                            <input
                                type="time"
                                value={hora}
                                onChange={(e) => setHora(e.target.value)}
                                placeholder="hora"
                                className="input-time"
                            />
                        </span>
                    </p>
                    <p>
                        Nombre del fisioterapeuta :&nbsp;
                        <span className="physiotherapist-input">
                            <input
                                type="text"
                                value={nombreFisioterapeuta}
                                onChange={(e) => setNombreFisioterapeuta(e.target.value)}
                                placeholder="Nombre del fisioterapeuta"
                                className="input-name"
                            />
                        </span>
                    </p>
                </div>
                {/* Sección S */}
                <div className="document-textarea">
                    <p>
                        S:&nbsp;
                        <textarea
                            value={textoS}
                            onChange={(e) => setTextoS(e.target.value)}
                            placeholder="Escribe aquí"
                            className="input-textarea"
                        ></textarea>
                    </p>
                </div>
                {/* Sección O */}
                <div className="document-textarea">
                    <p>
                        O:&nbsp;
                        <textarea
                            value={textoO}
                            onChange={(e) => setTextoO(e.target.value)}
                            placeholder="Escribe aquí"
                            className="input-textarea"
                        ></textarea>
                    </p>
                </div>
                {/* Sección A */}
                <div className="document-textarea">
                    <p>
                        A:&nbsp;
                        <textarea
                            value={textoA}
                            onChange={(e) => setTextoA(e.target.value)}
                            placeholder="Escribe aquí"
                            className="input-textarea"
                        ></textarea>
                    </p>
                </div>
                {/* Sección P */}
                <div className="document-textarea">
                    <p>
                        P:&nbsp;
                        <textarea
                            value={textoP}
                            onChange={(e) => setTextoP(e.target.value)}
                            placeholder="Escribe aquí"
                            className="input-textarea"
                        ></textarea>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotaEvolucion;

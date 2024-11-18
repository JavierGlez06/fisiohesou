import React, { useState } from 'react';
import './VistaExp.css'; // Estilos para VistaExp

const VistaExp = () => {
  // Estado para almacenar el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  // Datos de ejemplo: Lista de pacientes
  const pacientes = [
    { id: '001', nombre: 'Juan', apellido: 'Pérez' },
    { id: '002', nombre: 'Ana', apellido: 'Gómez' },
    { id: '003', nombre: 'Carlos', apellido: 'Sánchez' },
    { id: '004', nombre: 'María', apellido: 'Rodríguez' },
    { id: '005', nombre: 'José', apellido: 'López' },
  ];

  // Filtrar los pacientes basados en el término de búsqueda
  const pacientesFiltrados = pacientes.filter(paciente =>
    paciente.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    paciente.apellido.toLowerCase().includes(searchTerm.toLowerCase()) ||
    paciente.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="vista-exp-container">
      <h3>Vista de Pacientes</h3>

      {/* Barra de búsqueda estilo Apple */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Buscar por nombre, apellido o ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-btn">
          <i className="fa fa-search"></i> {/* Ícono de lupa */}
        </button>
      </div>

      {/* Tabla para mostrar la lista de pacientes */}
      <table className="tabla-pacientes">
        <thead>
          <tr>
            <th>ID Paciente</th>
            <th>Nombre</th>
            <th>Apellido</th>
          </tr>
        </thead>
        <tbody>
          {pacientesFiltrados.map((paciente) => (
            <tr key={paciente.id}>
              <td>{paciente.id}</td>
              <td>{paciente.nombre}</td>
              <td>{paciente.apellido}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mensaje si no hay resultados */}
      {pacientesFiltrados.length === 0 && (
        <p>No se encontraron pacientes con ese nombre, apellido o ID.</p>
      )}
    </div>
  );
};

export default VistaExp;

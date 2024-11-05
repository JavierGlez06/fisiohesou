import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';

registerLocale('es', es); // Registrar el idioma español para el calendario

const DashboardPaciente = () => {
  const [activeTab, setActiveTab] = useState('calendario');
  const [fechaCita, setFechaCita] = useState(null);
  const [horaCita, setHoraCita] = useState('');
  const [doctorAsignado, setDoctorAsignado] = useState('');
  const [comentarios, setComentarios] = useState('');
  const [startDate, setStartDate] = useState(new Date()); // Estado para el calendario inicial

  // Estado para almacenar los datos enviados
  const [citaConfirmada, setCitaConfirmada] = useState(null);

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  // Lista de doctores de la clínica de fisioterapia
  const doctores = [
    'Dr. Juan Pérez - Ortopedista',
    'Dra. Maria López - Fisioterapeuta',
    'Dr. Carlos Hernández - Fisioterapeuta',
    'Dra. Laura Méndez - Especialista en Rehabilitación'
  ];

  // Lista de horarios predefinidos
  const horarios = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Guardamos la información del formulario en el estado `citaConfirmada`
    setCitaConfirmada({
      fechaCita,
      horaCita,
      doctorAsignado,
      comentarios,
    });

    console.log("Fecha de la Cita:", fechaCita);
    console.log("Hora de la Cita:", horaCita);
    console.log("Doctor Asignado:", doctorAsignado);
    console.log("Comentarios:", comentarios);
  };

  return (
    <div className="dashboard-container container">
      <header>
        <img src="logo.png" alt="Logo" className="logo-header" />
        <h2>Bienvenido Paciente</h2>
        <nav>
          <button
            aria-label="Calendario"
            className="tab-button"
            onClick={() => openTab('calendario')}
          >
            Calendario
          </button>
          <button
            aria-label="Expedientes"
            className="tab-button"
            onClick={() => openTab('expedientes')}
          >
            Expedientes
          </button>
        </nav>
      </header>

      {activeTab === 'calendario' && (
        <div className="calendar-container">
          <h3>Seleccione una fecha</h3>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            inline
            locale="es"
            className="ios-calendar"
          />
        </div>
      )}

      {activeTab === 'expedientes' && (
        <div id="expedientes" className="tab-content">
          <h3>Gestión de Expedientes Clínicos</h3>
          <div className="patient-info">
            <h4>Información del Paciente</h4>
            <p><strong>Nombre:</strong> Juan Pérez</p>
            <p><strong>Edad:</strong> 35 años</p>
            <p><strong>Diagnóstico:</strong> Dolor de espalda crónico</p>
          </div>
          <h4>Programar Cita Médica</h4>
          <form onSubmit={handleSubmit}>
            <label htmlFor="fecha">Fecha de la Cita:</label>
            <DatePicker
              id="fecha"
              className="input-field"
              selected={fechaCita}
              onChange={(date) => setFechaCita(date)}
              minDate={new Date()} // Limitar a fechas futuras
              dateFormat="dd/MM/yyyy" // Formato de fecha
              locale="es" // Español
              placeholderText="Seleccione una fecha"
              required
            />
            <label htmlFor="hora">Hora de la Cita:</label>
            <select
              id="hora"
              className="input-field"
              value={horaCita}
              onChange={(e) => setHoraCita(e.target.value)}
              required
            >
              <option value="">--- Seleccione un Horario ---</option>
              {horarios.map((hora, index) => (
                <option key={index} value={hora}>{hora}</option>
              ))}
            </select>
            <label htmlFor="doctor">Doctor Asignado:</label>
            <select
              id="doctor"
              className="input-field"
              value={doctorAsignado}
              onChange={(e) => setDoctorAsignado(e.target.value)}
              required
            >
              <option value="">--- Seleccione un Doctor ---</option>
              {doctores.map((doctor, index) => (
                <option key={index} value={doctor}>{doctor}</option>
              ))}
            </select>
            <label htmlFor="comentarios">Comentarios Adicionales:</label>
            <textarea
              id="comentarios"
              className="input-field"
              placeholder="Motivo de la consulta"
              value={comentarios}
              onChange={(e) => setComentarios(e.target.value)}
            />
            <button type="submit" className="save-btn">Guardar Cita</button>
          </form>

          {/* Mostrar la cita confirmada después de enviar el formulario */}
          {citaConfirmada && (
            <div className="cita-confirmada">
              <h4>Detalles de la Cita Programada:</h4>
              <p><strong>Fecha:</strong> {citaConfirmada.fechaCita?.toLocaleDateString()}</p>
              <p><strong>Hora:</strong> {citaConfirmada.horaCita}</p>
              <p><strong>Doctor:</strong> {citaConfirmada.doctorAsignado}</p>
              <p><strong>Comentarios:</strong> {citaConfirmada.comentarios}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DashboardPaciente;

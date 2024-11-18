import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es'; // Para mostrar el calendario en español
import './DashboardDoctor.css';
import ExpedienteForm from './ExpedienteForm'; // Importa el formulario de expedientes
import FormularioFisioterapia from './FormularioFisioterapia'; // Importa el nuevo formulario
import VistaExp from './VistaExp'; // Importa el nuevo componente VistaExp

registerLocale('es', es); // Registrar el idioma español para el calendario

const DashboardDoctor = () => {
  const [activeTab, setActiveTab] = useState('consultas');
  const [startDate, setStartDate] = useState(new Date());

  // Fechas con citas programadas (ejemplos)
  const citasProgramadas = [
    new Date(2024, 8, 26),  // 26 de septiembre de 2024
    new Date(2024, 8, 28),  // 28 de septiembre de 2024
    new Date(2024, 9, 1),   // 1 de octubre de 2024
  ];

  // Función para resaltar días con citas programadas
  const highlightDates = citasProgramadas.map(date => ({
    'react-datepicker__day--highlighted': date
  }));

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="dashboard-container container">
      <header>
        <img src="/logo.png" alt="Logo" className="logo-header" />
        <h2>Bienvenido Doctor</h2>
        <nav>
          <button className="tab-button" onClick={() => openTab('consultas')}>Consultas</button>
          <button className="tab-button" onClick={() => openTab('expedientes')}>Expedientes Médicos</button>
          <button className="tab-button" onClick={() => openTab('forms')}>Forms</button>
          <button className="tab-button" onClick={() => openTab('vista')}>Vista</button> {/* Nuevo botón "Vista" */}
        </nav>
      </header>

      {/* Mostrar calendario si no está en las pestañas 'expedientes' o 'forms' */}
      {activeTab !== 'expedientes' && activeTab !== 'forms' && activeTab !== 'vista' && (
        <div className="calendar-container">
          <h3>Calendario de Consultas</h3>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            inline
            locale="es"
            highlightDates={highlightDates}  // Asegurarse de que highlightDates sea una lista de objetos
            className="ios-calendar"
          />
        </div>
      )}

      {/* Pestaña de Consultas Programadas */}
      {activeTab === 'consultas' && (
        <div id="consultas" className="tab-content-doctor">
          <h3>Consultas Programadas</h3>
          <div className="doctor-consultas">
            <p>No hay consultas programadas para hoy.</p>
          </div>
        </div>
      )}

      {/* Pestaña de Expedientes Médicos */}
      {activeTab === 'expedientes' && (
        <div id="expedientes-doctor" className="tab-content-doctor">
          <h3>Historia clínica de fisioterapia</h3>
          <ExpedienteForm /> {/* Muestra el formulario de expedientes */}
        </div>
      )}

      {/* Pestaña de Forms */}
      {activeTab === 'forms' && (
        <div id="forms-doctor" className="tab-content-doctor">
          <h3>Formulario de Fisioterapia</h3>
          <FormularioFisioterapia /> {/* Muestra el nuevo formulario */}
        </div>
      )}

      {/* Pestaña VistaExp (Nueva vista) */}
      {activeTab === 'vista' && (
        <div id="vista-doctor" className="tab-content-doctor">
          <h3>Vista Exp</h3>
          <VistaExp /> {/* Componente VistaExp */}
        </div>
      )}
    </div>
  );
};

export default DashboardDoctor;

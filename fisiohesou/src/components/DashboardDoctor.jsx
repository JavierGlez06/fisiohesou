import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es'; // Para mostrar el calendario en español
import './DashboardDoctor.css';
import FormularioFisioterapia from './FormularioFisioterapia'; // Importa el nuevo formulario
import NotaEvolucion from './NotaEvolucion';
import NotaReferencia from './NotaReferencia';
import VistaExp from './VistaExp'; // Importa el nuevo componente VistaExp
import CatalogoEjercicios from './CatalogoEjercicios'; // Importa el componente

registerLocale('es', es); // Registrar el idioma español para el calendario

const DashboardDoctor = () => {
  const [activeTab, setActiveTab] = useState('consultas');
  const [startDate, setStartDate] = useState(new Date());
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar el menú retráctil

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
    setMenuOpen(false); // Cierra el menú al seleccionar una pestaña
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Alterna el estado del menú
  };

  return (
    <div className="dashboard-container container">
      <header>
        <img src="/logo.png" alt="Logo" className="logo-header" />
        <h2>Bienvenido Doctor</h2>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰ {/* Icono de menú hamburguesa */}
        </button>
        <nav className={`menu ${menuOpen ? 'open' : ''}`}>
          <button className="tab-button" onClick={() => openTab('consultas')}>Consultas</button>
          <button className="tab-button" onClick={() => openTab('forms')}>Historia clínica</button>
          <button className="tab-button" onClick={() => openTab('notaEvolucion')}>Nota de Evolución</button>
          <button className="tab-button" onClick={() => openTab('notaReferencia')}>Nota de Referencia</button>
          <button className="tab-button" onClick={() => openTab('vista')}>Vista</button> {/* Nuevo botón "Vista" */}
          <button className="tab-button" onClick={() => openTab('catalogo')}>Catálogo de Ejercicios</button> {/* Nuevo botón "Vista" */}
        </nav>
      </header>

      {/* Mostrar calendario si no está en las pestañas 'forms' o 'notaEvolucion' */}
      {activeTab !== 'forms' && activeTab !== 'notaEvolucion' && activeTab !== 'notaReferencia' && activeTab !== 'vista' && activeTab !== 'catalogo' && (
        <div className="calendar-container">
          <h3>Calendario de Consultas</h3>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            inline
            locale="es"
            highlightDates={highlightDates}
            className="ios-calendar"
          />
        </div>
      )}

      {/* Pestañas dinámicas */}
      {activeTab === 'consultas' && (
        <div id="consultas" className="tab-content-doctor">
          <h3>Consultas Programadas</h3>
          <div className="doctor-consultas">
            <p>No hay consultas programadas para hoy.</p>
          </div>
        </div>
      )}

      {activeTab === 'forms' && (
        <div id="forms-doctor" className="tab-content-doctor">
          <FormularioFisioterapia />
        </div>
      )}

      {activeTab === 'notaEvolucion' && (
        <div id="nota-evolucion" className="tab-content-doctor">
          <NotaEvolucion />
        </div>
      )}

      {activeTab === 'notaReferencia' && (
        <div id="nota-referencia" className="tab-content-doctor">
          <NotaReferencia />
        </div>
      )}

      {activeTab === 'vista' && (
        <div id="vista-doctor" className="tab-content-doctor">
          <h3>Vista Exp</h3>
          <VistaExp />
        </div>
      )}
      {/* Nueva pestaña: Catálogo de Ejercicios */}
      {activeTab === 'catalogo' && (
        <div id="catalogo" className="tab-content-doctor">
          <CatalogoEjercicios onSave={(rutina) => console.log('Rutina guardada:', rutina)} />
        </div>
      )}
    </div>
  );
};

export default DashboardDoctor;

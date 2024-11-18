import { useState } from 'react';
import Login from './components/Login';
import DashboardPaciente from './components/DashboardPaciente';
import DashboardDoctor from './components/DashboardDoctor';
import FormularioFisioterapia from './components/FormularioFisioterapia'; // Asegúrate de que esta ruta sea correcta
import './App.css';

function App() {
  const [role, setRole] = useState('login'); // 'login', 'paciente', 'doctor'

  const handleLogin = (isPaciente) => {
    setRole(isPaciente ? 'paciente' : 'doctor');
  };

  return (
    <div className="app-container">
      {role === 'login' && <Login onLogin={handleLogin} />}
      {role === 'paciente' && <DashboardPaciente />}
      {role === 'doctor' && <DashboardDoctor />}
      {role === 'expediente' && <FormularioFisioterapia />}  {/* Muestra el formulario si es expediente */}
    </div>
  );
}

export default App;

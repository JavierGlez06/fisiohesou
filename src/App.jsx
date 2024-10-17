import { useState } from 'react';
import Login from './components/Login';
import DashboardPaciente from './components/DashboardPaciente';
import DashboardDoctor from './components/DashboardDoctor';
import DashboardExpediente from './components/DashboardDoctor';
import './App.css';

function App() {
  const [role, setRole] = useState('login'); // 'login', 'paciente', 'doctor'

  const handleLogin = (isPaciente) => {
    if (isPaciente) {
      setRole('paciente');
    } else {
      setRole('doctor');
    }
  };

  return (
    <div>
      {role === 'login' && <Login onLogin={handleLogin} />}
      {role === 'paciente' && <DashboardPaciente />}
      {role === 'doctor' && <DashboardDoctor />}
      {role === 'expediente' && <ExpedienteForm />}  {/* Muestra el formulario si es expediente */}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './Login.css'; // Asegúrate de tener el archivo de estilos importado

const Login = ({ onLogin }) => {
  const [isPaciente, setIsPaciente] = useState(true);
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar la contraseña

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(isPaciente);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    // Mantener la visibilidad de la contraseña por 4 segundos
    setTimeout(() => {
      setShowPassword(false);
    }, 4000);
  };

  return (
    <div className="login-container container">
      <img src="logo.png" alt="Logo" className="logo" />
      <h1>Hesou Fisioterapia</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          className="input-field"
          required
        />
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            className="input-field"
            required
          />
          <span className="toggle-password-icon" onClick={togglePasswordVisibility}>
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="eye-icon">
                <path d="M17.94 17.94A10.11 10.11 0 0112 20C7.03 20 2.73 16.38 1 12c.63-1.57 1.61-2.98 2.78-4.16l4.18 4.18a4 4 0 005.44 5.44l4.16 4.16.88.88M1 1l22 22" />
                <path d="M9.57 9.57a4 4 0 015.44 5.44" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="eye-icon">
                <path d="M1 12C2.73 7.62 7.03 4 12 4s9.27 3.62 11 8c-1.73 4.38-6.03 8-11 8S2.73 16.38 1 12z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </span>
        </div>
        <div className="toggle-container">
          <label htmlFor="paciente">Paciente</label>
          <label className="switch">
            <input
              type="checkbox"
              id="paciente"
              className="toggle-switch"
              checked={isPaciente}
              onChange={() => setIsPaciente(!isPaciente)}
            />
            <span className="slider round"></span>
          </label>
        </div>
        <button type="submit" className="login-btn">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
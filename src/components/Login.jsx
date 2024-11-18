import React, { useState } from 'react';
import axios from 'axios'; // Importar Axios para realizar solicitudes HTTP
import './Login.css';

const Login = ({ onLogin }) => {
  const [isPaciente, setIsPaciente] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Realizar una solicitud POST al servidor con las credenciales de inicio de sesión
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });

      // Verificar si la respuesta es exitosa
      if (response.data.success) {
        // Llamar a la función onLogin con el valor de isPaciente para manejar el estado de inicio de sesión
        onLogin(isPaciente);
        alert('Inicio de sesión exitoso');
      } else {
        alert('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Hubo un problema al iniciar sesión. Por favor, intenta de nuevo.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(true);

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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <div className="password-container">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Contraseña"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className="toggle-password-icon" onClick={togglePasswordVisibility}>
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="eye-icon"
              >
                <path d="M17.94 17.94A10.11 10.11 0 0112 20C7.03 20 2.73 16.38 1 12c.63-1.57 1.61-2.98 2.78-4.16l4.18 4.18a4 4 0 005.44 5.44l4.16 4.16.88.88M1 1l22 22"></path>
                <path d="M9.57 9.57a4 4 0 015.44 5.44"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="eye-icon"
              >
                <path d="M1 12C2.73 7.62 7.03 4 12 4s9.27 3.62 11 8c-1.73 4.38-6.03 8-11 8S2.73 16.38 1 12z"></path>
                <circle cx="12" cy="12" r="3"></circle>
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

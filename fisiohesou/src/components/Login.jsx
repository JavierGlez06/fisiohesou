import React, { useState } from "react";
import axios from "axios"; // Asegúrate de instalar axios: npm install axios
import "./Login.css";

const Login = ({ onLogin }) => {
 const [isPaciente, setIsPaciente] = useState(true); // Estado para el toggle de "Paciente"
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña
  const [username, setUsername] = useState(""); // Estado para el nombre de usuario
  const [password, setPassword] = useState(""); // Estado para la contraseña

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evitar que el formulario recargue la página

    try {
      // Enviar las credenciales al backend
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
       /* rol: isPaciente ? "paciente" : "doctor", // Enviar el rol seleccionado*/
      });

      // Validar la respuesta del servidor
      if (response.data.success) {
        const { rol } = response.data.user; // Extraer el rol del usuario
        onLogin(rol); // Enviar el rol al componente padre
      } else {
        alert(response.data.message || "Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Error al conectar con el servidor.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setTimeout(() => setShowPassword(false), 4000); // Ocultar la contraseña después de 4 segundos
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
          onChange={(e) => setUsername(e.target.value)} // Actualizar el estado del usuario
          required
        />
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Actualizar el estado de la contraseña
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

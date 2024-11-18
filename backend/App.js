import { useEffect, useState } from 'react';

function App() {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    // Realizar la solicitud al backend
    fetch('http://localhost:5000/pacientes')
      .then((response) => response.json())
      .then((data) => {
        setPacientes(data);  // Almacenar los pacientes en el estado
      })
      .catch((error) => console.error('Error al obtener los pacientes:', error));
  }, []);

  return (
    <div>
      <h1>Pacientes</h1>
      <ul>
        {pacientes.map((paciente) => (
          <li key={paciente.id}>{paciente.nombre} - {paciente.edad} años</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

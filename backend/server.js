const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

// Crear una instancia de Express
const app = express();
const port = 5000;

// Configurar middlewares
app.use(cors());
app.use(bodyParser.json()); // Para parsear solicitudes con contenido JSON

// Crear conexión con la base de datos MySQL
const db = mysql.createConnection({
    host: 'localhost',   // O la IP de tu servidor MySQL
    user: 'root',        // Tu usuario de MySQL
    password: '',        // Tu contraseña de MySQL
    database: 'fisioterapia', // Cambiar aquí por el nombre de la base de datos correcta
  });
  

// Verificar la conexión a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos MySQL');
  }
});

// Ruta para guardar una cita médica
app.post('/guardar_cita', (req, res) => {
  const { fechaCita, horaCita, doctorAsignado, comentarios, pacienteNombre, pacienteId } = req.body;

  // Inserción de datos en la base de datos
  const query = `
    INSERT INTO citas (fecha_cita, hora_cita, doctor_asignado, comentarios, paciente_nombre, paciente_id)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  const values = [fechaCita, horaCita, doctorAsignado, comentarios, pacienteNombre, pacienteId];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error al insertar los datos:', err);
      return res.status(500).json({ message: 'Error al guardar la cita' });
    }

    return res.status(200).json({ message: 'Cita guardada con éxito', citaId: result.insertId });
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

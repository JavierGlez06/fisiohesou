const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config(); // Para leer las variables de entorno

const app = express();
app.use(cors());
app.use(express.json()); // Para parsear cuerpos JSON

// Conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect((err) => {
  if (err) {
    console.error('Error en la conexión a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Ruta para guardar la cita
app.post('/guardar_cita', (req, res) => {
  const { fechaCita, horaCita, doctorAsignado, comentarios, pacienteNombre, pacienteId } = req.body;

  const query = `
    INSERT INTO citas (fechaCita, horaCita, doctorAsignado, comentarios, pacienteNombre, pacienteId)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  const values = [fechaCita, horaCita, doctorAsignado, comentarios, pacienteNombre, pacienteId];

  db.query(query, values, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error al guardar la cita', message: err.message });
    }
    res.status(200).json({ message: 'Cita guardada exitosamente', result });
  });
});

// Configuración para escuchar en el puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});

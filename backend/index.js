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

// Ruta para guardar la cita (ya existente)
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

// Nueva ruta para guardar la historia clínica
// Ruta para guardar los datos de la historia clínica
app.post('/guardar_historia_clinica', (req, res) => {
  const {
    pacienteId, nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, edad, sexo,
    talla, peso, imc, antecedentes
  } = req.body;

  // Crear la consulta SQL para insertar los datos
  const query = `
    INSERT INTO historias_clinicas (
      pacienteId, nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, edad, sexo,
      talla, peso, imc, diabetes, enfermedades_reumaticas, tabaco, ha, accidentes, alcohol,
      cancer, fracturas, drogas, alergias, quirurgicos, sueno, otros, cardiovasculares,
      actividad_fisica, psiquiatricos, pasatiempo
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  // Valores para la consulta SQL (deben coincidir con las columnas de la tabla)
  const values = [
    pacienteId, nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, edad, sexo,
    talla, peso, imc,
    antecedentes.Diabetes, antecedentes['Enfermedades reumáticas'], antecedentes.Tabaco,
    antecedentes.HA, antecedentes.Accidentes, antecedentes.Alcohol, antecedentes.Cáncer,
    antecedentes.Fracturas, antecedentes.Drogas, antecedentes.Alergias, antecedentes.Quirúrgicos,
    antecedentes.Sueño, antecedentes.Otros, antecedentes.Cardiovasculares, antecedentes['Actividad fisica'],
    antecedentes.Psiquiatricos, antecedentes.Pasatiempo
  ];

  // Ejecutar la consulta
  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error al guardar los datos: ' + err.stack);
      return res.status(500).send('Error al guardar los datos.');
    }
    res.status(200).send('Datos guardados correctamente.');
  });
});

// Arrancar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
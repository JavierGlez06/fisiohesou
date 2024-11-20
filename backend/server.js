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

// Formulario de expedientes Medicos
// Ruta para guardar los datos del formulario
app.post('/guardar', (req, res) => {
    const {
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      fechaNacimiento,
      edad,
      sexo,
      talla,
      peso,
      imc,
      estadoCivil,
      ocupacion,
      lugarNacimiento,
      nacionalidad,
      domicilioActual,
      localidad,
      cp,
      municipio,
      estado,
      colonia,
      telefonoCasa,
      celular,
      emergenciaContacto,
      emergenciaCelular,
      frecuenciaCardiaca,
      sp02,
      temperatura,
      presionArterial,
      frecuenciaRespiratoria,
      motivoConsulta,
      padecimientoActual,
      tratamientoPrevio,
      antecedentes,
      notaEvolucion,
      notaReferencia
    } = req.body;
  
    // Inserción de los datos en la base de datos
    const query = `INSERT INTO pacientes (
      nombre, apellido_paterno, apellido_materno, fecha_nacimiento, edad, sexo, talla, peso, imc, estado_civil, 
      ocupacion, lugar_nacimiento, nacionalidad, domicilio_actual, localidad, cp, municipio, estado, colonia, 
      telefono_casa, celular, emergencia_contacto, emergencia_celular, frecuencia_cardiaca, sp02, temperatura, 
      presion_arterial, frecuencia_respiratoria, motivo_consulta, padecimiento_actual, tratamiento_previo, 
      antecedentes, nota_evolucion, nota_referencia
    ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  
    db.query(query, [
      nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, edad, sexo, talla, peso, imc, estadoCivil, 
      ocupacion, lugarNacimiento, nacionalidad, domicilioActual, localidad, cp, municipio, estado, colonia, 
      telefonoCasa, celular, emergenciaContacto, emergenciaCelular, frecuenciaCardiaca, sp02, temperatura, 
      presionArterial, frecuenciaRespiratoria, motivoConsulta, padecimientoActual, tratamientoPrevio, 
      antecedentes, notaEvolucion, notaReferencia
    ], (err, result) => {
      if (err) {
        console.error('Error al insertar los datos: ', err);
        res.status(500).json({ error: 'Error al guardar los datos' });
        return;
      }
      res.status(200).json({ message: 'Datos guardados correctamente', patientId: result.insertId });
    });
  });
  

// nuevo endopoint para obtener los pacientes



// --------------------------------------------

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

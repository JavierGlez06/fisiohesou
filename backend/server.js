const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const winston = require('winston');

// Crear una instancia de Express
const app = express();
const port = 5000;

// Configurar middlewares
app.use(cors());
app.use(bodyParser.json()); // Para parsear solicitudes con contenido JSON

// Configuración de logger con winston
const logger = winston.createLogger({
  level: 'info',  // Definir el nivel mínimo de logs
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  ),
  transports: [
    new winston.transports.Console(), // Logs en consola
    // Si deseas guardar los logs en un archivo, puedes agregar:
    // new winston.transports.File({ filename: 'logs/server.log' })
  ],
});

// Usar morgan para registrar todas las solicitudes HTTP
app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) } }));

// Crear conexión con la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'fisioterapia',
});

// Verificar la conexión a la base de datos
db.connect((err) => {
  if (err) {
    logger.error('Error de conexión a la base de datos:', err.message);
  } else {
    logger.info('Conexión exitosa a la base de datos MySQL');
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
      logger.error('Error al insertar los datos:', err.message);
      return res.status(500).json({ message: 'Error al guardar la cita' });
    }

    logger.info('Cita guardada con éxito', { citaId: result.insertId });
    return res.status(200).json({ message: 'Cita guardada con éxito', citaId: result.insertId });
  });
});

// code new
// Ruta para guardar los datos del formulario
app.post('/guardar_historia_clinica', (req, res) => {
  console.log(req.body);  // Verifica qué datos se están enviando

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
    domicilio,
    localidad,
    cp,
    municipio,
    estado,
    colonia,
    telefonoCasa,
    celular,
    emergenciaNombre,
    emergenciaCelular,
    frecuenciaCardiaca,
    sp02,
    temperatura,
    presionArterial,
    frecuenciaRespiratoria,
    motivoConsulta,
    padecimientoActual,
    tratamientoPrevio,
    preguntasAntecedentes // Este es el campo que podría estar causando problemas
  } = req.body;

  // Sanitizar los datos: asignar NULL a los campos vacíos
  const sanitizedData = {
    nombre: nombre || null,
    apellidoPaterno: apellidoPaterno || null,
    apellidoMaterno: apellidoMaterno || null,
    fechaNacimiento: fechaNacimiento || null,
    edad: edad || null,
    sexo: sexo || null,
    talla: talla || null,
    peso: peso || null,
    imc: imc || null,
    estadoCivil: estadoCivil || null,
    ocupacion: ocupacion || null,
    lugarNacimiento: lugarNacimiento || null,
    nacionalidad: nacionalidad || null,
    domicilio: domicilio || null,
    localidad: localidad || null,
    cp: cp || null,
    municipio: municipio || null,
    estado: estado || null,
    colonia: colonia || null,
    telefonoCasa: telefonoCasa || null,
    celular: celular || null,
    emergenciaNombre: emergenciaNombre || null,
    emergenciaCelular: emergenciaCelular || null,
    frecuenciaCardiaca: frecuenciaCardiaca || null,
    sp02: sp02 || null,
    temperatura: temperatura || null,
    presionArterial: presionArterial || null,
    frecuenciaRespiratoria: frecuenciaRespiratoria || null,
    motivoConsulta: motivoConsulta || null,
    padecimientoActual: padecimientoActual || null,
    tratamientoPrevio: tratamientoPrevio || null,
    preguntasAntecedentes: Object.keys(preguntasAntecedentes).length > 0
      ? JSON.stringify(preguntasAntecedentes)
      : null, // Solo enviar JSON si tiene datos
  };

  console.log(sanitizedData); // Para ver los valores que se están enviando


  // Verifica que la cantidad de valores coincida con las columnas
  const query = `
    INSERT INTO pacientes (
      nombre, apellido_paterno, apellido_materno, fecha_nacimiento, edad, sexo, talla, peso, imc,
      estado_civil, ocupacion, lugar_nacimiento, nacionalidad, domicilio, localidad, cp, municipio, 
      estado, colonia, telefono_casa, celular, emergencia_nombre, emergencia_celular, 
      frecuencia_cardiaca, sp02, temperatura, presion_arterial, frecuencia_respiratoria,
      motivo_consulta, padecimiento_actual, tratamiento_previo, preguntas_antecedentes
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    sanitizedData.nombre, sanitizedData.apellidoPaterno, sanitizedData.apellidoMaterno, sanitizedData.fechaNacimiento, sanitizedData.edad,
    sanitizedData.sexo, sanitizedData.talla, sanitizedData.peso, sanitizedData.imc, sanitizedData.estadoCivil, sanitizedData.ocupacion,
    sanitizedData.lugarNacimiento, sanitizedData.nacionalidad, sanitizedData.domicilio, sanitizedData.localidad, sanitizedData.cp,
    sanitizedData.municipio, sanitizedData.estado, sanitizedData.colonia, sanitizedData.telefonoCasa, sanitizedData.celular,
    sanitizedData.emergenciaNombre, sanitizedData.emergenciaCelular, sanitizedData.frecuenciaCardiaca, sanitizedData.sp02, sanitizedData.temperatura,
    sanitizedData.presionArterial, sanitizedData.frecuenciaRespiratoria, sanitizedData.motivoConsulta, sanitizedData.padecimientoActual,
    sanitizedData.tratamientoPrevio, sanitizedData.preguntasAntecedentes
  ];

  // Ejecutar la consulta
  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error al guardar los datos:', err);
      return res.status(500).json({ message: 'Error al guardar los datos' });
    }

    return res.status(200).json({ message: 'Historia clínica guardada con éxito', pacienteId: result.insertId });
  });
});



// fin del code new


// Iniciar el servidor
app.listen(port, () => {
  logger.info(`Servidor corriendo en http://localhost:${port}`);
});

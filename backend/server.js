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
    new winston.transports.File({ filename: 'logs/server.log' })
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

// Ruta para registrar usuarios
app.post("/register", (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !rol) {
    return res.status(400).json({ error: "Todos los campos son obligatorios." });
  }

  const query = "INSERT INTO usuarios (nombre, email, password, rol) VALUES (?, ?, ?, ?)";
  db.query(query, [name, email, password, rol], (err, result) => {
    if (err) {
      console.error("Error al insertar datos:", err.message);
      return res.status(500).json({ error: "Error al registrar al usuario." });
    }
    res.status(201).json({ message: "Usuario registrado exitosamente." });
  });
});

// Ruta para validar el inicio de sesión
app.post("/login", (req, res) => {
  const { username, password, rol } = req.body;
  const query = "SELECT * FROM usuarios WHERE username = ? AND password = ? AND rol = ?";

  db.query(query, [username, password, rol], (err, results) => {
    if (err) {
      console.error("Error al consultar la base de datos:", err);
      return res.status(500).json({ success: false, message: "Error en el servidor" });
    }

    if (results.length > 0) {
      res.status(200).json({ success: true, user: results[0] });
    } else {
      res.status(401).json({ success: false, message: "Credenciales incorrectas" });
    }
  });
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
// Ruta para guardar los datos del formulario de fisioterapia
app.post('/submit-form', (req, res) => {
  const {
    sp02,
    temperatura,
    presionArterial,
    frecuenciaResp,
    motivoConsulta,
    padecimientoActual,
    tratamientoPrevio,
    diabetes,
    reumaticas,
    tabaco,
    ha,
    accidentes,
    alcohol,
    cancer,
    fracturas,
    drogas,
    alergias,
    quirurgicos,
    sueno,
    otros,
    cardiovasculares,
    actividadFisica,
    psiquiatricos,
    pasatiempo,
    observacion,
    palpacion,
    examinacion,
    rom,
    fuerza,
    pruebasEspecificas,
    estructuraCorporal,
    funcionCorporal,
    actividad,
    participacion,
    barrerasFacilitadores,
    objetivoCorto,
    objetivoMediano,
    objetivoLargo
  } = req.body;

  // Verificar que los datos necesarios estén presentes (validación mínima)
  if (!motivoConsulta || !padecimientoActual) {
    return res.status(400).json({ error: 'El motivo de consulta y el padecimiento actual son obligatorios.' });
  }

  // Consulta SQL para insertar los datos del formulario en la tabla 'datos_fisioterapia'
  const query = `
    INSERT INTO datos_fisioterapia (
      sp02, temperatura, presion_arterial, frecuencia_resp, motivo_consulta, padecimiento_actual,
      tratamiento_previo, diabetes, reumaticas, tabaco, ha, accidentes, alcohol, cancer, fracturas,
      drogas, alergias, quirurgicos, sueno, otros, cardiovasculares, actividad_fisica, psiquiatricos,
      pasatiempo, observacion, palpacion, examinacion, rom, fuerza, pruebas_especificas, estructura_corporal,
      funcion_corporal, actividad, participacion, barreras_facilitadores, objetivo_corto, objetivo_mediano, objetivo_largo
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  // Los valores del formulario se pasan como un arreglo para evitar la inyección SQL
  const values = [
    sp02, temperatura, presionArterial, frecuenciaResp, motivoConsulta, padecimientoActual,
    tratamientoPrevio, diabetes, reumaticas, tabaco, ha, accidentes, alcohol, cancer, fracturas,
    drogas, alergias, quirurgicos, sueno, otros, cardiovasculares, actividadFisica, psiquiatricos,
    pasatiempo, observacion, palpacion, examinacion, rom, fuerza, pruebasEspecificas, estructuraCorporal,
    funcionCorporal, actividad, participacion, barrerasFacilitadores, objetivoCorto, objetivoMediano, objetivoLargo
  ];

  // Ejecutar la consulta SQL
  db.query(query, values, (err, result) => {
    if (err) {
      logger.error('Error al guardar los datos del formulario:', err.message);
      return res.status(500).json({ error: 'Error al guardar los datos en la base de datos.' });
    }

    // Si la inserción fue exitosa, responder con un mensaje de éxito
    logger.info('Datos de fisioterapia guardados con éxito', { formularioId: result.insertId });
    return res.status(200).json({ message: 'Formulario guardado exitosamente', formularioId: result.insertId });
  });
});


// fin del code new


// Iniciar el servidor
app.listen(port, () => {
  logger.info(`Servidor corriendo en http://localhost:${port}`);
});

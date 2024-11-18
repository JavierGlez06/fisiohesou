import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import './ExpedienteForm.css'; // Importa el archivo CSS

const ExpedienteForm = () => {
  const [formData, setFormData] = useState({
    Expediente: '',
    Fecha: '',
    Fisioterapeuta: '',
    Nombre: '',
    fechaDeNacimiento: '',
    Edad: '',
    Sexo: '',
    Talla: '',
    Peso: '',
    IMC: '',
    Ocupacion: '',
    estadoCivil: '',
    LugarDeNacimiento: '',
    Nacionalidad: '',
    Domicilio: '',
    Colonia: '',
    Localidad: '',
    CP: '',
    Municipio: '',
    Estado: '',
    telefonoCasa: '',
    Celular: '',
    contactoEmergencia: '',
    celularEmergencia: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/expedientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log('Expediente guardado:', result);
    } catch (error) {
      console.error('Error guardando el expediente:', error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <TextField
          label="Expediente"
          name="Expediente"
          value={formData.Expediente}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Fecha"
          name="Fecha"
          type="date"
          value={formData.Fecha}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Fisioterapeuta"
          name="Fisioterapeuta"
          value={formData.Fisioterapeuta}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Nombre"
          name="Nombre"
          value={formData.Nombre}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Fecha de nacimiento"
          name="fechaDeNacimiento"
          type="date"
          value={formData.fechaDeNacimiento}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Edad"
          name="Edad"
          value={formData.Edad}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Sexo"
          name="Sexo"
          value={formData.Sexo}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Talla"
          name="Talla"
          value={formData.Talla}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Peso"
          name="Peso"
          value={formData.Peso}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="IMC"
          name="IMC"
          value={formData.IMC}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Ocupación"
          name="Ocupacion"
          value={formData.Ocupacion}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Estado civil"
          name="estadoCivil"
          value={formData.estadoCivil}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Lugar de nacimiento"
          name="LugarDeNacimiento"
          value={formData.LugarDeNacimiento}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Nacionalidad"
          name="Nacionalidad"
          value={formData.Nacionalidad}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Domicilio actual"
          name="Domicilio"
          value={formData.Domicilio}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Colonia"
          name="Colonia"
          value={formData.Colonia}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Localidad"
          name="Localidad"
          value={formData.Localidad}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="C.P."
          name="CP"
          value={formData.CP}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Municipio"
          name="Municipio"
          value={formData.Municipio}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Estado"
          name="Estado"
          value={formData.Estado}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Teléfono en casa"
          name="telefonoCasa"
          value={formData.telefonoCasa}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Celular"
          name="Celular"
          value={formData.Celular}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Contacto de emergencia"
          name="contactoEmergencia"
          value={formData.contactoEmergencia}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Celular de emergencia"
          name="celularEmergencia"
          value={formData.celularEmergencia}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Guardar
        </Button>
      </form>
    </div>
  );
};

export default ExpedienteForm;

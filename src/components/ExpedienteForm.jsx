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
      <form onSubmit={handleSubmit}>
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
          type="number"
          value={formData.Fecha}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Fisioterapeuta"
          name="Fisioterapeuta"
          multiline
          value={formData.Fisioterapeuta}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Nombre"
          name="Nommbre"
          multiline
          value={formData.tratamiento}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Fecha de nacimiento"
          name="Fecha de nacimiento"
          multiline
          value={formData.tratamiento}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Edad"
          name="Edad"
          multiline
          value={formData.tratamiento}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Sexo"
          name="Sexo"
          multiline
          value={formData.tratamiento}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Talla"
          name="Talla"
          multiline
          value={formData.tratamiento}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Peso"
          name="Peso"
          multiline
          value={formData.tratamiento}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="IMC"
          name="IMC"
          multiline
          value={formData.tratamiento}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Ocupacion"
          name="Ocupacion"
          multiline
          value={formData.tratamiento}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Estado civil"
          name="Estado civil"
          multiline
          value={formData.tratamiento}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Lugar de nacimiento"
          name="Lugar de nacimiento"
          multiline
          value={formData.tratamiento}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Nacionalidad"
          name="Nacionalidad"
          multiline
          value={formData.tratamiento}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Domicilio actual"
          name="Domicilio actual"
          multiline
          value={formData.tratamiento}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Colonia"
          name="Colonia"
          multiline
          value={formData.tratamiento}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Localidad"
          name="Localidad"
          multiline
          value={formData.tratamiento}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="CP"
          name="CP"
          multiline
          value={formData.tratamiento}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Municipio"
          name="Municipio"
          multiline
          value={formData.tratamiento}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Estado"
          name="Estado"
          multiline
          value={formData.tratamiento}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Telefono en casa"
          name="Telefono en casa"
          multiline
          value={formData.tratamiento}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Celular"
          name="Celular"
          multiline
          value={formData.tratamiento}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Contacto de emergencis"
          name="Contacto de emergencia"
          multiline
          value={formData.tratamiento}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Celular de emergencia"
          name="Celular de emergencia"
          multiline
          value={formData.tratamiento}
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


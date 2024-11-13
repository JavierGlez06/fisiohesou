import React from 'react';
import './FormularioFisioterapia.css';

const FormularioHistoriaClinica = () => {
  return (
    <div className="form-container">
      <table>
        <tbody>
          <tr>
            <td data-label="Nombre:">Nombre:</td>
            <td colSpan="5"><input type="text" className="input-cell" /></td>
          </tr>
          <tr>
            <td data-label="Fecha de nacimiento:">Fecha de nacimiento:</td>
            <td><input type="date" className="input-cell" /></td>
            <td data-label="Edad:">Edad:</td>
            <td><input type="text" className="input-cell" /></td>
            <td data-label="Sexo:">Sexo:</td>
            <td><input type="text" className="input-cell" /></td>
          </tr>
          <tr>
            <td data-label="Talla:">Talla:</td>
            <td><input type="text" className="input-cell" /></td>
            <td data-label="Peso:">Peso:</td>
            <td><input type="text" className="input-cell" /></td>
            <td data-label="IMC:">IMC:</td>
            <td><input type="text" className="input-cell" /></td>
          </tr>
          <tr>
            <td data-label="Estado civil:">Estado civil:</td>
            <td colSpan="5"><input type="text" className="input-cell" /></td>
          </tr>
          <tr>
            <td data-label="Ocupación/profesión:">Ocupación/profesión:</td>
            <td colSpan="5"><input type="text" className="input-cell" /></td>
          </tr>
          <tr>
            <td data-label="Lugar de nacimiento:">Lugar de nacimiento:</td>
            <td colSpan="3"><input type="text" className="input-cell" /></td>
            <td data-label="Nacionalidad:">Nacionalidad:</td>
            <td><input type="text" className="input-cell" /></td>
          </tr>
          <tr>
            <td data-label="Domicilio actual:">Domicilio actual:</td>
            <td colSpan="5"><input type="text" className="input-cell" /></td>
          </tr>
          <tr>
            <td data-label="Localidad:">Localidad:</td>
            <td><input type="text" className="input-cell" /></td>
            <td data-label="C.P.:" >C.P.:</td>
            <td><input type="text" className="input-cell" /></td>
            <td data-label="Municipio:">Municipio:</td>
            <td><input type="text" className="input-cell" /></td>
          </tr>
          <tr>
            <td data-label="Estado:">Estado:</td>
            <td><input type="text" className="input-cell" /></td>
            <td data-label="Colonia:">Colonia:</td>
            <td colSpan="3"><input type="text" className="input-cell" /></td>
          </tr>
          <tr>
            <td data-label="Teléfono en casa:">Teléfono en casa:</td>
            <td><input type="text" className="input-cell" /></td>
            <td data-label="Celular:">Celular:</td>
            <td colSpan="3"><input type="text" className="input-cell" /></td>
          </tr>
          <tr>
            <td data-label="En caso de emergencia avisar a:">En caso de emergencia avisar a:</td>
            <td colSpan="3"><input type="text" className="input-cell" /></td>
            <td data-label="Celular:">Celular:</td>
            <td><input type="text" className="input-cell" /></td>
          </tr>
          
          {/* Nuevos campos agregados */}
          <tr>
            <td data-label="Motivo de consulta:">Motivo de consulta:</td>
            <td colSpan="5"><textarea className="input-cell" rows="4"></textarea></td>
          </tr>
          <tr>
            <td data-label="Padecimiento actual:">Padecimiento actual:</td>
            <td colSpan="5"><textarea className="input-cell" rows="4"></textarea></td>
          </tr>
          <tr>
            <td data-label="Tratamiento previo o farmacológico:">Tratamiento previo o farmacológico:</td>
            <td colSpan="5"><textarea className="input-cell" rows="4"></textarea></td>
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default FormularioHistoriaClinica;

import React, { useRef, forwardRef } from 'react';
import styles from './FormStyle.module.css';

const StudentForm: React.FC = () => {
  const pageTitle = "Solicitud de Préstamos de Computo";
  const typeUser = "Estudiante";

  const matriculaLabelText = "Matricula:";
  const matriculaName = "matricula";
  const tipoEquipoLabelText = "Tipo de equipo:";
  const tipoEquipoName = "tipoEquipo";
  const ubicacionLabelText = "Ubicacion:";
  const ubicacionName = "ubicacion";
  const fiLabelText = "Fecha de inicio :";
  const fiName = "fechaInicio";
  const ffLabelText = "Fecha de fin:";
  const ffName = "fechaFinal";
  const hiLabelText = "Hora de inicio:";
  const hiName = "horaInicio";
  const hfLabelText = "Hora de fin:";
  const hfName = "horaFinal";

  const tiposEquipos = ["Laptop", "Computadora"];

  const camposRef = useRef<{ [key: string]: HTMLInputElement | HTMLSelectElement | null }>({});

  const agregarCampoRef = (nombre: string, ref: HTMLInputElement | HTMLSelectElement | null) => {
    camposRef.current[nombre] = ref;
  };

  const obtenerValoresCampos = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    const datos = {
      matricula: camposRef.current[matriculaName]?.value || '',
      fechaInicio: camposRef.current[fiName]?.value || '',
      horaInicio: camposRef.current[hiName]?.value || '',
      fechaFinal: camposRef.current[ffName]?.value || '',
      horaFinal: camposRef.current[hfName]?.value || '',
      tipoEquipo: camposRef.current[tipoEquipoName]?.value || '',
      ubicacion: camposRef.current[ubicacionName]?.value || ''
    };

    // Mostrar los datos en la consola
    console.log("Datos a enviar:", datos);

    try {
      const response = await fetch('http://localhost:3000/enviar-solicitud', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.statusText);
      }

      const responseData = await response.json(); // Suponiendo que el servidor responde con JSON
      console.log("Respuesta del servidor:", responseData);

    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <h1 className={styles.mainTitle}>{pageTitle}</h1>
          <h2 className={styles.typeUser}>{typeUser}</h2>

          <CampoDeTexto labelText={matriculaLabelText} name={matriculaName} ref={(ref) => agregarCampoRef(matriculaName, ref)} />
          <CampoDeSeleccion labelText={tipoEquipoLabelText} name={tipoEquipoName} elementos={tiposEquipos} ref={(ref) => agregarCampoRef(tipoEquipoName, ref)} />
          <CampoDeTexto labelText={ubicacionLabelText} name={ubicacionName} ref={(ref) => agregarCampoRef(ubicacionName, ref)} />
          <CampoFechaHora labelFecha={fiLabelText} labelHora={hiLabelText} nameFecha={fiName} nameHora={hiName} agregarRef={agregarCampoRef} />
          <CampoFechaHora labelFecha={ffLabelText} labelHora={hfLabelText} nameFecha={ffName} nameHora={hfName} agregarRef={agregarCampoRef} />

          <button className={styles.button} onClick={obtenerValoresCampos}>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;

// Componente CampoDeTexto
type CampoDeTextoProps = {
  labelText: string,
  name: string,
};

export const CampoDeTexto = forwardRef<HTMLInputElement, CampoDeTextoProps>(({ labelText, name }, ref) => {
  return (
    <>
      <label className={styles.label} htmlFor={name}>{labelText}</label>
      <input className={styles.input} type="text" name={name} id={name} ref={ref} required />
    </>
  );
});

// Componente CampoDeSeleccion
type CampoDeSeleccionProps = {
  labelText: string,
  name: string,
  elementos: string[],
};

const CampoDeSeleccion = forwardRef<HTMLSelectElement, CampoDeSeleccionProps>(({ labelText, name, elementos }, ref) => {
  return (
    <div>
      <label className={styles.label} htmlFor={name}>{labelText}</label>
      <select className={styles.select} name={name} id={name} ref={ref} required>
        <option value="" disabled hidden>-- Selecciona un tipo --</option>
        {elementos.map((elemento) => (
          <option key={elemento} value={elemento}>{elemento}</option>
        ))}
      </select>
    </div>
  );
});

// Componente CampoFechaHora
type FechaHoraProps = {
  labelFecha: string,
  labelHora: string,
  nameFecha: string,
  nameHora: string,
  agregarRef: (nombre: string, ref: HTMLInputElement | null) => void;
};

export const CampoFechaHora = forwardRef<HTMLDivElement, FechaHoraProps>(({ labelFecha, labelHora, nameFecha, nameHora, agregarRef }, ref) => {
  return (
    <div className={styles.campoFechaHora} ref={ref}>
      <label className={[styles.label, styles.labelFecha].join(' ')} htmlFor={nameFecha}>{labelFecha}</label>
      <label className={[styles.label, styles.labelFecha].join(' ')} htmlFor={nameHora}>{labelHora}</label>

      <input className={styles.input} type="date" id={nameFecha} name={nameFecha} ref={(input) => agregarRef(nameFecha, input)} required />
      <input className={styles.input} type="time" id={nameHora} name={nameHora} ref={(input) => agregarRef(nameHora, input)} required />
    </div>
  );
});

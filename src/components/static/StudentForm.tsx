import React, {useRef, forwardRef} from 'react';
import styles from './FormStyle.module.css'

const StudentForm: React.FC = () => {

  //Definimos constantes globales
  const pageTitle = "Solicitud de Préstamos de Computo";
  const typeUser = "Estudiante";

  const matriculaLabelText = "Matricula:";
  const matriculaName = "matricula";
  const tipoEquipoLabelText = "Tipo de equipo:";
  const tipoEquipoName = "tipoEquipo";
  const ubicacionLabelText = "Ubicacion:";
  const ubicacionName = "ubicacion";
  const fiLabelText = "Fecha de inicio :";
  const fiName = "fechaInicio"
  const ffLabelText = "Fecha de fin:";
  const ffName = "fechaFinal";
  const hiLabelText = "Hora de inicio (hh:mm):";
  const hiName = "fechaInicio"
  const hfLabelText = "Hora de fin (hh:mm):";
  const hfName = "fechaFinal";


  const tiposEquipos = ["Laptop", "Computadora"];


  //Definimos constantes de funcionalidada
  const camposRef = useRef<{ [key: string]: HTMLInputElement | null }>({});

  const agregarCampoRef = (nombre: string, ref: HTMLInputElement | null) => {
    camposRef.current[nombre] = ref;
  };

  const obtenerValoresCampos = () => {
    for (const nombre in camposRef.current) {
      const valor = camposRef.current[nombre]?.value || '';
      console.log(`Valor de ${nombre}:`, valor);
    }
  };




  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}>
        <form>
          <h1 className={styles.h1}>{pageTitle}</h1>
          <h2 className={styles.typeUser}>{typeUser}</h2>

          <CampoDeTexto labelText={matriculaLabelText} name={matriculaName}/>
          <CampoDeSeleccion labelText={tipoEquipoLabelText} name={tipoEquipoName} elementos={tiposEquipos}/>
          <CampoDeTexto labelText={ubicacionLabelText} name={ubicacionName}/>

          <button>Enviar</button>
                  <button type="submit">Enviar</button>
                </form>
              </div>
            </div>


            );
};

export default StudentForm;


type CampoDeTextoProps = {
  labelText: string,
  name: string,
}

export const CampoDeTexto  = forwardRef<HTMLInputElement, CampoDeTextoProps>(  ({labelText, name}, ref) => {
  //Tipo de input
  const type = 'text';

  return(
    <>
      <label htmlFor={name}>{labelText}</label>
      <input type={type} name={name} id={name} ref={ref} required/>
    </>
  );

});


type CampoDeSeleccionProps = {
  labelText: string,
  name: string,
  elementos: string[],
}

const CampoDeSeleccion = forwardRef<HTMLSelectElement, CampoDeSeleccionProps>(
  ({ labelText, name, elementos}, ref) => {

    return (
      <div>
        <label htmlFor={name}>{labelText}</label>
        <select name={name} id={name} ref={ref} required>
          <option value="" disabled hidden>
            -- Selecciona un tipo --
          </option>
          
          {elementos.map( (elemento) => (
                <option
                  key={elemento} 
                  className={styles.itemList}
                >
                    {elemento} 
                </option>
            ))}

        </select>
      </div>
    );
  }
);



import React, { forwardRef } from 'react';

type FechaHoraProps = {
  labelFecha: string;
  labelHora: string;
  nameFecha: string;
  nameHora: string;
};

const FechaHoraCampo = forwardRef<HTMLDivElement, FechaHoraProps>(({ labelFecha, labelHora, nameFecha, nameHora }, ref) => {
  return (
    <div ref={ref}>
      <label htmlFor={nameFecha}>{labelFecha}</label>
      <label htmlFor={nameHora}>{labelHora}</label>

      <input type="date" id={nameFecha} name={nameFecha} required />
      <input type="time" id={nameHora} name={nameHora} required />
    </div>
  );
});



/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
    <link rel="stylesheet" href="../css/form-style.css">
</head>
<body>
    <div class="form-container">
        <form action="/public/htmls/form.html" method="">\
            <h1>Solicitud de Préstamos de Computo</h1>
            <h2>Estudiante</h2>
            <label for="matricula">Matricula:</label>
            <input type="text" name="matricula" id="matricula" required>
            <label for="tipo-equipo">Tipo de equipo:</label>
            <select name="equipo" id="equipo" required>
                <option value="" disabled selected hidden>-- Selecciona un tipo --</option>
                <option value="laptop">Laptop</option>
                <option value="pc">Pc</option>
            </select>            
            <label for="ubicacion">Ubicación:</label>
                <input type="text" id="ubicacion" name="ubicacion" required>
    
                <label for="fecha-inicio">Fecha de inicio:</label>
                <input type="date" id="fecha-inicio" name="fecha-inicio" required>
    
                <label for="fecha-fin">Fecha de fin:</label>
                <input type="date" id="fecha-fin" name="fecha-fin" required>

                <button type="submit">Enviar</button>
        </form>
    </div>
</body>
</html>
*/
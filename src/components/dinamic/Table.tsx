import styles from 'TableStyle.module.css'

// Valores obtenidos de la base de datos
let idSolicitud;
let tipoUsuario;
let tipoEquipo;
let fechaInicio;

const titleSolicitud = 'Solicitud';
const titleUsuario = 'Tipo de usuario';
const titleEquipo = 'Tipo de equipo';
const titleFecha = 'Fe';


const Table = () => {
    return
    <table>
        Encabezado
        Elemento Lista
    </table>

}

export default Table;

export const TableHead = () => {
    return
    <tr className={styles.styleRow}>
        <td>{idSolicitud}</td>";
        <td>{tipoUsuario}</td>";
        <td>{tipoEquipo}</td>";
        <td>{fechaInicio}</td>";
    </tr>
}


export const TableRow = () => {

    return
    <tr>
        <td>{idSolicitud}</td>";
        <td>{tipoUsuario}</td>";
        <td>{tipoEquipo}</td>";
        <td>{fechaInicio}</td>";
    </tr>

}

// src/components/DynamicPage.tsx
import React, { useState } from 'react';
import styles from "./AdminPageStyle.module.css";

const DynamicPage: React.FC = () => {
  let nombre = 'Universidad Veracruzana'
  let menuHamburgues = '☰'




  /* Obtener los datos */


  return (
    <div className={styles.mainContainer}>
      <div className={styles.baraPrimera}>{nombre}</div>
      <div className={styles.barraSegunda}>
        <p>{menuHamburgues}</p>
      </div>


      <div className={styles.navContainer}>
        <nav className={styles.nav}>
          <ul className={styles.listaContenedor}>
            <li className={styles.elemento}></li>
            <li className={styles.elemento}></li>
            <li className={styles.elemento}></li>
            <li className={styles.elemento}></li>
            <li className={styles.elemento}></li>
            <li className={styles.elemento}></li>
          </ul>
        </nav>
      </div>

    </div>
  );
};

export default DynamicPage;





















/*
btener la opción seleccionada
$opcion = $_GET['opcion'] ?? '';

if ($opcion == 'solicitudes') {
   
    $sql = 'SELECT s.id_solicitud, s.tipo_usuario, e.tipo_equipo, s.fecha_inicio, s.correo FROM solicitudes s INNER JOIN equipos e ON s.id_equipo = e.id_equipo';





    while($row = $stmt->fetch()){
        echo "<tr>";
        echo "<td>" . $row['id_solicitud'] . "</td>";
        echo "<td>" . $row['tipo_usuario'] . "</td>";
        echo "<td>" . $row['tipo_equipo'] . "</td>";
        echo "<td>" . $row['fecha_inicio'] . "</td>";

        if($row['correo'] == NULL){
            echo "<td> Pendiente </td>";
        }else{
            echo "<td>" . $row['correo'] . "</td>";
        }

        echo "</tr>";
    }

    echo "</tbody>";
    echo "</table>";




} elseif ($opcion == 'prestamos') {
   
 $sql = 'SELECT * from prestamos';

    echo "<table>";
    echo "<thead><tr>";
    echo "<th>Prestamo</th>";
    echo "<th>Fecha de prestamo</th>";
    echo "</tr></thead>";

    $stmt = $pdo->query($sql);

    echo "<tbody>";

    while($row = $stmt->fetch()){
        echo "<tr>";
        echo "<td>" . $row['id_prestamo'] . "</td>";
        echo "<td>" . $row['fecha_entrega'] . "</td>";

        echo "</tr>";
    }

    echo "</tbody>";
    echo "</table>";




} elseif ($opcion == 'usuarios') {
    // Consulta para obtener los usuarios
    $sql = 'SELECT correo, contrasenia, nombre FROM administradores';

    // Preparar y ejecutar la consulta
    $stmt = $pdo->query($sql);

    // Mostrar los resultados
    echo "<h3>Resultados de la tabla administrador:</h3>";
    while ($row = $stmt->fetch()) {
        echo "Correo:" . $row['correo'] . "<br>";
        echo "Contraseña: " . $row['contrasenia'] . "<br>";
        echo "Nombre: " . $row['nombre'] . "<br><br>";
    }
} else {
    echo "Opción no válida.";
}
?>*/
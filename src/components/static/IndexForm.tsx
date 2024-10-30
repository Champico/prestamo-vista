import styles from "./IndexFormStyle.module.css"; //Importamos el archivo de estilo
import { useNavigate } from "react-router-dom"; //Imortamos el modulo para la navegacion entre pestañas

// -- Creacion de la pantalla al ingresar al sistema --
// Dos botones donde puede elegir si es estudiante o profesor para hacer solicitud
const IndexForm = () => {

    // -- Declaracion de constantes generales --
    const studentUrlImg = "/Img/student.png";
    const profesorUrlImg = "/Img/profesor.png";
    const adminUrlImg = "/Img/admin.png";

    const pageTitle = "¿Quién solicita préstamo?"

    const profesorLabel = "Soy profesor";
    const studentLabel = "Soy estudiante";
    const adminLabel = "Técnico Académico";

    const profesorAltImg = "Icono de profesor";
    const studentAltImg = "Icono de estudiante";
    const adminAltImg = "Icono de administrador";

    const profesorType = "profesor";
    const studentType = "estudiante";
    const adminType = "admin";

    //Componente para navegar
    const navigate = useNavigate();

    // -- Funcion para navegar a los formularios --
    const handleUserSelect = (typeSelected: string) => {

        try {
            if (typeSelected === "profesor") {
                navigate('/studentForm')
            } else if (typeSelected === "estudiante") {
                navigate('/profesorForm');
            } else {
                throw new Error('No se selecciono ninguna opcion valida');
            }
        } catch (error) {
            console.log("No pudo encontrar la pagina");
        }
    }

    // -- Funcion para conectar a la API de administrador --
    const handleAdminSelect = () => {
        navigate('/login');
    }


    // -- Funcion para crear el componente IndexForm --
    return (
        <div className={styles.mainContainer}>
            <div className={styles.formContainer}>
                <h2 className={styles.title}>{pageTitle}</h2>

                <div className={styles.buttonContainer}>
                    {/* Botón para profesor */}
                    <BotonIndex text={profesorLabel} type={profesorType} urlImg={profesorUrlImg} alt={profesorAltImg} onSelect={handleUserSelect} />

                    {/* Botón para estudiante */}
                    <BotonIndex text={studentLabel} type={studentType} urlImg={studentUrlImg} alt={studentAltImg} onSelect={handleUserSelect} />

                    {/* Botón para técnico académico */}
                    <BotonAdmin text={adminLabel} type={adminType} urlImg={adminUrlImg} alt={adminAltImg} onSelect={handleAdminSelect} />

                </div>
            </div>
        </div>
    );
};

export default IndexForm;












// -- Interfaz de el promp que se le pasa como parametro a los botones --
type BotonIndexProps = {
    text: string,
    type: string,
    urlImg: string,
    alt: string,
    onSelect: (elemento: string) => void
}

// ::::::: C O M P O N E N T :  B O T O N  D E  U S U A R I O ::::::::::
export const BotonIndex = (props: BotonIndexProps) => {

    // Object destructuring del props
    const { text, type, urlImg, alt, onSelect } = props;


    //Declaracion de la funcion manejadora del evento
    const handleClick = (elemento: string) => {
        onSelect(elemento);
    }

    return (
        <>
            <div className={styles.buttonContainer}>
                <button onClick={() => handleClick(type)} className={styles.userButton} id={styles.profesorButton}>
                    <div className={styles.userIconContainer}>
                        <img
                            className={styles.userIcon}
                            src={urlImg}
                            alt={alt}
                        />
                    </div>
                    <p className={styles.labelButton}>{text}</p>
                </button>
            </div>
        </>
    );
};






// ::::::: C O M P O N E N T :  B O T O N  D E  A D M I N I S T R A D O R ::::::::::

export const BotonAdmin = (props: BotonIndexProps) => {
    const { text, type, alt, urlImg, onSelect } = props;

    const handleClick = (elemento: string) => {
        onSelect(elemento);
    }

    return (
        <button onClick={() => handleClick(type)} className={styles.adminButton} id={styles.adminButton}>
            <div className={styles.adminIconContainer}>
                <img
                    className={styles.adminIcon}
                    src={urlImg}
                    alt={alt}
                />
            </div>
            <p className={styles.labelAdmin}>{text}</p>
        </button>
    );
};
import React from "react";
import styles from './LoginStyle.module.css'

// Componente de Login
const LoginForm: React.FC = () => {

    return (
        <div className={styles.loginContainer}>
            <div className={styles.divImagen}>
                <img className={styles.uvLogo} src="/Img/uvicon.png" alt="logo de la aplicación" height="100px" width="150px" />
                <h2>Iniciar sesión</h2>
            </div>
            <div className={styles.divForm}>
                <form className={styles.LoginForm} action="/solicitudes/login" method="POST">
                    <label className={styles.formLabel} htmlFor="email">Email *</label>
                    <input className={styles.formInput} type="email" id="email" name="correo" placeholder="Email" required />

                    <label className={styles.formLabel} htmlFor="password">Contraseña *</label>
                    <input className={styles.formInput} type="password" id="password" name="contrasenia" placeholder="Contraseña" required />

                    <button className={styles.button} type="submit">Iniciar sesión</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;

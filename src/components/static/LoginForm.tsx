import React from "react";

// Componente de Login
const LoginForm: React.FC = () => {
    return (
        <div className="login-container">
            <h2>Iniciar Sesión</h2>
            <form>
                {/* Label y Input para el nombre de usuario */}
                <div className="form-group">
                    <label htmlFor="username">Nombre de Usuario:</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Ingresa tu nombre de usuario"
                        required
                    />
                </div>

                {/* Label y Input para la contraseña */}
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Ingresa tu contraseña"
                        required
                    />
                </div>

                {/* Botón de inicio de sesión */}
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default LoginForm;

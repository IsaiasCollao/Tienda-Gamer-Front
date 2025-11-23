export default function Inicio() {
    return (
        // Fondo con gradiente sutil para que no se vea vacío
        <div className="d-flex justify-content-center align-items-center vh-100" 
             style={{background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'}}>
            
            {/* Añadimos 'card shadow-lg' para darle cuerpo al formulario */}
            <div className="card shadow-lg border-0 p-4" style={{ width: '100%', maxWidth: '400px' }}>
                <form className="text-center">
                    <div className="text-center mb-4">
                        <img className="mb-3" src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="60" height="60" />
                        <h1 className="h4 mb-3 font-weight-normal">Iniciar Sesión</h1>
                        {/* Reducimos el tamaño de la fuente del texto descriptivo */}
                        <p className="text-muted small">Bienvenido a la Tienda Gamer. Los mejores precios te esperan.</p>
                    </div>

                    <div className="form-group text-left mb-3">
                        <label htmlFor="inputEmail" className="small text-muted font-weight-bold">EMAIL</label>
                        <input type="email" id="inputEmail" className="form-control" required autoFocus placeholder="ejemplo@correo.com"/>
                    </div>

                    <div className="form-group text-left mb-4">
                        <label htmlFor="inputPassword" class="small text-muted font-weight-bold">CONTRASEÑA</label>
                        <input type="password" id="inputPassword" className="form-control" required placeholder="********"/>
                    </div>

                    <button className="btn btn-lg btn-primary btn-block font-weight-bold" type="submit">INGRESAR</button>
                    
                    <div className="checkbox mt-3">
                        <label className="small text-muted">
                            <input type="checkbox" value="remember-me" className="mr-1"/> Recordar usuario
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
}
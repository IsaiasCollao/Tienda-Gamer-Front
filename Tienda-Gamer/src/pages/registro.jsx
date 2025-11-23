

export default function Registro() {
    return (
        // Mismo contenedor centrado y con altura calculada que en el Login
        <div className="d-flex justify-content-center align-items-center bg-light" 
             style={{background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', minHeight: 'calc(100vh - 60px)' }}>
            
            {/* Aumenté ligeramente el maxWidth a 400px porque el registro tiene más datos */}
            <div className="card shadow border-0 p-4" style={{ width: '100%', maxWidth: '400px' }}>
                <form>
                    
                    {/* Encabezado */}
                    <div className="text-center mb-3">
                        <img className="mb-2" src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="50" height="50" />
                        <h1 className="h5 font-weight-normal mb-0">Crear Cuenta</h1>
                        <p className="text-muted small">Únete a la Tienda Gamer</p>
                    </div>

                    {/* FILA 1: RUT y Dígito Verificador juntos */}
                    <div className="row mb-2">
                        <div className="col-8">
                            <div className="form-group text-left">
                                <label htmlFor="inputRut" className="small text-muted font-weight-bold mb-0">RUT</label>
                                <input 
                                    type="number" 
                                    id="inputRut" 
                                    className="form-control form-control-sm" 
                                    placeholder="Sin puntos" 
                                    required 
                                    autoFocus
                                />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-group text-left">
                                <label htmlFor="inputDv" className="small text-muted font-weight-bold mb-0">DV</label>
                                <input 
                                    type="text" 
                                    id="inputDv" 
                                    className="form-control form-control-sm text-center" 
                                    placeholder="0-9/K" 
                                    maxLength="1"
                                    required 
                                />
                            </div>
                        </div>
                    </div>

                    {/* Nombre */}
                    <div className="form-group text-left mb-2">
                        <label htmlFor="inputNombre" className="small text-muted font-weight-bold mb-0">NOMBRE COMPLETO</label>
                        <input 
                            type="text" 
                            id="inputNombre" 
                            className="form-control form-control-sm" 
                            placeholder="Ej: Juan Pérez" 
                            required 
                        />
                    </div>

                    {/* Email */}
                    <div className="form-group text-left mb-2">
                        <label htmlFor="inputEmail" className="small text-muted font-weight-bold mb-0">EMAIL</label>
                        <input 
                            type="email" 
                            id="inputEmail" 
                            className="form-control form-control-sm" 
                            placeholder="nombre@correo.com" 
                            required 
                        />
                    </div>

                    {/* Dirección */}
                    <div className="form-group text-left mb-2">
                        <label htmlFor="inputDireccion" className="small text-muted font-weight-bold mb-0">DIRECCIÓN</label>
                        <input 
                            type="text" 
                            id="inputDireccion" 
                            className="form-control form-control-sm" 
                            placeholder="Calle, Número, Comuna" 
                            required 
                        />
                    </div>

                    {/* Contraseña (Necesaria para el backend) */}
                    <div className="form-group text-left mb-4">
                        <label htmlFor="inputPassword" class="small text-muted font-weight-bold mb-0">CONTRASEÑA</label>
                        <input 
                            type="password" 
                            id="inputPassword" 
                            className="form-control form-control-sm" 
                            placeholder="Mínimo 6 caracteres" 
                            required 
                        />
                    </div>

                    {/* Botón de Registro */}
                    <button className="btn btn-sm btn-success btn-block font-weight-bold mb-3" type="submit">
                        REGISTRARSE
                    </button>
                    
                    {/* Link para volver al Login */}
                    <div className="text-center">
                        <span className="small text-muted">¿Ya tienes cuenta? </span>
                        <a href="/inicio" className="small font-weight-bold text-dark">Inicia Sesión aquí</a>
                    </div>

                </form>
            </div>
        </div>
    );
}
export default function Navbar() {
  return (
    // CAMBIO 1: Eliminado 'mb-4'. Ahora solo es bg-dark.
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <a className="navbar-brand" href="/">Tienda Gamer</a>

      <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/catalogo">Catalogo</a>
          </li>
        </ul>

        <div className="d-flex">
          <a href="/carrito" className="btn btn-outline-light me-2 btn-sm">Carrito</a>
          <a href="/inicio" className="btn btn-outline-light me-2 btn-sm">Iniciar Sesión</a>
          <a href="/registro" className="btn btn-success btn-sm">Registrarse</a>
        </div>
      </div>
    </nav>
  );
}
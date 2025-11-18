export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <a className="navbar-brand" href="/home">Top navbar</a>

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
            <a className="nav-link" href="/home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/catalogo">Catalogo</a>
          </li>
        </ul>

        <div className="d-flex">
        <a href="/login" className="btn btn-outline-light me-2">Iniciar Sesión</a>
        <a href="/register" className="btn btn-success">Registrarse</a>
        </div>

      </div>
    </nav>
  );
}

import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function Boleta() {
    // Recuperamos los datos que nos envió el Checkout (o la respuesta del microservicio)
    const location = useLocation();
    
    // Si no hay datos (alguien entró directo por URL), mostramos un estado vacío seguro
    // OJO: En tu arquitectura real, aquí podrías hacer un fetch al microservicio 
    // si tienes el ID de la boleta en la URL (ej: /boleta/9938)
    const state = location.state || {
        cliente: { nombre: "Cliente", apellido: "Ejemplo", rut: "1-9", email: "ejemplo@correo.com", direccion: "Sin dirección" },
        productos: [],
        total: 0,
        idTransaccion: "PENDIENTE"
    };

    const { cliente, productos, total, idTransaccion } = state;
    const fechaActual = new Date().toLocaleDateString();

    return (
        <div className="d-flex justify-content-center align-items-center bg-light py-5" style={{ minHeight: '100vh' }}>
            
            {/* Contenedor tipo "Papel" */}
            <div className="card shadow border-0" style={{ width: '100%', maxWidth: '700px' }}>
                
                {/* Cabecera Verde de Éxito */}
                <div className="card-header bg-success text-white text-center py-4">
                    <div className="mb-2">
                        {/* Icono Check */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                    </div>
                    <h2 className="h4 mb-0">¡Pago Realizado con Éxito!</h2>
                    <p className="mb-0 small opacity-75">Transacción #{idTransaccion || Math.floor(Math.random()*99999)}</p>
                </div>

                <div className="card-body p-5">
                    
                    {/* Encabezado de la Boleta (Empresa y Fecha) */}
                    <div className="row mb-4 border-bottom pb-4">
                        <div className="col-6">
                            <h5 className="font-weight-bold mb-1">TIENDA GAMER S.A.</h5>
                            <p className="text-muted small mb-0">RUT: 76.888.999-K</p>
                            <p className="text-muted small mb-0">Av. Siempre Viva 742, Santiago</p>
                            <p className="text-muted small">contacto@tiendagamer.cl</p>
                        </div>
                        <div className="col-6 text-right text-end">
                            <h6 className="text-uppercase text-muted small">Boleta Electrónica</h6>
                            <h3 className="font-weight-bold text-dark">N° {Math.floor(Math.random() * 10000)}</h3>
                            <p className="mb-0">Fecha: {fechaActual}</p>
                        </div>
                    </div>

                    {/* Datos del Cliente */}
                    <div className="row mb-4">
                        <div className="col-12">
                            <h6 className="text-uppercase text-muted small font-weight-bold">Información del Cliente</h6>
                            <div className="p-3 bg-light rounded">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="mb-1"><strong>Nombre:</strong> {cliente.nombre} {cliente.apellido}</p>
                                        <p className="mb-1"><strong>RUT:</strong> {cliente.rut || 'N/A'}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="mb-1"><strong>Email:</strong> {cliente.email}</p>
                                        <p className="mb-1"><strong>Dirección:</strong> {cliente.direccion}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabla de Productos */}
                    <div className="table-responsive mb-4">
                        <table className="table table-borderless">
                            <thead className="thead-light border-bottom">
                                <tr>
                                    <th scope="col">Producto / Descripción</th>
                                    <th scope="col" className="text-center">Cant.</th>
                                    <th scope="col" className="text-end">Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productos.length > 0 ? (
                                    productos.map((prod, index) => (
                                        <tr key={index} className="border-bottom">
                                            <td>
                                                <span className="font-weight-bold d-block">{prod.titulo}</span>
                                                <small className="text-muted">{prod.categoria}</small>
                                            </td>
                                            <td className="text-center">1</td>
                                            <td className="text-end">${prod.precio}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3" className="text-center text-muted">No hay detalles de productos.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Totales */}
                    <div className="row justify-content-end">
                        <div className="col-md-5">
                            <ul className="list-unstyled">
                                <li className="d-flex justify-content-between py-2">
                                    <span className="text-muted">Subtotal</span>
                                    <span>${total}</span>
                                </li>
                                <li className="d-flex justify-content-between py-2">
                                    <span className="text-muted">IVA (19%)</span>
                                    <span>${Math.round(total * 0.19)}</span>
                                </li>
                                <li className="d-flex justify-content-between py-3 border-top">
                                    <strong className="h5">TOTAL</strong>
                                    <strong className="h5 text-success">${Math.round(total * 1.19)}</strong>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Mensaje final */}
                    <div className="text-center mt-5 mb-4">
                        <p className="text-muted small">Gracias por tu compra. Se ha enviado una copia a tu correo.</p>
                    </div>

                    {/* Botones de Acción (No se imprimen si configuras CSS de impresión, pero por ahora son funcionales) */}
                    <div className="d-grid gap-2 d-md-flex justify-content-md-center print-hide">
                        <button 
                            className="btn btn-outline-dark me-md-2" 
                            onClick={() => window.print()}
                        >
                            <i className="bi bi-printer"></i> Imprimir Boleta
                        </button>
                        <Link to="/catalogo" className="btn btn-primary">
                            Volver a la Tienda
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}
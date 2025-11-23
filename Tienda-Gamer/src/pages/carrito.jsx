import React, { useState } from 'react';

export default function Carrito() {
  // 1. ESTADO: Simulamos datos que vendrían de una Base de Datos o Contexto
  const [carrito] = useState([
    { id: 1, nombre: "Mouse Gamer Logitech", desc: "G502 Hero", precio: 40 },
    { id: 2, nombre: "Teclado Mecánico", desc: "Redragon Kumara", precio: 35 },
    { id: 3, nombre: "Mousepad XXL", desc: "Superficie Speed", precio: 15 },
  ]);

  // Calculamos el total automáticamente
  const total = carrito.reduce((sum, item) => sum + item.precio, 0);

  return (
    // Agregamos un container y padding para que no pegue a los bordes
    <div className="container py-5">
      <div className="row">
        
        {/* COLUMNA DERECHA: Resumen del Carrito (Ahora es dinámico) */}
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Tu Carrito</span>
            <span className="badge badge-secondary badge-pill">{carrito.length}</span>
          </h4>
          
          <ul className="list-group mb-3">
            {/* AQUÍ ESTÁ LA MAGIA: Usamos .map para recorrer el array */}
            {carrito.map((producto) => (
              <li key={producto.id} className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">{producto.nombre}</h6>
                  <small className="text-muted">{producto.desc}</small>
                </div>
                <span className="text-muted">${producto.precio}</span>
              </li>
            ))}

            {/* Código promocional estático (ejemplo) */}
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-0">Código Promocional</h6>
                <small>DESCUENTO5</small>
              </div>
              <span className="text-success">-$5</span>
            </li>

            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              {/* Total calculado - descuento */}
              <strong>${total - 5}</strong>
            </li>
          </ul>

          <form className="card p-2">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Código promo" />
              <div className="input-group-append">
                <button type="submit" className="btn btn-secondary">Canjear</button>
              </div>
            </div>
          </form>
        </div>

        {/* COLUMNA IZQUIERDA: Formulario de Pago */}
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Dirección de Facturación</h4>
          
          <form className="needs-validation" noValidate>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName">Nombre</label>
                <input type="text" className="form-control" id="firstName" required />
                <div className="invalid-feedback">El nombre es requerido.</div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName">Apellido</label>
                <input type="text" className="form-control" id="lastName" required />
                <div className="invalid-feedback">El apellido es requerido.</div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="username">Usuario</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input type="text" className="form-control" id="username" placeholder="Usuario" required />
                <div className="invalid-feedback" style={{ width: '100%' }}>
                  El usuario es requerido.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email">Email <span className="text-muted">(Opcional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="tu@ejemplo.com" />
            </div>

            <div className="mb-3">
              <label htmlFor="address">Dirección</label>
              <input type="text" className="form-control" id="address" placeholder="Calle 123" required />
            </div>

            <div className="row">
              
              <div className="col-md-4 mb-3">
                <label htmlFor="state">Región/Estado</label>
                <select className="custom-select d-block w-100" id="state" required>
                  <option value="">Seleccionar...</option>
                  <option>Santiago</option>
                  <option>Valparaíso</option>
                </select>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="zip">Código Postal</label>
                <input type="text" className="form-control" id="zip" required />
              </div>
            </div>

            <hr className="mb-4" />
            
            <h4 className="mb-3">Pago</h4>
            <div className="d-block my-3">
              <div className="custom-control custom-radio">
                <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" defaultChecked required />
                <label className="custom-control-label" htmlFor="credit">Tarjeta de Crédito</label>
              </div>
              <div className="custom-control custom-radio">
                <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required />
                <label className="custom-control-label" htmlFor="debit">Tarjeta de Débito</label>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="cc-name">Nombre en la tarjeta</label>
                <input type="text" className="form-control" id="cc-name" required />
                <small className="text-muted">Nombre completo como aparece en la tarjeta</small>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="cc-number">Número de tarjeta</label>
                <input type="text" className="form-control" id="cc-number" required />
              </div>
            </div>

            <hr className="mb-4" />
                <a href="/boleta" className="btn btn-primary btn-lg btn-block">Confirmar Pago</a>
          </form>
        </div>
      </div>
    </div>
  );
}
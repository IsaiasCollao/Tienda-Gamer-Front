import React from 'react';

export default function Catalogo() {
    // Definimos los productos aquí para no repetir código HTML 6 veces.
    // Orden: Teclados -> Gráficas -> Sillas
    const productos = [
        {
            id: 1,
            categoria: "Teclado",
            titulo: "Teclado Mecánico RGB Redragon",
            descripcion: "Switches azules clicky, retroiluminación RGB personalizable y construcción de aluminio.",
            precio: "$45.990",
            imagen: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            categoria: "Teclado",
            titulo: "Teclado TKL Logitech Pro",
            descripcion: "Diseño compacto sin teclado numérico (TKL), ideal para eSports y setups minimalistas.",
            precio: "$89.990",
            imagen: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            categoria: "Gráfica",
            titulo: "NVIDIA GeForce RTX 4070",
            descripcion: "Potencia bruta para jugar en 1440p con Ray Tracing activado y DLSS 3.0.",
            precio: "$750.000",
            imagen: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            categoria: "Gráfica",
            titulo: "AMD Radeon RX 7800 XT",
            descripcion: "Excelente rendimiento en rasterización y 16GB de VRAM para texturas ultra.",
            precio: "$680.000",
            imagen: "https://images.unsplash.com/photo-1624705024411-1624712a608d?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 5,
            categoria: "Silla",
            titulo: "Silla Gamer ErgoRacing",
            descripcion: "Diseño ergonómico con soporte lumbar, reclinable 180° y reposabrazos 4D.",
            precio: "$149.990",
            imagen: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 6,
            categoria: "Silla",
            titulo: "Silla Ejecutiva Pro-Gamer",
            descripcion: "Acabado en cuero sintético premium, base de acero reforzado y pistón clase 4.",
            precio: "$189.990",
            imagen: "https://images.unsplash.com/photo-1616422304892-7f722a61366c?auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <section className="container py-5 my-5" id="products">
            <h2 className="text-center mb-5 font-weight-bold">Nuestro Catálogo Gamer</h2>

            <div className="row g-4">
                {/* Iteramos sobre el array de productos para crear las tarjetas automáticamente */}
                {productos.map((producto) => (
                    <div className="col-md-6 col-lg-4" key={producto.id}>
                        <div className="card h-100 shadow-sm border-0">
                            {/* Imagen del producto con altura fija para que todas se vean iguales */}
                            <div style={{ height: '250px', overflow: 'hidden' }}>
                                <img 
                                    src={producto.imagen} 
                                    className="card-img-top w-100 h-100" 
                                    style={{ objectFit: 'cover' }}
                                    alt={producto.titulo} 
                                />
                            </div>
                            
                            <div className="card-body d-flex flex-column">
                                <div className="mb-2">
                                    <span className="badge badge-secondary">{producto.categoria}</span>
                                </div>
                                <h5 className="card-title">{producto.titulo}</h5>
                                <p className="card-text text-muted small">{producto.descripcion}</p>
                                
                                <h5 className="fw-bold text-primary mt-2">{producto.precio}</h5>
                                
                                <div className="mt-auto d-flex justify-content-between align-items-center pt-3">
                                    {/* Actualicé el JSON del botón modal con los datos reales del producto */}
                                    <button 
                                        className="btn btn-outline-primary btn-sm" 
                                        data-bs-toggle="modal" 
                                        data-bs-target="#productDetailModal" 
                                        data-product={JSON.stringify({ title: producto.titulo, description: producto.descripcion })}
                                    >
                                        Ver Detalles
                                    </button>
                                    <a href="#" className="btn btn-success btn-sm">
                                        Comprar
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
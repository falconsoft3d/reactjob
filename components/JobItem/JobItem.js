import React from 'react';
import Link from 'next/link';

export default function JobItem() {
    return (
        <div className="job-item rounded">
            <div className="row">
                <div className="col-2">
                    <img class="card-img-top" src="/pic-company-logo.png" alt="Card image cap"/>
                    <Link href="/job">Ver más</Link>
                </div>
                <div className="col-10">
                    <p><strong>React Developer</strong></p>
                    <Link href="/">TuSoluction</Link>
                    <p>España | 10-12-2021</p>
                    <p>Funciones - Manejo de carretilla retráctil - Recepción de material de proveedores - Carga y descarga de mercancía (artículos pesados) - Etiquetado de producto -</p>
                </div>
            </div>
        </div>
    )
}

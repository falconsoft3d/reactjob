import React from 'react'

export default function Navbar() {
    return (
        <div>
            <div className="container border-bottom">
                <div className="d-flex flex-column flex-md-row align-items-center pb-3 mt-2">
                <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                    <span className="fs-4 job-main-blue m-2">ReactJob</span>
                    <a className="me-3 py-2 a-gray text-decoration-none m-2" href="#">Buscar Empleado</a>
                    <a className="me-3 py-2 a-gray text-decoration-none m-2" href="#"> Buscar Empresa</a>
                </a>
            
                <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    
                    <a className="me-3 py-2 a-gray text-decoration-none m-2" href="#">Salarios</a>
                    <a className="me-3 py-2 a-gray text-decoration-none m-2" href="#">Formación</a>

                    <a className="btn btn-outline-primary button-primary-outline  py-2 main-gray text-decoration-none m-2" href="#">Registrarse</a>
                    <a className="btn btn-primary py-2 main-gray text-decoration-none m-2 button-primary" href="#">Entrar</a>
                </nav>
                </div>
            </div>
        </div>
    )
}

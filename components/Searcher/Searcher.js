import React from 'react'

export default function Searcher() {
    return (
        <>
        <div className="container mt-4">
            <div className="bg-job-main-blue searcher">
                <div className="row">
                    <div className="col-md-4">
                        <p className="font-white">Busco ofertas de...</p>
                        <input type="text" className="form-control" placeholder="Puesto, Empresa, Palabra Clave"></input>
                    </div>
                    <div className="col-md-4">
                        <p className="font-white">en...</p>
                        <input type="text" className="form-control" placeholder="Lugar"></input>
                    </div>
                    <div className="col-md-3">
                        <button className="btn button-primary-orange total mt-4">Buscar</button>
                    </div>
                </div>
            </div>    
        </div>
        <div className="container mt-2">
            <div className="row">
                <div className="col-md-6 mt-4">  
                    0 ofertas de trabajo encontradas
                </div>
                <div className="col-md-6 alert">
                    <a className="btn btn-primary py-2 main-gray text-decoration-none m-2 button-primary">Crear Alerta</a>
                </div>    
            </div>
        </div>
        </>
    )
}

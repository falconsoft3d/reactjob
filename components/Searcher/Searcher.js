import React from 'react'

export default function Searcher() {
    return (
        <div className="container">
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
    )
}

import { Component } from "react";

export class WebService extends Component {

    render() {
        return (
            <>
                <div className="container-fluid ws-back">
                    <div className="row my-5">
                        <div className="col"></div>
                        <div class=" col-6 d-flex flex-column align-content-center">
                            <h1 className="text-light web-service-header-text"> WEB SERVICE DE TIMBRADO MASIVO</h1>
                            <h1 className="text-light web-service-header-text"> NTLINK COMUNICACIONES</h1>
                        </div>
                        <div className="col"></div>
                    </div>
                    <br></br>
                    <div className="row my-5">
                        <div className="col"></div>
                        <div class=" col-3 d-flex flex-column">
                            <h3 className="text-success font-weight-bold"> ¿QUÉ ES EL TIMBRADO CFDI CON WEB SERVICE?</h3>
                            <p className="text-light"> EL timbrado a través del web service es un servicio de Facturación Electrónica o Nómina
                                y requiren timbrar susu CFDI con base en la última especificación del Anexo 20 de la Miscelánea Fiscal.</p>
                        </div>
                        <div class=" col-3 d-flex flex-column">
                            <h3 className="text-success font-weight-bold">BENEFICIOS</h3>
                            <p className="text-light"> EL timbrado a través del web service es un servicio de Facturación Electrónica o Nómina
                                y requiren timbrar susu CFDI con base en la última especificación del Anexo 20 de la Miscelánea Fiscal.</p>
                        </div>
                        <div className="col"></div>
                    </div>

                        <div className="row d-flex justify-content-center">
                            <img src={require('../assets/img/All/esquema-ws.png')} className="w-50" alt="..." />
                        </div>
                </div>
            </>
        )
    }
}
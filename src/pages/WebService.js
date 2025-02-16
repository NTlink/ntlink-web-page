import { Component } from "react";

export class WebService extends Component {

    render() {
        return (
            <>
                <div className="container ws-back">

                    <div className="row my-5">
                        <div class=" col-6 d-flex flex-column align-content-center">
                            <h2 className="text-light web-service-header-text"> WEB SERVICE DE TIMBRADO MASIVO</h2>
                            <h2 className="text-light web-service-header-text"> NTLINK COMUNICACIONES</h2>
                        </div>
                    </div>
                    <br></br>
                    <div className="row my-5">
                        <div className="col-md-2"></div>
                        <div class=" col-sm-6 col-md-4 d-flex flex-column">
                            <h5 className="text-success font-weight-bold tech-font"> ¿QUÉ ES EL TIMBRADO CFDI CON WEB SERVICE?</h5>
                            <p className="text-light"> EL timbrado a través del web service es un servicio de Facturación Electrónica o Nómina
                                y requieren timbrar su CFDI con base en la última especificación del Anexo 20 de la Miscelánea Fiscal.</p>
                            <ul>
                                <li className="text-light"> Servicio de timbrado</li>
                                <li className="text-light"> Servicio de cancelación</li>
                                <li className="text-light"> Consulta de estatus CFDI</li>
                                <li className="text-light"> Consulta de saldo en timbres</li>
                                <li className="text-light"> Carga de empresas</li>
                            </ul>
                        </div>
                        <div class=" col-sm-6 col-md-3 d-flex flex-column">
                            <h5 className="text-success font-weight-bold tech-font">BENEFICIOS</h5>
                            <ul>
                                <li className="text-light"> Servicio de alta disponibilidad</li>
                                <li className="text-light"> Respaldo de XML's</li>
                                <li className="text-light"> Precio mas bajo del mercado</li>
                                <li className="text-light"> Compatibilidad con el 90% de los lenguajes de programación</li>
                                <li className="text-light"> Soporte técnico gratuito</li>
                                <li className="text-light"> Timbra y cancela documentos</li>
                                <li className="text-light"> Cancelaciones sin costo</li>
                                <li className="text-light"> Ambiente de pruebas gratuito</li>
                            </ul>
                        </div>
                        <div className=" col-sm-12 col-md-3">
                            <img src={require('../assets/img/All/cfdi-4-pc.png')} className="w-100" alt="..." />
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center">
                        <img src={require('../assets/img/All/esquema-ws.png')} className="w-75" alt="..." />
                    </div>

                    <div className="row my-5">
                        <div className="col-sm-1 col-md-2"></div>
                        <div class="col-sm-11 col-md-3 d-flex flex-column ml-5 mr-5">

                            <p className="text-light bg-info pt-4 pb-4"> <strong> Todos nuestros servicios de timbrado por web service son post pago.</strong>
                                &nbsp;Esto quiere decir que podrás pagar a mes vencido dependiendo de lo que utilices, siendo una tarifa ajustada a tus necesidades
                            </p>
                            <div className="col d-flex justify-content-center">
                                <a href="https://github.com/NTlink/ntlink-ws-cfdi-documentation/wiki" target="_blank" ><span className="mb-0">DOCUMENTACIÓN</span></a>
                            </div>
                        </div>
                        <div className="col-sm-1 col-md-1"></div>
                        <div class="col-sm-10 col-md-4 d-flex flex-column ml-5 mr-5">
                            <h5 className="text-success font-weight-bold tech-font">TABLA DE PRECIOS WEB SERVICE (Timbres)</h5>
                            <br></br>
                            <table class="table">
                                <thead className="bg-success">
                                    <tr className="text-center">
                                        <th scope="col">Cantidad</th>
                                        <th scope="col">Precio</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-info text-light text-center">
                                        <td>1,000</td>
                                        <td>$1392.00</td>
                                    </tr>
                                    <tr className="bg-dark text-light text-center">
                                        <td>3,000</td>
                                        <td>$3480.00</td>
                                    </tr>
                                    <tr className="bg-info text-light text-center">
                                        <td>5,000</td>
                                        <td>$4640.00</td>
                                    </tr>
                                    <tr className="bg-dark text-light text-center">
                                        <td>10,000</td>
                                        <td>$8120.00</td>
                                    </tr>
                                    <tr className="bg-info text-light text-center">
                                        <td>15,000</td>
                                        <td>$12760.00</td>
                                    </tr>
                                    <tr className="bg-dark text-light text-center">
                                        <td>20,000</td>
                                        <td>$16820.00</td>
                                    </tr>
                                    <tr className="bg-info text-light text-center">
                                        <td>50,000</td>
                                        <td>$31320.00</td>
                                    </tr>
                                    <tr className="bg-dark text-light text-center">
                                        <td>1000,000</td>
                                        <td>$46400.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
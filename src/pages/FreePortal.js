import { Component } from "react";
import ReactGA from "react-ga4";

export class FreePortal extends Component {

    openHome() {
        ReactGA.send({ hitType: "pageview", page: "/home", title: "Carrusel" });
    }

    openPrices() {
        ReactGA.send({ hitType: "pageview", page: "/precios", title: "Precios" });
    }

    openCfdi() {
        ReactGA.send({ hitType: "pageview", page: "/cfdi", title: "CFDI 4.0" });
    }

    openNomina() {
        ReactGA.send({ hitType: "pageview", page: "/nomina", title: "Nomina 1.2" });
    }

    openGratuito() {
        ReactGA.send({ hitType: "pageview", page: "/gratuito", title: "Gratuito 4.0" });
    }

    openSupport() {
        ReactGA.send({ hitType: "pageview", page: "/support", title: "Contacto NT link" });
    }


    render() {
        return (
            <>
                <div className="my-5">

                    <div className="row my-2">
                        <div className="col"></div>
                        <div class=" col-6 d-flex flex-column align-content-center">
                            <h2 className="text-success web-service-header-text">NTLINK PORTAL GRATUITO</h2>
                        </div>
                        <div className="col"></div>
                    </div>
                    <br></br>
                    <div className="row my-2">
                        <div className="col-sm-1 col-md-2"></div>
                        <div class="col-sm-8 col-md-6 d-flex flex-column ml-5 mr-5">
                            <h5 className="text-success font-weight-bold tech-font"> PORTAL GRATUITO</h5>
                            <p className="text-light"> Por medio de nuestro portal gratuito podras usar la funcionalidad básica de nuestros servicios
                                de emisión  y certificación de comprobantes CFDI, este portal te permitirá hacer las siguientes acciones</p>
                            <ul>
                                <li className="text-light"> Precarga de datos fiscales receptores</li>
                                <li className="text-light"> Carga de tus certificados  <strong>.key y .cer</strong></li>
                                <li className="text-light"> Timbrado y validacion de CFDI PUE y PPD</li>
                                <li className="text-light"> Consulta y resguardo de los CFDIs emitidos dentro de nuestro portal</li>
                            </ul>
                        </div>
                        <div class="col-sm-3 col-md-4 d-flex flex-column ml-5 mr-5">
                            <div className="col d-flex justify-content-start align-items-center">
                                <a href="https://cfdi33.ntlink.com.mx/FacturaGratuito40" target="_blank" onClick={this.openGratuito} className="mbtn"><span className="mb-0">PORTAL GRATUITO</span></a>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center">
                        <img src={require('../assets/img/All/5 folios gratis.gif')} className="d-block img-fluid w-75" alt="..." />
                    </div>
                </div>
            </>
        )
    }
}
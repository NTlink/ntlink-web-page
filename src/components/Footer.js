import { Component } from "react";
import ReactGA from "react-ga4";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faSkype, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'

export class Footer extends Component {

    openHome() {
        ReactGA.send({ hitType: "pageview", page: "/home", title: "Carrusel" });
    }

    openProducts() {
        ReactGA.send({ hitType: "pageview", page: "/products", title: "Productos" });
    }

    openPrices() {
        ReactGA.send({ hitType: "pageview", page: "/precios", title: "Precios" });
    }

    openWS() {
        ReactGA.send({ hitType: "pageview", page: "/web-service", title: "Documentacion WS" });
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

    openFacebook() {
        ReactGA.send({ hitType: "pageview", page: "/facebook", title: "Facebook NT" });
    }

    openWhatsapp() {
        ReactGA.send({ hitType: "pageview", page: "/whatsapp", title: "WhatsApp NT" });
    }

    openYoutube() {
        ReactGA.send({ hitType: "pageview", page: "/youtube", title: "Youtube NT" });
    }

    openBlog() {
        ReactGA.send({ hitType: "pageview", page: "/blog", title: "Blog NT link" });
    }

    openSupport() {
        ReactGA.send({ hitType: "pageview", page: "/support", title: "Contacto NT link" });
    }

    render() {
        return (
            <>
                <footer className="my-5">

                    <div class="container-xxl text-center bg-dark">
                        <h4 className="text-center text-white py-4">CONTACTO Y SOPORTE</h4>
                        <div className="row">
                            <div className="col-md-2 d-none d-lg-block">
                                <img className="img-fluid" src={require('../assets/ntlink_logo.png')} style={{ height: "200px" }} alt="..." />
                            </div>
                            <div className="col-md-12 col-lg-8 text-center">
                                <div className="row">

                                    <div className="col-md-4 text-start">
                                        <h5 className="text-light " >TELEFONOS</h5>

                                        <ul className="list-unstyled text-small">
                                            <li><span className="text-light" >+(55) 47 80 02 00</span></li>
                                            <li><span className="text-light" >+(55) 62 72 55 49</span></li>
                                            <li><span className="text-light" >+(55) 62 72 55 50</span></li>
                                            <li><span className="text-light" >+(55) 82 50 76 56</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4 text-start">
                                        <div className="row">
                                            <h5 className="text-light">CORREO ELECTRONICO</h5>
                                            <ul className="list-unstyled text-small">
                                                <li><span className="text-light" >ventas@ntlink.com.mx</span></li>
                                                <li><span className="text-light" >soporte_tecnico@ntlink.com.mx</span></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5 className="text-light">WHATSAPP</h5>
                                            <ul className="list-unstyled text-small">
                                                <li><span className="text-light" >5591078187</span></li>
                                                <li><span className="text-light" >5524058190</span></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-4 text-start">
                                        <div className="row">
                                            <h5 className="text-light">DIRECCIÓN</h5>
                                            <ul className="list-unstyled text-small">
                                                <li><span className="text-light" >Calle Xicoténcatl 103BIS Del:, Del</span></li>
                                                <li><span className="text-light" >Carmen, Coyoacán, 04100 Ciudad de</span></li>
                                                <li><span className="text-light" >México, CDMX</span></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5 className="text-light">HORARIO</h5>
                                            <ul className="list-unstyled text-small">
                                                <li><span className="text-light" >LUNES A VIERNES 09:00 AM A 18:00 PM</span></li>
                                                <li><span className="text-light" >SABADO 9:00 AM A 3:00 PM</span></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-2 d-none d-lg-block">
                                <img className="img-fluid" src={require('../assets/pack_logo.gif')} style={{ height: "200px" }} alt="..." />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <a type="button" className="btn btn-lg bg-dark rounded-circle fs-2 mx-4" href="/contacto" target="_blank" onClick={this.openSupport}>
                                <FontAwesomeIcon className="text-success" icon={faEnvelope} />
                            </a>

                            <a type="button" className="btn btn-lg bg-dark rounded-circle fs-2 mx-4" href="https://www.facebook.com/profile.php?id=100091939779817" target="_blank" onClick={this.openFacebook}>
                                <FontAwesomeIcon className="text-success" icon={faFacebook} />
                            </a>
                            <a type="button" className="btn btn-lg bg-dark rounded-circle fs-2 mx-4" href="https://wa.me/525591078187" target="_blank" onClick={this.openWhatsapp}>
                                <FontAwesomeIcon className="text-success" icon={faWhatsapp} />
                            </a>
                            <a type="button" className="btn btn-lg bg-dark rounded-circle fs-2 mx-4" href="https://www.youtube.com/@ntlinkcomunicaciones2617" target="_blank" onClick={this.openYoutube}>
                                <FontAwesomeIcon className="text-success" icon={faYoutube} />
                            </a>
                            <a type="button" className="btn btn-lg bg-dark rounded-circle fs-2 mx-4" href="skype:ntlink_comunicaciones4?chat" target="_blank">
                                <FontAwesomeIcon className="text-success" icon={faSkype} />
                            </a>
                        </div>
                        <div className="text-center py-4 text-light mt-4">Copyright © 2021 NTLINK COMUNICACIONES - Todos los derechos reservados | <a href="aviso-privacidad" className='text-light'>AVISO DE PRIVACIDAD</a> | <a href="/terminos-condiciones" className='text-light'> TERMINOS Y CONDICIONES</a> </div>
                    </div>

                </footer>

            </>)
    }
}
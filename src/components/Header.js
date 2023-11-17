import ReactGA from "react-ga4";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { Component } from "react";

export class Header extends Component {

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
                <header>
                    <nav class="navbar navbar-expand-lg bg-dark nav-masthead site-header fixed-top">
                        <div class="container-xl">
                            <a class="navbar-brand" href="/">
                                <img src={require('../assets/ntlink_logo.png')} style={{ height: "100px" }} alt="..." />
                            </a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <FontAwesomeIcon className="text-light" icon={faBars} />
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
                                    <li class="nav-item">
                                        <a class="nav-link text-success" aria-current="page" href="/">INICIO</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle text-success" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            SERVICIOS
                                        </a>
                                        <ul class="dropdown-menu bg-dark">
                                            <li><a class="dropdown-item text-success" href="/web-service">WEB SERVICE</a></li>
                                            <li><a class="dropdown-item text-success" href="/cfdi-portal">PORTAL CFDI</a></li>
                                            <li><a class="dropdown-item text-success" href="/nomina-portal">PORTAL NOMINA</a></li>
                                            <li><a class="dropdown-item text-success" href="/convertidor">CONVERTIDOR</a></li>
                                            <li><hr class="dropdown-divider text-success" /></li>
                                            <li><a class="dropdown-item text-success" href="/complementos">COMPLEMENTOS</a></li>
                                            <li><a class="dropdown-item text-success" href="/adendas">ADENDAS</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle text-success" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            ACCESOS
                                        </a>
                                        <ul class="dropdown-menu bg-dark">
                                            <li>
                                                <a href="https://cfdi33.ntlink.com.mx/FacturaGratuito40" target="_blank" onClick={this.openGratuito} className="dropdown-item text-success"><span>ACCESO GRATUITO <FontAwesomeIcon className="text-success mx-2" icon={faUpRightFromSquare} /></span></a>
                                            </li>
                                            <li>
                                                <a href="https://cfdi33.ntlink.com.mx/Facturacion40" target="_blank" onClick={this.openCfdi} className="dropdown-item text-success"><span>ACCESO CFDI 4.0<FontAwesomeIcon className="text-success mx-2" icon={faUpRightFromSquare} /></span></a>
                                            </li>
                                            <li><a href="https://cfdi33.ntlink.com.mx/NominaLocal40/wfrLogin.aspx" target="_blank" onClick={this.openNomina} className="dropdown-item text-success"><span>ACCESO NÓMINA<FontAwesomeIcon className="text-success mx-2" icon={faUpRightFromSquare} /></span></a></li>
                                            <li><hr class="dropdown-divider" /></li>
                                            <li><a href="https://ntlinkcfdi.com/blog-ntlink" target="_blank" onClick={this.openBlog} className="dropdown-item text-success"><span>BLOG NTLINK<FontAwesomeIcon className="text-success mx-2" icon={faUpRightFromSquare} /></span></a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link text-success" aria-current="page" href="/precios">PRECIOS</a>
                                    </li>

                                </ul>
                                <div className="d-flex">
                                    <img src={require('../assets/pack_logo.gif')} style={{ height: "70px" }} alt="..." />
                                </div>

                            </div>
                        </div>
                    </nav>
                </header>
            </>
        )
    }

}
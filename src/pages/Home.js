import { Component } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

import { Corousel } from '../components/Carousel';
import { NtOverview } from '../components/NtOverview';
import { Products } from '../components/Products';
import { Prices } from "components/Prices";
import { Promotions } from "components/Promotions";

export class Home extends Component {


    render() {

        return (
            <>
                <header>
                    <nav className="navbar navbar-expand-lg fixed-top bg-dark m-0 p-0 a-t-2">
                        <div className="container justify-content-end">

                            <button className="navbar-toggler custom-toggler ml-auto m-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon p-3"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-center" id="navbarText">
                                <ul className="navbar-nav justify-content-center">
                                    <li className="nav-item active">
                                        <a className="nav-link m-2 p-0" href="#CAROUSEL"> <p className="text-light underline h5 font-weight-bold weight">INICIO</p></a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link m-2 p-0" href="#PRODUCTOS"><p className="text-light underline h5 font-weight-bold weight">PRODUCTOS</p></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link m-2 p-0" href="#PRECIOS"><p className="text-light underline h5 font-weight-bold weight">PRECIOS</p></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link m-2 p-0" href="#PROMOCIONES"><p className=" text-light underline h5 font-weight-bold weight">PROMOCIONES
                                            ESPECIALES</p></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link m-2 p-0" href="#CONTACTO"><p className="text-light underline h5 font-weight-bold weight">CONTACTO
                                            SOPORTE</p></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>

                <div className="container">
                    <section id="CAROUSEL">
                        <br />
                        <Corousel />
                        <NtOverview />
                    </section>




                    <div className=" justify-content-center a-b-2 pb-4 ">
                        <div className="row mt-4">
                            <img src={require('../assets/img/All/5 folios gratis.gif')} className="d-block img-fluid " alt="..." />
                        </div>
                    </div>

                    <section id="PRODUCTOS" className="py-5 bg-transparent a-b-2" >
                        <br />
                        <Products />
                    </section>

                    <section id="PRECIOS" className="py-5 bg-transparent  a-b-2 p-0" >
                        <br />
                        <Prices />
                    </section>


                    <section id="PROMOCIONES" className="py-5 bg-transparent a-b-2" >
                        <br />
                        <Promotions />
                    </section>

                    <div className=" justify-content-center a-b-2" >
                        <div className="row ">
                            <div className="col d-flex justify-content-center">
                                <a href="https://ntlinkcfdi.com/blog-ntlink" target="_blank" className="mbtn buttonexapnd"  ><span className="mb-0">BLOG</span></a>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <a href="https://dev-cfdi4.ntlink.com.mx" target="_blank" className="mbtn buttonexapnd"  ><span className="mb-0">DOCUMENTACIÓN</span></a>
                            </div>
                        </div>
                    </div>
                </div>




                {
                    (getCookieConsentValue("myAwesomeCookieName2") === undefined) &&
                    <div className="navbar fixed-bottom">
                        <CookieConsent

                            location="bottom"
                            buttonText="Aceptar"
                            cookieName="myAwesomeCookieName2"
                            style={{ background: "#005250" }}
                            buttonStyle={{ color: "#FFFFFF", fontSize: "18px", background: "#00b3ff", fontWeight: "bold", }}
                            expires={150}
                        >
                            <p className="font-weight-normal">Las cookies de este sitio web se usan para personalizar el contenido y los anuncios, ofrecer funciones de redes sociales y analizar el tráfico. Además, compartimos información sobre el uso que haga del sitio web con nuestros partners de redes sociales.</p>
                        </CookieConsent>
                    </div>
                }


                <footer id="CONTACTO" className="pt-4 pt-md-5 border-top gradeintBlack bg-dark a-b-2">
                    <div className="bg-trasparent">
                        <div className="row">
                            <div className="col-md-3">
                                <img className="img-fluid" src={require('../assets/img/All/main-logo-contacto.png')} />
                            </div>
                            <div className="col-md-9 mt-5 text-start">
                                <div className="row">
                                    <h2 className="text-light" >CONTACTO Y SOPORTE</h2>
                                </div>

                                <div className="row">

                                    <div className="col-md-3 text-start">
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

                                <div className="row text-light d-sm-flex justify-content-sm-end m-3">
                                    <div className=" col-1 WithForece">

                                        <a type="button" className="btn btn-outline-light noBorder" href="https://nt-invoice.ntlink.com.mx/#/support-request/*" target="_blank">
                                            <img className="img-fluid" src={require('../assets/img/All/esquema-de-correo-electronico (1).png')} />
                                        </a>
                                    </div>

                                    <div className="col-1 WithForece2">

                                        <img className="img-fluid" src={require('../assets/img/All/line.png')} />


                                    </div>
                                    <div className="col col-sm-1">
                                        <a type="button" className="btn btn-outline-light noBorder" href="https://www.facebook.com/NT-Link-105356365428787" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='ico' viewBox="0 0 16 16">
                                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                            </svg>
                                        </a>
                                    </div>

                                    <div className="col col-sm-1">
                                        <a type="button" className="btn btn-outline-light noBorder" href="https://wa.me/525591078187" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ico" viewBox="0 0 16 16">
                                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                            </svg>
                                        </a>
                                    </div>

                                    <div className="col col-sm-1">
                                        <a type="button" className="btn btn-outline-light noBorder" href="https://www.youtube.com/channel/UCO2QUWGKwXMQ8XegdABjAyA" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ico" viewBox="0 0 16 16">
                                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="col col-sm-1">
                                        <a type="button" className="btn btn-outline-light noBorder" href="skype:ntlink_comunicaciones4?chat" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ico" viewBox="0 0 16 16">
                                                <path d="M4.671 0c.88 0 1.733.247 2.468.702a7.423 7.423 0 0 1 6.02 2.118 7.372 7.372 0 0 1 2.167 5.215c0 .344-.024.687-.072 1.026a4.662 4.662 0 0 1 .6 2.281 4.645 4.645 0 0 1-1.37 3.294A4.673 4.673 0 0 1 11.18 16c-.84 0-1.658-.226-2.37-.644a7.423 7.423 0 0 1-6.114-2.107A7.374 7.374 0 0 1 .529 8.035c0-.363.026-.724.08-1.081a4.644 4.644 0 0 1 .76-5.59A4.68 4.68 0 0 1 4.67 0zm.447 7.01c.18.309.43.572.729.769a7.07 7.07 0 0 0 1.257.653c.492.205.873.38 1.145.523.229.112.437.264.615.448.135.142.21.331.21.528a.872.872 0 0 1-.335.723c-.291.196-.64.289-.99.264a2.618 2.618 0 0 1-1.048-.206 11.44 11.44 0 0 1-.532-.253 1.284 1.284 0 0 0-.587-.15.717.717 0 0 0-.501.176.63.63 0 0 0-.195.491.796.796 0 0 0 .148.482 1.2 1.2 0 0 0 .456.354 5.113 5.113 0 0 0 2.212.419 4.554 4.554 0 0 0 1.624-.265 2.296 2.296 0 0 0 1.08-.801c.267-.39.402-.855.386-1.327a2.09 2.09 0 0 0-.279-1.101 2.53 2.53 0 0 0-.772-.792A7.198 7.198 0 0 0 8.486 7.3a1.05 1.05 0 0 0-.145-.058 18.182 18.182 0 0 1-1.013-.447 1.827 1.827 0 0 1-.54-.387.727.727 0 0 1-.2-.508.805.805 0 0 1 .385-.723 1.76 1.76 0 0 1 .968-.247c.26-.003.52.03.772.096.274.079.542.177.802.293.105.049.22.075.336.076a.6.6 0 0 0 .453-.19.69.69 0 0 0 .18-.496.717.717 0 0 0-.17-.476 1.374 1.374 0 0 0-.556-.354 3.69 3.69 0 0 0-.708-.183 5.963 5.963 0 0 0-1.022-.078 4.53 4.53 0 0 0-1.536.258 2.71 2.71 0 0 0-1.174.784 1.91 1.91 0 0 0-.45 1.287c-.01.37.076.736.25 1.063z" />
                                            </svg>
                                        </a>
                                    </div>


                                </div>

                            </div>
                        </div>
                        <div className="text-center py-4 text-light mt-4">Copyright © 2021 NTLINK COMUNICACIONES - Todos los derechos reservados | <a href="politica-privacidad" className='text-light'>POLITICA DE PRIVACIDAD</a> | <a href="/terminos-condiciones" className='text-light'> TERMINOS Y CONDICIONES</a> </div>
                    </div>
                    <img className="rounded mx-auto d-block" src={require('../assets/img/All/pie_remate-circuitos.gif')} />
                </footer>

            </>
        )
    }
}
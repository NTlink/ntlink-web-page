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
                        <div className="container-fluid justify-content-end">

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
                                        <a className="nav-link m-2 p-0" href="#PROMOCIONES"><p className=" text-light underline h5 font-weight-bold weight">PROMOCIONES</p></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link m-2 p-0" href="https://dev-cfdi4.ntlink.com.mx" target="_blank"><p className="text-light underline h5 font-weight-bold weight">DOCUMENTACION</p></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link m-2 p-0" href="https://cfdi33.ntlink.com.mx/Facturacion40" target="_blank"><p className="text-light underline h5 font-weight-bold weight">CFDI</p></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link m-2 p-0" href="https://cfdi33.ntlink.com.mx/NominaLocal3.3/wfrLogin.aspx" target="_blank"><p className="text-light underline h5 font-weight-bold weight">NOMINA</p></a>
                                    </li>
                                </ul>
                                <div className="text-light d-sm-flex justify-content-sm-end m-3">
                                    <a type="button" className="btn btn-outline-light noBorder" href="https://www.facebook.com/NT-Link-105356365428787" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='ico' viewBox="0 0 16 16">
                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                        </svg>
                                    </a>
                                    <a type="button" className="btn btn-outline-light noBorder" href="https://wa.me/525591078187" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ico" viewBox="0 0 16 16">
                                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                        </svg>
                                    </a>
                                    <a type="button" className="btn btn-outline-light noBorder" href="https://www.youtube.com/@ntlinkcomunicaciones2617" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ico" viewBox="0 0 16 16">
                                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                                        </svg>
                                    </a>

                                    <a type="button" className="btn btn-outline-light noBorder" href="https://ntlinkcfdi.com/blog-ntlink" target="_blank">
                                        <svg version="1.1" width="16" height="16" fill="currentColor" className="ico" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512">
                                            <g>
                                                <rect x="293.186" y="307.184" class="st0" width="131.572" height="112.986" />
                                                <rect x="87.243" y="308.893" class="st0" width="154.448" height="17.162" />
                                                <rect x="87.243" y="401.298" class="st0" width="154.448" height="17.162" />
                                                <rect x="87.243" y="355.1" class="st0" width="154.448" height="17.162" />
                                                <path class="st0" d="M416.428,0.004H95.58C42.787,0.013,0.016,42.792,0,95.577v303.685
		c0.025,62.262,50.463,112.717,112.742,112.734h286.524c62.27-0.017,112.717-50.464,112.734-112.734V95.577
		C511.992,42.792,469.212,0.013,416.428,0.004z M464.805,399.262c-0.008,18.15-7.308,34.424-19.198,46.34
		c-11.916,11.891-28.19,19.19-46.34,19.198H112.742c-18.15-0.009-34.433-7.308-46.348-19.198
		c-11.892-11.916-19.182-28.19-19.198-46.34V118.696h417.61V399.262z"/>
                                                <path class="st0" d="M88.96,267.908h34.583c19.71,0,31.642-8.581,31.642-26.548c0-10.852-6.167-18.368-12.2-20.648v-0.268
		c6.034-3.352,10.592-9.519,10.592-19.432c0-14.489-9.251-24.268-29.086-24.268H88.96c-0.796,0-1.332,0.536-1.332,1.34v88.475
		C87.628,267.371,88.164,267.908,88.96,267.908z M107.338,193.495c0-0.528,0.251-0.804,0.804-0.804h13.944
		c7.5,0,11.925,3.888,11.925,10.584c0,6.712-4.425,10.734-11.925,10.734h-13.944c-0.553,0-0.804-0.268-0.804-0.804V193.495z
		 M107.338,229.955c0-0.528,0.251-0.795,0.804-0.795h15c8.061,0,12.343,4.424,12.343,11.405c0,7.097-4.282,11.396-12.343,11.396h-15
		c-0.553,0-0.804-0.276-0.804-0.812V229.955z"/>
                                                <path class="st0" d="M181.516,267.908h59.404c0.796,0,1.332-0.536,1.332-1.349v-14.874c0-0.813-0.536-1.341-1.332-1.341h-40.224
		c-0.544,0-0.804-0.268-0.804-0.812v-71.447c0-0.804-0.528-1.34-1.341-1.34h-17.036c-0.805,0-1.332,0.536-1.332,1.34v88.475
		C180.183,267.371,180.711,267.908,181.516,267.908z"/>
                                                <path class="st0" d="M292.708,269.374c15.963,0,28.558-7.366,33.251-22.115c2.011-6.301,2.539-11.396,2.539-24.938
		c0-13.542-0.528-18.637-2.539-24.939c-4.693-14.739-17.288-22.114-33.251-22.114c-15.956,0-28.558,7.375-33.243,22.114
		c-2.02,6.302-2.556,11.397-2.556,24.939c0,13.542,0.536,18.637,2.556,24.938C264.149,262.009,276.752,269.374,292.708,269.374z
		 M278.361,202.746c2.011-6.301,6.847-10.055,14.346-10.055c7.508,0,12.335,3.754,14.346,10.055
		c1.073,3.226,1.474,7.634,1.474,19.576c0,11.924-0.402,16.357-1.474,19.567c-2.011,6.31-6.838,10.072-14.346,10.072
		c-7.5,0-12.335-3.763-14.346-10.072c-1.064-3.21-1.475-7.643-1.475-19.567C276.886,210.38,277.297,205.972,278.361,202.746z"/>
                                                <path class="st0" d="M387.961,269.374c16.081,0,28.685-8.171,33.251-22.794c1.6-4.952,2.263-12.46,2.263-20.505v-7.517
		c0-0.788-0.536-1.333-1.332-1.333h-31.366c-0.813,0-1.349,0.545-1.349,1.333v12.888c0,0.796,0.536,1.332,1.349,1.332h12.326
		c0.536,0,0.805,0.277,0.805,0.805c0,3.879-0.403,6.703-1.073,8.991c-1.878,6.026-7.777,9.386-14.614,9.386
		c-7.91,0-12.88-3.763-14.891-10.072c-1.064-3.21-1.466-7.643-1.466-19.567c0-11.941,0.402-16.223,1.466-19.441
		c2.011-6.302,6.847-10.19,14.631-10.19c7.5,0,12.05,3.218,15.678,9.385c0.269,0.67,0.939,0.939,1.886,0.67l14.338-6.033
		c0.796-0.402,0.947-1.206,0.536-2.019c-4.299-10.995-15.419-19.425-32.439-19.425c-16.232,0-28.835,7.375-33.527,22.114
		c-2.012,6.302-2.556,11.397-2.556,24.939c0,13.542,0.545,18.637,2.556,24.938C359.126,262.009,371.73,269.374,387.961,269.374z"/>
                                            </g>
                                        </svg>
                                    </a>
                                    <a type="button" className="btn btn-outline-light noBorder" href="https://nt-invoice.ntlink.com.mx/#/support-request/*" target="_blank">
                                        <svg fill="currentColor" className="ico" width="30" height="30" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M29.000,22.000 L3.000,22.000 C1.346,22.000 -0.000,20.654 -0.000,19.000 L-0.000,3.000 C-0.000,1.346 1.346,-0.000 3.000,-0.000 L29.000,-0.000 C30.654,-0.000 32.000,1.346 32.000,3.000 L32.000,19.000 C32.000,20.654 30.654,22.000 29.000,22.000 ZM3.000,20.000 L29.000,20.000 C29.551,20.000 30.000,19.552 30.000,19.000 L30.000,3.317 L16.651,14.759 C16.463,14.920 16.232,15.000 16.000,15.000 C15.768,15.000 15.537,14.920 15.349,14.759 L2.000,3.317 L2.000,19.000 C2.000,19.552 2.449,20.000 3.000,20.000 ZM28.464,2.000 L3.536,2.000 L16.000,12.683 L28.464,2.000 Z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </nav>
                </header >

                <div className="container-fluid">
                    <section id="CAROUSEL">
                        <br />
                        <Corousel />
                        <NtOverview />
                    </section>



                    <div className="container justify-content-center a-b-2 pb-4 ">
                        <div className="row mt-4">
                            <a href="https://cfdi33.ntlink.com.mx/FacturaGratuito40" target="_blank">
                                <img src={require('../assets/img/All/5 folios gratis.gif')} className="d-block img-fluid " alt="..." />
                            </a>
                        </div>
                        <div className="col p-2 d-flex justify-content-center align-items-center">
                            <footer className=" text-light  ">
                                Da click en la imagen de arriba, completa el registro y obten
                                <small className="text-success h5 ">
                                    {'\u00A0'}5 folios gratis para generar facturas.
                                </small>
                            </footer>
                        </div>
                    </div>




                    <section id="PRODUCTOS" className="py-5 bg-transparent a-b-2" >
                        <br />
                        <Products />
                    </section>

                    <div className="container justify-content-center a-b-2 pb-4 ">
                        <div className="row p-3">
                            <div className="col-md-6 col-lg-4  d-flex justify-content-center">
                                <img src={require('../assets/img/All/main-icono-compsCFDI.png')} className="d-block img-fluid" alt="NTLINK CFDI 4.0" style={{ height: "80px" }} />
                                <a href="https://cfdi33.ntlink.com.mx/Facturacion40" target="_blank" className="mbtn"><span className="mb-0">ACCESO CFDI 4.0</span></a>
                            </div>
                            <div className="col-md-6 col-lg-4 d-flex justify-content-center">
                                <img src={require('../assets/img/All/main-icono-nomina.png')} className="d-block img-fluid" alt="NTLINK NOMINA" style={{ height: "80px" }} />
                                <a href="https://cfdi33.ntlink.com.mx/NominaLocal3.3/wfrLogin.aspx" target="_blank" className="mbtn"><span className="mb-0">ACCESO NÓMINA </span></a>
                            </div>
                            <div className="col-md-6 col-lg-4 d-block col2">

                                <div className="col d-flex justify-content-center align-items-center">
                                    <img src={require('../assets/img/All/main-icono-agratuito.png')} className="d-block img-fluid" alt="NTLINK PORTAL GRATUITO" style={{ height: "80px" }} />
                                    <a href="https://cfdi33.ntlink.com.mx/FacturaGratuito40" target="_blank" className="mbtn"><span className="mb-0">ACCESO GRATUITO</span></a>
                                </div>

                            </div>
                        </div>
                    </div>

                    <section id="PRECIOS" className="py-5 bg-transparent  a-b-2 p-0" >
                        <br />
                        <Prices />
                    </section>




                    <section id="PROMOCIONES" className="py-5 bg-transparent a-b-2" >
                        <br />
                        <Promotions />
                    </section>

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
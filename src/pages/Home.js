import { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';


export class Home extends Component {


    render() {

        return (
            <>
                <Carousel>
                    <Carousel.Item className="carousel-height">
                        <img src={require('../assets/banners/BANNER_A.jpg')} className="w-100" alt="..." />
                        <Carousel.Caption className="carousel-labels">
                            <h3 className="text-success fs-1">DESCUBRE</h3>
                            <h3 className="text-success fs-1">NUESTROS PLANES</h3>
                            <p className="text-light fs-3 my-1">Precios especiales</p>
                            <p className="text-light fs-3 my-1">para distribuidores</p>
                            <a class="btn btn-sm btn-success" href="/distribuidores">Saber mas</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carousel-height">
                        <img src={require('../assets/banners/BANNER_B.jpg')} className="w-100" alt="..." />
                        <Carousel.Caption className="carousel-labels">
                            <h3 className="text-success fs-1">ADENDAS</h3>
                            <h3 className="text-success fs-1">GRATUITAS</h3>
                            <p className="text-light fs-3 my-1">Las adendas no tienen</p>
                            <p className="text-light fs-3 my-1">costo extra</p>
                            <a class="btn btn-sm btn-success" href="/adendas">Saber mas</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carousel-height">
                        <img src={require('../assets/banners/BANNER_C.jpg')} className="w-100" alt="..." />
                        <Carousel.Caption className="carousel-labels">
                            <h3 className="text-success fs-1">CONSULTORIA</h3>
                            <p className="text-light fs-3 my-1">Asesoría y desarrollo en</p>
                            <p className="text-light fs-3 my-1">tecnologías de la información</p>
                            <a class="btn btn-sm btn-success" href="/contacto">Saber mas</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <br></br>
                <div>
                    <h1 className="text-center text-white principal-text">LA CONTABILIDAD NUNCA FUE TAN FÁCIL</h1>
                </div>

                <hr class="text-light" />
                <br></br>
                <div className="container justify-content-center">
                    <div className="row mt-4">
                        <a href="https://cfdi33.ntlink.com.mx/FacturaGratuito40" target="_blank" onClick={this.openGratuito}>
                            <img src={require('../assets/img/All/5 folios gratis.gif')} className="d-block img-fluid" alt="..." />
                        </a>
                    </div>
                    <div className="col p-2 d-flex justify-content-center align-items-center">
                        <p className=" text-light  ">
                            Da click en la imagen de arriba, completa el registro y obtén
                            <small className="text-success fw-bold">
                                {'\u00A0'}5 folios gratis para generar facturas.
                            </small>
                        </p>
                    </div>
                </div>
                <br></br>
                <div>
                    <h2 className="text-center text-primary fw-bold my-4">CONTAMOS CON LA SOLUCIÓN QUE NECESITAS</h2>
                </div>
                <br></br>

                <div className="row">
                    <div className="col-lg-4 col-sm-12 col-md-6 my-2">
                        <img src={require('../assets/img/WEB_SERVICE.jpg')} className="d-block products-img" alt="web service" />
                        <h3 className="text-center text-success my-3">WEB SERVICE</h3>
                        <p className=" text-light">
                            Nuestro servicio realiza una serie de validaciones antes de certificar el documento
                            <small className="text-success fw-bold">
                                {'\u00A0'}El Web Service(WS) puede ser consumido por cualquier lenguaje de programación,
                            </small>
                            ya que las peticiones se hacen por medio del estandar XML y todos los luenguajes soportan el realizar peticiones de esta forma.
                        </p>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-md-6 my-2">
                        <img src={require('../assets/img/PORTAL_CDFI.jpg')} className="d-block products-img" alt="portal cfdi" />
                        <h3 className="text-center text-success my-3">PORTAL CFDI</h3>
                        <p className=" text-light">
                            Desde aquí podrás generar las facturas de los productos o servicios que ofrezcas.
                            <small className="text-success fw-bold">
                                {'\u00A0'}Podrás llevar el control de tus clientes y empresas además de tener los reportes de todos los movimientos que realices.
                            </small>
                        </p>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-md-6 my-2">
                        <img src={require('../assets/img/PORTAL_NOMINA.jpg')} className="d-block products-img" alt="portal nomina" />
                        <h3 className="text-center text-success my-3">PORTAL NOMINA</h3>
                        <p className=" text-light">
                            Dentro del portal de nómina, podrás
                            <small className="text-success fw-bold">
                                {'\u00A0'}llevar el registro y control de los recibos de nómina de tus empleados.
                            </small>
                            {'\u00A0'}Tendrás reportes listos para consultar, así como manejar libremente tus recibos de nómina.
                        </p>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-md-6 my-2">
                        <img src={require('../assets/img/ADENDAS.jpg')} className="d-block products-img" alt="web service" />
                        <h3 className="text-center text-success my-3">ADENDAS</h3>
                        <p className=" text-light">
                            NT link te
                            <small className="text-success fw-bold">
                                {'\u00A0'}permité timbrar adendas, con datos específicos a ciertas compañías de acuerdo a los lineamientos establecidos por las mismas.
                            </small>
                            {'\u00A0'}NT link cuenta con más de 30 diferentes adendas disponibles.
                        </p>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-md-6 my-2">
                        <img src={require('../assets/img/COMPLEMENTOS.jpg')} className="d-block products-img" alt="portal cfdi" />
                        <h3 className="text-center text-success my-3">COMPLEMENTOS CFDI</h3>
                        <p className=" text-light">
                            NT link te
                            <small className="text-success fw-bold">
                                {'\u00A0'}permité timbrar diversos complementos, con datos específicos requeridos por el SAT.
                            </small>
                            {'\u00A0'}NT link cuenta con más de 15 diferentes complementos, asegurando cumplir con los estandáres del SAT.
                        </p>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-md-6 my-2">
                        <img src={require('../assets/img/CONVERTIDOR.jpg')} className="d-block products-img" alt="portal nomina" />
                        <h3 className="text-center text-success my-3">CONVERTIDOR</h3>
                        <p className=" text-light">
                            Software desarrollado y mantenido por NTLINK el cual
                            <small className="text-success fw-bold">
                                {'\u00A0'}permité timbrar masivamente CFDIs con solo colocar un archivo en una carpeta de Windows,
                            </small>
                            {'\u00A0'}este proceso permite integrar softwares ERP(SAP,Odoo y otros) de una manera fácil y sencilla.
                        </p>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div id="shield">
                    <div className="row">
                        <div className="col-md-3 d-none d-lg-block">
                            <img className="img-fluid h-100 w-100" src={require('../assets/ESCUDO-1.png')} alt="ntlink security" />
                        </div>
                        <div className="col-md-6 text-center">
                            <h4 className="text-center text-success fw-bold my-4">EXCELENCIA, CALIDAD Y PROGRESO CONTINUO</h4>
                            <h4 className="text-center text-light fw-bold my-4">GARANTIZANDO LA SEGURIDAD DE LA INFORMACIÓN</h4>
                            <p className="text-start text-light">
                                En Julio de 2012,
                                <small className="text-success fw-bold">
                                    {'\u00A0'}NTLINK se convierte en proveedor autorizado de certificados digitales por internet(PACCFDI) con el número de autorización 57202.
                                </small>
                                {'\u00A0'}Con la idea de proporcionar servicios integrales en soluciones de facturación y tecnologías de la información(venta-renta de equipo de
                                cómputo, desarrollo de aplicaciones y páginas web, monitoreo de servicios de misión crítica, análisis y desarrollo de sistemas, ingeniería y reingeniería
                                de procesos entre otras).
                            </p>
                            <p className="text-start text-light">
                                Nuestro compromiso es brindar servicios de excelencia, calidad y progreso continuo, garantizando la seguridad de la información durante los procesos.
                            </p>
                        </div>
                        <div className="col-md-3">
                            <img src={require('../assets/pack_logo.gif')} className="w-100" alt="sello-pac" />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-center text-primary fw-bold my-4">PROMOCIONES ESPECIALES</h2>
                        <h4 className="text-center text-light fw-bold my-4">APROVECHA LOS PLANES EXCLUSIVOS QUE TENEMOS PARA TI</h4>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-12 col-md-6 my-2">
                            <img src={require('../assets/img/DISTRIBUIDORES.jpg')} className="d-block products-img" alt="web service" />
                            <h3 className="text-center text-primary my-3">DISTRIBUIDORES</h3>
                            <p className=" text-light fs-6">
                                Tenemos planes específicos para distribuidores y/o clientes de alto volumen,
                                <small className="text-primary fw-bold">
                                    {'\u00A0'}los cuales permiten una relación ganar ganar
                                </small>
                                {'\u00A0'}mediante nuestros servicios de timbrado.
                            </p>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-md-6 my-2">
                            <img src={require('../assets/img/PLANES_TIMBRADO.jpg')} className="d-block products-img" alt="portal cfdi" />
                            <h3 className="text-center text-primary my-3">PLANES DE TIMBRADO</h3>
                            <p className=" text-light">
                                No conoces tu volumen de timbrado, puedes contratar con nosotros nuestro plan
                                <small className="text-primary fw-bold">
                                    {'\u00A0'}post pago, permitiendote pagar a final de mes solo el consumo realizado.
                                </small>
                            </p>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-md-6 my-2">
                            <img src={require('../assets/img/PRECIOS.jpg')} className="d-block products-img" alt="portal nomina" />
                            <h3 className="text-center text-primary my-3">PRECIOS</h3>
                            <p className=" text-light">
                                Conoce nuestros planes y costos especialmente adaptados a tus necesidades.
                            </p>
                        </div>
                    </div>
                </div>

            </>)
    }
}
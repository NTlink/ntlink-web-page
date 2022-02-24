import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Button, Modal } from 'react-bootstrap';
import "./App.scss";
function App() {
  const [modalShow, setModalShow] = React.useState(false);
  const preciosFolios = [{ folio:25, precio:330.00 }, { folio:50, precio:445.00 }, { folio:100, precio:590.00 }, { folio:200, precio:1065.00 }, { folio:500, precio:2391.00 }, { folio:1000, precio:4305.00 }, { folio:2000, precio:7745.00 }, { folio:5000, precio:17430.00 }];
  const preciosTimbre = [{ timbre:1000,  precio:1392.00 }, { timbre:3000,  precio:3480.00 }, { timbre:5000,  precio:4640.00 }, { timbre:10000,  precio:8120.00 }, { timbre:15000,  precio:12760.00 }, { timbre:20000,  precio:16820.00 }, { timbre:50000,  precio:31320.00 }, { timbre:100000,  precio:46400.00 }];
 // const preciosFolios = 1;
  return (
    <div className="App">

      <header>

        <nav className="navbar navbar-expand-lg fixed-top bg-dark m-0 p-0">
          <div className="container">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarText">
              <ul className="navbar-nav justify-content-center">
                <li className="nav-item active">
                  <a className="nav-link m-2 p-0" href="#"> <p className="text-light underline h5 font-weight-bold">INICIO</p></a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link m-2 p-0" href="#PRODUCTOS"><p className="text-light underline h5 font-weight-bold">PRODUCTOS</p></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link m-2 p-0" href="#PRECIOS"><p className="text-light underline h5 font-weight-bold">PRECIOS</p></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link m-2 p-0" href="#PROMOCIONES"><p className=" text-light underline h5 font-weight-bold">PROMOCIONES
                    ESPECIALES</p></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link m-2 p-0" href="#CONTACTO"><p className="text-light underline h5 font-weight-bold">CONTACTO
                    SOPORTE</p></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section>
        <div className="row carro">
          <div className="col-md-3 m-0 p-0 d-flex align-items-end justify-content-end">
            <a className="flui.toDateString()" target="_blank" >
              <img src={require('./assets/img/All/main-logo-arriba-izquierda.png')} className="d-block w-100 h-85" alt="..." />
            </a>
          </div>
          <div className="col-md-9 m-0 p-0">
            <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <a target="_blank" href="#"><img src={require('./assets/img/All/main-img-banneA.png')} className="d-block w-100" alt="..." /></a>
                </div>
                <div className="carousel-item">
                  <a target="_blank" href="#"><img src={require('./assets/img/All/main-img-banneA.png')} className="d-block w-100" alt="..." /></a>
                </div>
                <div className="carousel-item">
                  <a target="_blank" href="#"><img src={require('./assets/img/All/main-img-banneA.png')} className="d-block w-100" alt="..." /></a>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>

        </div>

      </section>

      <section id="Servicios" className="py-5 bg-dark" >
        <div className="container">

          <div className="row d-flex justify-content-center">
            <div className="col-md-3  text-center">
              <a target="_blank" href="#">
                <img src={require('./assets/img/All/main-icono-01.png')} className="d-block img-fluid" alt="..." />
              </a>
            </div>
            <div className="col-md-9">
              <div className="text-left py-4">
                <h1 className="text-success">Servicios integrales
                  de Tecnologías de la Información</h1>
              </div>
              <p className="lead text-light ">Como proveedor autorizado por el SAT (PAC con número de autorización: 57202) NTLINK Comunicaciones SA de CV.
                Es una empresa mexicana fundada en diciembre de 2009 con la idea de proporcionar servicios integrales de Tecnologías
                de la Información (venta-renta de equipo de cómputo, desarrollo de aplicaciones y páginas web, monitoreo de servicios
                de misión crítica, análisis y desarrollo de sistemas, ingeniería y reingeniería de procesos entre otras.).</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container justify-content-center bg-dark">
        <div className="stripe stripe-1 m-0 p-0">
        </div>
      </div>

      <div className="container justify-content-center gradeintBlack bg-dark">
        <div className="row p-5">
          <div className="col">
            <div className="row">
              <div className="col d-flex justify-content-center">
                <a target="_blank" href="#">
                  <img src={require('./assets/img/All/main-icono-01.png')} className="d-block img-fluid" alt="..." />
                </a>
              </div>
              <div className="col d-flex align-items-center">
                <p className="lead text-light ">Tras un largo proceso de certificación
                  NTLINK se convierte en proveedor
                  autorizado de certificados digitales por
                  internet (PACFDI) en Julio de 2012 con
                  el número de autorización 57202.</p>
              </div>
            </div>
          </div>
          <div className="col d-flex align-items-center">
            <h5 className="text-success italic">Nuestro compromiso es brindar servicios de excelencia, calidad
              y progreso continuo, garantizando la seguridad de la información
              durante los procesos relacionados y en el almacenamiento de la
              misma; así como la protección de los datos personales de nuestros
              clientes.</h5>
          </div>
        </div>
        <div className="row p-3">

          <div className="col-4">
            <div className="row">
              <div className="col-6 d-flex justify-content-end">
                <a target="_blank" href="#">
                  <img src={require('./assets/img/All/main-icono-CFDI.png')} className="d-block img-fluid" alt="..." />
                </a>
              </div>
              <div className="col-6 d-flex align-items-center">
                <a href="#" className="btn btn-secondary my-2 border-gradient"><h5 className="mb-0">ACCESO CFDI</h5></a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-6 d-flex justify-content-end">
                <a target="_blank" href="#">
                  <img src={require('./assets/img/All/main-icono-nomina.png')} className="d-block img-fluid" alt="..." />
                </a>
              </div>
              <div className="col-6 d-flex align-items-center">
                <a href="#" className="btn btn-secondary border-gradient"><h5 className="mb-0">ACCESO NÓMINA </h5></a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-6 d-flex justify-content-end">
                <a target="_blank" href="#">
                  <img src={require('./assets/img/All/main-icono-agratuito.png')} className="d-block img-fluid" alt="..." />
                </a>
              </div>
              <div className="col-6 d-flex align-items-center">
                <a href="#" className="btn btn-secondary my-2 border-gradient"><h5 className="mb-0">ACCESO GRATUITO</h5></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="PRODUCTOS" className="py-5 bg-dark" >
        <div className="container">
          <h1 className="text-light" >PRODUCTOS</h1>

          <div className="row align-items-center ">
            <div className="col-md-2 d-flex justify-content-center">
              <a target="_blank" href="#">
                <img src={require('./assets/img/All/main-icono-CFDI.png')} className="d-block img-fluid" alt="..." />
              </a>
            </div>
            <div className="col-md-8 ">
              <div className="col">
                <h3 className="text-success">PORTAL CFDI</h3>
              </div>
              <div className="col">
                <p className="lead text-light ">Dentro del portal CFDI podrás generar las facturas de los productos o servicios que ofrezcas.
                  Podrás llevar el control de tus clientes y empresas además de tener los reportes de todos los
                  movimientos que realices, contaras con todos los complementos, adendas y personalización
                  de facturas en caso de que así lo necesites.</p>
              </div>
            </div>
            <div className="col-md-2">
              <a href="#" className="btn btn-secondary my-2 border-gradient"><h5 className="mb-0">MÁS
                INFORMACIÓN</h5></a>
            </div>
          </div>


          <div className="container justify-content-center bg-dark m-0 p-0">
            <div className="stripe stripe-2 m-0 p-0">
            </div>
          </div>


          <div className="row align-items-center">
            <div className="col-md-2 d-flex justify-content-center" >
              <a target="_blank" href="#">
                <img src={require('./assets/img/All/main-icono-nomina.png')} className="d-block img-fluid" alt="..." />
              </a>
            </div>
            <div className="col-md-8 justify-content-center">
              <div className="col">
                <h3 className="text-success">PORTAL CFDI</h3>
              </div>
              <div className="col">
                <p className="lead text-light ">Dentro del portal CFDI podrás generar las facturas de los productos o servicios que ofrezcas.
                  Podrás llevar el control de tus clientes y empresas además de tener los reportes de todos los
                  movimientos que realices, contaras con todos los complementos, adendas y personalización
                  de facturas en caso de que así lo necesites.</p>
              </div>
            </div>
            <div className="col-md-2 d-flex align-items-center">
              <a href="#" className="btn btn-secondary my-2 border-gradient"><h5 className="mb-0">MÁS
                INFORMACIÓN</h5></a>
            </div>
          </div>

          <div className="container justify-content-center bg-dark m-0 p-0">
            <div className="stripe stripe-2 m-0 p-0">
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-2 d-flex justify-content-center">
              <a target="_blank" href="#">
                <img src={require('./assets/img/All/main-icono-compsCFDI.png')} className="d-block img-fluid" alt="..." />
              </a>
            </div>
            <div className="col-md-8 justify-content-center">
              <div className="col">
                <h3 className="text-success">COMPLEMENTOS CFDI</h3>
              </div>
              <div className="col">
                <p className="lead text-light ">Dentro del portal CFDI podrás generar las facturas de los productos o servicios que ofrezcas.
                  Podrás llevar el control de tus clientes y empresas además de tener los reportes de todos los
                  movimientos que realices, contaras con todos los complementos, adendas y personalización
                  de facturas en caso de que así lo necesites.</p>
              </div>
              <div className="col">
                <div className="row">
                  <h5 className="text-light" > ALGUNOS DE NUESTROS COMPLEMENTOS</h5>
                </div>
                <div className="row">
                  <div className="col">
                    <ul className="list-unstyled text-small">
                      <li><span className="text-light" > • Instituciones Educativas Privadas
                        (Complemento IEDU)</span></li>
                      <li><span className="text-light" > • Complemento de Constancia
                        de Retenciones (Intereses,
                        Dividendos, Arrendamiento
                        en Fideicomiso, Enajenación
                        de Acciones, Fideicomiso</span></li>
                    </ul>
                  </div>
                  <div className="col">
                    <ul className="list-unstyled text-small">
                      <li><span className="text-light" >No Empresarial, Intereses
                        hipotecarios, Operaciones con
                        derivados, Pago extranjeros,
                        Planes de retiro, Premios, Sector
                        Financiero)</span></li>
                      <li><span className="text-light" >• Complemento INE</span></li>
                      <li><span className="text-light" > • Complemento comercio exterior</span></li>
                    </ul>
                  </div>
                  <div className="col">
                    <ul className="list-unstyled text-small">
                      <li><span className="text-light" > • Complemento servicio parcial de
                        construcción</span></li>
                      <li><span className="text-light" > • Complemento vehículos usados</span></li>
                      <li><span className="text-light" > • CFDI con Impuestos locales</span></li>
                      <li><span className="text-light" > • Carta Porte Ver 2.0</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 d-flex align-items-center">
              <a href="#" className="btn btn-secondary my-2 border-gradient"><h5 className="mb-0">MÁS
                INFORMACIÓN</h5></a>
            </div>
          </div>

          <div className="container justify-content-center bg-dark m-0 p-0">
            <div className="stripe stripe-2 m-0 p-0">
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-2 d-flex justify-content-center">
              <a target="_blank" href="#">
                <img src={require('./assets/img/All/main-icono-adendas.png')} className="d-block img-fluid" alt="..." />
              </a>
            </div>
            <div className="col-md-8 justify-content-center">
              <div className="col">
                <h3 className="text-success">ADENDAS</h3>
              </div>
              <div className="col">
                <p className="lead text-light ">Las adendas son complementos de facturación que permite generar integración con datos
                  específicos de compañías y/o servicios existentes en el mercado.</p>
              </div>
              <div className="col">
                <div className="row">
                  <h5 className="text-light" > ALGUNAS DE NUESTRAS ADENDAS</h5>
                </div>
                <div className="row">
                  <div className="col">
                    <ul className="list-unstyled text-small">
                      <li><span className="text-light" >• Adenda 1888</span></li>
                      <li><span className="text-light" >• Adenda ADO</span></li>
                      <li><span className="text-light" >• Adenda Vallen</span></li>
                      <li><span className="text-light" >• Adenda Asonioscoc</span></li>
                      <li><span className="text-light" >• Adenda Asofarma</span></li>
                      <li><span className="text-light" >• Adenda Cinépolis</span></li>
                      <li><span className="text-light" >• Adenda Disney</span></li>
                      <li><span className="text-light" >• Adenda Nadro</span></li>
                      <li><span className="text-light" >• Adenda Neto</span></li>
                      <li><span className="text-light" >• Adenda SKY</span></li>
                      <li><span className="text-light" >• Adenda IUSACELL</span></li>
                      <li><span className="text-light" >• Adenda BIC</span></li>
                      <li><span className="text-light" ></span></li>
                    </ul>
                  </div>
                  <div className="col">
                    <ul className="list-unstyled text-small">
                      <li><span className="text-light" >• Adenda Jumex</span></li>
                      <li><span className="text-light" >• Adenda para Descripciones largas</span></li>
                      <li><span className="text-light" >• Adenda Mabe</span></li>
                      <li><span className="text-light" >• Adenda Pilgrims</span></li>
                      <li><span className="text-light" >• Adenda Elektra</span></li>
                      <li><span className="text-light" >• Adenda Pemex</span></li>
                      <li><span className="text-light" >• Adenda Vallen</span></li>
                      <li><span className="text-light" >• Adenda Súper Farmacia</span></li>
                      <li><span className="text-light" >• Adenda Mondelez</span></li>
                      <li><span className="text-light" >• Adenda Grupo Planeta</span></li>
                      <li><span className="text-light" >• Adenda Liverpool</span></li>
                      <li><span className="text-light" >• Adenda Jumex</span></li>
                    </ul>
                  </div>
                  <div className="col">
                    <ul className="list-unstyled text-small">
                      <li><span className="text-light" >• Adenda Honda</span></li>
                      <li><span className="text-light" >• Adenda Nissan</span></li>
                      <li><span className="text-light" >• Adenda Volkswagen</span></li>
                      <li><span className="text-light" >• Adenda Chrysler</span></li>
                      <li><span className="text-light" >• Adenda General Motors</span></li>
                      <li><span className="text-light" >• Adenda Soriana</span></li>
                      <li><span className="text-light" >• Adenda Tridomex</span></li>
                      <li><span className="text-light" >• Adenda Copel</span></li>
                      <li><span className="text-light" >• Adenda FEMSA</span></li>
                      <li><span className="text-light" >• Adenda Sun Chemical</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 d-flex align-items-center">
              <a href="#" className="btn btn-secondary my-2 border-gradient"><h5 className="mb-0">MÁS
                INFORMACIÓN</h5></a>
            </div>
          </div>

          <div className="container justify-content-center bg-dark m-0 p-0">
            <div className="stripe stripe-2 m-0 p-0">
            </div>
          </div>


          <div className="row align-items-center">
            <div className="col-md-2 d-flex justify-content-center">
              <a target="_blank" href="#">
                <img src={require('./assets/img/All/main-icono-convertidor.png')} className="d-block img-fluid" alt="..." />
              </a>
            </div>
            <div className="col-md-8 justify-content-center">
              <div className="col">
                <h3 className="text-success">CONVERTIDOR</h3>
              </div>
              <div className="col">
                <p className="lead text-light ">Software diseñado para plataformas Windows desarrollado por ntlink mediante el cual podrás generar
                  la carga masiva de tu facturación, mediante archivos ya sea txt o xls podrás automatizar tu facturación,
                  obteniendo de respuesta los archivos xml y pdf sellados por el SAT</p>

                <p className="lead text-light ">PRECIO CONVERTIDOR $1,200 MXN MAS IVA ANUAL</p>
              </div>
            </div>
            <div className="col-md-2 d-flex align-items-center">
              <a href="#" className="btn btn-secondary my-2 border-gradient"><h5 className="mb-0">MÁS
                INFORMACIÓN</h5></a>
            </div>
          </div>

          <div className="container justify-content-center bg-dark m-0 p-0">
            <div className="stripe stripe-2 m-0 p-0">
            </div>
          </div>

        </div>
      </section>

      <section id="PRECIOS" className="py-5 bg-dark" >
        <div className="container bg-secondary">
          <div className="row text-center ">
            <div className="col-6 align-self-center ">
              <div className="col "> <h1 className="text-light" >PRECIOS</h1></div>
              <div className="col"><p>Conoce nuestros planes y costos</p></div>
              <div className="col"><a onClick={() => setModalShow(true)} className="btn btn-secondary my-2 border-gradient"><h5 className="mb-0">MÁS
                INFORMACIÓN</h5></a></div>
            </div>
            <div className="col-6 d-flex justify-content-center">
              <a target="_blank" href="#">
                <img src={require('./assets/img/All/main-img-precios.png')} className="d-block img-fluid" alt="..." />
              </a>
            </div>
          </div>
          <div className="container justify-content-center bg-dark m-0 p-0">
            <div className="stripe stripe-2 m-0 p-0">
            </div>
          </div>
        </div>
      </section>

      <div className="container justify-content-center " >
        <div className="row ">
          <div className="col d-flex justify-content-end">
            <a href="#" className="btn btn-secondary my-2 border-gradient buttonexapnd"  ><h5 className="mb-0">BLOG</h5></a>
          </div>
          <div className="col d-flex justify-content-start">
            <a href="#" className="btn btn-secondary my-2 border-gradient buttonexapnd"  ><h5 className="mb-0">DOCUMENTACIÓN</h5></a>
          </div>
        </div>
      </div>

      <section id="PROMOCIONES" className="py-5 bg-dark" >
        <div className="container">

          <div className="row">
            <h1 className="text-light mb-5" >PROMOCIONES ESPECIALES</h1>
          </div>
          <div className="row mb-5">
            <div className="col">
              <div className="row ">
                <h2 className="text-success text-center">DISTRIBUIDORES</h2>
              </div>
              <div className="row">
                <p className="text-light text-left" >Mediante nuestros planes y paquetes especiales para distribuidores,
                  podrás generar un ingreso mediante la reventa de nuestros servicios de
                  timbrado.</p>

              </div>
              <div className="row ">
                <div className="col d-flex justify-content-center">
                  <a href="#" className="btn btn-secondary border-gradient"><h5 className="mb-0">MÁS
                    INFORMACIÓN</h5></a></div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <h2 className="text-success text-center">PLANES DE TIMBRADO POST PAGO</h2>
              </div>
              <div className="row">
                <p className="text-light text-left" >Mediante nuestros planes de timbrado post pago, podrás tener crédito a
                  mes vencido de tu consumo</p>

              </div>
              <div className="row">
                <div className="col d-flex justify-content-center">
                  <a href="#" className="btn btn-secondary my-2 border-gradient"><h5 className="mb-0">MÁS
                    INFORMACIÓN</h5></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="CONTACTO" className="pt-4 pt-md-5 border-top gradeintBlack bg-dark">
        <div className="container  bg-trasparent">
          <div className="row">
            <div className="col-3 d-flex justify-content-center">
              <a href="#">
                <img className="img-fluid" src={require('./assets/img/All/main-logo-contacto.png')} />
              </a>
            </div>
            <div className="col-9 ">
              <div className="row">
                <h1 className="text-light" >CONTACTO Y SOPORTE</h1>
              </div>
              <div className="row">
                <div className="col-2">
                  <h5 className="text-light" >TELEFONOS</h5>
                  <ul className="list-unstyled text-small">
                    <li><span className="text-light" >+(55) 47 80 02 00</span></li>
                    <li><span className="text-light" >+(55) 62 72 55 49</span></li>
                    <li><span className="text-light" >+(55) 62 72 55 50</span></li>
                    <li><span className="text-light" >+(55) 82 50 76 56</span></li>
                  </ul>
                </div>
                <div className="col-3">
                  <h5 className="text-light">CORREO ELECTRONICO</h5>
                  <ul className="list-unstyled text-small">
                    <li><span className="text-light" >ventas@ntlink.com.mx</span></li>
                    <li><span className="text-light" >soporte_tecnico@ntlink.com.mx</span></li>
                  </ul>
                </div>
                <div className="col-2">
                  <h5 className="text-light">WHATS APP</h5>
                  <ul className="list-unstyled text-small">
                    <li><span className="text-light" >5591078187</span></li>
                    <li><span className="text-light" >5524058190</span></li>
                  </ul>
                </div>
                <div className="col-3">
                  <h5 className="text-light">DIRECCIÓN</h5>
                  <ul className="list-unstyled text-small">
                    <li><span className="text-light" >Calle Xicoténcatl 103BIS Del:, Del</span></li>
                    <li><span className="text-light" >Carmen, Coyoacán, 04100 Ciudad de</span></li>
                    <li><span className="text-light" >México, CDMX</span></li>
                  </ul>
                </div>
                <div className="col-2">
                  <h5 className="text-light">HORARIO</h5>
                  <ul className="list-unstyled text-small">
                    <li><span className="text-light" >LUNES A VIERNES 09:00 18:00</span></li>
                    <li><span className="text-light" >SABADO 9 A 3 AM</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center py-4 text-light mt-4">Copyright © 2021 NTLINK COMUNICACIONES - Todos los derechos reservados | AVISO DE PRIVACIDAD</div>
        </div>


        <MyVerticallyCenteredModal
          preciosfolios={preciosFolios}
          preciostimbre={preciosTimbre}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />

      </footer>

    </div>
  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="text-light text-start">
                  PRECIOS
                </h1>
              </div>
              <div className="col d-flex justify-content-end"><Button onClick={props.onHide}><h3 className="mb-0">Cerrar</h3> </Button></div>


            </div>

          </div>


        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row justify-content-center text-center">
          <div className="col mb-4">
            <h3 className="text-success text-start">Paquetes y costos FOLIOS (Portal CFDI / Portal Nómina)</h3>
          </div>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col d-flex justify-content-center">
            <a href="#">
              <img className="d-block img-fluid" src={require('./assets/img/All/main-icono-nomina.png')} />
            </a>
          </div>
          <div className="col d-flex justify-content-center">
            <a href="#">
              <img className="d-block img-fluid" src={require('./assets/img/All/main-icono-CFDI.png')} />
            </a>
          </div>
          <div className="col">
            <div className="row mb-4">

              <div className="card border-0 text-center">
                <div className="card-header bg-info text-light">
                  <h4 className="my-0 font-weight-normal">PAQUETE</h4>
                </div>
                <div className="card-body bg-white text-light">
                  <h1 className="card-title text-info pricing-card-title">{props.preciosfolios[0].folio}</h1>
                  <ul className="list-unstyled  text-info mt-0 mb-0">
                    <li>FOLIOS</li>
                  </ul>
                </div>
                <div className="card-footer bg-secondary text-light">
                  <h4 className=" mt-0 mb-0 my-0 font-weight-normal">${props.preciosfolios[0].precio}.00</h4>
                </div>
              </div>

            </div>
            <div className="row mb-4">
              <div className="card border-0 text-center">
                <div className="card-header bg-info text-light">
                  <h4 className="my-0 font-weight-normal">
                    PAQUETE
                  </h4>
                </div>
                <div className="card-body bg-white text-light">
                  <h1 className="card-title text-info pricing-card-title">
                    {props.preciosfolios[1].folio}
                  </h1>
                  <ul className="list-unstyled  text-info mt-0 mb-0">
                    <li>
                      FOLIOS
                    </li>
                  </ul>
                </div>
                <div className="card-footer bg-secondary text-light">
                  <h4 className=" mt-0 mb-0 my-0 font-weight-normal">
                    ${props.preciosfolios[1].precio}.00
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row mb-4">
              <div className="card border-0 text-center">
                <div className="card-header bg-info text-light">
                  <h4 className="my-0 font-weight-normal">
                    PAQUETE
                  </h4>
                </div>
                <div className="card-body bg-white text-light">
                  <h1 className="card-title text-info pricing-card-title">
                  {props.preciosfolios[2].folio}
                  </h1>
                  <ul className="list-unstyled  text-info mt-0 mb-0">
                    <li>
                      FOLIOS
                    </li>
                  </ul>
                </div>
                <div className="card-footer bg-secondary text-light">
                  <h4 className=" mt-0 mb-0 my-0 font-weight-normal">
                    ${props.preciosfolios[2].precio}.00
                  </h4>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="card border-0 text-center">
                <div className="card-header bg-info text-light">
                  <h4 className="my-0 font-weight-normal">
                    PAQUETE
                  </h4>
                </div>
                <div className="card-body bg-white text-light">
                  <h1 className="card-title text-info pricing-card-title">
                  {props.preciosfolios[3].folio}
                  </h1>
                  <ul className="list-unstyled  text-info mt-0 mb-0">
                    <li>
                      FOLIOS
                    </li>
                  </ul>
                </div>
                <div className="card-footer bg-secondary text-light">
                  <h4 className=" mt-0 mb-0 my-0 font-weight-normal">
                    ${props.preciosfolios[3].precio}.00
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row mb-4">
              <div className="card border-0 text-center">
                <div className="card-header bg-info text-light">
                  <h4 className="my-0 font-weight-normal">
                    PAQUETE
                  </h4>
                </div>
                <div className="card-body bg-white text-light">
                  <h1 className="card-title text-info pricing-card-title">
                  {props.preciosfolios[4].folio}
                  </h1>
                  <ul className="list-unstyled  text-info mt-0 mb-0">
                    <li>
                      FOLIOS
                    </li>
                  </ul>
                </div>
                <div className="card-footer bg-secondary text-light">
                  <h4 className=" mt-0 mb-0 my-0 font-weight-normal">
                    ${props.preciosfolios[4].precio}.00
                  </h4>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="card border-0 text-center">
                <div className="card-header bg-info text-light">
                  <h4 className="my-0 font-weight-normal">
                    PAQUETE
                  </h4>
                </div>
                <div className="card-body bg-white text-light">
                  <h1 className="card-title text-info pricing-card-title">
                  {props.preciosfolios[5].folio}
                  </h1>
                  <ul className="list-unstyled  text-info mt-0 mb-0">
                    <li>
                      FOLIOS
                    </li>
                  </ul>
                </div>
                <div className="card-footer bg-secondary text-light">
                  <h4 className=" mt-0 mb-0 my-0 font-weight-normal">
                    ${props.preciosfolios[5].precio}.00
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row mb-4">
              <div className="card border-0 text-center">
                <div className="card-header bg-info text-light">
                  <h4 className="my-0 font-weight-normal">
                    PAQUETE
                  </h4>
                </div>
                <div className="card-body bg-white text-light">
                  <h1 className="card-title text-info pricing-card-title">
                  {props.preciosfolios[6].folio}
                  </h1>
                  <ul className="list-unstyled  text-info mt-0 mb-0">
                    <li>
                      FOLIOS
                    </li>
                  </ul>
                </div>
                <div className="card-footer bg-secondary text-light">
                  <h4 className=" mt-0 mb-0 my-0 font-weight-normal">
                    ${props.preciosfolios[6].precio}.00
                  </h4>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="card border-0 text-center">
                <div className="card-header bg-info text-light">
                  <h4 className="my-0 font-weight-normal">
                    PAQUETE
                  </h4>
                </div>
                <div className="card-body bg-white text-light">
                  <h1 className="card-title text-info pricing-card-title">
                  {props.preciosfolios[7].folio}
                  </h1>
                  <ul className="list-unstyled  text-info mt-0 mb-0">
                    <li>
                      FOLIOS
                    </li>
                  </ul>
                </div>
                <div className="card-footer bg-secondary text-light">
                  <h4 className=" mt-0 mb-0 my-0 font-weight-normal">
                    ${props.preciosfolios[7].precio}.00
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col mb-4">
            <h3 className="text-success text-start">Paquetes y costos TIMBRES (WebService / Convertidor)</h3>
          </div>
        </div>
        <div className="row  d-flex align-items-center">
          <div className="col-4 d-flex justify-content-center">
            <a href="#">
              <img className="d-block img-fluid" src={require('./assets/img/All/main-icono-convertidor.png')} />
            </a>
          </div>
        
          <div className="col">
            <div className="row mb-4">

              <div className="card border-0 text-center">
                <div className="card-header bg-info text-light">
                  <h4 className="my-0 font-weight-normal">PAQUETE</h4>
                </div>
                <div className="card-body bg-white text-light">
                  <h1 className="card-title text-info pricing-card-title">{props.preciostimbre[0].timbre}</h1>
                  <ul className="list-unstyled  text-info mt-0 mb-0">
                    <li>FOLIOS</li>
                  </ul>
                </div>
                <div className="card-footer bg-secondary text-light">
                  <h4 className=" mt-0 mb-0 my-0 font-weight-normal">${props.preciostimbre[0].precio}.00</h4>
                </div>
              </div>

            </div>
            <div className="row mb-4">
              <div className="card border-0 text-center">
                <div className="card-header bg-info text-light">
                  <h4 className="my-0 font-weight-normal">
                    PAQUETE
                  </h4>
                </div>
                <div className="card-body bg-white text-light">
                  <h1 className="card-title text-info pricing-card-title">
                  {props.preciostimbre[1].timbre}
                  </h1>
                  <ul className="list-unstyled  text-info mt-0 mb-0">
                    <li>
                      FOLIOS
                    </li>
                  </ul>
                </div>
                <div className="card-footer bg-secondary text-light">
                  <h4 className=" mt-0 mb-0 my-0 font-weight-normal">
                    ${props.preciostimbre[1].precio}.00
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row mb-4">
              <div className="card border-0 text-center">
                <div className="card-header bg-info text-light">
                  <h4 className="my-0 font-weight-normal">
                    PAQUETE
                  </h4>
                </div>
                <div className="card-body bg-white text-light">
                  <h1 className="card-title text-info pricing-card-title">
                  {props.preciostimbre[2].timbre}
                  </h1>
                  <ul className="list-unstyled  text-info mt-0 mb-0">
                    <li>
                      FOLIOS
                    </li>
                  </ul>
                </div>
                <div className="card-footer bg-secondary text-light">
                  <h4 className=" mt-0 mb-0 my-0 font-weight-normal">
                    ${props.preciostimbre[2].precio}.00
                  </h4>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="card border-0 text-center">
                <div className="card-header bg-info text-light">
                  <h4 className="my-0 font-weight-normal">
                    PAQUETE
                  </h4>
                </div>
                <div className="card-body bg-white text-light">
                  <h1 className="card-title text-info pricing-card-title">
                  {props.preciostimbre[3].timbre}
                  </h1>
                  <ul className="list-unstyled  text-info mt-0 mb-0">
                    <li>
                      FOLIOS
                    </li>
                  </ul>
                </div>
                <div className="card-footer bg-secondary text-light">
                  <h4 className=" mt-0 mb-0 my-0 font-weight-normal">
                    ${props.preciostimbre[3].precio}.00
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row mb-4">
              <div className="card border-0 text-center">
                <div className="card-header bg-info text-light">
                  <h4 className="my-0 font-weight-normal">
                    PAQUETE
                  </h4>
                </div>
                <div className="card-body bg-white text-light">
                  <h1 className="card-title text-info pricing-card-title">
                  {props.preciostimbre[4].timbre}
                  </h1>
                  <ul className="list-unstyled  text-info mt-0 mb-0">
                    <li>
                      FOLIOS
                    </li>
                  </ul>
                </div>
                <div className="card-footer bg-secondary text-light">
                  <h4 className=" mt-0 mb-0 my-0 font-weight-normal">
                    ${props.preciostimbre[4].precio}.00
                  </h4>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="card border-0 text-center">
                <div className="card-header bg-info text-light">
                  <h4 className="my-0 font-weight-normal">
                    PAQUETE
                  </h4>
                </div>
                <div className="card-body bg-white text-light">
                  <h1 className="card-title text-info pricing-card-title">
                  {props.preciostimbre[5].timbre}
                  </h1>
                  <ul className="list-unstyled  text-info mt-0 mb-0">
                    <li>
                      FOLIOS
                    </li>
                  </ul>
                </div>
                <div className="card-footer bg-secondary text-light">
                  <h4 className=" mt-0 mb-0 my-0 font-weight-normal">
                    ${props.preciostimbre[5].precio}.00
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row mb-4">
              <div className="card border-0 text-center">
                <div className="card-header bg-info text-light">
                  <h4 className="my-0 font-weight-normal">
                    PAQUETE
                  </h4>
                </div>
                <div className="card-body bg-white text-light">
                  <h1 className="card-title text-info pricing-card-title">
                  {props.preciostimbre[6].timbre}
                  </h1>
                  <ul className="list-unstyled  text-info mt-0 mb-0">
                    <li>
                      FOLIOS
                    </li>
                  </ul>
                </div>
                <div className="card-footer bg-secondary text-light">
                  <h4 className=" mt-0 mb-0 my-0 font-weight-normal">
                    ${props.preciostimbre[6].precio}.00
                  </h4>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="card border-0 text-center">
                <div className="card-header bg-info text-light">
                  <h4 className="my-0 font-weight-normal">
                    PAQUETE
                  </h4>
                </div>
                <div className="card-body bg-white text-light">
                  <h1 className="card-title text-info pricing-card-title">
                  {props.preciostimbre[7].timbre}
                  </h1>
                  <ul className="list-unstyled  text-info mt-0 mb-0">
                    <li>
                      FOLIOS
                    </li>
                  </ul>
                </div>
                <div className="card-footer bg-secondary text-light">
                  <h4 className=" mt-0 mb-0 my-0 font-weight-normal">
                    ${props.preciostimbre[7].precio}.00
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col"></div>
        </div>

        <p className="text-light">
          Adendas, gratuitas en la compra de tu primer paquete de facturación (solo aplica para adendas existentes)
          Adendas bajo demanda (por definir dependiendo el caso)
        </p>
      </Modal.Body>
      {/*  <Modal.Footer>
       
      </Modal.Footer> */}
    </Modal >
  );
}

export default App;
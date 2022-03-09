import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Button, Modal } from 'react-bootstrap';
import "./App.scss";
function App() {
  const [modalShowPrecios, setModalShowPrecios] = React.useState(false);
  const [modalShowConvertidor, setModalShowConvertidor] = React.useState(false);
  const [modalShowComplementos, setModalShowComplementos] = React.useState(false);
  const [modalShowAddendas, setModalShowAddendas] = React.useState(false);
  const preciosFolios = [{ folio: 25, precio: 330.00 }, { folio: 50, precio: 445.00 }, { folio: 100, precio: 590.00 }, { folio: 200, precio: 1065.00 }, { folio: 500, precio: 2391.00 }, { folio: 1000, precio: 4305.00 }, { folio: 2000, precio: 7745.00 }, { folio: 5000, precio: 17430.00 }];
  const preciosTimbre = [{ timbre: 1000, precio: 1392.00 }, { timbre: 3000, precio: 3480.00 }, { timbre: 5000, precio: 4640.00 }, { timbre: 10000, precio: 8120.00 }, { timbre: 15000, precio: 12760.00 }, { timbre: 20000, precio: 16820.00 }, { timbre: 50000, precio: 31320.00 }, { timbre: 100000, precio: 46400.00 }];
  const carruselPicturesURL = [{ href: '', urlImage: 'main-img-banneA' }, { href: '', urlImage: 'main-img-banneA' }, { href: '', urlImage: 'main-img-banneA' }];
  // const preciosFolios = 1;
  return (
    <div className="App">

      <header>

        <nav className="navbar navbar-expand-lg fixed-top bg-dark m-0 p-0 a-t-2">
          <div className="container justify-content-end">

            <button className="navbar-toggler custom-toggler ml-auto m-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon p-3"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarText">
              <ul className="navbar-nav justify-content-center">
                <li className="nav-item active">
                  <a className="nav-link m-2 p-0" href="#"> <p className="text-light underline h5 font-weight-bold weight">INICIO</p></a>
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

      <section>
        <div className="row carro">
          <div className="col-md-3 m-0 p-0 d-flex align-items-end justify-content-end a-l-2 ">
            <a className="flui.toDateString()" target="_blank" >
              <img src={require('./assets/img/All/main-logo-arriba-izquierda-x3.png')} className="d-block w-100 h-100" alt="..." />
            </a>
          </div>
          <div className="col-md-9 m-0 p-0 a-r-2 ">
            <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
              <div className="carousel-inner">
                {
                  Object.keys(carruselPicturesURL).map((picturesUrl, index) => (
                    index == 0 ?
                      <div key={`${carruselPicturesURL[index].urlImage}-${index}`} className="carousel-item active">
                        <a target="_blank" href={carruselPicturesURL[index].href}><img src={require('./assets/img/All/' + carruselPicturesURL[index].urlImage + '.png')} className="d-block w-100" alt="..." /></a>
                      </div>
                      :
                      <div key={`${carruselPicturesURL[index].urlImage}-${index}`} className="carousel-item">
                        <a target="_blank" href={carruselPicturesURL[index].href}><img src={require('./assets/img/All/' + carruselPicturesURL[index].urlImage + '.png')} className="d-block w-100" alt="..." /></a>
                      </div>
                  ))
                }
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">{/* Previous */}</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">{/* Next */}</span>
              </a>
            </div>
          </div>

        </div>

      </section>

      <section id="Servicios" className="py-5 bg-transparent" >
        <div className="container">

          <div className="row ">
            <div className="col-md-3 d-flex justify-content-center text-center">
              <a target="_blank" href="#">
                <img src={require('./assets/img/All/main-icono-01.png')} className="d-block img-fluid a-l-2" alt="..." />
              </a>
            </div>
            <div className="col-md-9">
              <div className="text-left py-4">
                <h1 className="text-success a-r">Servicios integrales
                  de Tecnologías de la Información</h1>
              </div>
              <p className="lead text-light a-r-2">Como proveedor autorizado por el SAT (PAC con número de autorización: 57202) NTLINK Comunicaciones SA de CV.
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

      <div className="container justify-content-center gradeintBlack bg-transparent a-b-2">
        <div className="row p-5 ">


          <div className="col-md-3 d-flex justify-content-center h-50 ">
            <a target="_blank" href="#">
              <img src={require('./assets/img/All/PAC-logo.gif')} className="d-block img-fluid " alt="..." />
            </a>
          </div>
          <div className="col-md-3 d-flex align-items-center">
            <p className="lead text-light ">Tras un largo proceso de certificación
              NTLINK se convierte en proveedor
              autorizado de certificados digitales por
              internet (PACFDI) en Julio de 2012 con
              el número de autorización 57202.</p>

          </div>
          <div className="col-md-6 d-flex align-items-center">
            <h5 className="text-success italic font-weight-bold h4">Nuestro compromiso es brindar servicios de excelencia, calidad
              y progreso continuo, garantizando la seguridad de la información
              durante los procesos relacionados y en el almacenamiento de la
              misma; así como la protección de los datos personales de nuestros
              clientes.</h5>
          </div>
        </div>
        <div className="row p-3">
          <div className="col-sm-2 d-flex justify-content-center">
            <a target="_blank" href="#">
              <img src={require('./assets/img/All/main-icono-CFDI.png')} className="d-block img-fluid" alt="..." />
            </a>
          </div>
          <div className="col-sm-2 d-flex justify-content-center align-items-center">
            <a href="https://cfdi33.ntlink.com.mx/Facturacion3.3/wfrLogin.aspx" className="mbtn"><span className="mb-0">ACCESO CFDI</span></a>
          </div>

          <div className="col-sm-2 d-flex justify-content-center">
            <a target="_blank" href="#">
              <img src={require('./assets/img/All/main-icono-nomina.png')} className="d-block img-fluid" alt="..." />
            </a>
          </div>
          <div className="col-sm-2 d-flex justify-content-center align-items-center">
            <a href="https://cfdi33.ntlink.com.mx/NominaLocal3.3/wfrLogin.aspx" className="mbtn"><span className="mb-0">ACCESO NÓMINA </span></a>
          </div>
          <div className="col-sm-2 d-flex justify-content-center">
            <a target="_blank" href="#">
              <img src={require('./assets/img/All/main-icono-agratuito.png')} className="d-block img-fluid" alt="..." />
            </a>
          </div>
          <div className="col-sm-2 d-flex justify-content-center align-items-center">
            <a href="https://cfdi33.ntlink.com.mx/ntfacturacion/wfrLogin.aspx" className="mbtn"><span className="mb-0">ACCESO GRATUITO</span></a>
          </div>
        </div>
      </div>

      <section id="PRODUCTOS" className="py-5 bg-transparent a-b-2" >
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
            <div className="col-md-2 d-flex justify-content-center align-items-center">
              <a href="https://cfdi33.ntlink.com.mx/Facturacion3.3/wfrLogin.aspx" className="mbtn"><span className="mb-0">MÁS
                INFORMACIÓN</span></a>
            </div>
          </div>


          <div className="container justify-content-center bg-dark m-0 p-0">
            <div className="stripe stripe-2 m-2 p-0">
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
                <h3 className="text-success">PORTAL NOMINAS</h3>
              </div>
              <div className="col">
                <p className="lead text-light ">Dentro del portal de nomina, podrás llevar el registro y control de tus empleados dados de alta,
                  así como el control de sus días trabajados. Podrás generar el calculo de percepciones, deducciones, incapacidades, etc.
                  Tendrás reportes listos para consultar, así como almacenar y descargar tus recibos de nomina, además de timbrarlos de manera sencilla o masiva.</p>
              </div>
            </div>
            <div className="col-md-2 d-flex justify-content-center align-items-center">
              <a href="https://cfdi33.ntlink.com.mx/NominaLocal3.3/wfrLogin.aspx" className="mbtn"><span className="mb-0">MÁS
                INFORMACIÓN</span></a>
            </div>
          </div>

          <div className="container justify-content-center bg-dark m-0 p-0">
            <div className="stripe stripe-2 m-2 p-0">
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
            <div className="col-md-2 d-flex justify-content-center align-items-center">
              <a className="mbtn" onClick={() => setModalShowComplementos(true)}><span className="mb-0">MÁS
                INFORMACIÓN</span></a>
            </div>
          </div>

          <div className="container justify-content-center bg-dark m-0 p-0">
            <div className="stripe stripe-2 m-2 p-0">
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
            <div className="col-md-2 d-flex justify-content-center align-items-center">
              <a className="mbtn" onClick={() => setModalShowAddendas(true)}><span className="mb-0">MÁS
                INFORMACIÓN</span></a>
            </div>
          </div>

          <div className="container justify-content-center bg-dark m-0 p-0">
            <div className="stripe stripe-2 m-2 p-0">
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
            <div className="col-md-2 d-flex justify-content-center align-items-center">
              <a className="mbtn" onClick={() => setModalShowConvertidor(true)}><span className="mb-0">MÁS
                INFORMACIÓN</span></a>
            </div>
          </div>

          <div className="container justify-content-center bg-dark m-0 p-0">
            <div className="stripe stripe-2 m-0 p-0">
            </div>
          </div>

        </div>
      </section>

      <section id="PRECIOS" className="py-5 bg-transparent a-b-2" >
        <div className="container bg-secondary">
          <div className="row text-center align-self-center justify-content-center">
            <div className="col-6 align-self-center justify-content-center">
              <div className="col "> <h1 className="text-light" >PRECIOS</h1></div>
              <div className="col"><p className="text-light">Conoce nuestros planes y costos</p></div>
              <div className="col d-flex justify-content-center"><a onClick={() => setModalShowPrecios(true)} className="mbtn"><span className="mb-0">MÁS
                INFORMACIÓN</span></a></div>
            </div>
            <div className="col-6 d-flex justify-content-end p-0">
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

      <div className="container justify-content-center a-b-2" >
        <div className="row ">
          <div className="col d-flex justify-content-center">
            <a href="#" className="mbtn buttonexapnd"  ><span className="mb-0">BLOG</span></a>
          </div>
          <div className="col d-flex justify-content-center">
            <a href="http://dev-cfdi4.ntlink.com.mx" className="mbtn buttonexapnd"  ><span className="mb-0">DOCUMENTACIÓN</span></a>
          </div>
        </div>
      </div>

      <section id="PROMOCIONES" className="py-5 bg-transparent a-b-2" >
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
                  <a href="#" className="mbtn"><span className="mb-0">MÁS
                    INFORMACIÓN</span></a></div>
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
                  <a href="#" className="mbtn"><span className="mb-0">MÁS
                    INFORMACIÓN</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="CONTACTO" className="pt-4 pt-md-5 border-top gradeintBlack bg-dark a-b-2">
        <div className="container  bg-trasparent">
          <div className="row">

            <div className="col-md-12 text-center">
              <div className="row">
                <h1 className="text-light" >CONTACTO Y SOPORTE</h1>
              </div>
              <div className="row text-light justify-content-md-center m-4">
                <div className="col col-lg-2">
                  <a type="button" className="btn btn-outline-light noBorder" href="https://www.facebook.com/NT-Link-105356365428787">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='ico' viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </a>

                </div>
                <div className="col col-lg-2">
                  <a type="button" className="btn btn-outline-light noBorder" href="https://wa.me/5591078187">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ico" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg>
                  </a>
                </div>

                <div className="col col-lg-2">
                  <a type="button" className="btn btn-outline-light noBorder" href="https://www.youtube.com/channel/UCO2QUWGKwXMQ8XegdABjAyA">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ico" viewBox="0 0 16 16">
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                    </svg>
                  </a>
                </div>

              </div>
              <div className="row">
                <div className="col-md-2 d-flex justify-content-center">
                  <a href="#">
                    <img className="img-fluid" src={require('./assets/img/All/main-logo-contacto.png')} />
                  </a>
                </div>
                <div className="col-md-2 text-center">
                  <h5 className="text-light h2" >TELEFONOS</h5>

                  <ul className="list-unstyled text-small">
                    <li><span className="text-light" >+(55) 47 80 02 00</span></li>
                    <li><span className="text-light" >+(55) 62 72 55 49</span></li>
                    <li><span className="text-light" >+(55) 62 72 55 50</span></li>
                    <li><span className="text-light" >+(55) 82 50 76 56</span></li>
                  </ul>
                </div>
                <div className="col-md-2 text-center">
                  <h5 className="text-light">CORREO ELECTRONICO</h5>
                  <ul className="list-unstyled text-small">
                    <li><span className="text-light" >ventas@ntlink.com.mx</span></li>
                    <li><span className="text-light" >soporte_tecnico@ntlink.com.mx</span></li>
                  </ul>
                </div>
                <div className="col-md-2 text-center">
                  <h5 className="text-light">WHATSAPP</h5>
                  <ul className="list-unstyled text-small">
                    <li><span className="text-light" >5591078187</span></li>
                    <li><span className="text-light" >5524058190</span></li>
                  </ul>
                </div>
                <div className="col-md-2 text-center">
                  <h5 className="text-light">DIRECCIÓN</h5>
                  <ul className="list-unstyled text-small">
                    <li><span className="text-light" >Calle Xicoténcatl 103BIS Del:, Del</span></li>
                    <li><span className="text-light" >Carmen, Coyoacán, 04100 Ciudad de</span></li>
                    <li><span className="text-light" >México, CDMX</span></li>
                  </ul>
                </div>
                <div className="col-md-2 text-center">
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
          show={modalShowPrecios}
          onHide={() => setModalShowPrecios(false)}
        />
        <MyVerticallyCenteredModalMASCOMPLEMENTOS
          show={modalShowComplementos}
          onHide={() => setModalShowComplementos(false)}
        />
        <MyVerticallyCenteredModalMASConvertidor
          show={modalShowConvertidor}
          onHide={() => setModalShowConvertidor(false)}
        />
        <MyVerticallyCenteredModalMASADDENDAS
          show={modalShowAddendas}
          onHide={() => setModalShowAddendas(false)}
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

function MyVerticallyCenteredModalMASCOMPLEMENTOS(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className="container m-3">
            <div className="row">
              <div className="col-md-10">
                <h2 className="text-light text-start">
                  MAS INFORMACIÓN DE COMPLEMENTOS
                </h2>
              </div>
              <div className="col-md-2 d-flex justify-content-end"><Button onClick={props.onHide}><h3 className="mb-0">Cerrar</h3> </Button></div>
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row text-center">
            <h3 className="text-success">NUESTROS COMPLEMENTOS: </h3>
          </div>
          <div className="row text-center">
            <div className="col">
              <ul className="list-unstyled text-small">
                <li><span className="text-light" >• Recibo electrónico de pagos (Complemento de pagos)</span></li>
                <li><span className="text-light" >• Instituciones Educativas Privadas (Complemento IUEDU)</span></li>
                <li><span className="text-light" >• Donatarias </span></li>
                <li><span className="text-light" >• Complemento INE</span></li>
                <li><span className="text-light" >• Complemento servicio parcial de construcción</span></li>
                <li><span className="text-light" >• Complemento vehículos usados</span></li>
                <li><span className="text-light" >• Complemento Comercio exterior</span></li>
                <li><span className="text-light" >• Recibo de Nómina</span></li>
                <li><span className="text-light" >• Generar CFDI C/Retenciones</span></li>
                <li><span className="text-light" >• CFDI Aduanal</span></li>
                <li><span className="text-light" >• CFDI con Firmas</span></li>
                <li><span className="text-light" >• Carta traslado</span></li>
                <li><span className="text-light" >• Carta Porte</span></li>
                <li><span className="text-light" >• Comisionistas</span></li>
                <li><span className="text-light" >• Cfdi complementos</span></li>
              </ul>
            </div>

          </div>
          <div className="row">
            <h6 className="text-success">¡PROMOCIÓN!: en caso de que sea nuevo cliente, los complementos se activaran de manera gratuita, en la compra de 100 folios.
              Ponte en contacto con nuestro equipo de ventas para mas información del desarrollo de cualquier complemento bajo demanda.
            </h6>
          </div>
        </div>
      </Modal.Body>
      {/*  <Modal.Footer>
       
      </Modal.Footer> */}
    </Modal >
  );
}
function MyVerticallyCenteredModalMASConvertidor(props) {
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
              <div className="col-md-10">
                <h1 className="text-light text-start">
                  Convertidor Ntlink
                </h1>
              </div>
              <div className="col-md-2 d-flex justify-content-end"><Button onClick={props.onHide}><h3 className="mb-0">Cerrar</h3> </Button></div>
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">

          <div className="row text-start text-light">
            <p className="font-weight-normal">Software desarrollado por el equipo de NTlink con el propósito de ofrecer a nuestros clientes una alternativa mas para el timbrado de sus comprantes, ya que es ideal para cualquier integración con ERPs. </p>
            <p className="font-weight-normal">El convertidor NTlink permite el timbrado de cualquier tipo de CFDI, Complementos y addendas (Consulte nuestro catálogo de complementos y addendas disponibles).</p>
          </div>
          <div className="row text-start text-light">
            <h5 className="text-success">
              Contratación.
            </h5>
            <p className="font-weight-normal">Para hacer uso de nuestro convertidor será necesario pague por la licencia de este y que además contrate un paquete de timbres (Consulte nuestra lista de costos)</p>
            <p className="font-weight-normal">La licencia es única por convertidor Ntlink, en caso de que requiera múltiples instalaciones de este consulte con nuestros ejecutivos los paquetes de licencias. </p>


          </div>
          <div className="row text-start text-light">
            <h5 className="text-success">
              Funcionamiento
            </h5>
            <p className="font-weight-normal">El Convertidor Ntlink se instala de manera local en el equipo/servidor que usted desee y funciona mediante carpetas en donde se depositarán los txt correspondientes para la generación de los comprantes deseados. </p>
            <p className="font-weight-normal">Cada una de las carpetas generadas tiene una función especifica en el Convertidor Ntlink, las carpetas se pueden vincular o “mapear” de la forma que deseemos en el las dentro de las configuraciones del aplicativo. </p>
            <img src={require('./assets/img/All/image1.png')} className="d-block img-fluid" alt="..." />
            <p className="font-italic">Ejemplo directorio de carpetas.</p>

            <p className="font-italic"></p>


            <ul className="list-unstyled">
              <li>Carpetas
                <ul>
                  <li>	Entrada: En esta se depositarán los txt que se deseen convertir y timbrar</li>
                  <li>	Error: En esta carpeta se depositarán los txt que tengan errores de estructura y/o de validación en el llenado </li>
                  <li>	Respaldo: en esta carpeta una vez timbrados los txt se quedarán guardados para futuras referencias</li>
                  <li>	Salida: una vez procesados los archivos txt dentro de esta carpeta encontraremos los archivos XML y PDF de los comprobantes.</li>
                  <li>	Cancela: En esta carpeta se depositan los txt de cancelación que se deseen procesar.</li>
                </ul>
              </li>
            </ul>


          </div>
          <div className="row text-start text-light">

            <p className="font-weight-normal">Uno de los beneficios del Convertidor Ntlink es que es multiempresa, es decir, permite el timbrado con las razones sociales que deseemos siempre que cuenten con un paquete de timbrado (consulte nuestra lista de precios). </p>
            <p className="font-weight-normal">Del mismo modo se permite la precarga del logo de cada una de las razones sociales para que estos aparezcan en la representación impresa de sus comprobantes PDF. </p>
            <img src={require('./assets/img/All/image3.png')} className="d-block img-fluid" alt="..." />
            <p className="font-italic">Interfaz gráfica Convertidor Ntlink</p>
            <p className="font-weight-normal">Nuestro aplicativo trabaja con plantillas de archivos txt, que al cumplir con la estructura correcta y las validaciones correspondientes, entregan al cliente su XML timbrado y sellado así como la representación gráfica del cfdi (PDF). </p>
            <p className="font-weight-bold">Cabe mencionar que el Convertidor NTlink permite el timbrado masivo de txt, procesando archivos txt en un tiempo estimado de 5 segundos por archivo</p>

            <p className="font-weight-normal">El archivo layout txt está dividido por líneas que representan un grupo de datos del comprobante cfdi. Las atributos correspondientes a cada línea se separan por el carácter pipe ( | ) y deben cumplir estrictamente con el orden definido en el diccionario de datos.</p>
            <h5 className="text-success">Ejemplo de Layout</h5>
            <p className="font-weight-bold">COMP||00001|43767|04100|I|01|PUE|0|100.56||116.65|MXN|||||Factura|||
              E|EKU9003173C9|NTLINK PRUEBA|601||||||
              R|XAXX010101000|RAZON SOCIAL CLIENTE|G01|||soporte@ntlink.com.mx|soporte3@ntlink.com.mx|DIRECCION CLIENTE|
              C|1|76111500||1|H87|Pza|Prueba de llenado|100.56|100.56|||||
              ITC|1|100.56|002|Tasa|0.160000|16.09|
              IT|002|Tasa|0.160000|16.09|
              TIMP|16.09||
              AD|0|0|0|0|0|0|0|0||||||
              FIN
            </p>
          </div>
          <div className="row text-start text-light">

            <p className="font-weight-normal">Una vez estructurado y procesado el archivo txt el Convertidor Ntlink deposita dentro de la carpeta de Salida los archivos XML y PDF correspondientes a nuestro archivo. </p>
            <img src={require('./assets/img/All/image2.png')} className="d-block img-fluid" alt="..." />
            <p className="font-italic">Ejemplo archivos procesados</p>
            <img src={require('./assets/img/All/image4.png')} className="d-block img-fluid" alt="..." />
            <p className="font-weight-italic">
              Ejemplo XML generado
            </p>
            <h5 className="text-success">Ejemplo XML generado</h5>
          </div>
          <div className="row text-start text-light">
            <p className="font-italic">
              {code}
            </p>
          </div>
          <div className="row text-start text-light">
            <h5 className="text-success">
              Requerimientos mínimos para la instalación
            </h5>
            <ul className="list-unstyled">
              <li>
                <ul>
                  <li>	Sistema operativo Windows 32 o 64 bits (Win 7, Win 8, Win 10, Win Server 12, Win Server 16) </li>
                  <li>	Memoria RAM 512 Mb</li>
                  <li>	50 MB libres de espacio en Disco duro </li>
                </ul>
              </li>
            </ul>
            <h5 className="text-success">
              Proceso de instalación
            </h5>
            <p className="font-weight-normal">
              Una vez realizada la compra de la licencia del Convertidor Ntlink se entregará el codigo de licencia y uno de nuestros ejecutivos de atención a clientes se pondrá en contacto con usted para la instalación y configuración de nuestra aplicación.
            </p>
            <h5 className="text-success">
              Versión de pruebas
            </h5>
            <p className="font-weight-normal">
              Si desea evaluar el Convertidor NTlink puede solicitar le instalemos la versión gratuita de nuestro aplicativo en el siguiente correo: soporte.tecnico@ntlink.com.mx donde uno de nuestros agentes de atención a clientes se pondrá en contacto con usted para acordar la instalación de nuestra versión de pruebas. </p>

          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="col-md-2 d-flex justify-content-end"><Button onClick={props.onHide}><h3 className="mb-0">Cerrar</h3> </Button></div>
      </Modal.Footer>
    </Modal >
  );
}
function MyVerticallyCenteredModalMASADDENDAS(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                <h1 className="text-light text-start">
                  MAS INFORMACIÓN ADDENDAS
                </h1>
              </div>
              <div className="col-md-2 d-flex justify-content-end"><Button onClick={props.onHide}><h3 className="mb-0">Cerrar</h3> </Button></div>
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row m-3">
          <h3 className="text-success">
            NUESTRAS ADDENDAS:
          </h3>
        </div>
        <div className="row m-3">
          <div className="col-6">
            <ul className="list-unstyled text-small">
              <li><span className="text-light" >• Addenda 1888</span></li>
              <li><span className="text-light" >• Addenda ADO </span></li>
              <li><span className="text-light" >• Addenda Vallen  </span></li>
              <li><span className="text-light" >• Addenda Asonioscoc </span></li>
              <li><span className="text-light" >• Addenda Asofarma </span></li>
              <li><span className="text-light" >• Addenda Cinepolis </span></li>
              <li><span className="text-light" >• Addenda Disney</span></li>
              <li><span className="text-light" >• Addenda Nadro</span></li>
              <li><span className="text-light" >• Addenda Neto</span></li>
              <li><span className="text-light" >• Addenda SKY</span></li>
              <li><span className="text-light" >• Addenda Calsonic</span></li>
              <li><span className="text-light" >• Addenda IUSACELL</span></li>
              <li><span className="text-light" >• Addenda BIC</span></li>
              <li><span className="text-light" >• Addenda Jumex</span></li>
              <li><span className="text-light" >• Addenda Mabe</span></li>
              <li><span className="text-light" >• Addenda Pilgrims                </span></li>
              <li><span className="text-light" >• Addenda Elektra   </span></li>
              <li><span className="text-light" >• Addenda Pemex</span></li>
              <li><span className="text-light" >• Addenda Vallen</span></li>
              <li><span className="text-light" >• Addenda Super Farmacia  </span></li>
              <li><span className="text-light" >• Addenda Mondelez</span></li>
              <li><span className="text-light" >• Addenda Liverpool</span></li>
              <li><span className="text-light" >• Addenda Jumex</span></li>
              <li><span className="text-light" >• Addenda Honda</span></li>
              <li><span className="text-light" >• Addenda Nissan</span></li>
              <li><span className="text-light" >• Addenda Volskwagen </span></li>
              <li><span className="text-light" >• Addenda  Chrysler (PUA, PPY) </span></li>
              <li><span className="text-light" >• Addenda GM</span></li>
              <li><span className="text-light" >• Addenda Soriana</span></li>
              <li><span className="text-light" >• Addenda Tridonex</span></li>
              <li><span className="text-light" >• Addenda Copel</span></li>
              <li><span className="text-light" >• Addenda FEMSA</span></li>
              <li><span className="text-light" >• Addenda sunchemical </span></li>
            </ul>
          </div>
          <div className="col-6">
            <div className="row">
              <h6 className="text-light">
                ¡PROMOCIÓN!: en caso de que sea nuevo cliente, los complementos se activaran de manera gratuita, en la compra de 100 folios.
                Ponte en contacto con nuestro equipo de ventas para mas información del desarrollo de cualquier complemento bajo demanda.

              </h6>
            </div>
            <div className="row">
              <h5 className="text-success">
                DISTRIBUIDORES/ DESARROLLADORES:
              </h5>
            </div>
            <div className="row">
              <h6 className="text-light">
                Como distribuidor, podrás obtener ganancias mediante la reventa de nuestros productos, ya que tenemos atractivos planes para que puedas obtener ganancias y crecer junto a nosotros. Contacta al equipo de ventas para más información.
                Para los desarrolladores, tenemos planes interesantes para apoyarte con tu nueva aplicación, te podemos apoyar con un numero de timbres adecuados a tu proyecto en un esquema pospago, ponte en contacto para mas información.
              </h6>
            </div>
            <div className="row">
              <h5 className="text-success">
                PLANES DE TIMBRADO POSTPAGO
              </h5>
            </div>
            <div className="row">
              <h6 className="text-light">
                Si eres una Pyme, te apoyamos con nuestros planes post pago, dándote un crédito para que uses nuestros productos ahora y los pagues después. Dependiendo de tu volumetría de uso, podremos darte mejores precios que los de lista, además de darte un mejor acompañamiento en el día a día.
                Ponte en contacto con un asesor de ventas y conoce mas de nuestros planes pospago.

              </h6>
            </div>
          </div>
        </div>

      </Modal.Body>
      {/*  <Modal.Footer>
       
      </Modal.Footer> */}
    </Modal >
  );
}

const code = '<?xml version="1.0" encoding="utf-8"?><cfdi:Comprobante xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sat.gob.mx/cfd/3 http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv33.xsd" Version="3.3" Folio="3873" Fecha="2022-01-14T09:54:32" FormaPago="03"  SubTotal="1.00" Descuento="0.00" Moneda="MXN" TipoCambio="1" Total="1.16" TipoDeComprobante="I" MetodoPago="PUE" LugarExpedicion="04100" xmlns:cfdi="http://www.sat.gob.mx/cfd/3"><cfdi:Emisor Rfc="NLC091211KC6" Nombre="PRUEBAS" RegimenFiscal="601" /><cfdi:Receptor Rfc="XAXX010101000" Nombre=" PRUEBA" UsoCFDI="G01" /><cfdi:Conceptos><cfdi:Concepto ClaveProdServ="84111506" NoIdentificacion="ANTICIPO" Cantidad="1.00" ClaveUnidad="ACT" Descripcion="PRUEBA" ValorUnitario="1.00" Importe="1.00" Descuento="0.00"><cfdi:Impuestos><cfdi:Traslados><cfdi:Traslado Base="1.00" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="0.16" /></cfdi:Traslados></cfdi:Impuestos></cfdi:Concepto></cfdi:Conceptos><cfdi:Impuestos TotalImpuestosTrasladados="0.16"><cfdi:Traslados><cfdi:Traslado Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="0.16" /></cfdi:Traslados></cfdi:Impuestos><cfdi:Complemento><tfd:TimbreFiscalDigital xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sat.gob.mx/TimbreFiscalDigital http://www.sat.gob.mx/sitio_internet/cfd/TimbreFiscalDigital/TimbreFiscalDigitalv11.xsd" Version="1.1" UUID="AFAD91C2-1888-4BD8-8803-B5ED958F4122" FechaTimbrado="2022-01-14T09:54:35" RfcProvCertif="NLC091211KC6" SelloCFD="Af3lvLAQHiQYG25nFzfypWToHQ==" NoCertificadoSAT="00001000000504447535" SelloSAT="Jd2SF+ppPkQP2sodVFkhxg==" xmlns:tfd="http://www.sat.gob.mx/TimbreFiscalDigital" /></cfdi:Complemento></cfdi:Comprobante>';

export default App;
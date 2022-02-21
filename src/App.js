import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';
import "./App.scss";
function App() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="App">

      <header>

        <nav class="navbar navbar-expand-lg fixed-top bg-dark m-0 p-0">
          <div class="container">
            {/* <a class="navbar-brand" target="_blank" href="#">
              <img class="img-fluid" src="https://via.placeholder.com/180x45" />
            </a> */}
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarText">
              <ul class="navbar-nav justify-content-center">
                <li class="nav-item active">
                  <a class="nav-link m-2 p-0" href="#"> <p class="text-light underline h5 font-weight-bold">INICIO</p></a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link m-2 p-0" href="#PRODUCTOS"><p class="text-light underline h5 font-weight-bold">PRODUCTOS</p></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link m-2 p-0" href="#PRECIOS"><p class="text-light underline h5 font-weight-bold">PRECIOS</p></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link m-2 p-0" href="#PROMOCIONES"><p class=" text-light underline h5 font-weight-bold">PROMOCIONES
                    ESPECIALES</p></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link m-2 p-0" href="#CONTACTO"><p class="text-light underline h5 font-weight-bold">CONTACTO
                    SOPORTE</p></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>


      {/*   <main class="bg-dark"> */}
      <section>
        <div class="row" style={{ "margin-top": "69px" }}>
          <div class="col-md-3 m-0 p-0">
            <a class="flui.toDateString()" target="_blank" href="#">
              <img src="https://via.placeholder.com/500x500" class="d-block w-100 h-100" alt="..." />
            </a>
          </div>
          <div class="col-md-9 m-0 p-0">
            <div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <a target="_blank" href="#"><img src="https://via.placeholder.com/1468x500" class="d-block w-100" alt="..." /></a>
                </div>
                <div class="carousel-item">
                  <a target="_blank" href="#"><img src="https://via.placeholder.com/1468x500" class="d-block w-100" alt="..." /></a>
                </div>
                <div class="carousel-item">
                  <a target="_blank" href="#"><img src="https://via.placeholder.com/1468x500" class="d-block w-100" alt="..." /></a>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>

        </div>

      </section>

      <section id="Servicios" class="py-5 bg-dark" >
        <div class="container">

          <div class="row">
            <div class="col-md-3">
              <a target="_blank" href="#">
                <img src="https://via.placeholder.com/250x250" class="d-block img-fluid" alt="..." />
              </a>
            </div>
            <div class="col-md-9">
              <div class="text-left py-4">
                <h1 class="text-success">Servicios integrales
                  de Tecnologías de la Información</h1>
              </div>
              <p class="lead text-light ">Como proveedor autorizado por el SAT (PAC con número de autorización: 57202) NTLINK Comunicaciones SA de CV.
                Es una empresa mexicana fundada en diciembre de 2009 con la idea de proporcionar servicios integrales de Tecnologías
                de la Información (venta-renta de equipo de cómputo, desarrollo de aplicaciones y páginas web, monitoreo de servicios
                de misión crítica, análisis y desarrollo de sistemas, ingeniería y reingeniería de procesos entre otras.).</p>
            </div>
          </div>
        </div>
      </section>

      <div class="container justify-content-center bg-dark">
        <div class="stripe stripe-1 m-0 p-0">
        </div>
      </div>

      <div class="container justify-content-center gradeintBlack bg-dark">
        <div class="row p-5">
          <div class="col">
            <div class="row">
              <div class="col">
                <a target="_blank" href="#">
                  <img src="https://via.placeholder.com/250x250" class="d-block img-fluid" alt="..." />
                </a>
              </div>
              <div class="col d-flex align-items-center">
                <p class="lead text-light ">Tras un largo proceso de certificación
                  NTLINK se convierte en proveedor
                  autorizado de certificados digitales por
                  internet (PACFDI) en Julio de 2012 con
                  el número de autorización 57202.</p>
              </div>
            </div>
          </div>
          <div class="col d-flex align-items-center">
            <h5 class="text-success " style={{ "font-style": "italic" }}>Nuestro compromiso es brindar servicios de excelencia, calidad
              y progreso continuo, garantizando la seguridad de la información
              durante los procesos relacionados y en el almacenamiento de la
              misma; así como la protección de los datos personales de nuestros
              clientes.</h5>
          </div>
        </div>
        <div class="row p-3">

          <div class="col-4">
            <div class="row">
              <div class="col-6">
                <a target="_blank" href="#">
                  <img src="https://via.placeholder.com/250x250" class="d-block img-fluid" alt="..." />
                </a>
              </div>
              <div class="col-6 d-flex align-items-center">
                <a href="#" class="btn btn-secondary my-2 border-gradient"><h5 class="mb-0">ACCESO CFDI</h5></a>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="row">
              <div class="col-6">
                <a target="_blank" href="#">
                  <img src="https://via.placeholder.com/250x250" class="d-block img-fluid" alt="..." />
                </a>
              </div>
              <div class="col-6 d-flex align-items-center">
                <a href="#" class="btn btn-secondary border-gradient"><h5 class="mb-0">ACCESO NÓMINA </h5></a>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="row">
              <div class="col-6">
                <a target="_blank" href="#">
                  <img src="https://via.placeholder.com/250x250" class="d-block img-fluid" alt="..." />
                </a>
              </div>
              <div class="col-6 d-flex align-items-center">
                <a href="#" class="btn btn-secondary my-2 border-gradient"><h5 class="mb-0">ACCESO GRATUITO</h5></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="PRODUCTOS" class="py-5 bg-dark" >
        <div class="container">
          <h1 class="text-light" >PRODUCTOS</h1>

          <div class="row align-items-center ">
            <div class="col-md-2">
              <a target="_blank" href="#">
                <img src="https://via.placeholder.com/200x200" class="d-block img-fluid" alt="..." />
              </a>
            </div>
            <div class="col-md-8 ">
              <div class="col">
                <h3 class="text-success">PORTAL CFDI</h3>
              </div>
              <div class="col">
                <p class="lead text-light ">Dentro del portal CFDI podrás generar las facturas de los productos o servicios que ofrezcas.
                  Podrás llevar el control de tus clientes y empresas además de tener los reportes de todos los
                  movimientos que realices, contaras con todos los complementos, adendas y personalización
                  de facturas en caso de que así lo necesites.</p>
              </div>
            </div>
            <div class="col-md-2">
              <a href="#" class="btn btn-secondary my-2 border-gradient"><h5 class="mb-0">MÁS
                INFORMACIÓN</h5></a>
            </div>
          </div>


          <div class="container justify-content-center bg-dark m-0 p-0">
            <div class="stripe stripe-2 m-0 p-0">
            </div>
          </div>


          <div class="row align-items-center">
            <div class="col-md-2">
              <a target="_blank" href="#">
                <img src="https://via.placeholder.com/200x200" class="d-block img-fluid" alt="..." />
              </a>
            </div>
            <div class="col-md-8 justify-content-center">
              <div class="col">
                <h3 class="text-success">PORTAL CFDI</h3>
              </div>
              <div class="col">
                <p class="lead text-light ">Dentro del portal CFDI podrás generar las facturas de los productos o servicios que ofrezcas.
                  Podrás llevar el control de tus clientes y empresas además de tener los reportes de todos los
                  movimientos que realices, contaras con todos los complementos, adendas y personalización
                  de facturas en caso de que así lo necesites.</p>
              </div>
            </div>
            <div class="col-md-2 d-flex align-items-center">
              <a href="#" class="btn btn-secondary my-2 border-gradient"><h5 class="mb-0">MÁS
                INFORMACIÓN</h5></a>
            </div>
          </div>

          <div class="container justify-content-center bg-dark m-0 p-0">
            <div class="stripe stripe-2 m-0 p-0">
            </div>
          </div>

          <div class="row align-items-center">
            <div class="col-md-2">
              <a target="_blank" href="#">
                <img src="https://via.placeholder.com/200x200" class="d-block img-fluid" alt="..." />
              </a>
            </div>
            <div class="col-md-8 justify-content-center">
              <div class="col">
                <h3 class="text-success">COMPLEMENTOS CFDI</h3>
              </div>
              <div class="col">
                <p class="lead text-light ">Dentro del portal CFDI podrás generar las facturas de los productos o servicios que ofrezcas.
                  Podrás llevar el control de tus clientes y empresas además de tener los reportes de todos los
                  movimientos que realices, contaras con todos los complementos, adendas y personalización
                  de facturas en caso de que así lo necesites.</p>
              </div>
              <div class="col">
                <div class="row">
                  <h5 class="text-light" > ALGUNOS DE NUESTROS COMPLEMENTOS</h5>
                </div>
                <div class="row">
                  <div class="col">
                    <ul class="list-unstyled text-small">
                      <li><span class="text-light" > • Instituciones Educativas Privadas
                        (Complemento IEDU)</span></li>
                      <li><span class="text-light" > • Complemento de Constancia
                        de Retenciones (Intereses,
                        Dividendos, Arrendamiento
                        en Fideicomiso, Enajenación
                        de Acciones, Fideicomiso</span></li>
                    </ul>
                  </div>
                  <div class="col">
                    <ul class="list-unstyled text-small">
                      <li><span class="text-light" >No Empresarial, Intereses
                        hipotecarios, Operaciones con
                        derivados, Pago extranjeros,
                        Planes de retiro, Premios, Sector
                        Financiero)</span></li>
                      <li><span class="text-light" >• Complemento INE</span></li>
                      <li><span class="text-light" > • Complemento comercio exterior</span></li>
                    </ul>
                  </div>
                  <div class="col">
                    <ul class="list-unstyled text-small">
                      <li><span class="text-light" > • Complemento servicio parcial de
                        construcción</span></li>
                      <li><span class="text-light" > • Complemento vehículos usados</span></li>
                      <li><span class="text-light" > • CFDI con Impuestos locales</span></li>
                      <li><span class="text-light" > • Carta Porte Ver 2.0</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-2 d-flex align-items-center">
              <a href="#" class="btn btn-secondary my-2 border-gradient"><h5 class="mb-0">MÁS
                INFORMACIÓN</h5></a>
            </div>
          </div>

          <div class="container justify-content-center bg-dark m-0 p-0">
            <div class="stripe stripe-2 m-0 p-0">
            </div>
          </div>

          <div class="row align-items-center">
            <div class="col-md-2">
              <a target="_blank" href="#">
                <img src="https://via.placeholder.com/200x200" class="d-block img-fluid" alt="..." />
              </a>
            </div>
            <div class="col-md-8 justify-content-center">
              <div class="col">
                <h3 class="text-success">ADENDAS</h3>
              </div>
              <div class="col">
                <p class="lead text-light ">Las adendas son complementos de facturación que permite generar integración con datos
                  específicos de compañías y/o servicios existentes en el mercado.</p>
              </div>
              <div class="col">
                <div class="row">
                  <h5 class="text-light" > ALGUNAS DE NUESTRAS ADENDAS</h5>
                </div>
                <div class="row">
                  <div class="col">
                    <ul class="list-unstyled text-small">
                      <li><span class="text-light" >• Adenda 1888</span></li>
                      <li><span class="text-light" >• Adenda ADO</span></li>
                      <li><span class="text-light" >• Adenda Vallen</span></li>
                      <li><span class="text-light" >• Adenda Asonioscoc</span></li>
                      <li><span class="text-light" >• Adenda Asofarma</span></li>
                      <li><span class="text-light" >• Adenda Cinépolis</span></li>
                      <li><span class="text-light" >• Adenda Disney</span></li>
                      <li><span class="text-light" >• Adenda Nadro</span></li>
                      <li><span class="text-light" >• Adenda Neto</span></li>
                      <li><span class="text-light" >• Adenda SKY</span></li>
                      <li><span class="text-light" >• Adenda IUSACELL</span></li>
                      <li><span class="text-light" >• Adenda BIC</span></li>
                      <li><span class="text-light" ></span></li>
                    </ul>
                  </div>
                  <div class="col">
                    <ul class="list-unstyled text-small">
                      <li><span class="text-light" >• Adenda Jumex</span></li>
                      <li><span class="text-light" >• Adenda para Descripciones largas</span></li>
                      <li><span class="text-light" >• Adenda Mabe</span></li>
                      <li><span class="text-light" >• Adenda Pilgrims</span></li>
                      <li><span class="text-light" >• Adenda Elektra</span></li>
                      <li><span class="text-light" >• Adenda Pemex</span></li>
                      <li><span class="text-light" >• Adenda Vallen</span></li>
                      <li><span class="text-light" >• Adenda Súper Farmacia</span></li>
                      <li><span class="text-light" >• Adenda Mondelez</span></li>
                      <li><span class="text-light" >• Adenda Grupo Planeta</span></li>
                      <li><span class="text-light" >• Adenda Liverpool</span></li>
                      <li><span class="text-light" >• Adenda Jumex</span></li>
                    </ul>
                  </div>
                  <div class="col">
                    <ul class="list-unstyled text-small">
                      <li><span class="text-light" >• Adenda Honda</span></li>
                      <li><span class="text-light" >• Adenda Nissan</span></li>
                      <li><span class="text-light" >• Adenda Volkswagen</span></li>
                      <li><span class="text-light" >• Adenda Chrysler</span></li>
                      <li><span class="text-light" >• Adenda General Motors</span></li>
                      <li><span class="text-light" >• Adenda Soriana</span></li>
                      <li><span class="text-light" >• Adenda Tridomex</span></li>
                      <li><span class="text-light" >• Adenda Copel</span></li>
                      <li><span class="text-light" >• Adenda FEMSA</span></li>
                      <li><span class="text-light" >• Adenda Sun Chemical</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-2 d-flex align-items-center">
              <a href="#" class="btn btn-secondary my-2 border-gradient"><h5 class="mb-0">MÁS
                INFORMACIÓN</h5></a>
            </div>
          </div>

          <div class="container justify-content-center bg-dark m-0 p-0">
            <div class="stripe stripe-2 m-0 p-0">
            </div>
          </div>


          <div class="row align-items-center">
            <div class="col-md-2">
              <a target="_blank" href="#">
                <img src="https://via.placeholder.com/200x200" class="d-block img-fluid" alt="..." />
              </a>
            </div>
            <div class="col-md-8 justify-content-center">
              <div class="col">
                <h3 class="text-success">CONVERTIDOR</h3>
              </div>
              <div class="col">
                <p class="lead text-light ">Software diseñado para plataformas Windows desarrollado por ntlink mediante el cual podrás generar
                  la carga masiva de tu facturación, mediante archivos ya sea txt o xls podrás automatizar tu facturación,
                  obteniendo de respuesta los archivos xml y pdf sellados por el SAT</p>

                <p class="lead text-light ">PRECIO CONVERTIDOR $1,200 MXN MAS IVA ANUAL</p>
              </div>
            </div>
            <div class="col-md-2 d-flex align-items-center">
              <a href="#" class="btn btn-secondary my-2 border-gradient"><h5 class="mb-0">MÁS
                INFORMACIÓN</h5></a>
            </div>
          </div>

          <div class="container justify-content-center bg-dark m-0 p-0">
            <div class="stripe stripe-2 m-0 p-0">
            </div>
          </div>

        </div>
      </section>

      <section id="PRECIOS" class="py-5 bg-dark" >
        <div class="container bg-secondary">
          <div class="row text-center ">
            <div class="col-6 align-self-center ">
              <div class="col "> <h1 class="text-light" >PRECIOS</h1></div>
              <div class="col"><p>Conoce nuestros planes y costos</p></div>
              <div class="col"><a onClick={() => setModalShow(true)} class="btn btn-secondary my-2 border-gradient"><h5 class="mb-0">MÁS
                INFORMACIÓN</h5></a></div>
            </div>
            <div class="col-6">
              <a target="_blank" href="#">
                <img src="https://via.placeholder.com/700x500" class="d-block img-fluid" alt="..." />
              </a>
            </div>
          </div>
          <div class="container justify-content-center bg-dark m-0 p-0">
            <div class="stripe stripe-2 m-0 p-0">
            </div>
          </div>
        </div>
      </section>

      <div class="container justify-content-center " >
        <div class="row ">
          <div class="col d-flex justify-content-end">
            <a href="#" class="btn btn-secondary my-2 border-gradient" style={{ "width": "190px" }} ><h5 class="mb-0">BLOG</h5></a>
          </div>
          <div class="col d-flex justify-content-start">
            <a href="#" class="btn btn-secondary my-2 border-gradient" style={{ "width": "190px" }}><h5 class="mb-0">DOCUMENTACIÓN</h5></a>
          </div>
        </div>
      </div>

      <section id="PROMOCIONES" class="py-5 bg-dark" >
        <div class="container">

          <div class="row">
            <h1 class="text-light mb-5" >PROMOCIONES ESPECIALES</h1>
          </div>
          <div class="row mb-5">
            <div class="col">
              <div class="row ">
                <h2 class="text-success text-center">DISTRIBUIDORES</h2>
              </div>
              <div class="row">
                <p class="text-light text-left" >Mediante nuestros planes y paquetes especiales para distribuidores,
                  podrás generar un ingreso mediante la reventa de nuestros servicios de
                  timbrado.</p>

              </div>
              <div class="row ">
                <div class="col d-flex justify-content-center">
                  <a href="#" class="btn btn-secondary border-gradient"><h5 class="mb-0">MÁS
                INFORMACIÓN</h5></a></div>
              </div>
            </div>
            <div class="col">
              <div class="row">
                <h2 class="text-success text-center">PLANES DE TIMBRADO POST PAGO</h2>
              </div>
              <div class="row">
                <p class="text-light text-left" >Mediante nuestros planes de timbrado post pago, podrás tener crédito a
                  mes vencido de tu consumo</p>

              </div>
              <div class="row">
                <div class="col d-flex justify-content-center">
                  <a href="#" class="btn btn-secondary my-2 border-gradient"><h5 class="mb-0">MÁS
                INFORMACIÓN</h5></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="CONTACTO" class="pt-4 pt-md-5 border-top gradeintBlack bg-dark">
        <div class="container  bg-trasparent">
          <div class="row">
            <div class="col-3 ">
              <a href="#">
                <img class="img-fluid" src="https://via.placeholder.com/250x250" />
              </a>
            </div>
            <div class="col-9 ">
              <div class="row">
                <h1 class="text-light" >CONTACTO Y SOPORTE</h1>
              </div>
              <div class="row">
                <div class="col-2">
                  <h5 class="text-light" >TELEFONOS</h5>
                  <ul class="list-unstyled text-small">
                    <li><span class="text-light" >+(55) 47 80 02 00</span></li>
                    <li><span class="text-light" >+(55) 62 72 55 49</span></li>
                    <li><span class="text-light" >+(55) 62 72 55 50</span></li>
                    <li><span class="text-light" >+(55) 82 50 76 56</span></li>
                  </ul>
                </div>
                <div class="col-3">
                  <h5 class="text-light">CORREO ELECTRONICO</h5>
                  <ul class="list-unstyled text-small">
                    <li><span class="text-light" >ventas@ntlink.com.mx</span></li>
                    <li><span class="text-light" >soporte_tecnico@ntlink.com.mx</span></li>
                  </ul>
                </div>
                <div class="col-2">
                  <h5 class="text-light">WHATS APP</h5>
                  <ul class="list-unstyled text-small">
                    <li><span class="text-light" >5591078187</span></li>
                    <li><span class="text-light" >5524058190</span></li>
                  </ul>
                </div>
                <div class="col-3">
                  <h5 class="text-light">DIRECCIÓN</h5>
                  <ul class="list-unstyled text-small">
                    <li><span class="text-light" >Calle Xicoténcatl 103BIS Del:, Del</span></li>
                    <li><span class="text-light" >Carmen, Coyoacán, 04100 Ciudad de</span></li>
                    <li><span class="text-light" >México, CDMX</span></li>
                  </ul>
                </div>
                <div class="col-2">
                  <h5 class="text-light">HORARIO</h5>
                  <ul class="list-unstyled text-small">
                    <li><span class="text-light" >LUNES A VIERNES 09:00 18:00</span></li>
                    <li><span class="text-light" >SABADO 9 A 3 AM</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center py-4 text-light mt-4">Copyright © 2021 NTLINK COMUNICACIONES - Todos los derechos reservados | AVISO DE PRIVACIDAD</div>
        </div>

       {/*  <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
 */}
        <MyVerticallyCenteredModal
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
          <div class="container">
            <div class="row">
              <div class="col">
                <h1 class="text-light text-start">
                  PRECIOS
                </h1>
              </div>
              <div class="col d-flex justify-content-end"><Button onClick={props.onHide}><h3 class="mb-0">Cerrar</h3> </Button></div>


            </div>

          </div>


        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="row justify-content-center text-center">
          <div class="col mb-4">
            <h3 class="text-success text-start">Paquetes y costos FOLIOS (Portal CFDI / Portal Nómina)</h3>
          </div>
        </div>
        <div class="row">
          <div class="col d-flex align-items-center">
            <a href="#">
              <img class="img-fluid" src="https://via.placeholder.com/150x150" />
            </a>
          </div>
          <div class="col d-flex align-items-center">
            <a href="#">
              <img class="img-fluid" src="https://via.placeholder.com/150x150" />
            </a>
          </div>
          <div class="col">
            <div class="row mb-4">

              <div class="card border-0 text-center">
                <div class="card-header bg-info text-light">
                  <h4 class="my-0 font-weight-normal">PAQUETE</h4>
                </div>
                <div class="card-body bg-white text-light">
                  <h1 class="card-title text-info pricing-card-title">25</h1>
                  <ul class="list-unstyled  text-info mt-0 mb-0">
                    <li>FOLIOS</li>
                  </ul>
                </div>
                <div class="card-footer bg-secondary text-light">
                  <h4 class=" mt-0 mb-0 my-0 font-weight-normal">$330.00</h4>
                </div>
              </div>

            </div>
            <div class="row mb-4">
              <div class="card border-0 text-center">
                <div class="card-header bg-info text-light">
                  <h4 class="my-0 font-weight-normal">
                    PAQUETE
                  </h4>
                </div>
                <div class="card-body bg-white text-light">
                  <h1 class="card-title text-info pricing-card-title">
                    25
                  </h1>
                  <ul class="list-unstyled  text-info mt-0 mb-0">
                    <li>
                      FOLIOS
                    </li>
                  </ul>
                </div>
                <div class="card-footer bg-secondary text-light">
                  <h4 class=" mt-0 mb-0 my-0 font-weight-normal">
                    $330.00
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row mb-4">
              <div class="card border-0 text-center">
                <div class="card-header bg-info text-light">
                  <h4 class="my-0 font-weight-normal">
                    PAQUETE
                  </h4>
                </div>
                <div class="card-body bg-white text-light">
                  <h1 class="card-title text-info pricing-card-title">
                    25
                  </h1>
                  <ul class="list-unstyled  text-info mt-0 mb-0">
                    <li>
                      FOLIOS
                    </li>
                  </ul>
                </div>
                <div class="card-footer bg-secondary text-light">
                  <h4 class=" mt-0 mb-0 my-0 font-weight-normal">
                    $330.00
                  </h4>
                </div>
              </div>
            </div>
            <div class="row mb-4">
              <div class="card border-0 text-center">
                <div class="card-header bg-info text-light">
                  <h4 class="my-0 font-weight-normal">
                    PAQUETE
                  </h4>
                </div>
                <div class="card-body bg-white text-light">
                  <h1 class="card-title text-info pricing-card-title">
                    25
                  </h1>
                  <ul class="list-unstyled  text-info mt-0 mb-0">
                    <li>
                      FOLIOS
                    </li>
                  </ul>
                </div>
                <div class="card-footer bg-secondary text-light">
                  <h4 class=" mt-0 mb-0 my-0 font-weight-normal">
                    $330.00
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row mb-4">
              <div class="card border-0 text-center">
                <div class="card-header bg-info text-light">
                  <h4 class="my-0 font-weight-normal">
                    PAQUETE
                  </h4>
                </div>
                <div class="card-body bg-white text-light">
                  <h1 class="card-title text-info pricing-card-title">
                    25
                  </h1>
                  <ul class="list-unstyled  text-info mt-0 mb-0">
                    <li>
                      FOLIOS
                    </li>
                  </ul>
                </div>
                <div class="card-footer bg-secondary text-light">
                  <h4 class=" mt-0 mb-0 my-0 font-weight-normal">
                    $330.00
                  </h4>
                </div>
              </div>
            </div>
            <div class="row mb-4">
              <div class="card border-0 text-center">
                <div class="card-header bg-info text-light">
                  <h4 class="my-0 font-weight-normal">
                    PAQUETE
                  </h4>
                </div>
                <div class="card-body bg-white text-light">
                  <h1 class="card-title text-info pricing-card-title">
                    25
                  </h1>
                  <ul class="list-unstyled  text-info mt-0 mb-0">
                    <li>
                      FOLIOS
                    </li>
                  </ul>
                </div>
                <div class="card-footer bg-secondary text-light">
                  <h4 class=" mt-0 mb-0 my-0 font-weight-normal">
                    $330.00
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row mb-4">
              <div class="card border-0 text-center">
                <div class="card-header bg-info text-light">
                  <h4 class="my-0 font-weight-normal">
                    PAQUETE
                  </h4>
                </div>
                <div class="card-body bg-white text-light">
                  <h1 class="card-title text-info pricing-card-title">
                    25
                  </h1>
                  <ul class="list-unstyled  text-info mt-0 mb-0">
                    <li>
                      FOLIOS
                    </li>
                  </ul>
                </div>
                <div class="card-footer bg-secondary text-light">
                  <h4 class=" mt-0 mb-0 my-0 font-weight-normal">
                    $330.00
                  </h4>
                </div>
              </div>
            </div>
            <div class="row mb-4">
              <div class="card border-0 text-center">
                <div class="card-header bg-info text-light">
                  <h4 class="my-0 font-weight-normal">
                    PAQUETE
                  </h4>
                </div>
                <div class="card-body bg-white text-light">
                  <h1 class="card-title text-info pricing-card-title">
                    25
                  </h1>
                  <ul class="list-unstyled  text-info mt-0 mb-0">
                    <li>
                      FOLIOS
                    </li>
                  </ul>
                </div>
                <div class="card-footer bg-secondary text-light">
                  <h4 class=" mt-0 mb-0 my-0 font-weight-normal">
                    $330.00
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center text-center">
          <div class="col mb-4">
            <h3 class="text-success text-start">Paquetes y costos FOLIOS (Portal CFDI / Portal Nómina)</h3>
          </div>
        </div>
        <div class="row">
          <div class="col d-flex align-items-center">
            <a href="#">
              <img class="img-fluid" src="https://via.placeholder.com/150x150" />
            </a>
          </div>
          <div class="col d-flex align-items-center">
            <a href="#">
              <img class="img-fluid" src="https://via.placeholder.com/150x150" />
            </a>
          </div>
          <div class="col">
            <div class="row mb-4">

              <div class="card border-0 text-center">
                <div class="card-header bg-info text-light">
                  <h4 class="my-0 font-weight-normal">PAQUETE</h4>
                </div>
                <div class="card-body bg-white text-light">
                  <h1 class="card-title text-info pricing-card-title">25</h1>
                  <ul class="list-unstyled  text-info mt-0 mb-0">
                    <li>FOLIOS</li>
                  </ul>
                </div>
                <div class="card-footer bg-secondary text-light">
                  <h4 class=" mt-0 mb-0 my-0 font-weight-normal">$330.00</h4>
                </div>
              </div>

            </div>
            <div class="row mb-4">
              <div class="card border-0 text-center">
                <div class="card-header bg-info text-light">
                  <h4 class="my-0 font-weight-normal">
                    PAQUETE
                  </h4>
                </div>
                <div class="card-body bg-white text-light">
                  <h1 class="card-title text-info pricing-card-title">
                    25
                  </h1>
                  <ul class="list-unstyled  text-info mt-0 mb-0">
                    <li>
                      FOLIOS
                    </li>
                  </ul>
                </div>
                <div class="card-footer bg-secondary text-light">
                  <h4 class=" mt-0 mb-0 my-0 font-weight-normal">
                    $330.00
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row mb-4">
              <div class="card border-0 text-center">
                <div class="card-header bg-info text-light">
                  <h4 class="my-0 font-weight-normal">
                    PAQUETE
                  </h4>
                </div>
                <div class="card-body bg-white text-light">
                  <h1 class="card-title text-info pricing-card-title">
                    25
                  </h1>
                  <ul class="list-unstyled  text-info mt-0 mb-0">
                    <li>
                      FOLIOS
                    </li>
                  </ul>
                </div>
                <div class="card-footer bg-secondary text-light">
                  <h4 class=" mt-0 mb-0 my-0 font-weight-normal">
                    $330.00
                  </h4>
                </div>
              </div>
            </div>
            <div class="row mb-4">
              <div class="card border-0 text-center">
                <div class="card-header bg-info text-light">
                  <h4 class="my-0 font-weight-normal">
                    PAQUETE
                  </h4>
                </div>
                <div class="card-body bg-white text-light">
                  <h1 class="card-title text-info pricing-card-title">
                    25
                  </h1>
                  <ul class="list-unstyled  text-info mt-0 mb-0">
                    <li>
                      FOLIOS
                    </li>
                  </ul>
                </div>
                <div class="card-footer bg-secondary text-light">
                  <h4 class=" mt-0 mb-0 my-0 font-weight-normal">
                    $330.00
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row mb-4">
              <div class="card border-0 text-center">
                <div class="card-header bg-info text-light">
                  <h4 class="my-0 font-weight-normal">
                    PAQUETE
                  </h4>
                </div>
                <div class="card-body bg-white text-light">
                  <h1 class="card-title text-info pricing-card-title">
                    25
                  </h1>
                  <ul class="list-unstyled  text-info mt-0 mb-0">
                    <li>
                      FOLIOS
                    </li>
                  </ul>
                </div>
                <div class="card-footer bg-secondary text-light">
                  <h4 class=" mt-0 mb-0 my-0 font-weight-normal">
                    $330.00
                  </h4>
                </div>
              </div>
            </div>
            <div class="row mb-4">
              <div class="card border-0 text-center">
                <div class="card-header bg-info text-light">
                  <h4 class="my-0 font-weight-normal">
                    PAQUETE
                  </h4>
                </div>
                <div class="card-body bg-white text-light">
                  <h1 class="card-title text-info pricing-card-title">
                    25
                  </h1>
                  <ul class="list-unstyled  text-info mt-0 mb-0">
                    <li>
                      FOLIOS
                    </li>
                  </ul>
                </div>
                <div class="card-footer bg-secondary text-light">
                  <h4 class=" mt-0 mb-0 my-0 font-weight-normal">
                    $330.00
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row mb-4">
              <div class="card border-0 text-center">
                <div class="card-header bg-info text-light">
                  <h4 class="my-0 font-weight-normal">
                    PAQUETE
                  </h4>
                </div>
                <div class="card-body bg-white text-light">
                  <h1 class="card-title text-info pricing-card-title">
                    25
                  </h1>
                  <ul class="list-unstyled  text-info mt-0 mb-0">
                    <li>
                      FOLIOS
                    </li>
                  </ul>
                </div>
                <div class="card-footer bg-secondary text-light">
                  <h4 class=" mt-0 mb-0 my-0 font-weight-normal">
                    $330.00
                  </h4>
                </div>
              </div>
            </div>
            <div class="row mb-4">
              <div class="card border-0 text-center">
                <div class="card-header bg-info text-light">
                  <h4 class="my-0 font-weight-normal">
                    PAQUETE
                  </h4>
                </div>
                <div class="card-body bg-white text-light">
                  <h1 class="card-title text-info pricing-card-title">
                    25
                  </h1>
                  <ul class="list-unstyled  text-info mt-0 mb-0">
                    <li>
                      FOLIOS
                    </li>
                  </ul>
                </div>
                <div class="card-footer bg-secondary text-light">
                  <h4 class=" mt-0 mb-0 my-0 font-weight-normal">
                    $330.00
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col"></div>
        </div>

        <p class="text-light">
          Adendas, gratuitas en la compra de tu primer paquete de facturación (solo aplica para adendas existentes)
          Adendas bajo demanda (por definir dependiendo el caso)
        </p>
      </Modal.Body>
      {/*  <Modal.Footer>
       
      </Modal.Footer> */}
    </Modal>
  );
}

export default App;
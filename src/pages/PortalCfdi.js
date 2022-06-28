import { Component } from "react";

export class PortalCfdi extends Component {

  render() {

    return (
      <>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-11">
              <div className="row text-start text-light">

                <div className=" headerCf pt15 pf">
                  <a href="#Editar" className='text-decorationNone'>
                    <h5 className="text-success pt-2">
                      Apartado “Editar”
                    </h5>
                  </a>
                  <a href="#Sucursales" className='text-decorationNone' >
                    <h5 className="text-success pt-2">
                      Apartado “Sucursales”
                    </h5>
                  </a>
                  <a href="#Clientes" className='text-decorationNone' >
                    <h5 className="text-success pt-2">
                      Apartado “Clientes”
                    </h5>
                  </a>
                  <a href="#Facturación" className='text-decorationNone'>
                    <h5 className="text-success pt-2">
                      Sección “Facturación”
                    </h5>
                  </a>
                  <a href="#Reportes" className='text-decorationNone'>
                    <h5 className="text-success pt-2">
                      Sección de “Reportes”
                    </h5>
                  </a>
                  <a href="#Usuarios" className='text-decorationNone'>
                    <h5 className="text-success pt-2">
                      Sección de “Usuarios”
                    </h5>
                  </a>
                  <div className="justify-content-center align-items-center">
                    <a href="/#PRODUCTOS" className="mbtn-sm"><span className="mb-0 mbtnSpanBlack">REGRESAR</span></a>
                  </div>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-8">
                  <h5 className="text-success pt-4">
                    Introducción al portal de facturación NT link 3.3
                  </h5>
                  <p className="font-weight-normal">
                    Al iniciar sesión en el portal la primera sección que encontraremos es la de  “Empresas”. En esta sección se podrán modificar los datos de la empresa,  crear más empresas si es que se está a cargo de mas, crear sucursales e introducir los conceptos que serán usados en sus facturas.
                  </p>
                  <img src={require('../assets/img/All/a/d1.png')} className="img-fluid" alt="..." />

                  <h5 id="Editar" className="text-success">
                    Apartado “Editar”
                  </h5>
                  <p className="font-weight-normal">
                    En este apartado se pueden llenar todos los datos de la empresa que son  necesarios para poder facturar, aquí también se debe cargar el CSD (Sello  digital)
                  </p>
                  <img src={require('../assets/img/All/a/d2.png')} className="d-block img-fluid" alt="..." />
                  <p className="font-weight-normal">
                    Los archivos que se deben cargarse en el portal son los que tienen  terminacion .cer (certificado) y .key (llave privada). Los dos son archivos del  CSD (sello digital).
                  </p>
                  <h5 id="Sucursales" className="text-success ">
                    Apartado “Sucursales”
                  </h5>
                  <p className="font-weight-normal">
                    Aqui se pueden crear nuevas sucursales o editar las ya existentes si es  necesario.
                  </p>
                  <img src={require('../assets/img/All/a/d3.png')} className="d-block img-fluid" alt="..." />
                  <h5 id='Clientes' className="text-success">
                    Seccion de “Clientes”
                  </h5>
                  <p className="font-weight-normal">
                    Aqui encontraremos a todos nuestros clientes a los que se les genera  factura. Se podran crear nuevos clientes y tambien eliminar a los que ya no  se necesiten.
                  </p>
                  <img src={require('../assets/img/All/a/d4.png')} className="d-block img-fluid" alt="..." />
                  <p className="font-weight-normal">
                    En la opción "Editar" se deben introducir todos los datos del cliente para que  se pueda generar la factura correctamente.
                  </p>
                  <img src={require('../assets/img/All/a/d5.png')} className="d-block img-fluid" alt="..." />
                  <h5 id='Facturación' className="text-success">
                    Sección “Facturación”
                  </h5>
                  <p className="font-weight-normal">
                    Es donde podremos crear nuestra factura, al colocar el cursor se mostrarán  los tipos de factura que se hayan contratado.
                    Algunos complementos son:
                  </p>

                  <ul className="list-unstyled">
                    <li>
                      <ul>
                        <li>
                          Complemento Carta Porte
                        </li>
                        <li>
                          Complemento de pago
                        </li>
                        <li>
                          Complemento INE
                        </li>
                        <li>
                          Complemento Comercio exterior
                        </li>

                      </ul>
                    </li>
                  </ul>
                  <img src={require('../assets/img/All/a/d6.png')} className="d-block img-fluid" alt="..." />
                  <p className="font-weight-normal">
                    Esta es la primera parte de nuestra factura a elaborar, se introduce la  información del cliente, el tipo de documento y tipo de pago.
                  </p>
                  <img src={require('../assets/img/All/a/d7.png')} className="d-block img-fluid" alt="..." />
                  <p className="font-weight-normal">
                    Esta es la segunda parte de nuestra factura donde se deben de introducir  los datos del producto o servicio, cantidades, impuestos y descripciones. Los  campos con un asterisco rojo deben ser llenados obligatoriamente.
                  </p>
                  <img src={require('../assets/img/All/a/d8.png')} className="d-block img-fluid" alt="..." />
                  <p className="font-weight-normal">
                    La tercera y última parte es opcional, es la introducción de impuestos que  pueden modificarse. Esta última parte es importante para los clientes con  Régimen Simplificado de Confianza por la retención del ISR.
                  </p>
                  <img src={require('../assets/img/All/a/d9.png')} className="d-block img-fluid" alt="..." />
                  <h5 id='Reportes' className="text-success">
                    Sección de “Reportes”
                  </h5>
                  <p className="font-weight-normal">
                    Aquí podremos encontrar nuestro historial de facturación. Se podrá ver el  estado de nuestras facturas y se podrán realizar otras actividades como  cancelaciones, reenvío de facturas y descarga de archivos.
                  </p>
                  <img src={require('../assets/img/All/a/d10.png')} className="d-block img-fluid" alt="..." />
                  <h5 id="Usuarios" className="text-success">
                    Sección de “Usuarios”
                  </h5>
                  <p className="font-weight-normal">
                    En esta sección se podrá manejar la información de los usuarios que tengan  control de la cuenta, se podrá editar información y crear nuevos usuarios.
                  </p>
                  <img src={require('../assets/img/All/a/d11.png')} className="d-block img-fluid" alt="..." />
                </div>

              </div>
              <div className="row text-start text-light">

              </div>
            </div>
          </div>
        </div>

      </>
    )
  }
}
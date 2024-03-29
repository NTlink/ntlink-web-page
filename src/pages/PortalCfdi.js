import { Component } from "react";

export class PortalCfdi extends Component {

  render() {

    return (
      <>
        <div className="my-4">
          <h5 className="text-success pt-4">
            Introducción al portal de facturación NT link 4.0
          </h5>
          <p className="text-light">
            Al iniciar sesión en el portal la primera sección que encontraremos es la de  “Empresas”. En esta sección se podrán modificar los datos de la empresa,  crear más empresas si es requerido, crear sucursales e introducir los conceptos que serán usados en sus facturas.
          </p>
          <img src={require('../assets/img/empresas-portal.jpg')} className="img-fluid" alt="..." />

          <h5 id="Editar" className="text-success">
            Apartado “Editar”
          </h5>
          <p className="text-light">
            En este apartado se pueden llenar todos los datos de la empresa que son  necesarios para poder facturar, aquí también se debe cargar el CSD (Sello  digital)
          </p>
          <img src={require('../assets/img/new-company.jpg')} className="d-block img-fluid" alt="..." />
          <p className="text-light">
            Los archivos que se deben cargarse en el portal son los que tienen  terminacion .cer (certificado) y .key (llave privada). Los dos son archivos del  CSD (sello digital).
          </p>
          <h5 id="Sucursales" className="text-success ">
            Apartado “Sucursales”
          </h5>
          <p className="text-light">
            Aqui se pueden crear nuevas sucursales o editar las ya existentes si es  necesario.
          </p>
          <img src={require('../assets/img/sucursales.jpg')} className="d-block img-fluid" alt="..." />
          <h5 id='Clientes' className="text-success">
            Seccion de “Clientes”
          </h5>
          <p className="text-light">
            Aqui encontraremos a todos nuestros clientes a los que se les genera  factura. Se podran crear nuevos clientes y tambien eliminar a los que ya no  se necesiten.
          </p>
          <img src={require('../assets/img/clientes.jpg')} className="d-block img-fluid" alt="..." />
          <p className="text-light">
            En la opción "Editar" se deben introducir todos los datos del cliente para que  se pueda generar la factura correctamente.
          </p>
          <img src={require('../assets/img/alta_cliente.jpg')} className="d-block img-fluid" alt="..." />
          <h5 id='Facturación' className="text-success">
            Sección “Facturación”
          </h5>
          <p className="text-light">
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

          <p className="text-light">
            Una vez ingresando en la vista del portal CFDI, se encuentran 4 secciones, los datos generales del CFDI, agregar relacionados, la seccion de conceptos y finalmente la seccion de impuestos del CFDI
          </p>
          <img src={require('../assets/img/generar_cfdi.jpg')} className="d-block img-fluid" alt="..." />
          <p className="text-light">
            En esta seccion es donde se deben de introducir  los datos del producto o servicio, cantidades, impuestos y descripciones. Los  campos con un asterisco rojo deben ser llenados obligatoriamente.
          </p>
          <img src={require('../assets/img/add_cfdi_concept.jpg')} className="d-block img-fluid" alt="..." />
          <p className="text-light">
            La tercera y última parte es opcional, es la introducción de impuestos que  pueden modificarse. Esta última parte es importante para los clientes con  Régimen Simplificado de Confianza por la retención del ISR.
          </p>
          <img src={require('../assets/img/taxes.jpg')} className="d-block img-fluid" alt="..." />
          <h5 id='Reportes' className="text-success">
            Sección de “Reportes”
          </h5>
          <p className="text-light">
            Aquí podremos encontrar nuestro historial de facturación. Se podrá ver el  estado de nuestras facturas y se podrán realizar otras actividades como  cancelaciones, reenvío de facturas y descarga de archivos.
          </p>
          <img src={require('../assets/img/reports.jpg')} className="d-block img-fluid" alt="..." />
          <h5 id="Usuarios" className="text-success">
            Sección de “Usuarios”
          </h5>
          <p className="text-light">
            En esta sección se podrá manejar la información de los usuarios que tengan  control de la cuenta, se podrá editar información y crear nuevos usuarios.
          </p>
          <img src={require('../assets/img/users.jpg')} className="d-block img-fluid" alt="..." />
        </div>

      </>
    )
  }
}
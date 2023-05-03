import { Component } from "react";

export class ComplementosCfdi extends Component {

  render() {
    return (
      <>
        <div className="row justify-content-center">
          <img src={require('../assets/img/All/Complementos-head.png')} className="img-fluid" alt="..." />
          <div className="col-md-11">
            <div className="row">
              <div className="col-md-10 mb-3">
                <h4 className="text-success text-start">
                  MAS INFORMACIÓN DE NUESTROS COMPLEMENTOS:
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
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
              <div className="col-md-6 text-center">
                <img src={require('../assets/img/All/Complementos-image.png')} className="img-fluid" alt="..." />
              </div>
            </div>
            <div className="row bg-info mt-3">
              <h6 className="text-light">
                <small className="text-success h4">
                  ¡PROMOCIÓN!:
                </small> en caso de que sea nuevo cliente, los complementos se activaran de manera gratuita, en la compra de 100 folios.
                Ponte en contacto con nuestro equipo de ventas para más información del desarrollo de cualquier complemento bajo demanda.
              </h6>
            </div>
            <div className="row">
              <div className="col-md-12 d-flex justify-content-center align-items-center">
                <a href="/#PRODUCTOS" className="mbtn-sm"><span className="mb-0 mbtnSpanBlack">REGRESAR</span></a>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
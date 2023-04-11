import { Component } from "react";

export class Distribuidores extends Component {

  render() {
    return (
      <>
        <div className="row justify-content-center">
          <img src={require('../assets/img/All/Distribuidoresdesarrolladores-head.png')} className="img-fluid" alt="..." />
          <div className="col-md-9">
            <div className="row justify-content-center mt-3">
              <div className="col-md-7">
                <div className="row">
                  <p className="text-light">
                    <small className="text-success h4">
                      Como distribuidor, podrás obtener ganancias mediante la reventa de nuestros productos,
                    </small>
                    ya que tenemos atractivos planes para que puedas obtener ganancias y crecer junto a nosotros. Contacta al equipo de ventas para más información.
                    Para los desarrolladores, tenemos planes interesantes para apoyarte con tu nueva aplicación, te podemos apoyar con un numero de timbres adecuados a tu proyecto en un esquema pospago, ponte en contacto para mas información.
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <a href="https://nt-invoice.ntlink.com.mx/#/support-request/*" target="_blank" className="mbtn-sm"><span className="mb-0 mbtnSpanBlack">CONTACTO</span></a>
                  </div>
                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <a href="/#PROMOCIONES" className="mbtn-sm"><span className="mb-0 mbtnSpanBlack">REGRESAR</span></a>
                  </div>

                </div>


              </div>
              <div className="col-md-5 text-center">
                <img src={require('../assets/img/All/Distribuidoresdesarrolladores-image02.png')} className="img-fluid" alt="..." />
              </div>
            </div>
          </div>

        </div>
      </>
    )
  }
}
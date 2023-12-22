import { Component } from "react";

export class Distribuidores extends Component {

  render() {
    return (
      <>
        <br></br>
        <br></br>
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="row justify-content-center mt-3">
              <div className="col-md-7">
                <div className="row">
                  <small className="text-success h4">
                    Obten ganancias mediante la reventa de nuestros productos.
                  </small>
                </div>
                <div className="row">
                  <p className="text-light">

                    Tenemos atractivos planes para que puedas obtener ganancias y crecer junto a nosotros. Contacta al equipo de ventas para más información.
                    Para los desarrolladores, tenemos planes interesantes para apoyarte con tu nueva aplicación, te podemos apoyar con un numero de timbres adecuados a tu proyecto en un esquema pospago, ponte en contacto para mas información.
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <a href="/contacto" target="_blank" className="btn btn-sm btn-success"><span>CONTACTO</span></a>
                  </div>
                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <a href="/" className="btn btn-sm btn-success"><span>REGRESAR</span></a>
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
import { Component } from "react";

export class PlanesTimbrado extends Component {

  render() {
    return (
      <>
        <div className="row ">
          <section className="author-area">
            <div className="container">
              <div className="row justify-content-center centerBody">
                <div className="col-md-7 ">
                  <div className="row mb-2 mt-2">
                    <h2 className="text-success text-start">
                      PLANES DE TIMBRADO POSTPAGO
                    </h2>
                  </div>
                  <div className="row mt-3 ">
                    <div className="col-md-2 d-flex justify-content-center align-items-center">
                      <img src={require('../assets/img/All/main-icono-convertidor.png')} className="d-block img-fluid" alt="..." />
                    </div>
                    <div className="col-md-10">
                      <div className="row">
                        <h4 className='text-light'>
                          Si eres una Pyme, te apoyamos con nuestros planes post pago, dándote un crédito para que uses nuestros productos ahora y los pagues después.
                        </h4>
                      </div>
                      <div className="row ">
                        <span className='text-light textSpanBody'>
                          Dependiendo de tu volumetría de uso, podremos darte mejores precios que los de lista, además de darte un mejor acompañamiento en el día a día.
                          Ponte en contacto con un asesor de ventas y conoce mas de nuestros planes pospago.
                        </span>
                      </div>
                      <div className="row ">
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                          <a href="/contacto" target="_blank" className="mbtn-sm"><span className="mb-0">CONTACTO</span></a>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                          <a href="/#PROMOCIONES" className="mbtn-sm"><span className="mb-0">REGRESAR</span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <img src={require('../assets/img/All/cfdi-4-pc.png')} className="d-block img-fluid" alt="..." />
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
}
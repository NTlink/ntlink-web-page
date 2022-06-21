import { Component } from "react";

export class AdendasCfdi extends Component{

    render(){

        return (
            <>
            <div className="row justify-content-center">
            <img src={require('../assets/img/All/Addendas-head.png')} className="img-fluid" alt="..." />
            <div className="col-md-11">
              <div className="row">
                <div className="col-md-10 mb-3">
                  <h4 className="text-success text-start">
                    MAS INFORMACIÓN ADDENDAS:
                  </h4>
                </div>
              </div>

              <div className="row m-3">
                <div className="col-md-4">
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
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="list-unstyled text-small">
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
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="list-unstyled text-small">
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
              </div>
              <div className="row bg-info mt-3">
                <h6 className="text-light">
                  <small className="text-success h4">
                    ¡PROMOCIÓN!:
                  </small>  en caso de que sea nuevo cliente, los complementos se activaran de manera gratuita, en la compra de 100 folios.
                  Ponte en contacto con nuestro equipo de ventas para mas información del desarrollo de cualquier complemento bajo demanda.
                </h6>
              </div>
              <div className="row ">
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
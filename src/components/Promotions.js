import { Component } from "react";

export class Promotions extends Component {

    render() {
        return (
            <>
                <div className="row">
                    <h2 className="text-light mb-5 text-center" >PROMOCIONES ESPECIALES</h2>
                </div>
                <div className="row mb-5">
                    <div className="col">
                        <div className="row ">
                            <h3 className="text-success text-center">DISTRIBUIDORES</h3>
                        </div>
                        <div className="row">
                            <p className="text-light text-left" >Mediante nuestros planes y paquetes especiales para distribuidores,
                                podrás generar un ingreso mediante la reventa de nuestros servicios de
                                timbrado.</p>

                        </div>
                        <div className="row ">
                            <div className="col d-flex justify-content-center">
                                <a href="distribuidores" className="mbtn"><span className="mb-0">MÁS
                                    INFORMACIÓN</span></a></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <h3 className="text-success text-center">PLANES DE TIMBRADO POST PAGO</h3>
                        </div>
                        <div className="row">
                            <p className="text-light text-left" >Mediante nuestros planes de timbrado post pago, podrás tener crédito a
                                mes vencido de tu consumo</p>

                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-center">
                                <a href="planes-timbrado" className="mbtn"><span className="mb-0">MÁS
                                    INFORMACIÓN</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </>)
    }
}
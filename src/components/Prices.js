import { Component } from "react";

export class Prices extends Component {

    render(){
        return (
            <>
            <div className="container preciosBack p-0">
                        <div className="row text-center align-self-center justify-content-center pbt-6">
                            <div className="col-md-3 ">
                                <div className="col ml-2"> <h1 className="text-light " >PRECIOS</h1></div>
                                <div className="col"><p className="text-light">Conoce nuestros planes y costos</p></div>
                                <div className="col d-flex justify-content-center"><a href="/precios" className="mbtn"><span className="mb-0">MÁS
                                    INFORMACIÓN</span></a></div>
                            </div>
                            <div className="col-md-9 d-flex justify-content-end p-0">

                            </div>
                        </div>
                        <div className="container bg-info" >
                            <div className="row text-center align-self-center justify-content-center pt-1">
                                <h5 className="text-light">
                                    Datos para Depósito Bancario
                                </h5>
                                <h6 className="font-weight-normal text-light ">
                                    NT LINK Comunicaciones S.A. DE C.V.
                                    Banco: HSBC
                                    Número de cuenta: 4047150404
                                    Clabe Interbancaria: 021180040471504049
                                </h6>
                            </div>
                        </div>
                    </div>
            </>
        )
    }
}
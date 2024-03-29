import { Component } from "react";

export class Precios extends Component {

    render() {

        const preciosFolios = [{ folio: 25, precio: 330.00 }, { folio: 50, precio: 445.00 }, { folio: 100, precio: 590.00 }, { folio: 200, precio: 1065.00 }, { folio: 500, precio: 2391.00 }, { folio: 1000, precio: 4305.00 }, { folio: 2000, precio: 7745.00 }, { folio: 5000, precio: 17430.00 }];
        const preciosTimbre = [{ timbre: 1000, precio: 1392.00 }, { timbre: 3000, precio: 3480.00 }, { timbre: 5000, precio: 4640.00 }, { timbre: 10000, precio: 8120.00 }, { timbre: 15000, precio: 12760.00 }, { timbre: 20000, precio: 16820.00 }, { timbre: 50000, precio: 31320.00 }, { timbre: 100000, precio: 46400.00 }];


        return (
            <>


                <div className="row justify-content-center text-center">
                    <div className="col mb-4 mt-5 d-flex justify-content-between">
                        <h3 className="text-success text-start">Paquetes y costos Portal CFDI / Portal Nómina</h3>
                    </div>
                </div>
                <div className="row d-flex align-items-center ">
                    <div className="col-md-2 d-flex justify-content-center">

                        <img className="d-block img-fluid" src={require('../assets/img/All/main-icono-nomina.png')} />

                    </div>
                    <div className="col-md-2 d-flex justify-content-center">

                        <img className="d-block img-fluid" src={require('../assets/img/All/main-icono-CFDI.png')} />

                    </div>
                    <div className="col-md-2 ">
                        <div className="row mx-1 my-4 justify-content-center">

                            <div className="card border-5 text-center">
                                <div className="card-header bg-info text-light">
                                    <h5 className="my-0 font-weight-normal">PAQUETE</h5>
                                </div>
                                <div className="card-body p-0 bg-white text-light">
                                    <h2 className="card-title text-info pricing-card-title">{preciosFolios[0].folio}</h2>
                                    <ul className="list-unstyled  text-info mt-0 mb-0">
                                        <li>TIMBRES</li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-secondary text-light">
                                    <h6 className=" mt-0 mb-0 my-0 font-weight-normal">${preciosFolios[0].precio}.00</h6>
                                </div>
                            </div>

                        </div>
                        <div className="row mx-1 my-4 justify-content-center">
                            <div className="card border-5 text-center">
                                <div className="card-header bg-info text-light">
                                    <h5 className="my-0 font-weight-normal">
                                        PAQUETE
                                    </h5>
                                </div>
                                <div className="card-body p-0 bg-white text-light">
                                    <h2 className="card-title text-info pricing-card-title">
                                        {preciosFolios[1].folio}
                                    </h2>
                                    <ul className="list-unstyled  text-info mt-0 mb-0">
                                        <li>
                                            TIMBRES
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-secondary text-light">
                                    <h6 className=" mt-0 mb-0 my-0 font-weight-normal">
                                        ${preciosFolios[1].precio}.00
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="row mx-1 my-4 justify-content-center">
                            <div className="card border-5 text-center">
                                <div className="card-header bg-info text-light">
                                    <h5 className="my-0 font-weight-normal">
                                        PAQUETE
                                    </h5>
                                </div>
                                <div className="card-body p-0 bg-white text-light">
                                    <h2 className="card-title text-info pricing-card-title">
                                        {preciosFolios[2].folio}
                                    </h2>
                                    <ul className="list-unstyled  text-info mt-0 mb-0">
                                        <li>
                                            TIMBRES
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-secondary text-light">
                                    <h6 className=" mt-0 mb-0 my-0 font-weight-normal">
                                        ${preciosFolios[2].precio}.00
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="row mx-1 my-4 justify-content-center">
                            <div className="card border-5 text-center">
                                <div className="card-header bg-info text-light">
                                    <h5 className="my-0 font-weight-normal">
                                        PAQUETE
                                    </h5>
                                </div>
                                <div className="card-body p-0 bg-white text-light">
                                    <h2 className="card-title text-info pricing-card-title">
                                        {preciosFolios[3].folio}
                                    </h2>
                                    <ul className="list-unstyled  text-info mt-0 mb-0">
                                        <li>
                                            TIMBRES
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-secondary text-light">
                                    <h6 className=" mt-0 mb-0 my-0 font-weight-normal">
                                        ${preciosFolios[3].precio}.00
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="row mx-1 my-4 justify-content-center">
                            <div className="card border-5 text-center">
                                <div className="card-header bg-info text-light">
                                    <h5 className="my-0 font-weight-normal">
                                        PAQUETE
                                    </h5>
                                </div>
                                <div className="card-body p-0 bg-white text-light">
                                    <h2 className="card-title text-info pricing-card-title">
                                        {preciosFolios[4].folio}
                                    </h2>
                                    <ul className="list-unstyled  text-info mt-0 mb-0">
                                        <li>
                                            TIMBRES
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-secondary text-light">
                                    <h6 className=" mt-0 mb-0 my-0 font-weight-normal">
                                        ${preciosFolios[4].precio}.00
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="row mx-1 my-4 justify-content-center">
                            <div className="card border-5 text-center">
                                <div className="card-header bg-info text-light">
                                    <h5 className="my-0 font-weight-normal">
                                        PAQUETE
                                    </h5>
                                </div>
                                <div className="card-body p-0 bg-white text-light">
                                    <h2 className="card-title text-info pricing-card-title">
                                        {preciosFolios[5].folio}
                                    </h2>
                                    <ul className="list-unstyled  text-info mt-0 mb-0">
                                        <li>
                                            TIMBRES
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-secondary text-light">
                                    <h6 className=" mt-0 mb-0 my-0 font-weight-normal">
                                        ${preciosFolios[5].precio}.00
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="row mx-1 my-4 justify-content-center">
                            <div className="card border-5 text-center">
                                <div className="card-header bg-info text-light">
                                    <h5 className="my-0 font-weight-normal">
                                        PAQUETE
                                    </h5>
                                </div>
                                <div className="card-body p-0 bg-white text-light">
                                    <h2 className="card-title text-info pricing-card-title">
                                        {preciosFolios[6].folio}
                                    </h2>
                                    <ul className="list-unstyled  text-info mt-0 mb-0">
                                        <li>
                                            TIMBRES
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-secondary text-light">
                                    <h6 className=" mt-0 mb-0 my-0 font-weight-normal">
                                        ${preciosFolios[6].precio}.00
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="row mx-1 my-4 justify-content-center">
                            <div className="card border-5 text-center">
                                <div className="card-header bg-info text-light">
                                    <h5 className="my-0 font-weight-normal">
                                        PAQUETE
                                    </h5>
                                </div>
                                <div className="card-body p-0 bg-white text-light">
                                    <h2 className="card-title text-info pricing-card-title">
                                        {preciosFolios[7].folio}
                                    </h2>
                                    <ul className="list-unstyled  text-info mt-0 mb-0">
                                        <li>
                                            TIMBRES
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-secondary text-light">
                                    <h6 className=" mt-0 mb-0 my-0 font-weight-normal">
                                        ${preciosFolios[7].precio}.00
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center text-center">
                    <div className="col mb-4 d-flex justify-content-between">
                        <h3 className="text-success text-start">Paquetes y costos WebService / Convertidor</h3>
                    </div>
                </div>
                <div className="row  d-flex align-items-center">
                    <div className="col-md-4 d-flex justify-content-center  p-2">

                        <img className="d-block img-fluid" src={require('../assets/img/All/main-icono-convertidor.png')} />

                    </div>

                    <div className="col-md-2 ">
                        <div className="row mx-1 my-4 justify-content-center">

                            <div className="card border-5 mx-4 text-center">
                                <div className="card-header bg-info text-light">
                                    <h5 className="my-0 font-weight-normal">PAQUETE</h5>
                                </div>
                                <div className="card-body p-0 bg-white text-light">
                                    <h2 className="card-title text-info pricing-card-title">{preciosTimbre[0].timbre}</h2>
                                    <ul className="list-unstyled  text-info mt-0 mb-0">
                                        <li>TIMBRES</li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-secondary text-light">
                                    <h6 className=" mt-0 mb-0 my-0 font-weight-normal">${preciosTimbre[0].precio}.00</h6>
                                </div>
                            </div>

                        </div>
                        <div className="row mx-1 my-4 justify-content-center">
                            <div className="card border-5 text-center">
                                <div className="card-header bg-info text-light">
                                    <h5 className="my-0 font-weight-normal">
                                        PAQUETE
                                    </h5>
                                </div>
                                <div className="card-body p-0 bg-white text-light">
                                    <h2 className="card-title text-info pricing-card-title">
                                        {preciosTimbre[1].timbre}
                                    </h2>
                                    <ul className="list-unstyled  text-info mt-0 mb-0">
                                        <li>
                                            TIMBRES
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-secondary text-light">
                                    <h6 className=" mt-0 mb-0 my-0 font-weight-normal">
                                        ${preciosTimbre[1].precio}.00
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="row mx-1 my-4 justify-content-center">
                            <div className="card border-5 text-center">
                                <div className="card-header bg-info text-light">
                                    <h5 className="my-0 font-weight-normal">
                                        PAQUETE
                                    </h5>
                                </div>
                                <div className="card-body p-0 bg-white text-light">
                                    <h2 className="card-title text-info pricing-card-title">
                                        {preciosTimbre[2].timbre}
                                    </h2>
                                    <ul className="list-unstyled  text-info mt-0 mb-0">
                                        <li>
                                            TIMBRES
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-secondary text-light">
                                    <h6 className=" mt-0 mb-0 my-0 font-weight-normal">
                                        ${preciosTimbre[2].precio}.00
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="row mx-1 my-4 justify-content-center">
                            <div className="card border-5 text-center">
                                <div className="card-header bg-info text-light">
                                    <h5 className="my-0 font-weight-normal">
                                        PAQUETE
                                    </h5>
                                </div>
                                <div className="card-body p-0 bg-white text-light">
                                    <h2 className="card-title text-info pricing-card-title">
                                        {preciosTimbre[3].timbre}
                                    </h2>
                                    <ul className="list-unstyled  text-info mt-0 mb-0">
                                        <li>
                                            TIMBRES
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-secondary text-light">
                                    <h6 className=" mt-0 mb-0 my-0 font-weight-normal">
                                        ${preciosTimbre[3].precio}.00
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="row mx-1 my-4 justify-content-center">
                            <div className="card border-5 text-center">
                                <div className="card-header bg-info text-light">
                                    <h5 className="my-0 font-weight-normal">
                                        PAQUETE
                                    </h5>
                                </div>
                                <div className="card-body p-0 bg-white text-light">
                                    <h2 className="card-title text-info pricing-card-title">
                                        {preciosTimbre[4].timbre}
                                    </h2>
                                    <ul className="list-unstyled  text-info mt-0 mb-0">
                                        <li>
                                            TIMBRES
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-secondary text-light">
                                    <h6 className=" mt-0 mb-0 my-0 font-weight-normal">
                                        ${preciosTimbre[4].precio}.00
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="row mx-1 my-4 justify-content-center">
                            <div className="card border-5 text-center">
                                <div className="card-header bg-info text-light">
                                    <h5 className="my-0 font-weight-normal">
                                        PAQUETE
                                    </h5>
                                </div>
                                <div className="card-body p-0 bg-white text-light">
                                    <h2 className="card-title text-info pricing-card-title">
                                        {preciosTimbre[5].timbre}
                                    </h2>
                                    <ul className="list-unstyled  text-info mt-0 mb-0">
                                        <li>
                                            TIMBRES
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-secondary text-light">
                                    <h6 className=" mt-0 mb-0 my-0 font-weight-normal">
                                        ${preciosTimbre[5].precio}.00
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="row mx-1 my-4 justify-content-center">
                            <div className="card border-5 text-center">
                                <div className="card-header bg-info text-light">
                                    <h5 className="my-0 font-weight-normal">
                                        PAQUETE
                                    </h5>
                                </div>
                                <div className="card-body p-0 bg-white text-light">
                                    <h2 className="card-title text-info pricing-card-title">
                                        {preciosTimbre[6].timbre}
                                    </h2>
                                    <ul className="list-unstyled  text-info mt-0 mb-0">
                                        <li>
                                            TIMBRES
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-secondary text-light">
                                    <h6 className=" mt-0 mb-0 my-0 font-weight-normal">
                                        ${preciosTimbre[6].precio}.00
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="row mx-1 my-4 justify-content-center">
                            <div className="card border-5 text-center">
                                <div className="card-header bg-info text-light">
                                    <h5 className="my-0 font-weight-normal">
                                        PAQUETE
                                    </h5>
                                </div>
                                <div className="card-body p-0 bg-white text-light">
                                    <h2 className="card-title text-info pricing-card-title">
                                        {preciosTimbre[7].timbre}
                                    </h2>
                                    <ul className="list-unstyled  text-info mt-0 mb-0">
                                        <li>
                                            TIMBRES
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-secondary text-light">
                                    <h6 className=" mt-0 mb-0 my-0 font-weight-normal">
                                        ${preciosTimbre[7].precio}.00
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center text-center">
                    <div className="col mx-1 my-4">
                        <h3 className="text-success text-start">Los precios ya incluyen IVA</h3>
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
                <div className="row">
                    <div className="col-7">
                        <p className="text-light">
                            Adendas, gratuitas en la compra de tu primer paquete de facturación (solo aplica para adendas existentes)
                            Adendas bajo demanda (por definir dependiendo el caso)
                        </p>
                    </div>
                    <div className="col-5"></div>
                </div>



            </>
        )
    }
}
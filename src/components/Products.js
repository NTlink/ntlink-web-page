import { Component } from "react";

export class Products extends Component {

    render() {

        const handleClose = () => this.setState({ show: false });

        return (
            <>
                <div className="container">
                    <h2 className="text-light" >PRODUCTOS</h2>
                    <div className="row align-items-center ">
                        <div className="col-md-2 d-flex justify-content-center">
                            <img src={require('../assets/img/All/main-icono-01.png')} className="d-block img-fluid" alt="NTLINK web service" />
                        </div>
                        <div className="col-md-8 ">
                            <div className="col">
                                <h3 className="text-success">WEB SERVICE</h3>
                            </div>
                            <div className="col">
                                <p className="lead text-light ">Nuestro web service servicio realiza una serie de validaciones antes de certificar el documento, como, por ejemplo: la validez del Sello de la Factura, que el Emisor pueda facturar, que el RFC sea válido, que el Certificado corresponda al Emisor, entre otras. Todas las validaciones mencionadas se encuentran definidas en la Matriz de Validaciones proporcionada por el SAT.
                                    El Web Service (WS) puede ser consumido por cualquier lenguaje de programación, ya que las peticiones se hacen con XML y actualmente todos los lenguajes de programación soportan el manejo de XML. Algunas de las pruebas realizadas para consumir el WS contemplaron el uso de los siguientes lenguajes de programación: VB .NET, C# y Java, todos con resultados satisfactorios.</p>
                            </div>
                        </div>
                        <div className="col-md-2 d-flex justify-content-center align-items-center">
                            <a href="/web-service" className="mbtn buttonexapnd"  ><span className="mb-0">MÁS INFORMACIÓN</span></a>
                        </div>
                    </div>
                    <div className="container justify-content-center bg-dark m-0 p-0">
                        <div className="stripe stripe-2 m-2 p-0"></div>
                    </div>
                    <div className="row align-items-center ">
                        <div className="col-md-2 d-flex justify-content-center">
                            <img src={require('../assets/img/All/main-icono-CFDI.png')} className="d-block img-fluid" alt="NTLINK CFDI" />
                        </div>
                        <div className="col-md-8 ">
                            <div className="col">
                                <h3 className="text-success">PORTAL CFDI</h3>
                            </div>
                            <div className="col">
                                <p className="lead text-light ">Dentro del portal CFDI podrás generar las facturas de los productos o servicios que ofrezcas.
                                    Podrás llevar el control de tus clientes y empresas además de tener los reportes de todos los
                                    movimientos que realices, contaras con todos los complementos, adendas y personalización
                                    de facturas en caso de que así lo necesites.</p>
                            </div>
                        </div>
                        <div className="col-md-2 d-flex justify-content-center align-items-center">
                            <a href="/cfdi-portal" className="mbtn"><span className="mb-0">MÁS INFORMACIÓN</span></a>
                        </div>
                    </div>
                    <div className="container justify-content-center bg-dark m-0 p-0">
                        <div className="stripe stripe-2 m-2 p-0">
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-2 d-flex justify-content-center" >
                            <img src={require('../assets/img/All/main-icono-nomina.png')} className="d-block img-fluid" alt="NTLINK NOMINA" />
                        </div>
                        <div className="col-md-8 justify-content-center">
                            <div className="col">
                                <h3 className="text-success">PORTAL NÓMINA</h3>
                            </div>
                            <div className="col">
                                <p className="lead text-light ">Dentro del portal de nómina, podrás llevar el registro y control de tus empleados dados de alta,
                                    así como el control de sus días trabajados. Podrás generar el calculo de percepciones, deducciones, incapacidades, etc.
                                    Tendrás reportes listos para consultar, así como almacenar y descargar tus recibos de nómina, además de timbrarlos de manera sencilla o masiva.</p>
                            </div>
                        </div>
                        <div className="col-md-2 d-flex justify-content-center align-items-center">
                            <a href="/nomina-portal" className="mbtn"><span className="mb-0">MÁS INFORMACIÓN</span></a>
                        </div>
                    </div>

                    <div className="container justify-content-center bg-dark m-0 p-0">
                        <div className="stripe stripe-2 m-2 p-0">
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-md-2 d-flex justify-content-center">
                            <img src={require('../assets/img/All/main-icono-compsCFDI.png')} className="d-block img-fluid" alt="NTLINK CMPLEMENTOS" />
                        </div>
                        <div className="col-md-8 justify-content-center">
                            <div className="col">
                                <h3 className="text-success">COMPLEMENTOS CFDI</h3>
                            </div>
                            <div className="col">
                                <p className="lead text-light ">Dentro del portal CFDI podrás generar las facturas de los productos o servicios que ofrezcas.
                                    Podrás llevar el control de tus clientes y empresas además de tener los reportes de todos los
                                    movimientos que realices, contaras con todos los complementos, adendas y personalización
                                    de facturas en caso de que así lo necesites.</p>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <h5 className="text-light" > ALGUNOS DE NUESTROS COMPLEMENTOS</h5>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <ul className="list-unstyled text-small">
                                            <li><span className="text-light" > • Instituciones Educativas Privadas
                                                (Complemento IEDU)</span></li>
                                            <li><span className="text-light" > • Complemento de Constancia
                                                de Retenciones (Intereses,
                                                Dividendos, Arrendamiento
                                                en Fideicomiso, Enajenación
                                                de Acciones, Fideicomiso</span></li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <ul className="list-unstyled text-small">
                                            <li><span className="text-light" >No Empresarial, Intereses
                                                hipotecarios, Operaciones con
                                                derivados, Pago extranjeros,
                                                Planes de retiro, Premios, Sector
                                                Financiero)</span></li>
                                            <li><span className="text-light" >• Complemento INE</span></li>
                                            <li><span className="text-light" > • Complemento comercio exterior</span></li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <ul className="list-unstyled text-small">
                                            <li><span className="text-light" > • Complemento servicio parcial de
                                                construcción</span></li>
                                            <li><span className="text-light" > • Complemento vehículos usados</span></li>
                                            <li><span className="text-light" > • CFDI con Impuestos locales</span></li>
                                            <li><span className="text-light" > • Carta Porte Ver 2.0</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 d-flex justify-content-center align-items-center">
                            <a href="/complementos" className="mbtn"><span className="mb-0">MÁS INFORMACIÓN</span></a>
                        </div>
                    </div>

                    <div className="container justify-content-center bg-dark m-0 p-0">
                        <div className="stripe stripe-2 m-2 p-0">
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-md-2 d-flex justify-content-center">
                            <img src={require('../assets/img/All/main-icono-adendas.png')} className="d-block img-fluid" alt="NTLINK-ADENDAS" />
                        </div>
                        <div className="col-md-8 justify-content-center">
                            <div className="col">
                                <h3 className="text-success">ADENDAS</h3>
                            </div>
                            <div className="col">
                                <p className="lead text-light ">Las adendas son complementos de facturación que permite generar integración con datos
                                    específicos de compañías y/o servicios existentes en el mercado.</p>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <h5 className="text-light" > ALGUNAS DE NUESTRAS ADENDAS</h5>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <ul className="list-unstyled text-small">
                                            <li><span className="text-light" >• Adenda 1888</span></li>
                                            <li><span className="text-light" >• Adenda ADO</span></li>
                                            <li><span className="text-light" >• Adenda Vallen</span></li>
                                            <li><span className="text-light" >• Adenda Asonioscoc</span></li>
                                            <li><span className="text-light" >• Adenda Asofarma</span></li>
                                            <li><span className="text-light" >• Adenda Cinépolis</span></li>
                                            <li><span className="text-light" >• Adenda Disney</span></li>
                                            <li><span className="text-light" >• Adenda Nadro</span></li>
                                            <li><span className="text-light" >• Adenda Neto</span></li>
                                            <li><span className="text-light" >• Adenda SKY</span></li>
                                            <li><span className="text-light" >• Adenda IUSACELL</span></li>
                                            <li><span className="text-light" >• Adenda BIC</span></li>
                                            <li><span className="text-light" ></span></li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <ul className="list-unstyled text-small">
                                            <li><span className="text-light" >• Adenda Jumex</span></li>
                                            <li><span className="text-light" >• Adenda para Descripciones largas</span></li>
                                            <li><span className="text-light" >• Adenda Mabe</span></li>
                                            <li><span className="text-light" >• Adenda Pilgrims</span></li>
                                            <li><span className="text-light" >• Adenda Elektra</span></li>
                                            <li><span className="text-light" >• Adenda Pemex</span></li>
                                            <li><span className="text-light" >• Adenda Vallen</span></li>
                                            <li><span className="text-light" >• Adenda Súper Farmacia</span></li>
                                            <li><span className="text-light" >• Adenda Mondelez</span></li>
                                            <li><span className="text-light" >• Adenda Grupo Planeta</span></li>
                                            <li><span className="text-light" >• Adenda Liverpool</span></li>
                                            <li><span className="text-light" >• Adenda Jumex</span></li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <ul className="list-unstyled text-small">
                                            <li><span className="text-light" >• Adenda Honda</span></li>
                                            <li><span className="text-light" >• Adenda Nissan</span></li>
                                            <li><span className="text-light" >• Adenda Volkswagen</span></li>
                                            <li><span className="text-light" >• Adenda Chrysler</span></li>
                                            <li><span className="text-light" >• Adenda General Motors</span></li>
                                            <li><span className="text-light" >• Adenda Soriana</span></li>
                                            <li><span className="text-light" >• Adenda Tridomex</span></li>
                                            <li><span className="text-light" >• Adenda Copel</span></li>
                                            <li><span className="text-light" >• Adenda FEMSA</span></li>
                                            <li><span className="text-light" >• Adenda Sun Chemical</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 d-flex justify-content-center align-items-center">
                            <a href="/adendas" className="mbtn"><span className="mb-0">MÁS INFORMACIÓN</span></a>
                        </div>
                    </div>
                    <div className="container justify-content-center bg-dark m-0 p-0">
                        <div className="stripe stripe-2 m-2 p-0">
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-2 d-flex justify-content-center">
                            <img src={require('../assets/img/All/main-icono-convertidor.png')} className="d-block img-fluid" alt="NTLINK CONVERTIDOR" />
                        </div>
                        <div className="col-md-8 justify-content-center">
                            <div className="col">
                                <h3 className="text-success">CONVERTIDOR</h3>
                            </div>
                            <div className="col">
                                <p className="lead text-light ">Software diseñado para plataformas Windows desarrollado por NTLINK mediante el cual podrás generar
                                    la carga masiva de tu facturación, mediante archivos ya sea txt o xls podrás automatizar tu facturación,
                                    obteniendo de respuesta los archivos xml y pdf sellados por el SAT</p>

                                <p className="lead text-light ">PRECIO CONVERTIDOR $1,200 MXN MAS IVA ANUAL</p>
                            </div>
                        </div>
                        <div className="col-md-2 d-flex justify-content-center align-items-center">
                            <a href="/convertidor" className="mbtn"><span className="mb-0">MÁS INFORMACIÓN</span></a>
                        </div>
                    </div>

                    <div className="container justify-content-center bg-dark m-0 p-0">
                        <div className="stripe stripe-2 m-0 p-0">
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
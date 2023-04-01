import { Component } from "react";


export class NtOverview extends Component {

    render() {
        return (

            < div className="container justify-content-center gradeintBlack bg-transparent pt-5 pb-5">
                <div className="row ">
                    <div className="col-md-3 d-flex justify-content-center text-center">
                        <a target="_blank" href="#">
                            <img src={require('../assets/img/All/main-icono-01.png')} className="d-block img-fluid a-l-2" alt="NTLINK convertidor" />
                        </a>
                    </div>
                    <div className="col-md-9">
                        <div className="text-left py-4">
                            <h1 className="text-success a-r">NTLINK Provedor CFDI Certificado SAT, Servicios de facturación y timbrado másivo</h1>
                        </div>
                        <p className="lead text-light a-r-2">Como proveedor autorizado por el SAT (PAC con número de autorización: 57202) NTLINK Comunicaciones SA de CV.
                            Es una empresa mexicana fundada en diciembre de 2009 con la idea de proporcionar servicios integrales en soluciones de facturación y tecnologías
                            de la Información (venta-renta de equipo de cómputo, desarrollo de aplicaciones y páginas web, monitoreo de servicios
                            de misión crítica, análisis y desarrollo de sistemas, ingeniería y reingeniería de procesos entre otras.).</p>
                    </div>
                </div>
                <div className="row p-5 ">
                    <div className="col-md-3 d-flex justify-content-center h-50 ">
                        <img src={require('../assets/img/All/PAC-logo.gif')} className="d-block img-fluid " alt="PAC 57202" />
                    </div>
                    <div className="col-md-3 d-flex align-items-center">
                        <p className="lead text-light ">Tras un largo proceso de certificación
                            NTLINK se convierte en proveedor
                            autorizado de certificados digitales por
                            internet (PACFDI) en Julio de 2012 con
                            el número de autorización 57202.</p>

                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <h5 className="text-success italic font-weight-bold h4">Nuestro compromiso es brindar servicios de excelencia, calidad
                            y progreso continuo, garantizando la seguridad de la información
                            durante los procesos relacionados y en el almacenamiento de la
                            misma; así como la protección de los datos personales de nuestros
                            clientes.</h5>
                    </div>
                </div>
                <div className="row p-3">
                    <div className="col-md-6 col-lg-4  d-flex justify-content-center">
                        <img src={require('../assets/img/All/main-icono-compsCFDI.png')} className="d-block img-fluid" alt="NTLINK CFDI 4.0" style={{ height: "80px" }} />
                        <a href="hFttps://cfdi33.ntlink.com.mx/Facturacion40" target="_blank" className="mbtn"><span className="mb-0">ACCESO CFDI 4.0</span></a>
                    </div>
                    <div className="col-md-6 col-lg-4 d-flex justify-content-center">
                        <img src={require('../assets/img/All/main-icono-nomina.png')} className="d-block img-fluid" alt="NTLINK NOMINA" style={{ height: "80px" }} />
                        <a href="https://cfdi33.ntlink.com.mx/NominaLocal3.3/wfrLogin.aspx" target="_blank" className="mbtn"><span className="mb-0">ACCESO NÓMINA </span></a>
                    </div>
                    <div className="col-md-6 col-lg-4 d-block col2">

                        <div className="col d-flex justify-content-center align-items-center">
                            <img src={require('../assets/img/All/main-icono-agratuito.png')} className="d-block img-fluid" alt="NTLINK PORTAL GRATUITO" style={{ height: "80px" }} />
                            <a href="https://cfdi33.ntlink.com.mx/FacturaGratuito40" target="_blank" className="mbtn"><span className="mb-0">ACCESO GRATUITO</span></a>
                        </div>
                        <div className="col p-2 d-flex justify-content-center align-items-center">
                            <footer className=" text-light  ">
                                Date de alta y obten
                                <small className="text-success h5 ">
                                    {'\u00A0'}5 folios gratis para generar facturas.
                                </small>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
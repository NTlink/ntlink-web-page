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
                            <h1 className="text-success a-r">NTLINK Proveedor CFDI Certificado SAT, Servicios de facturación y timbrado masivo</h1>
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
            </div>


        )
    }
}
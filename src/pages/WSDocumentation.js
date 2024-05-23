import { Component } from "react";
import '../css/styles.css'; // archivo CSS




export class WSDocumentation extends Component {

    render() {
        return (
            <>

                <div className="my-4">
                    <section id="top" className="section docs-heading">

                        <div className="row">
                            <div className="col-md-12">
                                <div className="big-title text-center text-white">
                                    <h1>NT Link Web Service CFDI 4.0</h1>
                                    <p className="lead">Documentación técnica de uso Web service</p>
                                </div>
                            </div>
                        </div>
                    </section>

                <div className="row">

                        <div className="col-md-3 bg-dark px-3">
                            <nav className="docs-sidebar" data-spy="affix" data-offset-top="300" data-offset-bottom="200" role="navigation">
                                <ul className="nav">
                                    <li><a href="#introduction">Introducción</a></li>
                                    <li><a href="#wsdl_import">Importar WSDL</a></li>
                                    <li><a href="#test_users">Usuarios de prueba</a></li>
                                    <li><a href="#prod_access">Acceso a producción</a></li>
                                    <li><a href="#ws_ops">Operaciones del web service</a>
                                        <ul class="nav">
                                            <li><a href="#ws_ops_1">Timbra CFDI sin sello</a></li>
                                            <li><a href="#ws_ops_2">Timbra CFDI con sello</a></li>
                                            <li><a href="#ws_ops_3">Timbra retención</a></li>
                                            <li><a href="#ws_ops_4">Cancela CFDI</a></li>
                                            <li><a href="#ws_ops_5">Cancela retención</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#csharp_example">Ejemplo de codigo</a></li>
                                    <li><a href="#support">Preguntas y soporte</a></li>
                                </ul>
                            </nav >
                        </div>


                    <div className="col-md-9 bg-dark px-3">
                        <section id="introduction" className="section">
                            <div className="row">
                                <div className="col-md-12 left-align">
                                    <h2 className="text-white">Introducción <hr/></h2>
                                    <div class="row">
                                        <div class="col-md-12 full text-white">
                                            <div>
                                                <p>El Servicio de Administración Tributaria recientemente oficializó la nueva versión del CFDI,
                                                   el cual entró en vigor a partir del <b>1 de enero de 2022, siendo  obligatoria la implementación a partir de mayo de 2022.</b>
                                                </p>

                                                <h4>Pricipales cambios</h4>
                                                <p>Referente a los cambios principales entre CFDI 3.3 y 4.0 podemos encontrar los siguientes cambios</p>

                                                <br/>


                                                <ol>
                                                    <li>Obligatoriedad del nombre y domicilio fiscal del emisor y del receptor.</li>
                                                    <li>Campos para identificar las operaciones donde exista una exportación de mercancías.</li>
                                                    <li>Nuevos apartados para reportar información respecto de las operaciones con el público en general; así como, aquellas que se realicen a cuenta de terceras personas.</li>
                                                    <li>Retenciones e información de pagos versión 2.0</li>
                                                    <li>Nuevos campos para identificar sí los pagos de las operaciones que ampara el comprobante son objeto de impuestos.</li>
                                                    <li>Nuevo apartado con el resumen de los importes totales de los pagos realizados expresados en moneda nacional, así como los impuestos que se trasladan.</li>
                                                    <li>Motivo de cancelación obligatorio</li>
                                                </ol>

                                                <br/>


                                                <div className="alert alert-primary d-flex align-items-center" role="alert">
                                                    <p><i class="fa fa-exclamation-triangle"></i> Los puntos anteriores solo es un resumen, para mayores detalles consultar
                                                        <br/> <a href="http://omawww.sat.gob.mx/tramitesyservicios/Paginas/documentos/GuiallenadoCFDIglobal311221.pdf"> GUIA DE LLENADO CFDI 4</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>

                         <section id="wsdl_import" className="section">

                                                <div className="row">
                                                    <div className="col-md-12 left-align">
                                                        <h2 className="text-white">Importar WSDL <hr/></h2>
                                                    </div>

                                                </div>


                                                <div class="alert alert-primary d-flex align-items-center">
                                                    <p><i class="fa fa-exclamation-triangle"></i>  Antes de iniciar es necesario descargar <strong>SOAP UI Open Source </strong>
                                                        <br/> Liga de descarga SOAP UI ==> <a href="https://www.soapui.org/downloads/soapui/">Descargar</a> </p>
                                                </div>

                                                <hr/>

                                                <h4>Ubicacion WSDL</h4>

                                                <p>La definición del WSDL la encontrarás en la siguinete ruta <code>/cfdi40/servicio-timbrado/servicio-timbrado.wsdl</code>
                                                <br/> Para el ambiente de pruebas la ruta completa es : <code>http://dev-cfdi4.ntlink.com.mx/cfdi40/servicio-timbrado/servicio-timbrado.wsdl</code>
                                                </p>
                                                <p>
                                                    Para importar el WSDL solo abrir SOAP UI e ingresar la rita del wsdl
                                                </p>

                                                <div className="row">
                                                    <div class="col-md-8 col-md-offset-2">
                                                        <img src="../img/importWSDL.png" alt="image" className="img-responsive img-thumbnail"/>
                                                    </div>
                                                </div>
                         </section>
                    </div>
                </div>
            </div>


                <script src="js/syntax-highlighter/scripts/shCore.js"></script>
            </>
        )
    }
}
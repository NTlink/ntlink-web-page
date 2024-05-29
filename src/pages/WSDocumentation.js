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
                            <nav className="docs-sidebar affix" data-spy="affix" data-offset-top="300" data-offset-bottom="200" role="navigation">
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


                                                <div className="alert alert-primary d-flex align-items-center">
                                                    <p><i className="fa fa-exclamation-triangle"></i>  Antes de iniciar es necesario descargar <strong>SOAP UI Open Source </strong>
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
                                                    <div className="col-md-8 col-md-offset-2">
                                                        <img src="/img/importWSDL.png" alt="image" className="img-responsive img-thumbnail"/>
                                                    </div>
                                                </div>
                         </section>

                         {/* end section */}

                         <section id="test_users" className="section">

                        <div className="row">
                            <div className="col-md-12 left-align">
                                <h2 className="text white">Usuarios de prueba<hr/></h2>
                            </div>
                            {/*< end col */}
                        </div>
                            {/*< end row */}

                        <p className="text-white"> Para poder realizar timbrado es necesario contar con usuario, contraseña y sellos cargados en nuestro sistema
                        <br/>  En el ambiente de pruebas es posible usar los siguientes usuarios de prueba
                        </p>

                        <h4>URE180429TM6</h4>

                        <div className="intro1 text-white">
                            <ul>
                                <li><strong>Razon social : </strong>UNIVERSIDAD ROBOTICA ESPAÑOLA</li>
                                <li><strong>RFC : </strong>URE180429TM6</li>
                                <li><strong>Usuario ws  : </strong>URE180429TM6@ntlink.com.mx</li>
                                <li><strong>Contraseña ws : </strong>NTPruebas.2021*?</li>
                            </ul>
                        </div>

                        <h4>EKU9003173C9</h4>

                        <div className="intro1 text-white">
                            <ul>
                                <li><strong>Razon social : </strong>ESCUELA KEMPER URGATE</li>
                                <li><strong>RFC : </strong>EKU9003173C9</li>
                                <li><strong>Usuario ws  : </strong>EKU9003173C9@ntlink.com.mx</li>
                                <li><strong>Contraseña ws : </strong>Factura.2021*</li>
                            </ul>
                        </div>

                    </section>

                    {/* end section */}

                    <section id="prod_access" className="section">

                        <div className="row">
                            <div className="col-md-12 left-align">
                                <h2 className="text-white">Solicitud de acceso a producción<hr/></h2>
                            </div>
                            {/* end col */}
                        </div>
                        {/* end row */}

                        <div className="row text-white">
                            <div className="col-md-12">
                                <h4>1.- Completar sellado de CFDI exitoso en ambiente ambiente de pruebas(opcional)</h4>
                                <p> De acuerdo a sus necesidades  usted prodra requerir hacer pruebas en algunos de los siguientes casos</p>
                                <ol>
                                    <li> Factura PUE</li>
                                    <li> Factura PPD</li>
                                    <li> Complemento de pago</li>
                                </ol>
                            </div>
                        </div>

                        <div className="row text-white">
                            <div className="col-md-12">
                                <h4>2.- Realizar compra de folios</h4>
                                <p>Concretar la compra de los folios, para mayor información consultar las costos en <a href="https://ntlink.com.mx/"> NT link web page </a></p>
                            </div>
                        </div>

                        <div className="row text-white">
                            <div className="col-md-12">
                                <h4>3.- Acceso al portal de CFDI </h4>
                                <p>Una vez concretada la compra de los folios, usted tendra que acceder al <a href="https://ntlink.com.mx/"> Portal CFDI NT Link </a>, en el que tendra que  cargar los sellos y llaves paar el timbrado</p>
                            </div>
                        </div>

                        <div className="row text-white">
                            <div className="col-md-12">
                                <h4>4.- Carga de sellos y datos emisor</h4>
                                <p> Una vez ingresando al portal CFDI sera necesario que usted de de alta los datos del emisor u emisores de facturas si tiene dudas puede contactarnos enviando un correo a  <code>soporte@ntlink.com.mx</code></p>
                                <p> El coreo redactado debe de contener la siguiente información</p>
                                <ol>
                                    <li> RFC emisor</li>
                                    <li> Razon social emisor</li>
                                    <li> UUID's obtenidos en el ambiente de pruebas</li>
                                    <li> Como adjuntos los archivos planos de las request exitosas en el ambiente de pruebas</li>
                                </ol>
                            </div>
                        </div>

                        <p className="text-white">Listo, una vez completados los pasos anteriores usted sera capaz de realizar timbrado por  medio del servicio de web service</p>

                    </section>

                    {/* end section */}


                    <section id="ws_ops" class="section">

                        <div class="row text-white">
                            <div class="col-md-12 left-align">
                                <h2 class="dark-text">Operaciones Web service<hr/></h2>
                            </div>
                            {/* end col */}
                        </div>
                        {/* end row */}

                        <h4 id="ws_ops_1">Timbra CFDI sin sello</h4>
                        <p class="text-white"> Existen 2 posibles operaciones al timbrar un CFDi sin sello, estas son <code> TimbraCfdiSinSello</code> y <code>TimbraCfdiQrSinSello</code>
                            A continuación se muestra el ejemplo de como realizar el timbrado sin sello recuperando el codigo QR
                        </p>
                        <div class="row">

                            <div class="col-lg-12">
                                <strong class="row text-white">Request</strong>
                                <pre class="brush: xml text-white"> {`
<textarea>                               

<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <TimbraCfdiQrSinSello xmlns="https://ntlink.com.mx/IServicioTimbrado">
            <userName>EKU9003173C9@ntlink.com.mx</userName>
            <password>Factura.2021*</password>
            <comprobante><![CDATA[<?xml version="1.0" encoding="UTF-8"?>
            <cfdi:Comprobante xmlns:cfdi="http://www.sat.gob.mx/cfd/4" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sat.gob.mx/cfd/4 http://www.sat.gob.mx/sitio_internet/cfd/4/cfdv40.xsd" Version="4.0" Serie="123" Folio="00001" Fecha="2022-02-13T14:30:44" FormaPago="01" SubTotal="100.00" Moneda="MXN" Total="116.00" TipoDeComprobante="I" Exportacion="01" MetodoPago="PUE" LugarExpedicion="20000">
               <cfdi:Emisor Rfc="EKU9003173C9" Nombre="ESCUELA KEMPER URGATE" RegimenFiscal="601"/>
               <cfdi:Receptor Rfc="MASO451221PM4" Nombre="MARIA OLIVIA MARTINEZ SAGAZ" DomicilioFiscalReceptor="80290" RegimenFiscalReceptor="601" UsoCFDI="G01" />
               <cfdi:Conceptos>
                  <cfdi:Concepto ClaveProdServ="78101802" Cantidad="1" ClaveUnidad="H87" Unidad="PIEZA" Descripcion="PRUEBA DE TIMBRADO" ValorUnitario="100.00" Importe="100.00" ObjetoImp="02">
                     <cfdi:Impuestos>
                        <cfdi:Traslados>
                           <cfdi:Traslado Base="100" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="16.00" />
                        </cfdi:Traslados>
                     </cfdi:Impuestos>
                  </cfdi:Concepto>
               </cfdi:Conceptos>
               <cfdi:Impuestos TotalImpuestosTrasladados="16.00">
                  <cfdi:Traslados>
                     <cfdi:Traslado Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="16.00" Base="100.00" />
                  </cfdi:Traslados>
               </cfdi:Impuestos>
               <cfdi:Complemento />
            </cfdi:Comprobante>]]></comprobante>
        </TimbraCfdiQrSinSello>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
</textarea> `}



                                </pre>
                            </div>
                            <div class="col-lg-12  text-white">
                                <strong className="text-white">Response</strong>
                                <pre class="brush : html">  {`

<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
	<SOAP-ENV:Header/>
	<SOAP-ENV:Body>
		<ns2:TimbraCfdiQrSinSelloResponse
                xmlns:ns2="https://ntlink.com.mx/IServicioTimbrado">
			<ns2:TimbraCfdiQrSinSelloResult>
				<ns2:CadenaTimbre>||1.1|D77BA5E0-3381-43BE-9C4B-CB78E0094B0E|2022-02-13T14:38:57|SPR190613I52|BKud65GXbzZOdLYQll0ktvUBJUXHjcM87FCxN4iXBzRt5ytS1Gl2uXqKx+WnAHsZXxPa2DdYKkqDlBDsH9LfQ6fLE6nrzEvZwt29C3DFdGmphJKm56jcFbFsWKdjJQGnNhxP0391LWZ4VtDC4iAIGsX9pxrOTbTaKFdSJ1yXnljs/p/kfxlNtereIZRQ+d5hHoXBbK8XHUIOE+yAN5ZLdb/v7AERQOdSrpjblFNJ7qUiehmfGSL29q46wX7w2lv+GCC1CBJ9MFO8omSUmrrXmn6FFgMgld6TfFK3vzG1qAbQ+HmBIPshRvyg1dS9TXa2JLIiMxYi3O6gaJ+ac96Miw==|30001000000400002495||</ns2:CadenaTimbre>
				<ns2:Cfdi>&lt;?xml version="1.0" encoding="utf-8"?&gt;&lt;cfdi:Comprobante
					xmlns:cfdi="http://www.sat.gob.mx/cfd/4"
					xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sat.gob.mx/cfd/4 http://www.sat.gob.mx/sitio_internet/cfd/4/cfdv40.xsd" Version="4.0" Serie="123" Folio="00001" Fecha="2022-02-13T14:28:37" FormaPago="01" SubTotal="100.00" Moneda="MXN" Total="116.00" TipoDeComprobante="I" Exportacion="01" MetodoPago="PUE" LugarExpedicion="20000" Certificado="MIIFuzCCA6OgAwIBAgIUMzAwMDEwMDAwMDA0MDAwMDI0MzQwDQYJKoZIhvcNAQELBQAwggErMQ8wDQYDVQQDDAZBQyBVQVQxLjAsBgNVBAoMJVNFUlZJQ0lPIERFIEFETUlOSVNUUkFDSU9OIFRSSUJVVEFSSUExGjAYBgNVBAsMEVNBVC1JRVMgQXV0aG9yaXR5MSgwJgYJKoZIhvcNAQkBFhlvc2Nhci5tYXJ0aW5lekBzYXQuZ29iLm14MR0wGwYDVQQJDBQzcmEgY2VycmFkYSBkZSBjYWRpejEOMAwGA1UEEQwFMDYzNzAxCzAJBgNVBAYTAk1YMRkwFwYDVQQIDBBDSVVEQUQgREUgTUVYSUNPMREwDwYDVQQHDAhDT1lPQUNBTjERMA8GA1UELRMIMi41LjQuNDUxJTAjBgkqhkiG9w0BCQITFnJlc3BvbnNhYmxlOiBBQ0RNQS1TQVQwHhcNMTkwNjE3MTk0NDE0WhcNMjMwNjE3MTk0NDE0WjCB4jEnMCUGA1UEAxMeRVNDVUVMQSBLRU1QRVIgVVJHQVRFIFNBIERFIENWMScwJQYDVQQpEx5FU0NVRUxBIEtFTVBFUiBVUkdBVEUgU0EgREUgQ1YxJzAlBgNVBAoTHkVTQ1VFTEEgS0VNUEVSIFVSR0FURSBTQSBERSBDVjElMCMGA1UELRMcRUtVOTAwMzE3M0M5IC8gWElRQjg5MTExNlFFNDEeMBwGA1UEBRMVIC8gWElRQjg5MTExNk1HUk1aUjA1MR4wHAYDVQQLExVFc2N1ZWxhIEtlbXBlciBVcmdhdGUwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCN0peKpgfOL75iYRv1fqq+oVYsLPVUR/GibYmGKc9InHFy5lYF6OTYjnIIvmkOdRobbGlCUxORX/tLsl8Ya9gm6Yo7hHnODRBIDup3GISFzB/96R9K/MzYQOcscMIoBDARaycnLvy7FlMvO7/rlVnsSARxZRO8Kz8Zkksj2zpeYpjZIya/369+oGqQk1cTRkHo59JvJ4Tfbk/3iIyf4H/Ini9nBe9cYWo0MnKob7DDt/vsdi5tA8mMtA953LapNyCZIDCRQQlUGNgDqY9/8F5mUvVgkcczsIgGdvf9vMQPSf3jjCiKj7j6ucxl1+FwJWmbvgNmiaUR/0q4m2rm78lFAgMBAAGjHTAbMAwGA1UdEwEB/wQCMAAwCwYDVR0PBAQDAgbAMA0GCSqGSIb3DQEBCwUAA4ICAQBcpj1TjT4jiinIujIdAlFzE6kRwYJCnDG08zSp4kSnShjxADGEXH2chehKMV0FY7c4njA5eDGdA/G2OCTPvF5rpeCZP5Dw504RZkYDl2suRz+wa1sNBVpbnBJEK0fQcN3IftBwsgNFdFhUtCyw3lus1SSJbPxjLHS6FcZZ51YSeIfcNXOAuTqdimusaXq15GrSrCOkM6n2jfj2sMJYM2HXaXJ6rGTEgYmhYdwxWtil6RfZB+fGQ/H9I9WLnl4KTZUS6C9+NLHh4FPDhSk19fpS2S/56aqgFoGAkXAYt9Fy5ECaPcULIfJ1DEbsXKyRdCv3JY89+0MNkOdaDnsemS2o5Gl08zI4iYtt3L40gAZ60NPh31kVLnYNsmvfNxYyKp+AeJtDHyW9w7ftM0Hoi+BuRmcAQSKFV3pk8j51la+jrRBrAUv8blbRcQ5BiZUwJzHFEKIwTsRGoRyEx96sNnB03n6GTwjIGz92SmLdNl95r9rkvp+2m4S6q1lPuXaFg7DGBrXWC8iyqeWE2iobdwIIuXPTMVqQb12m1dAkJVRO5NdHnP/MpqOvOgLqoZBNHGyBg4Gqm4sCJHCxA1c8Elfa2RQTCk0tAzllL4vOnI1GHkGJn65xokGsaU4B4D36xh7eWrfj4/pgWHmtoDAYa8wzSwo2GVCZOs+mtEgOQB91/g==" NoCertificado="30001000000400002434" Sello="BKud65GXbzZOdLYQll0ktvUBJUXHjcM87FCxN4iXBzRt5ytS1Gl2uXqKx+WnAHsZXxPa2DdYKkqDlBDsH9LfQ6fLE6nrzEvZwt29C3DFdGmphJKm56jcFbFsWKdjJQGnNhxP0391LWZ4VtDC4iAIGsX9pxrOTbTaKFdSJ1yXnljs/p/kfxlNtereIZRQ+d5hHoXBbK8XHUIOE+yAN5ZLdb/v7AERQOdSrpjblFNJ7qUiehmfGSL29q46wX7w2lv+GCC1CBJ9MFO8omSUmrrXmn6FFgMgld6TfFK3vzG1qAbQ+HmBIPshRvyg1dS9TXa2JLIiMxYi3O6gaJ+ac96Miw=="&gt;&lt;cfdi:Emisor Rfc="EKU9003173C9" Nombre="ESCUELA KEMPER URGATE" RegimenFiscal="601" /&gt;&lt;cfdi:Receptor Rfc="MASO451221PM4" Nombre="MARIA OLIVIA MARTINEZ SAGAZ" DomicilioFiscalReceptor="80290" RegimenFiscalReceptor="601" UsoCFDI="G01" /&gt;&lt;cfdi:Conceptos&gt;&lt;cfdi:Concepto ClaveProdServ="78101802" Cantidad="1" ClaveUnidad="H87" Unidad="PIEZA" Descripcion="PRUEBA DE TIMBRADO" ValorUnitario="100.00" Importe="100.00" ObjetoImp="02"&gt;&lt;cfdi:Impuestos&gt;&lt;cfdi:Traslados&gt;&lt;cfdi:Traslado Base="100" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="16.00" /&gt;&lt;/cfdi:Traslados&gt;&lt;/cfdi:Impuestos&gt;&lt;/cfdi:Concepto&gt;&lt;/cfdi:Conceptos&gt;&lt;cfdi:Impuestos TotalImpuestosTrasladados="16.00"&gt;&lt;cfdi:Traslados&gt;&lt;cfdi:Traslado Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="16.00" Base="100.00" /&gt;&lt;/cfdi:Traslados&gt;&lt;/cfdi:Impuestos&gt;&lt;cfdi:Complemento&gt;&lt;tfd:TimbreFiscalDigital
					xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sat.gob.mx/TimbreFiscalDigital http://www.sat.gob.mx/sitio_internet/cfd/TimbreFiscalDigital/TimbreFiscalDigitalv11.xsd" Version="1.1" UUID="D77BA5E0-3381-43BE-9C4B-CB78E0094B0E" FechaTimbrado="2022-02-13T14:38:57" RfcProvCertif="SPR190613I52" SelloCFD="BKud65GXbzZOdLYQll0ktvUBJUXHjcM87FCxN4iXBzRt5ytS1Gl2uXqKx+WnAHsZXxPa2DdYKkqDlBDsH9LfQ6fLE6nrzEvZwt29C3DFdGmphJKm56jcFbFsWKdjJQGnNhxP0391LWZ4VtDC4iAIGsX9pxrOTbTaKFdSJ1yXnljs/p/kfxlNtereIZRQ+d5hHoXBbK8XHUIOE+yAN5ZLdb/v7AERQOdSrpjblFNJ7qUiehmfGSL29q46wX7w2lv+GCC1CBJ9MFO8omSUmrrXmn6FFgMgld6TfFK3vzG1qAbQ+HmBIPshRvyg1dS9TXa2JLIiMxYi3O6gaJ+ac96Miw==" NoCertificadoSAT="30001000000400002495" SelloSAT="smK9Dbw48yw0oUWRh7qZwcvWeJ7qbeS9KredmbxwAqwncxUQWGNPWZxvR3sNK2fKt/7G/HtWmgGJ89MpiluV4ktpwEvIPA70QTCrI18N+lrFUSHQGPRqmmvDct0CjxJRPOTxkDUB5ZU5FcqO4+rG2M4cGgzJxYJMl2eyZE3bpcejHlslEME4T16f8NDBslkdosevR3IW0sMmwh2O+xrgbEiNoqYM8vb9CJHAkFGZh257KT1p4ZxTozfRnWYrt9N8fKzmtYpBMMo5dldi0YpuRRKTHNl9MiX5MGnIpapP8SLoFcntQLXVbYXFftwxmC3ef5CMBcIUDx5guUHwSpDiHA=="
					xmlns:tfd="http://www.sat.gob.mx/TimbreFiscalDigital" /&gt;&lt;/cfdi:Complemento&gt;&lt;/cfdi:Comprobante&gt;
				</ns2:Cfdi>
				<ns2:DescripcionError/>
				<ns2:QrCodeBase64>iVBORw0KGgoAAAANSUhEUgAAAHIAAAByCAYAAACP3YV9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAsZSURBVHhe7ZHraqNLDAT3/V96DwZ3EDUqS2Nnf5yQgsb0RfMF8ufvLz+C33/kD+H3H/lD+P1H/hCOf+SfP3/eksHe9tOO3ph26U0T212Y9ulvRY6kO9rIYG/7aUdvTLv0pontLkz79LciR2JDQx8e3pl6kr3dsY/C5En6rULXVRHLDX3n+fvFtz08vDP1JHu7Yx+FyZP0W4WuqyKWG/rO8/cLDuOp8K88RW7zidxRYcoDfdjm8VSgD0dih1T4V54it/lE7qgw5YE+bPN4KtCHI7FDKphnTthP+4nte7Zjbry7D1tPBfpwJHZIBfPMCftpP7F9z3bMjXf3YeupQB+OxA6psPVTHhm2M/+pSLd5KHRdlcG+3lQF+nAkdkiFrZ/yyLCd+U9Fus1DoeuqDPb1pirQhyOxocF9PBUsD+yjLdOe/ad7+pDc+jD1xPZH8unD8VSwPLCPtkx79p/u6UNy68PUE9sfSYa3Cr/+PX8rciTd0Ubh17/nb0XO5EP4ofrxGxnTzvLA3va2+678u/n2F+0Pv5Ux7SwP7G1vu+/Kv5vjRfvwpHfp3nqlQB/q9pVIt3mlW+yeuWniWPCwPvZK79K99UqBPtTtK5Fu80q32D1z08S46B59aMJ223uD9/Emwtz8Ng/sKcL8493zV8khNWG77b3B+3gTYW5+mwf2FGH+8e75+4UNSXbbPeFdfatToDemO/OmYJ45sZ55PPOJY7l9oH5ssye8q291CvTGdGfeFMwzJ9Yzj2c+cSz5EBXoSb2pCl3XybCd5Qb3FLntI2J5YD/un79f5MAU6Em9qQpd18mwneUG9xS57SNieWA/7p+/BznkA8wnBfpgOyrQh7qtPXOT0W2rDPb15lUeha57iOhfYofMJwX6YDsq0Ie6rT1zk9Ftqwz29eZVHoWue4joX6IH5bFXvVFvux3zuq15YE+F29y43W33W+w9/YIePPOpN+ptt2NetzUP7Klwmxu3u+1+i713JBxuPXOy3ZHpjrn5bR6Y122XB3oju0mBnhzN9IB55mS7I9Mdc/PbPDCv2y4P9EZ2kwI9ORp7gDJsN+WhbqoCfajbKtJtOgV6o97W/dYzJ9PuSDisx1WG7aY81E1VoA91W0W6TadAb9Tbut965mTa6eV4KD19qNsbGezrTZeHyYfkpkAf6rb29KTeVAX6oC/WR9pD6elD3d7IYF9vujxMPiQ3BfpQt7WnJ/WmKtAHfdEOPiXv8n36MO3iLQ91s1GgD7a7zUPdVAV6os10+C55l+/Th2kXb3mom40CfbDdbR7qpirQE23qY52C5YS7iLybW29wv/WmLdzbveWGLvOQKVhOuIvIu7n1Bvdbb9rCvd1bbuyXT6YPvNsnZ7/NTRPc1dsqYj3zScbUk/3yyad/gPXJ2W9z0wR39baKWM98kjH15FjWj2wemvbsTUa3fShYTthPnqSnwtZTxPKgd8/fLzK0AzLt2ZuMbvtQsJywnzxJT4Wtp4jlQe+evwe3D5o3GdPu3d78Nt/Cu/pWl5PbPGgzHqI3bzKm3bu9+W2+hXf1rS4nt3k4mhyYiOWBve2TU4b12zvumE+a4K7ednmg33Jc5CETsTywt31yyrB+e8cd80kT3NXbLg/0W/TCPkAZ3bYqdN0nMrptVaAn1iffilge6m2300se1EeqjG5bFbruExndtirQE+uTb0UsD/W22x0JD6LQdZ1C1z000d1UGd32Rgb7elNldNt3ZBxNd/xQ6LpOoesemuhuqoxueyODfb2pMrrtOzKOZjxY9hTpNhuFrqsy2Nebmk9M+/pmJ8N2locjsWHY9hTpNhuFrqsy2Nebmk9M+/pmJ8N2locj0WF5pPaTJ+kpY+pDfavuzTMn3EWk2zwUPvVbjgt7KDn7yZP0lDH1ob5V9+aZE+4i0m0eCp/6LcfF9NC2pwhz2xG7owz29abmgXnddgpTbtSburM8HIkNw7anCHPbEbujDPb1puaBed12ClNu1Ju6szwcyXiAfpLRbR8y2Jvf6pbujSrSbT5RoA9HUo/bA/STjG77kMHe/Fa3dG9UkW7ziQJ9OJJ63Mmwvt6+ErHePPPA3Dxzwl1Euk2VMe3G/vn7BQ8ow/p6+0rEevPMA3PzzAl3Eek2Vca0G/vn7xcc1uOaB+bTznrCXb2tIt2mKtCT7T45e/pQt10ftrtwLHhYH6t5YD7trCfc1dsq0m2qAj3Z7pOzpw912/VhuwvH4vaBwP2tJ7Y3GdYzj383NwX6ULe1pw+aP3+/yNAODO5vPbG9ybCeefy7uSnQh7qtPX3Q/Pl7kIOtAr1RbzsZ2950C+/qWzUn1tfbToS57p6/BznYKtAb9baTse1Nt/CuvlVzYn297USY6+75O7J9cIvdb9/N7nYfPvUk/aTQdZ2C5cH/MsAH7MEtdr99N7vbffjUk/STQtd1CpYH/ct4uFUwbwpd90qk2zwUzDMPzOu2KtCTetPtrKcn2tTHbhTMm0LXvRLpNg8F88wD87qtCvSk3nQ76+nJ0dRHusMpZ2/+Vltszzx+0pbu9qFg/tM8HMl4MOTszd9qi+2Zx0/a0t0+FMx/moczeWKHzKkttt++M+3Ym2du2J4+1G3tLf8Ufck+yJzaYvvtO9OOvXnmhu3pQ93W3vJP0ZduP2j72/wWvhOFf51PbO9sN/mgL+fADontb/Nb+E4U/nU+sb2z3eSDvmwHIf12F+rNq5wi29w88wnebfUu3VsPGdqMh+XxzS7Um1c5Rba5eeYTvNvqXbq3HjK04eH0EMne7qY+bHeEe7ufdvQhOXvzzAN7aosu+dD1w8+93U192O4I93Y/7ehDcvbmmQf21JZxyQfrR75DhPl2F5Kzpw9Tbgr0wfLAfvIT49I+8F0izLe7kJw9fZhyU6APlgf2k584lnmAD02epOfu1hPrp3zSBHf1tubB+lsfLA9HkwMeTp6k5+7WE+unfNIEd/W25sH6Wx8sD0eTAx4yp4LlwXp6o95u9oF3UTBvOanb2tMH2zHfclzYg8ypYHmwnt6ot5t94F0UzFtO6rb29MF2zLfoxe3DtmdOha6repfpnr15yrAdfajbKsN6vaiPdofE9syp0HVV7zLdszdPGbajD3VbZVjvF0AfeOaTjG77EGE+7SaFKSd1W3vzU24K9Ma8eGIPJp9kdNuHCPNpNylMOanb2pufclOgN+bFJfbh5OyZR2HrKYP95ENyinSbTobtLA/+4pvoh8ofUXvmUdh6ymA/+ZCcIt2mk2E7y8OR8GAr0m06hSk3pr15y8m0i2dObDf5LcdFHroV6TadwpQb09685WTaxTMntpv8luPi9iHu4y0P9EZ23E+5sd1P+dSHuq0ypp3mz98vbGhwH295oDey437Kje1+yqc+1G2VMe00f/5+wWE8Fbae+QT39Y0uD3XziULXPUQsD/X2HQX6cCR2SIWtZz7BfX2jy0PdfKLQdQ8Ry0O9fUeBPhyJHVJh8sF2Ux6F2zywpwJ9qNuqYP42f5fj0j5AhckH2015FG7zwJ4K9KFuq4L52/xdjkv7ABUmT6xnPu22PRW6rlOgD5YT7uwuOXvLw5FwWI+rwuSJ9cyn3banQtd1CvTBcsKd3SVnb3k4Ehsa2z1327uQ/aRAb9TbKoN9vakKUx7qpubB8nA00wHZ7rnb3oXsJwV6o95WGezrTVWY8lA3NQ+Wh6Opj90obD3zLXb/XXlgXrdVgZ7Um7pjHgV641jUx24Utp75Frv/rjwwr9uqQE/qTd0xjwK9MS9++V/w+4/8Ifz+I38Iv//IH8Hfv/8BcvCH4k4WfTQAAAAASUVORK5CYII=</ns2:QrCodeBase64>
				<ns2:Valido>true</ns2:Valido>
			</ns2:TimbraCfdiQrSinSelloResult>
		</ns2:TimbraCfdiQrSinSelloResponse>
	</SOAP-ENV:Body>
</SOAP-ENV:Envelope>
`}
                                </pre>
                            </div>

                            {/* end col */}
                        </div>
                        {/* end row */}

                        <hr/>

                        <h4 id="ws_ops_2">Timbra CFDI con sello</h4>
                        <p className="text-white"> Existen 2 posibles operaciones al timbrar un CFDi con sello, estas son <code> TimbraCfdi</code> y <code>TimbraCfdiQr</code>
                            A continuación se muestra el ejemplo de como realizar el timbrado con sello recuperando el codigo QR
                        </p>
                        <div class="row  text-white">

                            <div class="col-lg-12">
                                <strong>Request</strong>
                                <pre class="brush: xml">
                                {`
<textarea>



    
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <TimbraCfdiQr xmlns="https://ntlink.com.mx/IServicioTimbrado">
            <userName>URE180429TM6@ntlink.com.mx</userName>
            <password>NTPruebas.2021*?</password>
            <comprobante><![CDATA[<?xml version="1.0" encoding="utf-8" standalone="no"?><cfdi:Comprobante xmlns:cfdi="http://www.sat.gob.mx/cfd/4" xmlns:pago10="http://www.sat.gob.mx/Pagos" xmlns:tfd="http://www.sat.gob.mx/TimbreFiscalDigital" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" Certificado="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" Descuento="0.00" Exportacion="01" Fecha="2022-02-13T15:17:19" Folio="20225310101440551" FormaPago="99" LugarExpedicion="04700" MetodoPago="PUE" Moneda="MXN" NoCertificado="30001000000400002444" Sello="BsHL8b4kon4XDQmtoPRYh87/yF+SpRLZEwcwzLFOfKNLcY8JkcYpTiDQi38Uh2fvLZgO5JYU3l/9PhOruxKjhenTbeXcxskHkfCf8NBn2tELzPDWVmZz9t64Syu6BON9Vbf/x+Ot7C021fsVbMTITd9p9u3Mjz3PE443fwOljBIMhc60yZFUOIejRy+Z2Ll1Zv5crTn34qU8bRFSMog1Z2mQSar7G73BXZEayWMAf/ttlW415zzmobRDAFjQ6cbHSmc81Ox2JoG9Ihuvtp4Za7qN3wGkQZ81uLdwjRvXps6T+nJBVVmzjPmgZamwmuKWVWfbRCaXoGPLvFpbbSnHiQ==" SubTotal="1.00" TipoCambio="1" TipoDeComprobante="I" Total="1.16" Version="4.0" xsi:schemaLocation="http://www.sat.gob.mx/cfd/3 http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv33.xsd http://www.sat.gob.mx/Pagos http://www.sat.gob.mx/sitio_internet/cfd/Pagos/Pagos10.xsd"><cfdi:Emisor Nombre="UNIVERSIDAD ROBOTICA ESPAÑOLA" RegimenFiscal="601" Rfc="URE180429TM6"/><cfdi:Receptor DomicilioFiscalReceptor="04600" Nombre="EDGAR JOSEDUARDO RAMOS SILVEYRA" RegimenFiscalReceptor="601" Rfc="RASE8810158B9" UsoCFDI="G03"/><cfdi:Conceptos><cfdi:Concepto Cantidad="1.000000" ClaveProdServ="84111506" ClaveUnidad="H87" Descripcion="timbres" Descuento="0.00" Importe="1.000000" ObjetoImp="02" Unidad="Pieza" ValorUnitario="1.000000"><cfdi:Impuestos><cfdi:Traslados><cfdi:Traslado Base="1.000000" Importe="0.160000" Impuesto="002" TasaOCuota="0.160000" TipoFactor="Tasa"/></cfdi:Traslados></cfdi:Impuestos></cfdi:Concepto></cfdi:Conceptos><cfdi:Impuestos TotalImpuestosTrasladados="0.16"><cfdi:Traslados><cfdi:Traslado Base="1.00" Importe="0.16" Impuesto="002" TasaOCuota="0.160000" TipoFactor="Tasa"/></cfdi:Traslados></cfdi:Impuestos><cfdi:Complemento/></cfdi:Comprobante>]]></comprobante>
        </TimbraCfdiQr>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>

</textarea>
`}
                                </pre>
                            </div>
                            <div class="col-lg-12 text-white">
                                <strong>Response</strong>
                                <pre class="brush : html"> {`

<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns2:TimbraCfdiQrResponse xmlns:ns2="https://ntlink.com.mx/IServicioTimbrado">
            <ns2:TimbraCfdiQrResult>
                <ns2:CadenaTimbre>||1.1|7597C3AD-9EF9-4239-9AFA-4243C355B32A|2022-02-13T15:21:06|SPR190613I52|JVSuiP3JL10yKakynrlIi0miBdqxcnHvnH4l4UjkXb8SA+sW9CKnsCjDZ/JVgJoM6tqJ4h28aapP3vgCgrJ9K9jHjgpFkpCdKNkjkkMFTNIOyBdeUJGnhJ3JCV5HcB/MuUsE5jFcTtnF4dWtezkVuFaXXV9KrZpSRpWkP7qfbDqwGY7UEffqaGxkyy7mfugtDX7la3vZF+lKYiFOZLgEOKOzIapGDmKPgUwr052GmiUrXaCgOimuwg8GIHGoJ7M2SHY8wesRk6hbGOTosVoOOJxy1xZdx42mNZ2Oead7vLrQ10P3mNEMh3hoNZcaY7bcsKjyse46Ko/h4OY/to9rYg==|30001000000400002495||</ns2:CadenaTimbre>
                <ns2:Cfdi>&lt;?xml version="1.0" encoding="utf-8"?&gt;&lt;cfdi:Comprobante xmlns:cfdi="http://www.sat.gob.mx/cfd/4" xmlns:pago10="http://www.sat.gob.mx/Pagos" xmlns:tfd="http://www.sat.gob.mx/TimbreFiscalDigital" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" Certificado="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" Descuento="0.00" Exportacion="01" Fecha="2022-02-13T15:20:44" Folio="20225310101440551" FormaPago="99" LugarExpedicion="04700" MetodoPago="PUE" Moneda="MXN" NoCertificado="30001000000400002444" Sello="JVSuiP3JL10yKakynrlIi0miBdqxcnHvnH4l4UjkXb8SA+sW9CKnsCjDZ/JVgJoM6tqJ4h28aapP3vgCgrJ9K9jHjgpFkpCdKNkjkkMFTNIOyBdeUJGnhJ3JCV5HcB/MuUsE5jFcTtnF4dWtezkVuFaXXV9KrZpSRpWkP7qfbDqwGY7UEffqaGxkyy7mfugtDX7la3vZF+lKYiFOZLgEOKOzIapGDmKPgUwr052GmiUrXaCgOimuwg8GIHGoJ7M2SHY8wesRk6hbGOTosVoOOJxy1xZdx42mNZ2Oead7vLrQ10P3mNEMh3hoNZcaY7bcsKjyse46Ko/h4OY/to9rYg==" SubTotal="1.00" TipoCambio="1" TipoDeComprobante="I" Total="1.16" Version="4.0" xsi:schemaLocation="http://www.sat.gob.mx/cfd/3 http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv33.xsd http://www.sat.gob.mx/Pagos http://www.sat.gob.mx/sitio_internet/cfd/Pagos/Pagos10.xsd"&gt;&lt;cfdi:Emisor Nombre="UNIVERSIDAD ROBOTICA ESPAÑOLA" RegimenFiscal="601" Rfc="URE180429TM6" /&gt;&lt;cfdi:Receptor DomicilioFiscalReceptor="04600" Nombre="EDGAR JOSEDUARDO RAMOS SILVEYRA" RegimenFiscalReceptor="601" Rfc="RASE8810158B9" UsoCFDI="G03" /&gt;&lt;cfdi:Conceptos&gt;&lt;cfdi:Concepto Cantidad="1.000000" ClaveProdServ="84111506" ClaveUnidad="H87" Descripcion="timbres" Descuento="0.00" Importe="1.000000" ObjetoImp="02" Unidad="Pieza" ValorUnitario="1.000000"&gt;&lt;cfdi:Impuestos&gt;&lt;cfdi:Traslados&gt;&lt;cfdi:Traslado Base="1.000000" Importe="0.160000" Impuesto="002" TasaOCuota="0.160000" TipoFactor="Tasa" /&gt;&lt;/cfdi:Traslados&gt;&lt;/cfdi:Impuestos&gt;&lt;/cfdi:Concepto&gt;&lt;/cfdi:Conceptos&gt;&lt;cfdi:Impuestos TotalImpuestosTrasladados="0.16"&gt;&lt;cfdi:Traslados&gt;&lt;cfdi:Traslado Base="1.00" Importe="0.16" Impuesto="002" TasaOCuota="0.160000" TipoFactor="Tasa" /&gt;&lt;/cfdi:Traslados&gt;&lt;/cfdi:Impuestos&gt;&lt;cfdi:Complemento&gt;&lt;tfd:TimbreFiscalDigital xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sat.gob.mx/TimbreFiscalDigital http://www.sat.gob.mx/sitio_internet/cfd/TimbreFiscalDigital/TimbreFiscalDigitalv11.xsd" Version="1.1" UUID="7597C3AD-9EF9-4239-9AFA-4243C355B32A" FechaTimbrado="2022-02-13T15:21:06" RfcProvCertif="SPR190613I52" SelloCFD="JVSuiP3JL10yKakynrlIi0miBdqxcnHvnH4l4UjkXb8SA+sW9CKnsCjDZ/JVgJoM6tqJ4h28aapP3vgCgrJ9K9jHjgpFkpCdKNkjkkMFTNIOyBdeUJGnhJ3JCV5HcB/MuUsE5jFcTtnF4dWtezkVuFaXXV9KrZpSRpWkP7qfbDqwGY7UEffqaGxkyy7mfugtDX7la3vZF+lKYiFOZLgEOKOzIapGDmKPgUwr052GmiUrXaCgOimuwg8GIHGoJ7M2SHY8wesRk6hbGOTosVoOOJxy1xZdx42mNZ2Oead7vLrQ10P3mNEMh3hoNZcaY7bcsKjyse46Ko/h4OY/to9rYg==" NoCertificadoSAT="30001000000400002495" SelloSAT="k4aj6WmcW/13rxcbO5P946CFU2QChvKh0WXdlDr6Ge1WpIxEFeF+Jvbq3XsAFlLvMklHK2RL3qP03q9ykk92+Xvg+bbjyA6+ECsE0To1vFOZMd95eUYayhxPTw0OS6F3zwLOvnhuiGVZe6Eah6PCXllew50+CXVoitF06WX5XqEtRgISkpP52dQENXhw/DTZAQL1izeR29T5+B73U4yjt6whG7mnU3qyIIq+q18JSoVC5Zd4d9kbT2c6q64abyt3UTJE/N3Yi+rTC11RQf4XDcAkX50iFW8xQoTW66H7kkksdrd/PcAIh5AMQKmJiamlEgsyLPGKA+6GxXmKNHWwDg==" xmlns:tfd="http://www.sat.gob.mx/TimbreFiscalDigital" /&gt;&lt;/cfdi:Complemento&gt;&lt;/cfdi:Comprobante&gt;</ns2:Cfdi>
                <ns2:DescripcionError/>
                <ns2:QrCodeBase64>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</ns2:QrCodeBase64>
                <ns2:Valido>true</ns2:Valido>
            </ns2:TimbraCfdiQrResult>
        </ns2:TimbraCfdiQrResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope> `}
                                </pre>
                            </div>
                            {/* end col */}
                        </div>
                        {/* end row */}
                        <hr/>

                        <h4 id="ws_ops_3 text-white">Timbra retencion</h4>
                        <p className="text-white"> Al igual que se tiene en CFDI, las retenciones pueden ser timbradas con sello o sin el, los metodos soportados son<code>TimbraRetencion</code> , <code>TimbraRetencionQr</code> y <code>TimbraRetencionSinSello</code>
                            A continuación se muestra el ejemplo de como realizar el timbrado de una retencion
                        </p>
                        <div class="row">

                            <div class="col-lg-12 text-white">
                                <strong>Request</strong>
                                <pre class="brush: xml">
                                {`
<textarea>

<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <TimbraRetencionSinSello xmlns="https://ntlink.com.mx/IServicioTimbrado">
            <userName>EKU9003173C9@ntlink.com.mx</userName>
            <password>Factura.2021*</password>
            <comprobante><![CDATA[<?xml version="1.0" encoding="utf-8"?>
            <retenciones:Retenciones xmlns:retenciones="http://www.sat.gob.mx/esquemas/retencionpago/2"  xsi:schemaLocation="http://www.sat.gob.mx/esquemas/retencionpago/2" Version="2.0" FolioInt="00002" FechaExp="2022-02-13T17:18:34" LugarExpRetenc="98626" CveRetenc="01" DescRetenc="PRUEBAS SERVICIOS PROFESIONALES" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                <retenciones:Emisor RfcE="EKU9003173C9" NomDenRazSocE="SAT PRUEBAS" RegimenFiscalE="601" />
                <retenciones:Receptor NacionalidadR="Nacional">
                    <retenciones:Nacional RfcR="LSD070904LH3" NomDenRazSocR="prueba" DomicilioFiscalR="97775" />
                </retenciones:Receptor>
                <retenciones:Periodo MesIni="01" MesFin="06" Ejercicio="2022" />
                <retenciones:Totales MontoTotOperacion="8000.00" MontoTotGrav="80000.00" MontoTotExent="0.00" MontoTotRet="200.00">
                    <retenciones:ImpRetenidos BaseRet="8000.00" ImpuestoRet="001" MontoRet="800.00" TipoPagoRet="01" />
                </retenciones:Totales>
                <retenciones:Complemento />
            </retenciones:Retenciones>]]></comprobante>
        </TimbraRetencionSinSello>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>

</textarea>
`}
                                </pre>
                            </div>
                            <div class="col-lg-12 text-white">
                                <strong>Response</strong>
                                <pre class="brush : html"> {`

<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns2:TimbraRetencionSinSelloResponse xmlns:ns2="https://ntlink.com.mx/IServicioTimbrado">
            <ns2:TimbraRetencionSinSelloResult>&lt;?xml version="1.0" encoding="utf-8"?&gt;&#13;
&lt;tfd:TimbreFiscalDigital xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sat.gob.mx/TimbreFiscalDigital http://www.sat.gob.mx/sitio_internet/cfd/TimbreFiscalDigital/TimbreFiscalDigitalv11.xsd" Version="1.1" UUID="D7FA5B7D-A2E4-42B7-BBE2-E91AA5FB63DE" FechaTimbrado="2022-02-13T17:28:39" RfcProvCertif="SPR190613I52" SelloCFD="dBHiZL8VkGX7Aj02dTzlFJw2GEKAYAtVYF7KiBtDr3hTP01NUCrRj/futahqBy+L62EbSgp4U9K056ogziq+jpScp0kQKPkCDXqC3nTmyRaThxA3AmGZU0+qTTVP1H519F6kTnbg8aRDJrygOx0oMubSuSibiSBhMdJW9ttLWfjKSZ/su7Ond98Y+60YJBWIniti/nX2wTI5L3yGHqDyOVE3/lhFCXYADLTRUFlUc3pEzbtBMZilfrq2uCrGLICHtQZw8gzGXP7VF8wX5PQpb4ND6+XeFM8SpUOFwqGeP6VyGuEy+ZOancFOtIMBEOTAYNFyEcDKPDy6RdGp2jBCBw==" NoCertificadoSAT="30001000000400002495" SelloSAT="PmvlGaaltb1OIzpBS+0aBI5S5mhIpTXWuZivxIvVF5aLFZ321Dds0MKt80IAsVD3ys3uMXYw+KvANKRiZiALtR0FQmDfcIoTS82tmSSY1ulXRvFzZZAXhE8+bfINXTOgHVozFqGJo8Ujao2nVuk+5YOtP+42a+/5wqQLX1NcuC/+uZRcag1jQIBD9tVLX5rVeN9hQXrYMa5UziG2L96ceS1NtQz8LQH7spNAuRXOPsB6cCqCASpTH9G/wcCXjwY/G1W8h1q9rirdepa4NDGXSkYlK04tNCBrg+wuxCnOfV59C8rV5+jhu+auLe8YLe4h+cmszvmosVGn1nzC98sBOQ==" xmlns:tfd="http://www.sat.gob.mx/TimbreFiscalDigital" /&gt;
            </ns2:TimbraRetencionSinSelloResult></ns2:TimbraRetencionSinSelloResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope> `}
                                </pre>
                            </div>
                            {/* end col */}
                        </div>
                        {/* end row */}
                        <hr/>

                        <h4 id="ws_ops_4">Cancela CFDI</h4>
                        <p className="text-white"> Para cancelar el CFDI solo es necesario lammar el metodo <code>CancelaCfdi</code></p>
                        <div class="row">

                            <div class="col-lg-12 text-white">
                                <strong>Request</strong>
                                <pre class="brush: xml">
                                {`
<textarea>

<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
      <CancelaCfdi>
         <userName>EKU9003173C9@ntlink.com.mx</userName>
         <password>Factura.2021*</password>
         <uuid>2582056F-33AC-4839-9F76-6AF7B7C0DCE2</uuid>
         <motivo>02</motivo>
         <folioSustituto></folioSustituto>
         <rfc>NLC091211KC6</rfc>
         <expresion>https://verificacfdi.facturaelectronica.sat.gob.mx/default.aspx?&amp;id=2582056F-33AC-4839-9F76-6AF7B7C0DCE2&amp;re=NLC091211KC6&amp;rr=XAXX010101000&amp;tt=1.16&amp;fe=GatvgA==></expresion>
         <rfcReceptor>XAXX010101000</rfcReceptor>
      </CancelaCfdi>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>

</textarea>
`}

                                </pre>
                            </div>
                            <div class="col-lg-12 text-white">
                                <strong>Response</strong>
                                <pre class="brush : html">{`
         <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
            <s:Body>
                <CancelaCfdiResponse xmlns="https://ntlink.com.mx/IServicioTimbrado">
                    <CancelaCfdiResult>
                    <![CDATA[ <?xml version="1.0"?> <Acuse xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" Fecha="2022-05-10T19:47:25.9627416" RfcEmisor="NLC091211KC6"> <Folios xmlns="http://cancelacfd.sat.gob.mx"> <UUID>879D7BC1-79E4-48E0-9FC3-6393D3DE41CE</UUID> <EstatusUUID>201</EstatusUUID> </Folios> <Signature Id="SelloSAT" xmlns="http://www.w3.org/2000/09/xmldsig#"> <SignedInfo> <CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315" /> <SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#hmac-sha512" /> <Reference URI=""> <Transforms> <Transform Algorithm="http://www.w3.org/TR/1999/REC-xpath-19991116"> <XPath>not(ancestor-or-self::*[local-name()='Signature'])</XPath> </Transform> </Transforms> <DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha512" /> <DigestValue>wQ1QV2U+v8ryJj0J3ev7beGet95at1H0RlcuRouFkdAACA+Kgxq1Epg3IbG8MQ0STVl4o18fyVPSBMZ+IXetFw==</DigestValue> </Reference> </SignedInfo> <SignatureValue>jQcVuXWgeMYxtimHt+65Cz5AJBrjn3As9rDeMC4J7U/UkKMUWJNWpEYos4lZZRFykRlbbQZr4RHnzdRfjbzXLg==</SignatureValue> <KeyInfo> <KeyName>00001088888800000031</KeyName> <KeyValue> <RSAKeyValue> <Modulus>ujwIJaMKWWmawqDpHx/OS10pXzEh2SQhY02y64v9Q0+I+0dGlIrjFJeGrsHqAT3JoYnh38Dxwta98t/7++dh2hOgiZEwRignWRIlOgM1MefBHEyY+hi4vHpZgPKq/hJVfHf9nOvlb5UgIHMTCEwrDp3qk9O5XtTEycnWwiqleG0c1J9sfbRxC0gYBHsNTH85OEtSXYMkiWNYNnFbIc7B0sgp2y18jUxUCNFBMMTV0tz2sxRF+V4hblaPjI75RWmvs9E4lD7MVmW3z7LIlSajuSL8eOqoerSkQhPBABIeQenEPQwRTt3ej3XpVaBsOmagIPZZI3RvOVh+5mcXDE5txQ==</Modulus> <Exponent>AQAB</Exponent> </RSAKeyValue> </KeyValue> </KeyInfo> </Signature> </Acuse> ]]>
                    </CancelaCfdiResult>
                </CancelaCfdiResponse>
            </s:Body>
        </s:Envelope> `}
                                </pre>
                            </div>
                            {/* end col */}
                        </div>
                        {/* end row */}
                        <hr/>

                        <h4 id="ws_ops_5">Cancela Retencion</h4>
                        <p className="text-white "> Para cancelar una Retencion solo es necesario lammar el metodo <code>CancelaRetencion</code></p>
                        <div class="row">

                            <div class="col-lg-12 text-white">
                                <strong>Request</strong>
                                <pre class="brush: xml"> {`
<textarea>

<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <CancelaRetencion xmlns="https://ntlink.com.mx/IServicioTimbrado">
            <userName>EKU9003173C9@ntlink.com.mx</userName>
            <password>Factura.2021*</password>
            <uuid>97511616-AB5D-4FBB-A2B1-D5392721E80B</uuid>
            <rfc>NLC091211KC6</rfc>
            <motivo>02</motivo>
            <folioSustituto></folioSustituto>
        </CancelaRetencion>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>

</textarea> `}
                                </pre>
                            </div>
                            <div class="col-lg-12 text-white">
                                <strong>Response</strong>
                                <pre class="brush : html"> {`
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns2:CancelaRetencionResponse xmlns:ns2="https://ntlink.com.mx/IServicioTimbrado">
            <ns2:CancelaRetencionResult><![CDATA[<?xml version="1.0"?><Acuse xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" Fecha="2022-02-23T18:01:47.3347371" RfcEmisor="NLC091211KC6" WorkProcessId="a18857d7-1b2a-4aea-a7c9-a274096cb54e" xmlns="http://www.sat.gob.mx/esquemas/retencionpago/1"><Folios><UUID>97511616-AB5D-4FBB-A2B1-D5392721E80B</UUID><EstatusUUID>1202</EstatusUUID><Motivo>02</Motivo></Folios><Signature Id="SelloSAT" xmlns="http://www.w3.org/2000/09/xmldsig#"><SignedInfo><CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315" /><SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#hmac-sha512" /><Reference URI=""><Transforms><Transform Algorithm="http://www.w3.org/TR/1999/REC-xpath-19991116"><XPath>not(ancestor-or-self::*[local-name()='Signature'])</XPath></Transform></Transforms><DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha512" /><DigestValue>0j5HuPlYx1ZGMJKCO9/+s6HLH4mK/OuPOlM1EZ/10n3rvEwCvpY44mPs7Di/JYkkk3LKHXRQgyaUCiKL2eR6Ag==</DigestValue></Reference></SignedInfo><SignatureValue>Cvg5UVv9lBTgPEKask6yRdULaOOvaGsY7IdhcER8Y72saTlY8PWyjGZrjiEVXDGg+Bl3ZuVnhAkMjTrXp43J/A==</SignatureValue><KeyInfo><KeyName>00001088888800000031</KeyName><KeyValue><RSAKeyValue><Modulus>ujwIJaMKWWmawqDpHx/OS10pXzEh2SQhY02y64v9Q0+I+0dGlIrjFJeGrsHqAT3JoYnh38Dxwta98t/7++dh2hOgiZEwRignWRIlOgM1MefBHEyY+hi4vHpZgPKq/hJVfHf9nOvlb5UgIHMTCEwrDp3qk9O5XtTEycnWwiqleG0c1J9sfbRxC0gYBHsNTH85OEtSXYMkiWNYNnFbIc7B0sgp2y18jUxUCNFBMMTV0tz2sxRF+V4hblaPjI75RWmvs9E4lD7MVmW3z7LIlSajuSL8eOqoerSkQhPBABIeQenEPQwRTt3ej3XpVaBsOmagIPZZI3RvOVh+5mcXDE5txQ==</Modulus><Exponent>AQAB</Exponent></RSAKeyValue></KeyValue></KeyInfo></Signature></Acuse>]]></ns2:CancelaRetencionResult>
        </ns2:CancelaRetencionResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope> `}
                                </pre>
                            </div>
                            {/* end col */}
                        </div>
                        {/* end row */}

                    </section>
                    {/* end section */}

                    <section id="csharp_example" class="section">

                        <div class="row">
                            <div class="col-md-12 left-align">
                                <h2 class="text-white">Ejemplos de código</h2>
                            </div>
                            {/* end col */}
                        </div>
                        {/* end row */}

                        <div class="row">
                            <div class="col-md-12">
                                <p> </p>
                            </div>
                        </div>



                        <div class="row text-white">
                            <div class="col-lg-12">
                                <strong>EJEMPLO C#</strong>
                                <pre class="brush : html"> {`
                                    <textarea>

                                    using System;
                                    using System.IO;
                                    using System.Threading.Tasks;

                                    namespace NTlinkTest
                                    {
                                        class Program
                                        {
                                            static async Task Main(string[] args)
                                            {
                                                NTService.ServicioTimbradoClient ws = new NTService.ServicioTimbradoClient();

                                                Console.WriteLine("Conecting to WS");

                                                StreamReader fo = new StreamReader("C:\\development\\ntlink-proxy-ws\\src\\test\\resources\\xml\\ingreso-pue.xml");
                                                string xmlstring = fo.ReadToEnd();
                                                fo.Close();
                                                Console.WriteLine(xmlstring);
                                                Task<string> result = ws.TimbraCfdiSinSelloAsync("EKU9003173C9@ntlink.com.mx", "Factura.2021*", xmlstring);

                                                Console.WriteLine("Executing call with xml");
                                                string r = await result;

                                                Console.WriteLine(r);

                                            }
                                        }
                                    }

                                    </textarea> `}
                                </pre>
                            </div>
                            {/* end col */}
                        </div>
                        <div class="intro2 clearfix alert alert-primary d-flex align-items-center">
                            <p><i class="fa fa-exclamation-triangle"></i>  Puede encontrar un ejemplo de implementacion <strong> C# </strong>
                                en el siguiente  <a href="https://www.youtube.com/watch?v=lRIOCYrEx6s">video de muestra</a> </p>
                        </div>
                        <br/>

                        <div class="row text-white">
                            <div class="col-lg-12">
                                <strong>EJEMPLO JAVA</strong>
                                <p>Para poder usar el siguiente codigo es necesario importar el SDK del web service de NTlink, el cual puedes descargar en el siguiente <a href="./ntlink-ws-sdk-3.0.1.jar">archivo jar</a> y agregarlo a tu proyecto
                                    o puedes compilarlo desde nuestro <a href="https://github.com/NTlink/ntlink-ws-sdk">repositorio de git</a> , donde tambien puedes encontrar mas ejemplos de uso.</p>
                                <pre class="brush : html"> {`
                                    <textarea>

                                    import com.mx.ntlink.error.SoapClientException;
                                    import com.mx.ntlink.models.generated.*;
                                    import java.io.IOException;
                                    import java.net.MalformedURLException;
                                    import java.net.URL;
                                    import java.net.URLConnection;
                                    import java.net.URLStreamHandler;
                                    import java.nio.file.Files;
                                    import java.nio.file.Paths;
                                    import java.util.Optional;
                                    import org.junit.Assert;
                                    import org.junit.Before;
                                    import org.junit.Test;

                                    public class NtLinkClientTest {

                                        private static final String TEST_USER = "EKU9003173C9@ntlink.com.mx";
                                        private static final String TEST_PASS = "Factura.2022*";
                                        private static final String DATE_REPLACEMENT = "%fecha-timbrado%";


                                          @Test
                                          public void timbraPUE_test() throws SoapClientException, IOException {

                                            String comprobante =
                                                new String(Files.readAllBytes(Paths.get("./src/test/resources/cfdi-samples/cfdi-pue.xml")));

                                            comprobante =
                                                comprobante.replace(
                                                    DATE_REPLACEMENT, formatter.format(LocalDateTime.now().minusMinutes(10)));

                                            TimbraCfdiQrSinSello cfdiSinSello = new TimbraCfdiQrSinSello();
                                            cfdiSinSello.setPassword(TEST_PASS);
                                            cfdiSinSello.setUserName(TEST_USER);
                                            cfdiSinSello.setComprobante(comprobante);
                                            TimbraCfdiQrSinSelloResponse response = client.timbrarSinSelloConQr(cfdiSinSello);

                                            Assert.assertNotNull(response);
                                            Assert.assertNotNull(response.getTimbraCfdiQrSinSelloResult());
                                            Assert.assertTrue(response.getTimbraCfdiQrSinSelloResult().getDescripcionError().isEmpty());
                                            Assert.assertTrue(
                                                "Contains UUID", response.getTimbraCfdiQrSinSelloResult().getCfdi().contains("UUID"));
                                          }
                                    }

                                    </textarea> `}
                                </pre>
                            </div>
                            {/* end col */}
                        </div>
                        {/* end row */}

                    </section>
                    {/* end section */}

                    <section id="support" class="section">

                        <div class="row">
                            <div class="col-md-12 left-align">
                                <h2 class="dark-text">Preguntas y soporte</h2>
                            </div>
                            {/* end col */}
                        </div>
                        {/* end row */}

                        <div class="row text-white">
                            <div class="col-md-6">
                                <p>NTlink cuenta con un profundo sentido de responsabilidad, si usted tiene dudas o preguntas por favor  acercarse a nuestro equipo de soporte técnico .</p>

                                <p>Usted puede enviar un correo a <a href="mailto:soporte@ntlink.com.mx">soporte@ntlink.com.mx</a>, con sus dudas, preguntas o en caso de encontrar algun error puede notificarlo al mismo medio</p>

                                <strong>EL soporte del servicio incluye</strong>
                                <ul>
                                    <li> Responder preguntas relacionadas a los mentodos del servicio antes mencionados</li>
                                    <li> Resolucion de bugs y problemas reportados</li>
                                    <li> Proveer actualizacion  en nuestra documentación encaso de algun cambio interno o solicitado por el SAT</li>
                                </ul>
                                <strong>El soporte no incluye</strong>
                                <ul>
                                    <li> Personalización de los servicios</li>
                                    <li> Soporte de herramientas terceras</li>
                                    <li> Correciones, cancelaciones u otros temas inherentes a incorrecto uso de la herramienta</li>
                                </ul>

                            </div>

                            <div class="col-md-6">
                                <strong>Antes de preguntar, porfavor</strong>
                                <ul>
                                    <li> Asegurarse que sus credenciales son correctas.</li>
                                    <li> Se encuentra apuntando al ambiente correcto.</li>
                                    <li> Consultar nuestros videos de <a>youtube</a>, donde encontrará información util.</li>
                                    <li> Asegurar el correcto llenado del RFC.</li>
                                    <li> El 80% de la ocasiones, el problema es resuelto con una busqueda en Google. Si le es posible realize una busqueda rápida, y es posible que resuleva su inconveniente más rápido</li>
                                    <li> Si envía un correo una pregunta asegurese de enviar su numero de cliente, usuario y RFC de se empresa poara poder ubicarlo mas facilmente.</li>
                                </ul>
                            </div>
                        </div>
                        {/* end row */}

                    </section>

                    </div>
                </div>
            </div>

            <script src="/js/custom.js"></script>
            <script src="/js/main.js"></script>
            </>
        )
    }
}
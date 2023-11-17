import { Component } from "react";

export class Convertidor extends Component {

    render() {

        const code = '<?xml version="1.0" encoding="utf-8"?><cfdi:Comprobante xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sat.gob.mx/cfd/3 http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv33.xsd" Version="3.3" Folio="3873" Fecha="2022-01-14T09:54:32" FormaPago="03"  SubTotal="1.00" Descuento="0.00" Moneda="MXN" TipoCambio="1" Total="1.16" TipoDeComprobante="I" MetodoPago="PUE" LugarExpedicion="04100" xmlns:cfdi="http://www.sat.gob.mx/cfd/3"><cfdi:Emisor Rfc="NLC091211KC6" Nombre="PRUEBAS" RegimenFiscal="601" /><cfdi:Receptor Rfc="XAXX010101000" Nombre=" PRUEBA" UsoCFDI="G01" /><cfdi:Conceptos><cfdi:Concepto ClaveProdServ="84111506" NoIdentificacion="ANTICIPO" Cantidad="1.00" ClaveUnidad="ACT" Descripcion="PRUEBA" ValorUnitario="1.00" Importe="1.00" Descuento="0.00"><cfdi:Impuestos><cfdi:Traslados><cfdi:Traslado Base="1.00" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="0.16" /></cfdi:Traslados></cfdi:Impuestos></cfdi:Concepto></cfdi:Conceptos><cfdi:Impuestos TotalImpuestosTrasladados="0.16"><cfdi:Traslados><cfdi:Traslado Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="0.16" /></cfdi:Traslados></cfdi:Impuestos><cfdi:Complemento><tfd:TimbreFiscalDigital xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sat.gob.mx/TimbreFiscalDigital http://www.sat.gob.mx/sitio_internet/cfd/TimbreFiscalDigital/TimbreFiscalDigitalv11.xsd" Version="1.1" UUID="AFAD91C2-1888-4BD8-8803-B5ED958F4122" FechaTimbrado="2022-01-14T09:54:35" RfcProvCertif="NLC091211KC6" SelloCFD="Af3lvLAQHiQYG25nFzfypWToHQ==" NoCertificadoSAT="00001000000504447535" SelloSAT="Jd2SF+ppPkQP2sodVFkhxg==" xmlns:tfd="http://www.sat.gob.mx/TimbreFiscalDigital" /></cfdi:Complemento></cfdi:Comprobante>';

        return (
            <>

                <div className="row text-start text-light">


                    <div className="my-5">
                        <h5 className="text-success pt-5">
                            Convertidor Ntlink
                        </h5>
                        <div className="row text-start text-light">
                            <p className="text-light">Software desarrollado por el equipo de NTlink con el propósito de ofrecer a nuestros clientes una alternativa mas para el timbrado de sus comprantes, ya que es ideal para cualquier integración con ERPs. </p>
                            <p className="text-light">El convertidor NTlink permite el timbrado de cualquier tipo de CFDI, Complementos y addendas (Consulte nuestro catálogo de complementos y addendas disponibles).</p>
                        </div>
                        <div className="row text-start text-light">
                            <h5 id='Contratación' className="text-success">
                                Contratación.
                            </h5>
                            <p className="text-light">Para hacer uso de nuestro convertidor será necesario pague por la licencia de este y que además contrate un paquete de timbres (Consulte nuestra lista de costos)</p>
                            <p className="text-light">La licencia es única por convertidor Ntlink, en caso de que requiera múltiples instalaciones de este consulte con nuestros ejecutivos los paquetes de licencias. </p>


                        </div>
                        <div className="row text-start text-light">
                            <h5 id='Funcionamiento' className="text-success">
                                Funcionamiento
                            </h5>
                            <p className="text-light">El Convertidor Ntlink se instala de manera local en el equipo/servidor que usted desee y funciona mediante carpetas en donde se depositarán los txt correspondientes para la generación de los comprantes deseados. </p>
                            <p className="text-light">Cada una de las carpetas generadas tiene una función especifica en el Convertidor Ntlink, las carpetas se pueden vincular o “mapear” de la forma que deseemos en el las dentro de las configuraciones del aplicativo. </p>
                            <img src={require('../assets/img/All/image1.png')} className="d-block img-fluid" alt="..." />
                            <p className="font-italic">Ejemplo directorio de carpetas.</p>

                            <p className="font-italic"></p>


                            <ul className="list-unstyled">
                                <li>Carpetas
                                    <ul>
                                        <li>	Entrada: En esta se depositarán los txt que se deseen convertir y timbrar</li>
                                        <li>	Error: En esta carpeta se depositarán los txt que tengan errores de estructura y/o de validación en el llenado </li>
                                        <li>	Respaldo: en esta carpeta una vez timbrados los txt se quedarán guardados para futuras referencias</li>
                                        <li>	Salida: una vez procesados los archivos txt dentro de esta carpeta encontraremos los archivos XML y PDF de los comprobantes.</li>
                                        <li>	Cancela: En esta carpeta se depositan los txt de cancelación que se deseen procesar.</li>
                                    </ul>
                                </li>
                            </ul>


                        </div>
                        <div className="row text-start text-light">

                            <p className="text-light">Uno de los beneficios del Convertidor Ntlink es que es multiempresa, es decir, permite el timbrado con las razones sociales que deseemos siempre que cuenten con un paquete de timbrado (consulte nuestra lista de precios). </p>
                            <p className="text-light">Del mismo modo se permite la precarga del logo de cada una de las razones sociales para que estos aparezcan en la representación impresa de sus comprobantes PDF. </p>
                            <img src={require('../assets/img/All/image3.png')} className="d-block img-fluid" alt="..." />
                            <p className="font-italic">Interfaz gráfica Convertidor Ntlink</p>
                            <p className="text-light">Nuestro aplicativo trabaja con plantillas de archivos txt, que al cumplir con la estructura correcta y las validaciones correspondientes, entregan al cliente su XML timbrado y sellado así como la representación gráfica del cfdi (PDF). </p>
                            <p className="font-weight-bold">Cabe mencionar que el Convertidor NTlink permite el timbrado masivo de txt, procesando archivos txt en un tiempo estimado de 5 segundos por archivo</p>

                            <p className="text-light">El archivo layout txt está dividido por líneas que representan un grupo de datos del comprobante cfdi. Las atributos correspondientes a cada línea se separan por el carácter pipe ( | ) y deben cumplir estrictamente con el orden definido en el diccionario de datos.</p>
                            <h5 id='EjemplodeLayout' className="text-success">Ejemplo de Layout</h5>
                            <p className="font-weight-bold">COMP||00001|43767|04100|I|01|PUE|0|100.56||116.65|MXN|||||Factura|||
                                E|EKU9003173C9|NTLINK PRUEBA|601||||||
                                R|XAXX010101000|RAZON SOCIAL CLIENTE|G01|||soporte@ntlink.com.mx|soporte3@ntlink.com.mx|DIRECCION CLIENTE|
                                C|1|76111500||1|H87|Pza|Prueba de llenado|100.56|100.56|||||
                                ITC|1|100.56|002|Tasa|0.160000|16.09|
                                IT|002|Tasa|0.160000|16.09|
                                TIMP|16.09||
                                AD|0|0|0|0|0|0|0|0||||||
                                FIN
                            </p>
                        </div>
                        <div className="row text-start text-light">

                            <p className="text-light">Una vez estructurado y procesado el archivo txt el Convertidor Ntlink deposita dentro de la carpeta de Salida los archivos XML y PDF correspondientes a nuestro archivo. </p>
                            <img src={require('../assets/img/All/image2.png')} className="d-block img-fluid" alt="..." />
                            <p className="font-italic">Ejemplo archivos procesados</p>
                            <img src={require('../assets/img/All/image4.png')} className="d-block img-fluid" alt="..." />
                            <p className="font-weight-italic">
                                Ejemplo XML generado
                            </p>
                            <h5 id='EjemploXMLgenerado' className="text-success">Ejemplo XML generado</h5>
                        </div>
                        <div className="row text-start text-light">
                            <p className="font-italic">
                                {code}
                            </p>
                        </div>
                        <div className="row text-start text-light">
                            <h5 id='Requerimientosmínimosparalainstalación' className="text-success">
                                Requerimientos mínimos para la instalación
                            </h5>
                            <ul className="list-unstyled">
                                <li>
                                    <ul>
                                        <li>	Sistema operativo Windows 32 o 64 bits (Win 7, Win 8, Win 10, Win Server 12, Win Server 16) </li>
                                        <li>	Memoria RAM 512 Mb</li>
                                        <li>	50 MB libres de espacio en Disco duro </li>
                                    </ul>
                                </li>
                            </ul>
                            <h5 id='Procesodeinstalación' className="text-success">
                                Proceso de instalación
                            </h5>
                            <p className="text-light">
                                Una vez realizada la compra de la licencia del Convertidor Ntlink se entregará el codigo de licencia y uno de nuestros ejecutivos de atención a clientes se pondrá en contacto con usted para la instalación y configuración de nuestra aplicación.
                            </p>
                            <h5 id='Versióndepruebas' className="text-success">
                                Versión de pruebas
                            </h5>
                            <p className="text-light">
                                Si desea evaluar el Convertidor NTlink puede solicitar le instalemos la versión gratuita de nuestro aplicativo en el siguiente correo: soporte.tecnico@ntlink.com.mx donde uno de nuestros agentes de atención a clientes se pondrá en contacto con usted para acordar la instalación de nuestra versión de pruebas. </p>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}
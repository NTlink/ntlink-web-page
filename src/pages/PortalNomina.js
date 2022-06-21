import { Component } from "react";

export class PortalNomina extends Component {

    render() {

        return (
            <>
                <div className="row justify-content-center">
                    <div className="col-md-11">
                        <div className="row text-start text-light">

                            <div className=" headerCf pt15 pf">
                                <a href="#Contratación" className='text-decorationNone'>
                                    <h5 className="text-success pt-2">
                                        Apartado Contratación
                                    </h5>
                                </a>
                                <a href="#Funcionamiento" className='text-decorationNone' >
                                    <h5 className="text-success pt-2">
                                        Apartado Funcionamiento
                                    </h5>
                                </a>

                                <div className="justify-content-center align-items-center">
                                <a href="/#PRODUCTOS" className="mbtn-sm"><span className="mb-0 mbtnSpanBlack">REGRESAR</span></a>
                                </div>
                            </div>
                            <div className="col-md-4"></div>
                            <div className="col-md-8 pt-3">
                                <h5 id='Funcionamiento' className="text-success">
                                    Portal de Nómina
                                </h5>
                                <p className="font-weight-normal">El portal de nómina 1.2 te permitirá realizar tu recibo cuando efectúes pagos a tus trabajadores por sueldos, salarios y en general por la prestación de un servicio personal, timbra tus recibos en minutos.
                                    Te permite elaborar tus recibos desde cualquier equipo con acceso a internet y un navegador.
                                </p>
                                <p className="font-weight-normal">Podrás emitir, consultar, descargar, reenviar y cancelar tus recibos desde tu perfil.
                                </p>

                                <div className="row text-start text-light">
                                    <h5 id='Contratación' className="text-success">
                                        Contratación.
                                    </h5>
                                    <p className="font-weight-normal">Para ingresar completa el registro, realiza el pago por un paquete de folios (Consulte nuestra lista de costos).
                                        El correo que proporciones será tu usuario de ingreso a la plataforma, recibirás una contraseña temporal (esta debe ingresarse respetando números, mayúsculas, minúsculas y caracteres especiales) y liga de acceso. El sistema se bloqueará por seguridad después del tercer intento erróneo.
                                    </p>
                                    <p className="font-weight-normal">Siendo la primera vez que ingrese se solicita definir su contraseña y la confirmación de esta. La nueva contraseña debe ser mayor a 8 caracteres, tener mayúsculas, minúsculas, carácter especial y algún número.
                                        Recuerda que es importante tener vigente ante hacienda el CSD (Certificado de Sello Digital).
                                    </p>


                                </div>
                                <div className="row text-start text-light">
                                    <h5 id='Funcionamiento' className="text-success">
                                        Funcionamiento
                                    </h5>
                                    <p className="font-weight-normal">Una vez ya registrado y contando con tu usuario y contraseña comienza a configurar los datos de tu empresa. </p>
                                    <p className="font-weight-normal">En el Menú de Empresas, selecciona la opción de Editar
                                    </p>
                                    <img src={require('../assets/img/All/PLACEHOLDER_image4.jpg')} className="d-block img-fluid" alt="..." />
                                    <p className="font-weight-normal">
                                        Aquí podremos actualizar o editar los datos de la empresa como el Régimen fiscal, direcciono fiscal y el logotipo de la empresa (debe pesar máximo 50Kb y ser un archivo *jpeg y *png) etc.
                                    </p>
                                    <p className="font-italic">También puedes consultar nuestro <a href='https://www.youtube.com/watch?v=iTdQAs_KAbE' target="_blank">video tutorial</a> en nuestro canal de YouTube.
                                    </p>

                                    <p className="font-weight-normal">
                                        Dentro de este mismo menú podremos cargar el Certificado de Sello Digital el cual es indispensable tener vigente para generar nuestros recibos.

                                    </p>


                                    <ul className="list-unstyled">
                                        <li>
                                            <ul>
                                                <li> En el sistema deberemos cargar el archivo .CER, .KEY y la contraseña de la Llave. Seleccionamos el botón de Validar y Guardar

                                                </li>
                                                <li>	los archivos son correctos nos arrojara el mensaje de CSD cargado Exitosamente y se actualizara la fecha de vigencia.
                                                    <img src={require('../assets/img/All/PLACEHOLDER_image4.jpg')} className="d-block img-fluid" alt="..." />
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>

                                    <p className="font-italic">También puedes consultar nuestro <a href='https://www.youtube.com/watch?v=EfpO8uumw2k' target="_blank">video tutorial</a> en nuestro canal de YouTube.
                                    </p>

                                </div>
                                <div className="row text-start text-light">

                                    <p className="font-weight-normal">Otra sección que debemos completar son los Centros de Trabajo, lo podemos encontrar en el menú de empresas, seleccionando la opción de Centros de trabajo.
                                        Aquí podremos agregar nuevos o editar los ya cargados.
                                        Es importante completar los campos que tengan * Una vez actualizada esta información solo deberemos seleccionar el botón de guardar.
                                    </p>
                                    <img src={require('../assets/img/All/PLACEHOLDER_image1.jpg')} className="d-block img-fluid" alt="..." />

                                    <p className="font-weight-normal">
                                        La siguiente sección que debemos completar es el Catálogo de Empleados.
                                    </p>
                                    <p className="font-weight-normal">En esta registraremos los empleados de la empresa, podremos agregar, editar o  eliminar la información del empleado en caso de ser necesario. Para el registro de un empleado nuevo comenzamos en la sección de Datos de  empleado asegurándonos que los campos con * sean completados y  seleccionamos agregar Subcontratación. </p>
                                    <img src={require('../assets/img/All/PLACEHOLDER_image2.jpg')} className="d-block img-fluid" alt="..." />

                                    <p className="font-weight-normal">
                                        Posteriormente completaremos los datos de Nómina del Empleado, también  asegurándonos de completar los campos con * y al terminar seleccionamos guardar
                                    </p>
                                    <img src={require('../assets/img/All/PLACEHOLDER_image3.jpg')} className="d-block img-fluid" alt="..." />

                                    <p className="font-weight-normal">Una vez completada la información de la empresa y cargados los empleados podremos comenzar a realizar los recibos de Nómina.</p>
                                    <p className="font-weight-normal">Comenzamos seleccionando el Centro de Trabajo, la Periodicidad, tipo de Nomina y el empleado al que se genera el recibo ya que estos son campos requeridos.
                                        Posteriormente continuamos con el llenado de Datos de Nómina.
                                        Fecha de pago, días pagados, fecha de inicio y final del pago.
                                    </p>
                                    <img src={require('../assets/img/All/PLACEHOLDER_image6.jpg')} className="d-block img-fluid" alt="..." />



                                    <p className="font-weight-normal">
                                        Agregamos las percepciones recordando completar los campos con * y seleccionamos agregar percepción.
                                    </p>
                                    <img src={require('../assets/img/All/PLACEHOLDER_image8.jpg')} className="d-block img-fluid" alt="..." />
                                    <p className="font-weight-normal">
                                        Agregamos las deducciones recordando completar los campos con * y seleccionamos agregar deducciones.
                                    </p>
                                    <img src={require('../assets/img/All/PLACEHOLDER_image5.jpg')} className="d-block img-fluid" alt="..." />
                                    <p className="font-weight-normal">
                                        Una vez agregado podemos generar la vista previa y/o generar el Recibo.
                                        El sistema nos arrojara el mensaje de Comprobante generado correctamente y enviado por correo
                                    </p>
                                    <img src={require('../assets/img/All/PLACEHOLDER_image7.jpg')} className="d-block img-fluid" alt="..." />

                                    <p className="font-weight-normal">
                                        Uno de los beneficios del Portal de Nómina es que podremos Consultar Recibos, desde este menú se puede realizar la búsqueda de los recibos emitidos filtrando por:
                                    </p>

                                    <ul className="list-unstyled">
                                        <li>
                                            <ul>
                                                <li>
                                                    Empleado
                                                </li>
                                                <li>
                                                    Fecha (siempre y cuando la fecha de inicio y la fecha final no sea mayor a 93 días)
                                                </li>
                                                <li>
                                                    Realizar Cancelaciones
                                                </li>
                                                <li>
                                                    Descargar un reporte de la búsqueda en un archivo Excel.
                                                </li>
                                                <li>
                                                    Descargar y/o renviar por correo los archivos PDF y XML.
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <img src={require('../assets/img/All/PLACEHOLDER_image9.jpg')} className="d-block img-fluid" alt="..." />
                                    <p className="font-weight-normal">
                                        Otro beneficio es que es multiusuario, es decir que permite registrar diferentes correos para ingresar al perfil de la cuenta permitiendo editar el perfil del correo, agregar nuevos y cambiar la contraseña. </p>
                                    <img src={require('../assets/img/All/PLACEHOLDER_image10.jpg')} className="d-block img-fluid" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
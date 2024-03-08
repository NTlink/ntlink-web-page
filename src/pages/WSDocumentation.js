import { Component } from "react";

export class WSDocumentation extends Component {

    render() {
        return (
            <>
                <div class="my-4">
                    <section id="top" class="section docs-heading">

                        <div class="row">
                            <div class="col-md-12">
                                <div class="big-title text-center">
                                    <h1>NT Link Web Service CFDI 4.0</h1>
                                    <p class="lead">Documentación técnica de uso Web service</p>
                                </div>
                            </div>
                        </div>

                        <hr></hr>

                    </section>

                    <div class="row">

                        <div class="col-md-3">
                            <nav class="docs-sidebar" data-spy="affix" data-offset-top="300" data-offset-bottom="200" role="navigation">
                                <ul class="nav">
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
                    </div>

                </div>
            </>
        )
    }
}
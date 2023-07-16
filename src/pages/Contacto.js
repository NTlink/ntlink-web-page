import { Component } from "react";

import axios from "axios";
import { Alert } from "react-bootstrap";


export class Contacto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            nombreEmpresa: "",
            email: "",
            telefono: "",
            comentarios: "",
            submited: false,
            message: ' Estamos enviando tu solicitud ...',
            variant: 'info'
        };
    }

    onNameChange(event) {
        this.setState({ nombre: event.target.value })
    }

    onNameCompanyChange(event) {
        this.setState({ nombreEmpresa: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onPhoneChange(event) {
        this.setState({ telefono: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ comentarios: event.target.value })
    }


    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submited: true })
        axios.post(`https://nt-invoice.ntlink.com.mx/api/v1/contact/request`, this.state, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            }
        }).then(res => {
            this.setState({ variant: 'success' });
            this.setState({ message: 'La solicitud de contacto se envio exitosamente' });
        }).catch(err => {
            console.log(err);
            this.setState({ variant: 'danger' });
            this.setState({ message: 'Lo sentimos hubo un error intentalo mas tarde' });
        });
    }

    render() {


        return (
            <>

                <div className="row justify-content-center">
                    <img src={require('../assets/img/All/contacto-head-back.png')} alt="..." />
                    <div className="col-md-10">
                        <div className="intro text-center">
                        </div>
                        {!this.state.submited ?
                            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST" >
                                <div className="row mt-3 align-items-center">
                                    <div className="col-md-2 ">
                                        <h6 className="text-light text-end m-0">
                                            Nombre:
                                        </h6>
                                    </div>
                                    <div className="col-md-10 ">
                                        <div className="form-group ">
                                            <input type="text" value={this.state.nombre} onChange={this.onNameChange.bind(this)}
                                                className="form-control input-group-text text-dark" name="nombre" placeholder="" required="required" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-2">
                                        <h6 className="text-light text-end m-0">
                                            Nombre de la Empresa:
                                        </h6>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="form-group ">
                                            <input type="text" value={this.state.nombreEmpresa} onChange={this.onNameCompanyChange.bind(this)}
                                                className="form-control input-group-text text-dark" name="nombreEmpresa" placeholder="" required="required" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-2">
                                        <h6 className="text-light text-end m-0">
                                            Correo:
                                        </h6>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="form-group ">
                                            <input type="email" value={this.state.email} onChange={this.onEmailChange.bind(this)}
                                                className="form-control input-group-text text-dark h4" name="email" placeholder="" required="required" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-2">
                                        <h6 className="text-light text-end m-0">
                                            Telefono:
                                        </h6>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="form-group ">
                                            <input type="number" value={this.state.telefono} onChange={this.onPhoneChange.bind(this)}
                                                className="form-control input-group-text text-dark" name="" placeholder="" required="required" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-2">
                                        <h6 className="text-light text-end m-0">
                                            Comentarios:
                                        </h6>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="form-group ">
                                            <textarea type="text" value={this.state.comentarios} onChange={this.onMessageChange.bind(this)}
                                                className="form-control text-dark input-group-text " name="comentarios" placeholder="" cols={30} rows={3} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3 d-flex justify-content-center">

                                    <button className="mbtn-sm" type="submit" > <span className='mbtnSpanBlack'> Enviar </span> </button>

                                    <a href="/" className="mbtn-sm"><span className="mb-0 mbtnSpanBlack">REGRESAR</span></a>
                                </div>
                            </form>
                            : <div>
                                <div class="row">
                                    <Alert variant='success'>{this.state.message}</Alert>
                                </div>
                                <div class="row">
                                    <a href="/" className="mbtn-sm"><span className="mb-0 mbtnSpanBlack">SALIR</span></a>
                                </div>
                            </div>}
                    </div>
                    <img src={require('../assets/img/All/contacto-foot.png')} className="img-fluid" alt="..." />
                </div>
            </>
        )
    }
}
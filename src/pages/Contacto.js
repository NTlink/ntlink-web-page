import { Component } from "react";

import axios from "axios";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Formik } from "formik";
import * as yup from 'yup';
import { Spinner } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';


export class Contacto extends Component {


    constructor(props) {
        super(props);
        this.state = {
            submitting: false,
            submitted: false,
            message: '',
            variant: 'info'
        }
    }
    validate = (values) => {
        const errors = {};
        if (!values.nombre) {
            errors.nombre = 'Requerido';
        }
        if (!values.email) {
            errors.email = 'Requerido';
        }
        if (!values.nombreEmpresa) {
            errors.nombreEmpresa = 'Requerido';
        }
        if (!values.comentarios) {
            errors.comentarios = 'Requerido';
        }
        return errors;
    }



    handleSubmit(values) {

        this.setState({ submitting: true })
        axios.post(`https://pruebas.ntlink.com.mx:8443/api/v1/contact/request`, values, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            }
        }).then(res => {
            this.setState({ submitting: false })
            this.setState({ variant: 'success' });
            this.setState({ message: 'La solicitud de contacto se envio exitosamente' });
            this.setState({ submitted: true });

        }).catch(err => {
            console.log(err);
            this.setState({ submitting: false })
            this.setState({ variant: 'danger' });
            this.setState({ message: 'Lo sentimos hubo un error intentalo mas tarde' });
            this.setState({ submitted: true });
        });
        setTimeout(() => {
            this.setState({ submitted: false });
        }, 10000);

    }

    render() {


        return (
            <>

                <div className="my-5">
                    <div className="row">
                        <div class=" col-6 d-flex flex-column align-content-center">
                            <h2 className="text-light web-service-header-text"> CONTACTO</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-7 mx-2 my-3">
                            <Formik
                                validationSchema={yup.object().shape({
                                    telefono: yup.string().required(),
                                    email: yup.string().required(),
                                    nombre: yup.string().required(),
                                    nombreEmpresa: yup.string().required(),
                                    comentarios: yup.string().required()
                                })}
                                onSubmit={(values, { setSubmitting }) => this.handleSubmit(values, setSubmitting)}
                                initialValues={{
                                    telefono: '',
                                    email: '',
                                    nombre: '',
                                    nombreEmpresa: 'XAXX010101000',
                                    comentarios: ''
                                }}
                            >
                                {({ handleSubmit, handleChange, values, touched, errors }) => (
                                    <Form noValidate onSubmit={handleSubmit}>
                                        <Row className="mb-3">
                                            <Form.Group
                                                as={Col}
                                                md="12"
                                                controlId="validationFormik101"
                                                className="position-relative"
                                            >
                                                <Form.Label className="text-white">Nombre del solicitante</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="nombre"
                                                    value={values.nombre}
                                                    onChange={handleChange}
                                                    isValid={touched.nombre && !errors.nombre}
                                                    className="bg-white"
                                                />
                                                <Form.Control.Feedback type="invalid" tooltip>
                                                    {errors.nombre}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} md="12" controlId="validationFormikUsername2">
                                                <Form.Label className="text-white">Correo electronico</Form.Label>
                                                <InputGroup hasValidation>
                                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="mi-correo@company.com.mx"
                                                        className="bg-white"
                                                        aria-describedby="inputGroupPrepend"
                                                        name="email"
                                                        value={values.email}
                                                        onChange={handleChange}
                                                        isInvalid={!!errors.email}
                                                    />
                                                    <Form.Control.Feedback type="invalid" tooltip>
                                                        {errors.email}
                                                    </Form.Control.Feedback>
                                                </InputGroup>
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Group
                                                as={Col}
                                                md="6"
                                                controlId="validationFormik102"
                                                className="position-relative"
                                            >
                                                <Form.Label className="text-white">Nombre empresa y/o RFC</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="nombreEmpresa"
                                                    className="bg-white"
                                                    value={values.nombreEmpresa}
                                                    onChange={handleChange}
                                                    isValid={touched.nombreEmpresa && !errors.nombreEmpresa}
                                                />
                                                <Form.Control.Feedback type="invalid" tooltip>
                                                    {errors.nombreEmpresa}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group
                                                as={Col}
                                                md="6"
                                                controlId="validationFormik103"
                                                className="position-relative"
                                            >
                                                <Form.Label className="text-white">Telefono</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="telefono"
                                                    name="telefono"
                                                    className="bg-white"
                                                    value={values.telefono}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.telefono}
                                                />

                                                <Form.Control.Feedback type="invalid" tooltip>
                                                    {errors.telefono}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3">

                                            <Form.Group
                                                as={Col}
                                                md="12"
                                                controlId="validationFormik104"
                                                className="position-relative"
                                            >
                                                <Form.Label className="text-white">Comentarios</Form.Label>
                                                <Form.Control
                                                    as="textarea" rows={3}
                                                    placeholder="Indicanos cual es tu solicitud"
                                                    name="comentarios"
                                                    className="bg-white"
                                                    value={values.comentarios}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.comentarios}
                                                />
                                                <Form.Control.Feedback type="invalid" tooltip>
                                                    {errors.comentarios}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Row>

                                        {!this.state.submitting ? <Button type="submit">Contactanos</Button> :
                                            <Button variant="primary" disabled>
                                                <Spinner
                                                    as="span"
                                                    animation="border"
                                                    size="sm"
                                                    role="status"
                                                    aria-hidden="true"
                                                />
                                                Enviando . . .
                                            </Button>}
                                    </Form>
                                )}
                            </Formik>
                            {this.state.submitted ? <Alert key={this.state.variant} variant={this.state.variant} className="my-5">
                                {this.state.message}
                            </Alert> : <p></p>}

                        </div>
                        <div className="col-md-12 col-lg-4 mx-2 my-3">
                            <img src={require('../assets/img/All/ubicacion.png')} className="d-block img-fluid" style={{ width: "100%" }} alt="..." />
                        </div>
                    </div>

                </div>
            </>
        )
    }
}
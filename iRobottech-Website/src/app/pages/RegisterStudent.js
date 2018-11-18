import React, { Component } from "react";
import { Container, Row, Col, Input, Button, Card ,CardBody} from 'mdbreact';
import Navbar from '../components/Navbar.js';
import FooterPage from '../components/Footer.js';
import './RegisterStudent.css';


class RegisterStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            secondName: '',
            lastName1: '',
            lastName2: '',
            idNumber: '',
            birthDate: '',
            phone: '',
            address: '',
            guardianName: '',
            guardianID: '',
            emergencyPhone: '',
            email: '',
            emailConfirm: ''
        };



        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.inputNumberValidator = this.inputNumberValidator.bind(this);
        // this.onChangeEmail = this.onChangeEmail.bind(this);

    }


//     handleInputChange(event) {

//         const { name, value } = event.target;
//         this.setState({
//             [name]: value
//         });

//         //this.setState({ ...this.state, [event.target.name]: event.target.value })


//     }

//     inputNumberValidator(event) {
//         const re = /^[0-9\b]+$/;
//         const target = event.target;
//         const value = target.value;
//         const name = target.name;

//         // if value is not blank, then test the regex

//         if ((value === '') || (re.test(value))) {
//             this.setState({
//                 [name]: value
//             });
//         }
//     }
// /*
//     onChangeEmail(event) {
//         const target = event.target;
//         const value = target.value;
//         const name = target.name;
//         const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//         if (value.match(re) || (value === '')) {
//             this.setState({ emailErr: false });
//             this.setState({ [name]: value });
//         } else {
//             this.setState({ emailErr: true });
//         }
//     }
// */

//     validateForm() {
//         return (
//             (this.state.name.length > 0) && (this.state.phone.length === 8) && (this.state.id.lengh < 9)
//         );
//     }


//     handleSubmit = evt => {
//         fetch('/Register', {
//             method: 'POST',
//             body: JSON.stringify(this.state),
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             }
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data)
//             })
//             .catch(err => console.error(err));
//         evt.preventDefault();
//         console.log(this.state);
//     }

/*
    validateEmail(event) {
        // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(event);
    }
*/


    render() {
        return (
            <div >
                <Navbar />
                <Container className="mt-5" >
                    <Row className="mt-6">
                        <Col md="8" className="mx-auto">
                            <Card>
                                <h3 className="text-center font-weight-bold pl-0 my-4">Registro de estudiante</h3>
                                <CardBody>
                                    <form className='needs-validation' onSubmit={this.handleSubmit}>
                                        <label className="cyan-text">Datos personales:</label>
                                        <div className="row">
                                            <div className="col">
                                                <Input
                                                    name="firstName"
                                                    label="Primer Nombre"
                                                    maxLength="25"
                                                    value={this.state.firstName}
                                                    onChange={this.handleInputChange}
                                                    className="form-control"
                                                    type="text"
                                                    required
                                                />
                                            </div>
                                            <div className="col">
                                                <Input
                                                    name="secondName"
                                                    label="Segundo Nombre"
                                                    maxLength="25"
                                                    value={this.state.secondName}
                                                    onChange={this.handleInputChange}
                                                    className="form-control"
                                                    type="text"
                                                    required
                                                />
                                            </div>
                                            <div className="col">
                                                <Input
                                                    label="Primer Apellido"
                                                    name="lastName1"
                                                    maxLength="25"
                                                    value={this.state.lastName1}
                                                    onChange={this.handleInputChange}
                                                    type="text"
                                                    required
                                                />
                                            </div>
                                            <div className="col">
                                                <Input
                                                    label="Segundo Apellido"
                                                    name="lastName2"
                                                    maxLength="25"
                                                    value={this.state.lastName2}
                                                    onChange={this.handleInputChange}
                                                    type="text"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <Input
                                                    label="Cédula"
                                                    name="idNumber"
                                                    maxLength="25"
                                                    value={this.state.idNumber}
                                                    onChange={this.inputNumberValidator}
                                                    type="text"
                                                    required

                                                />

                                            </div>
                                            <div className="col-6">
                                                <Input
                                                    label="Fecha Nacimiento"
                                                    name="birthDate"
                                                    value={this.state.birthDate}
                                                    onChange={this.handleInputChange}
                                                    type="date"
                                                    hint="00/00/0000 "
                                                    required />
                                            </div>
                                            <div className="col">
                                                <Input
                                                    label="Teléfono"
                                                    name="phone"
                                                    maxLength="8"
                                                    value={this.state.phone}
                                                    onChange={this.inputNumberValidator}
                                                    type="text"
                                                    required />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <Input
                                                    label="Dirección"
                                                    name="address"
                                                    value={this.state.address}
                                                    onChange={this.handleInputChange}
                                                    type="textarea"
                                                    hint="Dirección exacta"
                                                    rows="1"
                                                    maxLength="250"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <p className="cyan-text">Datos del encargado:</p>
                                        <div className="row">
                                            <div className="col">
                                                <Input
                                                    label="Nombre Completo Encargado"
                                                    name="guardianName"
                                                    value={this.state.guardianName}
                                                    onChange={this.handleInputChange}
                                                    type="text"
                                                    maxLength="50"
                                                    required />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <Input
                                                    label="Cédula de encargado"
                                                    name="guardianID"
                                                    maxLength="25"
                                                    value={this.state.guardianID}
                                                    onChange={this.inputNumberValidator}
                                                    type="text"
                                                    required />
                                            </div>
                                            <div className="col">
                                                <Input
                                                    label="Teléfono de encargado"
                                                    name="emergencyPhone"
                                                    maxLength="8"
                                                    value={this.state.emergencyPhone}
                                                    onChange={this.inputNumberValidator}
                                                    type="text"
                                                    required />
                                            </div>
                                        </div>
                                        <p className="cyan-text">Datos de la cuenta:</p>
                                        <div className="row">
                                            <div className="col">
                                                <Input
                                                    label="Email"
                                                    name="email"
                                                    maxLength="30"
                                                    value={this.state.email}
                                                    onChange={this.handleInputChange}
                                                    hint="ejemplo@mail.com"
                                                    type="email"
                                                    required />
                                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <Input
                                                    label="Confirma Email"
                                                    name="emailConfirm"
                                                    maxLength="30"

                                                    onChange={this.handleInputChange}
                                                    hint="ejemplo@mail.com"
                                                    type="email"
                                                    required />
                                            </div>
                                        </div>
                                        <div className="text-center py-4 mt-3">
                                            <button className="btn btn-outline-deep-orange" type="submit">Registrar</button>
                                        </div>
                                    </form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <FooterPage />
            </div>
        );
    }
}
export default RegisterStudent;

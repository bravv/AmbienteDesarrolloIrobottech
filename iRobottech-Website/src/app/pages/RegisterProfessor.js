import React, { Component } from "react";
import Navbar from '../components/Navbar.js';
import FooterPage from '../components/Footer.js';
import { Container, Row, Col, Card, CardBody } from 'mdbreact';
class RegisterProfessor extends Component {

    onClick() {
        alert("CLICK!!")
    }


    render() {
        return (
            <div>
                <Navbar />
                <Container >
                    <Row>
                        <Col md="8" className="mx-auto">
                            <Card>
                                <h3 className="text-center font-weight-bold pl-0 my-4">Registro de Profesor</h3>
                                <CardBody>
                            
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
export default RegisterProfessor;
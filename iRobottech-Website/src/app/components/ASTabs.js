import React, { Component } from 'react';
class ASTabs extends Component {
    render() {
        return (
            <div className="container">
                <form>
                    <p className="h4 text-center mb-4">Datos personales</p>
                    <label htmlFor="defaultFormRegisterNameEx" className="grey-text">Your name</label>
                    <input type="text" id="defaultFormRegisterNameEx" className="form-control" />
                    <br />
                    <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">Your email</label>
                    <input type="email" id="defaultFormRegisterEmailEx" className="form-control" />


                </form>
            </div>
        );
    }
}

export default ASTabs;
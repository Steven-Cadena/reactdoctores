import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';

export default class UpdateDoctor extends Component {

    cajaidhospitalRef = React.createRef();
    cajaiddoctorRef = React.createRef();
    cajaapellidoRef = React.createRef();
    cajaespecialidadRef = React.createRef();
    cajasalarioRef = React.createRef();

    state = {
        doctor:null
        , status:false
    }

    buscarDoctor = () => {
        var idDoc = this.props.iddoctor;
        var request = "/api/Doctores/" + idDoc;
        var url = Global.urldoctores + request;
    }
    render() {
        return (
            <div>
                <h1>Update departamento</h1>
                <form style={{width:"500px", margin:"0 auto", display:"table"}}>
                    <div className="form-group row">
                        <label>ID DOCTOR</label>
                        <input type="number" ref={this.cajaiddoctorRef}/>
                    </div>
                    <div className="form-group row">
                        <label>ID HOSPITAL</label>
                        <input type="number" ref={this.cajaidhospitalRef}/>
                    </div>
                    <div className="form-group row">
                        <label>APELLIDO</label>
                        <input type="text" ref={this.cajaapellidoRef}/>
                    </div>
                    <div className="form-group row">
                        <label>ESPECIALIDAD</label>
                        <input type="text" ref={this.cajaespecialidadRef}/>
                    </div>
                    <div className="form-group row">
                        <label>SALARIO</label>
                        <input type="number" ref={this.cajasalarioRef}/>
                    </div>
                    <button className="btn btn-info">
                        Modificar Doctor
                    </button>
                </form>
            </div>
        )
    }
}

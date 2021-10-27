import axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router';
import Global from '../Global';

export default class InsertarDoctor extends Component {

    cajaidhospitalRef = React.createRef();
    cajaiddoctorRef = React.createRef();
    cajaapellidoRef = React.createRef();
    cajaespecialidadRef = React.createRef();
    cajasalarioRef = React.createRef();

    state = {
        mensaje: ""
        , status: false
    }

    insertarDoctor = (e) => {
        e.preventDefault();
        var idDoc = parseInt(this.cajaiddoctorRef.current.value);
        var idHos = parseInt(this.cajaidhospitalRef.current.value);
        var apellido = this.cajaapellidoRef.current.value;
        var especialidad = this.cajaespecialidadRef.current.value;
        var salario = parseInt(this.cajasalarioRef.current.value);
        var doctor = {
            idDoctor: idDoc
            , idHospital: idHos
            , apellido: apellido
            , especialidad: especialidad
            ,salario: salario
        };
        var request = "/api/Doctores";
        var url = Global.urldoctores + request;
        axios.post(url,doctor).then(res => {
            this.setState({
                mensaje:"Doctor insertado"
                , status: true
            });
        });
    }
    render() {
        if ( this.state.status == true){
            return(<Redirect to={"/doctores"}/>)
        }
        return (
            <div>
                <h1>Insertar doctor</h1>
                <form style={{width:"500px", margin:"0 auto", display:"table"}}
                onSubmit={this.insertarDoctor}>
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
                        Insertar Doctor
                    </button>
                </form>
                <h2 style={{color:"red"}}>
                    {this.state.mensaje}
                </h2>
            </div>
        )
    }
}

import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

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
        axios.get(url).then(res => {
            console.log(res.data);
            this.setState({
                doctor:res.data
            });
        });
    }

    //para que cargue doctor
    componentDidMount = () => {
        this.buscarDoctor();
    }

    modificarDoctor = (e) => {
        e.preventDefault();
        var idDoc = parseInt(this.cajaiddoctorRef.current.value);
        var idHos = parseInt(this.cajaidhospitalRef.current.value);
        var ape = this.cajaapellidoRef.current.value;
        var esp = this.cajaespecialidadRef.current.value;
        var sal = parseInt(this.cajasalarioRef.current.value);
        var doctor = {
            idDoctor:idDoc
            , idHospital: idHos
            , apellido:ape
            , especialidad:esp
            , salario:sal
        };
        var request = "api/Doctores";
        var url = Global.urldoctores + request;
        axios.put(url,doctor).then(res =>{
            this.setState({
                status:true
            })
        });
    }

    render() {

        if (this.state.doctor != null){
            return (
                <div>
                    <h1>Update departamento</h1>
                    <form style={{width:"500px", margin:"0 auto", display:"table"}}
                    onSubmit={this.modificarDoctor}>
                        <div className="form-group row">
                            <label>ID DOCTOR</label>
                            <input type="number" ref={this.cajaiddoctorRef} 
                             value={this.state.doctor.idDoctor}
                            disabled/>
                        </div>
                        <div className="form-group row">
                            <label>ID HOSPITAL</label>
                            <input type="number" ref={this.cajaidhospitalRef}
                            defaultValue={this.state.doctor.idHospital}
                            />
                        </div>
                        <div className="form-group row">
                            <label>APELLIDO</label>
                            <input type="text" ref={this.cajaapellidoRef}
                            defaultValue={this.state.doctor.apellido}
                            />
                        </div>
                        <div className="form-group row">
                            <label>ESPECIALIDAD</label>
                            <input type="text" ref={this.cajaespecialidadRef}
                            defaultValue={this.state.doctor.especialidad}
                            />
                        </div>
                        <div className="form-group row">
                            <label>SALARIO</label>
                            <input type="number" ref={this.cajasalarioRef}
                            defaultValue={this.state.doctor.salario}
                            />
                        </div>
                        <button className="btn btn-info">
                            Modificar Doctor
                        </button>
                    </form>
                </div>
            )
        }else{
            return(<h1>Cargando ...</h1>)
        }

    }
}

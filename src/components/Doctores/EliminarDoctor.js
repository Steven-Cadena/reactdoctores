import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';
import { Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';
export default class EliminarDoctor extends Component {
    cajadoctorRef = React.createRef();

    state = {
        status:false
    }

    deleteDoctor= (e) => {
        e.preventDefault();
        var num = this.cajadoctorRef.current.value;
        var request = "/api/Doctores/" + num;
        var url = Global.urldoctores + request;
        axios.delete(url).then(res => {
            this.setState({
                status: true
            });
        });
    }
    render() {
        if (this.state.status == true){
            return (<Redirect to={"/doctores"}/>)
        }
        return (
            <div>
                <h1>¿Desea eliminar el doctor de 
                    {this.props.apellido} de 
                    {this.props.especialidad}?</h1>
                <NavLink to={"/departamentos"} className="btn btn-default">
                    Cancelar
                </NavLink>
                <form onSubmit={this.deleteDoctor}>
                    <input type="hiden" 
                    defaultValue={this.props.iddoctor} ref={this.cajadoctorRef}/>
                    <button className="btn btn-danger">
                        Eliminar Doctor
                    </button>
                </form>
            </div>
        )
    }
}

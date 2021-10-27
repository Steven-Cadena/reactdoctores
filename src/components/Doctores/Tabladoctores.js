import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';
import { NavLink } from 'react-router-dom';

export default class Tabladoctores extends Component {
    state={
        doctores:[]
        , status:false
    }

    cargarDoctores = () => {
        var request = "/api/Doctores/";
        var url = Global.urldoctores + request;
        console.log("estoy aqui");
        axios.get(url).then(res => {
            console.log(res.data);
            this.setState({
                doctores:res.data
                , status:true
            });
        });
    }

    componentDidMount = () => {
        this.cargarDoctores();
    }
    render() {
        if (this.state.status == true){
            return (
                <div>
                    <table className="table table-bordered">
                        <thead>
                            <th>ID DOCTOR</th>
                            <th>ID HOSPITAL</th>
                            <th>APELLIDO</th>
                            <th>ESPECIALIDAD</th>
                            <th>SALARIO</th>
                            <th>ACCIONES</th>
                        </thead>
                        <tbody>
                            {this.state.doctores.map((doc,indice) =>{
                                return(<tr key={indice}>
                                    <td>{doc.idDoctor}</td>
                                    <td>{doc.idHospital}</td>
                                    <td>{doc.apellido}</td>
                                    <td>{doc.especialidad}</td>
                                    <td>{doc.salario}</td>
                                    <td>
                                        <NavLink to={"/updatedoctor/" + doc.idDoctor} 
                                        className="btn btn-success">
                                            Editar Doctor
                                        </NavLink>
                                    </td>
                                    </tr>);
                            })}
                        </tbody>
                    </table>
                </div>
            );
        }else{
            return(<h1>Cargando ....</h1>);
        }

    }
}

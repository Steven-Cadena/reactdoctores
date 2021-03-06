import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EliminarDoctor from './Doctores/EliminarDoctor';
import InsertarDoctor from './Doctores/InsertarDoctor';
import MenuDoctores from './Doctores/MenuDoctores';
import Tabladoctores from './Doctores/Tabladoctores';
import UpdateDoctor from './Doctores/UpdateDoctor';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <MenuDoctores/>
                <Switch>
                <Route exact path="/doctores"
                component={Tabladoctores}/>
                <Route exact path="/createdoctor"
                component={InsertarDoctor}/>
                <Route exact path="/updatedoctor/:iddoctor"
                render={props =>{
                    var idDoc = props.match.params.iddoctor;
                    return(<UpdateDoctor iddoctor={idDoc}/>);
                }}/>
                <Route exact path="/deletedoctor/:iddoctor/:apellido"
                    render={props => {
                        var id = props.match.params.iddoctor;
                        var ape = props.match.params.apellido;
                        return (<EliminarDoctor
                            iddoctor={id}
                            apellido={ape}
                        />)
                }}
                />
                </Switch>
            </BrowserRouter>
        )
    }
}

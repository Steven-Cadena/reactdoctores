import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import InsertarDoctor from './App/Doctores/InsertarDoctor';
import MenuDoctores from './App/Doctores/MenuDoctores';
import Tabladoctores from './App/Doctores/Tabladoctores';
import UpdateDoctor from './App/Doctores/UpdateDoctor';

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
                </Switch>
            </BrowserRouter>
        )
    }
}

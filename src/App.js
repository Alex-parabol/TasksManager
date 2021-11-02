import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';

import AuthState from './context/autentificacion/authState';
import ProyectoState from './context/proyectos/ProyectoState';
import TareaState from './context/tareas/tareaState';
import AlertaState from './context/alertas/alertaState';
import tokenAuth from './components/config/token';
import RutaPrivada from './components/rutas/rutaPrivada';

//revisamos si tenemos un token

const token = localStorage.getItem('token')
if(token){
 tokenAuth(token)
}

function App() {
 
  return (
  <TareaState>
    <ProyectoState>
      <AlertaState>
        <AuthState>
          <Router>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route exact path='/nueva-cuenta' component={NuevaCuenta} />
              <RutaPrivada exact path='/proyectos' component={Proyectos} />
            </Switch>
          </Router>
        </AuthState>
      </AlertaState>
    </ProyectoState>
  </TareaState>
  );
}

export default App;

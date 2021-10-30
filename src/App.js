import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';

import AuthState from './context/autentificacion/authState';
import ProyectoState from './context/proyectos/ProyectoState';
import TareaState from './context/tareas/tareaState';
import AlertaState from './context/alertas/alertaState';


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
              <Route exact path='/proyectos' component={Proyectos} />
            </Switch>
          </Router>
        </AuthState>
      </AlertaState>
    </ProyectoState>
  </TareaState>
  );
}

export default App;

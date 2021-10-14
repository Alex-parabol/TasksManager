import React from 'react';
import NuevoProyecto from '../proyectos/NuevoProyecto';
import Listado from '../proyectos/Listado';


export default function Sidebar() {

    //sacamos la información de Nuevo proyecto
    // para emplearla en el resto de componentes
    return (
        <aside>
            <h1>MERN<span>Tasks</span></h1>
            <NuevoProyecto/>
            <div className="proyectos">
                <h2>Tus Proyectos</h2>
                <Listado/>
            </div>
        </aside>
    )
}

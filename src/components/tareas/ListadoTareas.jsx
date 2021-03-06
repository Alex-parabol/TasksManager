import React, {Fragment, useContext} from 'react'
import Tarea from './Tarea'
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareasContext from '../../context/tareas/tareaContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

export default function ListadoTareas() {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    //obtenemos las tareas del proyecto
    const tareaContext = useContext(tareasContext);
    const { tareasproyecto } = tareaContext;
   

    
    return (
        <Fragment>
            {proyecto ? 
            <>
            <h2>Proyecto: {proyecto[0].nombre} </h2>
             <ul className="listado-tareas">
                 { tareasproyecto.length === 0 
                ? (
                    <li className="tarea"><p>No hay tareas</p></li>
                ) 
                : <TransitionGroup>
                    {tareasproyecto.map(tarea => (
                    <CSSTransition
                    key={tarea.proyectotId}
                    timeout={2000}
                    classNames='tarea'
                    >
                        <Tarea
                        tarea={tarea}
                    />
                    </CSSTransition>
                ))}
                </TransitionGroup>
                }
              
             </ul>
                <button
                    type='button'
                    className='btn btn-eliminar'
                    onClick={()=> eliminarProyecto(proyecto[0]._id)}
                >
                 Eliminar Proyecto &times;
                    </button>
                    </> : <h2>Selecciona un proyecto</h2>}
             
             
                
        </Fragment>
    )
}

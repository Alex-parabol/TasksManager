import React, {Fragment, useContext} from 'react'
import Tarea from './Tarea'
import proyectoContext from '../../context/proyectos/proyectoContext';

export default function ListadoTareas() {

const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

   
    const tareas = [
           {nombre:'Elegir Plataforma', estado: true},
           {nombre:'Scrum meeting', estado: false},
           {nombre:'Hacer Front', estado: true},
           {nombre:'Lamentar lo gilipollas que es mi puto padre', estado: false}
    ]

    
    return (
        <Fragment>
            {proyecto ? 
            <>
            <h2>Proyecto: {proyecto[0].nombre} </h2>
             <ul className="listado-tareas">
                 { tareas.length === 0 
                ? (
                    <li className="tarea"><p>No hay tareas</p></li>
                ) 
                : tareas.map(tarea => (
                    <Tarea
                        tarea={tarea}
                    />
                ))
                }
              
             </ul>
                <button
                    type='button'
                    className='btn btn-eliminar'
                >
                 Eliminar Proyecto &times;
                    </button>
                    </> : <h2>Selecciona un proyecto</h2>}
             
             
                
        </Fragment>
    )
}

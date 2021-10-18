import React, {Fragment, useContext} from 'react'
import Tarea from './Tarea'
import proyectoContext from '../../context/proyectos/proyectoContext';

export default function ListadoTareas() {

    const tareas = [
           {nombre:'Elegir Plataforma', estado: true},
           {nombre:'Scrum meeting', estado: false},
           {nombre:'Hacer Front', estado: true},
           {nombre:'Lamentar lo gilipollas que es mi puto padre', estado: false}
    ]

    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;
    return (
        <Fragment>
             <h2>Proyecto:lolaso </h2>
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
             
                
        </Fragment>
    )
}

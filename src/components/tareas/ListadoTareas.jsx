import React, {Fragment} from 'react'
import Tarea from './Tarea'

export default function ListadoTareas() {

    const tareas = [
           {nombre:'Elegir Plataforma', estado: true},
           {nombre:'Scrum meeting', estado: false},
           {nombre:'Hacer Front', estado: true},
           {nombre:'Lamentar lo gilipollas que es mi puto padre', estado: false}
    ]

    return (
        <Fragment>
             <h2>Proyecto: Hacer deporte</h2>
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

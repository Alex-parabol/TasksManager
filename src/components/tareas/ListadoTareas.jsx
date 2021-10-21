import React, {Fragment, useContext, useEffect} from 'react'
import Tarea from './Tarea'
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareasContext from '../../context/tareas/tareaContext'

export default function ListadoTareas() {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto, proyectoActual } = proyectosContext;

    //obtenemos las tareas del proyecto
    const tareaContext = useContext(tareasContext);
    const { tareasproyecto } = tareaContext;
   
 
  /*   useEffect(()=>{
        tareasproyecto(proyectoActual.id)
    }, [proyectoActual]) */
    
    
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
                : tareasproyecto.map(tarea => (
                    <Tarea
                        tarea={tarea}
                        key={tarea.proyecotId}
                    />
                ))
                }
              
             </ul>
                <button
                    type='button'
                    className='btn btn-eliminar'
                    onClick={()=> eliminarProyecto(proyecto[0].id)}
                >
                 Eliminar Proyecto &times;
                    </button>
                    </> : <h2>Selecciona un proyecto</h2>}
             
             
                
        </Fragment>
    )
}

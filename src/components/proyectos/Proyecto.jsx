import React,{useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareasContext from '../../context/tareas/tareaContext';

export default function Proyecto({proyecto}) {

    const proyectosContext = useContext(proyectoContext);
    const { proyectoActual} = proyectosContext;

    const tareaContext = useContext(tareasContext);
    const { tareasProyecto} = tareaContext;

    // Función que agrege el proyecto actual y las tareas por otro lado

    const seleccionarProyecto = id => {
        proyectoActual(id); //fijamos proyecto actual
        tareasProyecto(id); //fijamos las tareas para el proecto
    }

    return (
        <li>
            <button
            type='button'
            className='btn btn-blank'
            onClick={()=> seleccionarProyecto(proyecto.id)}
            >
           {proyecto.nombre} 
            </button>
        </li>
    )
}

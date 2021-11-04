import React, {useContext} from 'react'
import tareasContext from '../../context/tareas/tareaContext';
import proyectoContext from '../../context/proyectos/proyectoContext';

export default function Tarea({tarea}) {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // extraemos proyecto

    const [proyectoActual] = proyecto

    const tareaContext = useContext(tareasContext);
    const { eliminarTarea, tareasProyecto, actualizarTarea, guardarTareaActual } = tareaContext;

    const tareaEliminar = id => {
        eliminarTarea(id, proyectoActual._id)
        tareasProyecto(proyectoActual._id)
    }
    

    const cambiarEstado = tarea => {
        if(tarea.estado){
            tarea.estado = false
        } else {
            tarea.estado = true
        }
        actualizarTarea(tarea)
    }

    // obtenemos tarea y la editamos

    const seleccionarTarea = tarea => {
        guardarTareaActual(tarea)
    }

    return (
       <li className="tarea sombra">
           <p>{tarea.nombre} </p>
           <div className="estado">
               {tarea.estado 
               ? (
                   <button
                    type='button'
                    className='completo'
                    onClick={()=>cambiarEstado(tarea)}
                    >
                        Completo
                    </button>
               )
                :
                (
                    <button
                    type='button'
                    className="incompleto"
                    onClick={()=> cambiarEstado(tarea) }
                    >
                        incompleto
                    </button>
                )
            }
           </div>
           <div className="acciones">
               <button
               type='button'
               className='btn btn-primario'
               onClick={()=> seleccionarTarea(tarea) }
               >
                   Editar
               </button>
               <button
                type='button'
                className='btn btn-secundario'
                onClick={()=> tareaEliminar(tarea._id)}
               >
                   Eliminar
               </button>
           </div>
       </li>
    )
}

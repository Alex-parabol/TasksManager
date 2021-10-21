import React, {useContext} from 'react'
import tareasContext from '../../context/tareas/tareaContext';
import proyectoContext from '../../context/proyectos/proyectoContext';

export default function Tarea({tarea}) {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // extraemos proyecto

    /* const [proyectoActual] = proyecto */

    const tareaContext = useContext(tareasContext);
    const { eliminarTarea, tareasProyecto } = tareaContext;

    const tareaEliminar = id => {
        eliminarTarea(id)
        tareasProyecto(tarea.proyectoId)
    }
    console.log(tarea.tareaId)
    console.log(proyecto[0].id)
    return (
       <li className="tarea sombra">
           <p>{tarea.nombre} </p>
           <div className="estado">
               {tarea.estado 
               ? (
                   <button
                    type='button'
                    className='completo'>
                        Completo</button>
               )
                :
                (
                    <button
                    type='button'
                    className="incompleto">
                        incompleto
                    </button>
                )
            }
           </div>
           <div className="acciones">
               <button
               type='button'
               className='btn btn-primario'
               >
                   Editar
               </button>
               <button
                type='button'
                className='btn btn-secundario'
                onClick={()=> tareaEliminar(tarea.tareaId)}
               >
                   Eliminar
               </button>
           </div>
       </li>
    )
}

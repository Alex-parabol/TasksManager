import React, {useState, useContext, useEffect} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareasContext from '../../context/tareas/tareaContext';

export default function FormTarea() {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    const tareaContext = useContext(tareasContext);
    const { tareaseleccionada, agregarTarea, validarTarea, errortarea, tareasProyecto, actualizarTarea } = tareaContext;
   
    const [tarea, setTarea ] = useState({
        nombre: ''
    })

    const {nombre} = tarea;

    //detectamos si hay una tarea seleccionada

    useEffect(()=>{
        if(tareaseleccionada !== null){
            setTarea(tareaseleccionada)
        } else {
            setTarea({
                nombre: ''
            })
        }
    }, [tareaseleccionada])

    if(!proyecto) return null;

    const [ proyectoActual ] = proyecto;

    const handleChange= e =>{
            setTarea({
                ...tarea,
                [e.target.name] : e.target.value
            })
        }

    const onSubmit = e => {
        e.preventDefault();
        //validamos
        if(nombre.trim() === ''){
            validarTarea();
            return
        }

        //comprobamos si es edición o nueva tarea

        if(tareaseleccionada === null){
            //agregamos la nueva tarea al state de tareas
            tarea.proyectoId = proyectoActual.id;
            agregarTarea(tarea);
        } else {
            //actualizar tarea existente
            actualizarTarea(tarea);
        }

       

        //obtener y filtrar tareas del proyecto
        tareasProyecto(proyectoActual.id)
    
        //reset del form

        setTarea({
            nombre : ''
        })
    }

    

    return (
        <div className="formulario">
            <form
            onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input
                     type="text"
                      className="input-text"
                      placeholder='Nombre de la Tarea'
                      name='nombre'
                      value={nombre}
                      onChange={handleChange}
                       />
                </div>
                <div className="contenedor-input">
                    <input
                     type="submit"
                     className='btn btn-primario btn-submit btn-block'
                     value={tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
                     />
                </div>
            </form>
            {errortarea ? <p className="mensaje error">Es obligatorio ponerle nombre a la tarea</p> : null}
        </div>
    )
}

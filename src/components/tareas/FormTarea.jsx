import React, {useState, useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareasContext from '../../context/tareas/tareaContext';

export default function FormTarea() {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    const tareaContext = useContext(tareasContext);
    const { agregarTarea, validarTarea, errortarea, tareasProyecto } = tareaContext;
   
    const [tarea, setTarea ] = useState({
        nombre: ''
    })

    const {nombre} = tarea

    if(!proyecto) return null

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
            validarTarea()
            return
        }
        //pasamos la info

        //agregamos tarea al state de tareas
        tarea.proyectoId = proyectoActual.id
        agregarTarea(tarea)
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
                     value='Agregar Tarea'
                     />
                </div>
            </form>
            {errortarea ? <p className="mensaje error">Es obligatorio ponerle nombre a la tarea</p> : null}
        </div>
    )
}

import React, {useState, useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareasContext from '../../context/tareas/tareaContext';

export default function FormTarea() {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    const tareaContext = useContext(tareasContext);
    const { agregarTarea } = tareaContext;
   
    const [tarea, setTarea ] = useState({
        nombre: ''
    })

    const {nombre} = tarea
   
    

    /* const [error, setError] = useState(false) */
    console.log(tarea)

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
       
        //pasamos la info

        //agregamos tarea al state de tareas

        //reset del form

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
        </div>
    )
}

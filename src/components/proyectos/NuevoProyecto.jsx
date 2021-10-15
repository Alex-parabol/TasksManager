import React, {Fragment, useState, useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';

export default function NuevoProyecto() {

    //obtenemos el state del formulario desde nuestro context hook.

    const ProyectosContext = useContext(proyectoContext);
    const { formulario, mostrarFormulario } = ProyectosContext;
    console.log(formulario)

    const [proyecto, setProyecto ] = useState({
        nombre: '',
        id: ''
    })

const {nombre, id} = proyecto;

const onChange = e => {
    e.preventDefault()
    setProyecto({
        ...proyecto,
        [e.target.name]: e.target.value
    })
}

const onSubmit = e =>{
    e.preventDefault();
    //validamos el proyecto
    
    //agregamos al state la información


    //reiniciamos el formulario
}


    return (
    <Fragment>
        <button
            type='button'
            className='btn btn-block btn-primario'
            onClick={()=>mostrarFormulario()}
        >Nuevo Proyecto</button>
       
        {
            formulario
            ?
            <form
            className='formulario-nuevo-proyecto'
            onSubmit={onSubmit}
            >
            <input
             type="text"
             className='input-text'
             placeholder='Nombre Proyecto'
             name='nombre'
             value={nombre}
             onChange={onChange}
             />
             <input
              type="submit"
              className='btn btn-primario btn-block'
              value='Agregar Proyecto'
              />
         </form>
         : null
        }
    </Fragment>

    )
}

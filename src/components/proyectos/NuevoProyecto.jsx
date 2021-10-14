import React, {Fragment, useState} from 'react'

export default function NuevoProyecto() {

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
        >Nuevo Proyecto</button>
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
    </Fragment>

    )
}

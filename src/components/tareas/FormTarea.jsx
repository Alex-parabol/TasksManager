import React, {useState} from 'react'

export default function FormTarea() {

    const [tarea, setTarea ] = useState('')

    const onSubmit = e => {
        e.preventDefault()
    }

    const onChange = e =>{
        e.preventDefault()

        setTarea(tarea)
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
                      value={tarea}
                      onChange={onChange}
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

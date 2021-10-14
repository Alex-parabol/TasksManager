import React from 'react'
import Proyecto from './Proyecto'

export default function Listado() {

    //array de prueba

    const proyectos = [
        {nombre: 'Hacer deporte'},
        {nombre: 'Desarrollar el front de my startup'},
        {nombre: 'Hablar con accionistas'}
    ]
    return (
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto proyecto={proyecto} />
            ))}
        </ul>
    )
}

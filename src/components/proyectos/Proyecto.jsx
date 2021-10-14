import React from 'react'

export default function Proyecto({proyecto}) {
    return (
        <li>
            <button
            type='button'
            className='btn btn-blank'
            >
           {proyecto.nombre} 
            </button>
        </li>
    )
}

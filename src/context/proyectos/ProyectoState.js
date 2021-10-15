import React, {useReducer} from 'react'
import proyectoContext from './proyectoContext'
import proyectoReducer from './proyectoReducer'
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from '../../types/index'


const ProyectoState = props => {

    const proyectos = [
        {id:1 , nombre: 'Hacer deporte'},
        {id:2 , nombre: 'Desarrollar el front de my startup'},
        {id:3 , nombre: 'Hablar con accionistas'}
    ]

    const initialState = {
        proyectos : [],
        formulario: false,
        
    }

    //obtener proyectos

    const obtenerProyectos = () =>{
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    // Dispatch para ejecutar las acciones

    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    //funciones para CRUD
    //Función que nos permitirá mostrar el formulario
    const mostrarFormulario =()=>{
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }
    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerProyectos
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState
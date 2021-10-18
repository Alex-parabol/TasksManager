import React, {useReducer} from 'react'
import {v4 as uuidv4} from 'uuid'
import proyectoContext from './proyectoContext'
import proyectoReducer from './proyectoReducer'
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGAR_PROYECTO } from '../../types/index'


const ProyectoState = props => {

   

    const initialState = {
        proyectos : [
        
        ],
        formulario: false
    }

    //obtener proyectos

    const obtenerProyectos = () =>{
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: initialState.proyectos
        })
    }

    //agregar nuevo proyecto

    const agregarProyecto = proyecto => {
        proyecto.id = uuidv4()
        //agregamos al state
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
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
                obtenerProyectos,
                agregarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState
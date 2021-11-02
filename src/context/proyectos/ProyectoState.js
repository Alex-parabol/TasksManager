import React, {useReducer} from 'react'
import proyectoContext from './proyectoContext'
import proyectoReducer from './proyectoReducer'
import clienteAxios from '../../components/config/axios'
import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    MOSTRAR_ERROR,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
     } from '../../types/index'


const ProyectoState = props => {

   

    const initialState = {
        proyectos : [],
        formulario: false,
        error: false,
        proyecto: null
    }

    //obtener proyectos

    const obtenerProyectos = () =>{
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: initialState.proyectos
        })
    }

    //agregar nuevo proyecto

    const agregarProyecto = async proyecto => {
        
        try {
            const resultado = await clienteAxios.post('/api/proyectos', proyecto);
            dispatch({
                type: AGREGAR_PROYECTO,
                payload: resultado.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    //Eliminar proyecto

    const eliminarProyecto = proyectoId => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
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

    const mostrarError =()=>{
        dispatch({
            type: MOSTRAR_ERROR
        })
    }

    // Mostramos proyeto actual

    const proyectoActual = proyectoId =>{
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }
    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                error: state.error,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                proyectoActual,
                mostrarError,
                eliminarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState
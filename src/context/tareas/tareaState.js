import React, {useReducer} from 'react'
import {v4 as uuidv4} from 'uuid'
import tareasContext from './tareaContext'
import TareaReducer from './tareaReducer'
import {
    FORMULARIO_TAREA,
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    MOSTRAR_ERROR,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA
     } from '../../types/index'


const TareaState = props => {

   

    const initialState = {
        tareas : [
     ],
        tareasproyecto: null,
        errortarea: false,
        estado: false
    }

    // creamos el dispatch y state

    const [state, dispatch] = useReducer(TareaReducer, initialState)
    //obtener proyectos

    const tareasProyecto = proyectoId =>{
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    //agregar nuevo proyecto

    const agregarTarea = tarea => {
        tarea.tareaId = uuidv4() 
        //agregamos al state
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    //Eliminar proyecto

    const eliminarTarea = tareaId => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: tareaId
        })
    }

    // Dispatch para ejecutar las acciones

    

    //funciones para CRUD
    //Función que nos permitirá mostrar el formulario
    const mostrarFormulario =()=>{
        dispatch({
            type: FORMULARIO_TAREA
        })
    }

    const validarTarea =()=>{
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    // Toggle del estado de la tarea

    const cambiarEstadoTarea = tarea =>{
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    
    return (
        <tareasContext.Provider
            value={{
                tareas: state.tareas,
                formulario: state.formulario,
                errortarea: state.errortarea,
                tareasproyecto: state.tareasproyecto,
                estado: state.estado,
                mostrarFormulario,
                tareasProyecto,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea
            }}
        >
            {props.children}
        </tareasContext.Provider>
    )
}

export default TareaState
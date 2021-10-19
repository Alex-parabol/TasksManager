import React, {useReducer} from 'react'
import {v4 as uuidv4} from 'uuid'
import tareasContext from './tareaContext'
import TareaReducer from './tareaReducer'
import {
    FORMULARIO_TAREA,
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    MOSTRAR_ERROR,
    /* AREA_ACTUAL, */
    ELIMINAR_TAREA
     } from '../../types/index'


const TareaState = props => {

   

    const initialState = {
        tareas : [
            {nombre:'Elegir Plataforma', estado: true, id: 1},
            {nombre:'Scrum meeting', estado: false, id: 2},
            {nombre:'Hacer Front', estado: true , id:2},
            {nombre:'Lamentar lo gilipollas que es mi puto padre', estado: false, id: 3}
     ],
        tareasproyecto: null,
        error: false
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
        tarea.id = uuidv4()
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

    const mostrarError =()=>{
        dispatch({
            type: MOSTRAR_ERROR
        })
    }

    // Mostramos proyeto actual

    
    return (
        <tareasContext.Provider
            value={{
                tareas: state.tareas,
                formulario: state.formulario,
                error: state.error,
                tareasproyecto: state.tareasproyecto,
                mostrarFormulario,
                tareasProyecto,
                agregarTarea,
                mostrarError,
                eliminarTarea
            }}
        >
            {props.children}
        </tareasContext.Provider>
    )
}

export default TareaState
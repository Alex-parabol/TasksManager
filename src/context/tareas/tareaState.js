import React, {useReducer} from 'react'
import {v4 as uuidv4} from 'uuid'
import tareasContext from './tareaContext'
import clienteAxios from '../../components/config/axios'
import TareaReducer from './tareaReducer'
import {
    FORMULARIO_TAREA,
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    /* MOSTRAR_ERROR, */
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA
     } from '../../types/index'


const TareaState = props => {

   

    const initialState = {
        tareasproyecto: [],
        tareaseleccionada: null,
        errortarea: false,
        estado: false
    }

    // creamos el dispatch y state

    const [state, dispatch] = useReducer(TareaReducer, initialState)
    //obtener proyectos

    const tareasProyecto = async proyecto =>{
        console.log(proyecto)
        try {
            const resultado= await clienteAxios.get('/api/tareas')
        } catch (error) {
            console.log(error)
        }
    }

    //agregar nuevo proyecto

    const agregarTarea = async tarea => {
        console.log(tarea)
        try {
        const resultado = await clienteAxios.post('/api/tareas', tarea);
        console.log(resultado)
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })  
        } catch (error) {
            console.log(error)
        }
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

    //obtenemos una tareaactual

    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    //editamos una tarea 

    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
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
                tareaseleccionada: state.tareaseleccionada,
                mostrarFormulario,
                tareasProyecto,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea
            }}
        >
            {props.children}
        </tareasContext.Provider>
    )
}

export default TareaState
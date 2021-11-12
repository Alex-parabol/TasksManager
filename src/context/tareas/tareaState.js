import React, { useReducer } from 'react'
import tareasContext from './tareaContext'
import clienteAxios from '../../components/config/axios'
import TareaReducer from './tareaReducer'
import {
    FORMULARIO_TAREA,
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
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

    const tareasProyecto = async proyecto => {
        console.log(proyecto)
        try {
            const resultado = await clienteAxios.get('/api/tareas', { params: { proyecto } });
            console.log(resultado)
            dispatch({
                type: TAREAS_PROYECTO,
                payload: resultado.data.tareas
            })
        } catch (error) {
            console.log(error)
        }
    }

    //agregar nuevo proyecto

    const agregarTarea = async tarea => {
        console.log(tarea)
        try {
            const resultado = await clienteAxios.post('/api/tareas', tarea);
            dispatch({
                type: AGREGAR_TAREA,
                payload: resultado.data.tarea
            })
        } catch (error) {
            console.log(error)
        }
    }

    //Eliminar proyecto

    const eliminarTarea = async (id, proyecto) => {
        try {
            await clienteAxios.delete(`/api/tareas/${id}`, { params: { proyecto } })
            dispatch({
                type: ELIMINAR_TAREA,
                payload: id
            })
        } catch (error) {

        }
    }

    // Dispatch para ejecutar las acciones



    //funciones para CRUD
    //Función que nos permitirá mostrar el formulario
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_TAREA
        })
    }

    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
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

    const actualizarTarea = async tarea => {

        console.log('asdasdad', tarea);
        try {
            const resultado = await clienteAxios.put(`/api/tareas/${tarea._id}`, tarea);

            dispatch({
                type: ACTUALIZAR_TAREA,
                payload: resultado.data.tarea
            })
        } catch (error) {
            console.log(error);
        }
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
                guardarTareaActual,
                actualizarTarea
            }}
        >
            {props.children}
        </tareasContext.Provider>
    )
}

export default TareaState
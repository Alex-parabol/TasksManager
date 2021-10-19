import {
    AGREGAR_TAREA,
    FORMULARIO_TAREA,
    TAREAS_PROYECTO,
    MOSTRAR_ERROR,
    TAREA_ACTUAL, 
    ELIMINAR_TAREA
        } from '../../types/index'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action)=> {
    switch(action.type){
        case MOSTRAR_ERROR:
            return {
                ...state,
                error: true
            }
        /* case TAREA_ACTUAL:
            return {
                ...state,
                proyecto: state.proyectos.filter(
                    proyecto => proyecto.id === action.payload
                    )
            } */
        case TAREAS_PROYECTO:
            return {
                ...state,
                tareasproyecto: state.tareas.filter(tarea => tarea.proyectoId === action.payload)
            }
        case AGREGAR_TAREA:
            return {
                 ...state,
                 tareas: [...state.tareas, action.payload],
                error: false
            }
            case ELIMINAR_TAREA:
                return {
                    ...state,
                    tareas: state.tareas.filter(
                        tarea => tarea.id !== action.payload
                        ),
                    tarea: null
                }
            
        default: 
        return state
    }
}
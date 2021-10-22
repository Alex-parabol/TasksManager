import {
    AGREGAR_TAREA,
    FORMULARIO_TAREA,
    TAREAS_PROYECTO,
    VALIDAR_TAREA,
    TAREA_ACTUAL, 
    ELIMINAR_TAREA,
    ESTADO_TAREA
        } from '../../types/index'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action)=> {
    console.log(action)
    console.log(state)
    switch(action.type){
        case VALIDAR_TAREA:
            return {
                ...state,
                errortarea: true
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
                 estado: false,
                errortarea: false
            }
            case ELIMINAR_TAREA:
                return {
                    ...state,
                    tareas: state.tareas.filter(
                        tarea => tarea.tareaId !== action.payload
                        )
                }
            case ESTADO_TAREA:
                return {
                    ...state,
                    estado: true
                }
            
        default: 
        return state
    }
}
import {
    AGREGAR_TAREA,
    /* FORMULARIO_TAREA, */
    TAREAS_PROYECTO,
    VALIDAR_TAREA,
    TAREA_ACTUAL,
    ELIMINAR_TAREA,
    ACTUALIZAR_TAREA
} from '../../types/index'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case VALIDAR_TAREA:
            return {
                ...state,
                errortarea: true
            }
        case TAREAS_PROYECTO:
            return {
                ...state,
                tareasproyecto: action.payload
            }
        case AGREGAR_TAREA:
            return {
                ...state,
                tareasproyecto: [...state.tareasproyecto, action.payload],
                estado: false,
                errortarea: false
            }

        case ELIMINAR_TAREA:
            return {
                ...state,
                tareasproyecto: state.tareasproyecto.filter(
                    tarea => tarea._id !== action.payload
                )
            }

        case TAREA_ACTUAL:
            return {
                ...state,
                tareaseleccionada: action.payload
            }
        case ACTUALIZAR_TAREA:
            return {
                ...state,
                tareasproyecto: state.tareasproyecto.map(tarea => tarea._id === action.payload._id ? action.payload : tarea)
            }

        default:
            return state
    }
}
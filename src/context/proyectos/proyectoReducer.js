import {
    AGREGAR_PROYECTO,
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    MOSTRAR_ERROR,
    PROYECTO_ACTUAL, 
    ELIMINAR_PROYECTO
        } from '../../types/index'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action)=> {
    switch(action.type){
        case PROYECTO_ACTUAL:
            return {
                ...state,
                proyecto: state.proyectos.filter(
                    proyecto => proyecto.id === action.payload
                    )
            }
        case MOSTRAR_ERROR:
            return {
                ...state,
                error: true
            }
        
        case OBTENER_PROYECTOS:
            return {
                ...state,
                proyectos: action.payload
            }
        case AGREGAR_PROYECTO:
        return {
             ...state,
            proyectos: [...state.proyectos, action.payload],
            formulario: false,
            error: false

        }
        case ELIMINAR_PROYECTO:
            return {
                ...state,
                proyectos: state.proyectos.filter(
                    proyecto => proyecto.id !== action.payload
                    ),
                proyecto: null
            }
        case FORMULARIO_PROYECTO:
            return {
                ...state,
                 formulario: true
                }
        default: 
        return state
    }
}
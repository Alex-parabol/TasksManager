import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from '../../types/index'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action)=> {
    switch(action.type){
        case OBTENER_PROYECTOS:
            return {
                ...state,
                proyectos: action.payload
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
import React, {useContext,useEffect } from 'react'
import Proyecto from './Proyecto'
import AlertaContext from '../../context/alertas/alertaContext'
import proyectoContext from '../../context/proyectos/proyectoContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

export default function Listado() {

    //Extraemos proyectos de initial state
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos, mensaje } = proyectosContext;

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

 // Obtener proyectos cuando carga el componente
 useEffect(() => {
    // si aparece un error
    if(mensaje) {
        mostrarAlerta(mensaje.msg, mensaje.categoria);
    }

    obtenerProyectos();
    // eslint-disable-next-line
}, [mensaje])

     console.log(proyectos)
    if(proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;

   
    return (
        <ul className="listado-proyectos">
            {alerta ? <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> : null}
            <TransitionGroup>
                 {proyectos.map(proyecto => (
                    <CSSTransition
                    key={proyecto._id}
                    timeout={200}
                    classNames='proyecto'
                    >
                        <Proyecto proyecto={proyecto} />
                    </CSSTransition>
                
            ))}
            </TransitionGroup> 
        </ul>
    )
}

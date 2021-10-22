import React, {useContext } from 'react'
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

export default function Listado() {

    //Extraemos proyectos de initial state
    const proyectosContext = useContext(proyectoContext);
    const { proyectos } = proyectosContext;



     console.log(proyectos)
    if(proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;

   
    return (
        <ul className="listado-proyectos">
            <TransitionGroup>
                 {proyectos.map(proyecto => (
                    <CSSTransition
                    key={proyecto.Id}
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

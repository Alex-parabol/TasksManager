import React, {useContext, useEffect} from 'react'
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext';


export default function Listado() {

    //Extraemos proyectos de initial state
    const ProyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = ProyectosContext;


    useEffect(()=> {
        obtenerProyectos()
        }, [])

    if(proyectos.length === 0) return null;

   
    return (
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto key={proyecto.id} proyecto={proyecto} />
            ))}
        </ul>
    )
}

import React, {useContext, useEffect} from 'react'
import Sidebar from '../layout/Sidebar'
import Barra from '../layout/Barra'
import FormTarea from '../tareas/FormTarea'
import ListadoTareas from '../tareas/ListadoTareas'
import AuthContext from '../../context/autentificacion/authContext'

export default function Proyectos() {
// Extraemos la información de autentificación

    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    useEffect(()=>{
        usuarioAutenticado()
    },[])

    return (
       <div className="contenedor-app">
           <aside>
           <Sidebar/>
           </aside>
           <div className="seccion-principal">
                <Barra/>
               <main>
                    <FormTarea />
                   <div className="contenedor-tareas">
                      <ListadoTareas/>
                   </div>
               </main>
           </div>
       </div>
    )
}

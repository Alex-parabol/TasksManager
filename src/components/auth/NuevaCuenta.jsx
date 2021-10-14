import React, {useState} from 'react';
import { Link } from 'react-router-dom'

export default function NuevaCuenta() {

    //state para el inicio

    const [nuevoUsuario, setNuevoUsuario ] = useState({
        nombre: '',
        email:'',
        password: '',
        confirmPassword: ''
    });

    const [error, setError ] = useState(false)

    //extraemos la info del state

    const { email, password, confirmPassword, nombre } = nuevoUsuario;

    const onChange = e =>{
        setNuevoUsuario({
            ...nuevoUsuario,
            [e.target.name] : [e.target.value]
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        //validamos campos vacios 
        
        if(email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '' || nombre.trim() === '' || confirmPassword !== password) {
            setError(true);
            return
        }

        //
    }

    return (
       <div className="form-usuario">
           <div className="contenedor-form sombra-dark">
               <h1>CREA TU CUENTA</h1>
               <form
               onSubmit={onSubmit}
               >
                   <div className="campo-form">
                       <label htmlFor="nombre">nombre</label>
                       <input
                        type="text"
                        id='nombre'
                        name='nombre'
                        placeholder='Tu Nombre'
                        value={nombre}
                        onChange={onChange}
                        />
                   </div>
                   <div className="campo-form">
                       <label htmlFor="email">Email</label>
                       <input
                        type="email"
                        id='email'
                        name='email'
                        placeholder='Tu E-mail'
                        value={email}
                        onChange={onChange}
                        />
                   </div>
                   <div className="campo-form">
                       <label htmlFor="password">Contraseña</label>
                       <input
                        type="password"
                        id='password'
                        name='password'
                        placeholder='Tu contraseña'
                        value={password}
                        onChange={onChange}
                        />
                   </div>
                   <div className="campo-form">
                       <label htmlFor="confirmPassword">Confirma tu Contraseña</label>
                       <input
                        type="password"
                        id='confirmPassword'
                        name='confirmPassword'
                        placeholder='Confirma tu Contraseña'
                        value={confirmPassword}
                        onChange={onChange}
                        />
                   </div>
                   <div className="campo-form">
                       <input
                        type="submit"
                        className='btn btn-block btn-primario'
                        value='Registrarme'
                        />
                   </div>
               </form>
               <Link to={'/'} className='enlace-cuenta'>
                    Volver a Iniciar Sesión
                   </Link>
           </div>
       </div>
    )
}

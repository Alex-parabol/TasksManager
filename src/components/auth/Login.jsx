import React, {useState} from 'react';
import { Link } from 'react-router-dom'

export default function Login() {

    //state para el inicio

    const [usuario, setUsuario ] = useState({
        email:'',
        password: ''
    });

    const [error, setError ] = useState(false)

    //extraemos la info del state

    const { email, password } = usuario;

    const onChange = e =>{
        setUsuario({
            ...usuario,
            [e.target.name] : [e.target.value]
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        //validamos campos vacios 
        
        if(email.trim() === '' || password.trim() === '') {
            setError(true);
            return
        }

        //
    }

    return (
       <div className="form-usuario">
           <div className="contenedor-form sombra-dark">
               <h1>INICIO DE SESIÓN</h1>
               <form
               onSubmit={onSubmit}
               >
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
                       <label htmlFor="password">Password</label>
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
                       <input
                        type="submit"
                        className='btn btn-block btn-primario'
                        value='Iniciar Sesión'
                        />
                   </div>
               </form>
               <Link to={'/nueva-cuenta'} className='enlace-cuenta'>
                    Obtener Cuenta
                   </Link>
           </div>
       </div>
    )
}

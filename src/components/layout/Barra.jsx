import React from 'react'

export default function Barra() {
    return (
        <header className="app-header">
            <p className="nombre-usuario">Usuario <span>Alex</span></p>
            <nav className="nav-principal">
                <a href="#!">Cerrar Sesión</a>
            </nav>
        </header>
    )
}

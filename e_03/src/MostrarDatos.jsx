import { useState } from 'react'    
export function MostrarDatos({datos}){

    return(
        <>
            <p>Nombre de heroe: {datos.nombre}</p>
            <p> Cantidad de oro: {datos.oro}</p>
            <p>Tipo de armadura: {datos.armadura.tipo}</p>
            <p>Defensa de armadura: {datos.armadura.defensa}</p>
        </>
    )


}
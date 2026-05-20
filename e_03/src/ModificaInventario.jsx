import { useState } from 'react'    
export function BotonesInventario({accion}){

    return(
        <>
            <button onClick={ () => accion()}>Mejorar Armadura</button>
        </>
    )


}
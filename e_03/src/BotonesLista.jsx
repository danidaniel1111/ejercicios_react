import { useState } from 'react'    
export function BotonesLista({accion}){

    return(
        <>
            <button onClick={()=> accion("X")}>Registrar jugada de X</button>
            <button onClick={()=> accion("O")}>Registrar jugada de O</button>
        </>
    )


}
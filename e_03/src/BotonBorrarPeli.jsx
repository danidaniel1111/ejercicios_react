import { useState} from "react";

export function BotonBorrar({accion, nombre}){
    
    return(
        <>
            
            <button onClick={() => accion(nombre)}>Eliminar</button>
           
        </>
    )


}
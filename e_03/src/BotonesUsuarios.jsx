import { useState} from "react";

export function BotonesUsuarios({accion}){


    return(
        <>
           <button onClick={()=> accion("clan")}>Unirse al clan React</button> 
           <button onClick={()=> accion("nivel")}>Subir de Nivel</button>          
        </>
    )


}
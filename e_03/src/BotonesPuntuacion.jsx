import { useState} from "react";

export function BotonesPuntuacion({accion_puntos, accion_guardar_record}){


    return(
        <>
            <button onClick={() => accion_puntos(prev => prev + 1)}>Sumar Punto</button> 
            <button onClick={() => accion_guardar_record()}>Guardar Record Historico</button>      
        </>
    )


}
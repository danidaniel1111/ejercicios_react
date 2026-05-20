import { useState} from "react";

export function JuegoBoton({accion}){


    return(
        <>
            <button onClick={() => accion()}>¡Click!</button>
           
        </>
    )


}
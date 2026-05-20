import { useState} from "react";

export function InputBoton({accion_boton, accion_input}){


    return(
        <>
            <input type='text' onInput={(e) => accion_input(e.target.value)}></input>  
            <button onClick={() => accion_boton()}> Añadir a favoritos</button>
           
        </>
    )


}
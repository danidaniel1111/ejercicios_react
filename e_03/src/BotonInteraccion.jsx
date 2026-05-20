import { useState } from 'react'    
export function BotonInteraccion({ id_usuario, accion_jugadores, contadores}){

    return(
        <>
          <button onClick={() => {
            //Copia de array , cambio en jugador  1  , setteo de array nuevo como estado y guardamos en local ese nuevo array
            const copia_array=[...contadores];
            copia_array[parseInt(id_usuario)]+=1;
            accion_jugadores(copia_array);
            window.localStorage.setItem('puntuacion_guardada', JSON.stringify(copia_array));

          }}>+ 1 Punto a {id_usuario === "0" ? "Jugador 1" : "Jugador 2"}</button>
        </>
    )


}

import { useState } from 'react'    
export function FichaJugador({nombre, puntos}){

    return(
        <>
            <div className='ficha_jugador'><p>Jugador: {nombre} Puntos : {puntos}</p></div>
        </>
    )


}
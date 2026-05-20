import { useState} from "react";

export function BotonesModos({accion_oscuro,accion_sonido,accion_animacion}){


    return(
        <>
           <button onClick={()=> accion_oscuro(prev => !prev)}>¿Incluir modo oscuro?</button> 
           <button onClick={()=> accion_sonido(prev => !prev)}>¿Incluir sonido?</button>          
           <button onClick={()=> accion_animacion(prev => !prev)}>¿Incluir animaciones?</button>    
        </>
    )


}
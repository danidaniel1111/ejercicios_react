import { useState } from "react";
export function TarjetaPersonalizada({nombre, precio, estaEnOferta}) {
  
  return (
    <div>
      <h1>Hola, {nombre}</h1>
      <p className={precio > 100 ? 'oferta' : ''}>Precio: {precio} $</p>
     {estaEnOferta && <p>¡Rebajado!</p>}
    </div>
  )
}
import { useState } from "react";

export function CarritoCompra({ accion_boton, accion_checkbox, marcado }) {
  return (
    <>
      <button onClick={() => accion_boton()}>Añadir al Carrito</button>
      <input
        type="checkbox"
        onChange={() => accion_checkbox(true)}
        checked={marcado}
      ></input>
      <label>Añadir Cupon Descuento</label>
    </>
  );
}

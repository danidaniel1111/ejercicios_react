import { useState, useEffect } from "react";

export function BotonesClase({ accion }) {
  return (
    <>
      <button onClick={() => accion("Mago")}>Mago</button>
      <button onClick={() => accion("Guerrero")}>Guerrero</button>
    </>
  );
}

import { useState } from "react";
// Recibe las props del padre
export function Interruptor({ estado, cambiar }) {
  return (
    <button onClick={cambiar}>
      {estado ? "OFF" : "ON"}
    </button>
  )
}


import { useState, useEffect } from "react";

export function BotonesFiltro({ accion_todos }) {
  return (
    <>
      <button onClick={() => accion_todos("Todos")}>Ver todos</button>
      <button onClick={() => accion_todos("Desarrollador")}>
        Solo desarrolladores
      </button>
      <button onClick={() => accion_todos("Diseñador")}>
        Solo diseñadores
      </button>
    </>
  );
}

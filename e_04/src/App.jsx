import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { BotonesFiltro } from "./BotonesFiltro";
import { BotonesClase } from "./BotonesClase";
const trabajadores = [
  { nombre: "Dani", rol: "Desarrollador" },
  { nombre: "Marta", rol: "Diseñador" },
  { nombre: "Clara", rol: "Desarrollador" },
  { nombre: "Lucas", rol: "Marketing" },
];

function App() {
  const [filtro_activo, setFiltroActivo] = useState("Todos");

  useEffect(() => {
    document.title = "Filtro actual : " + filtro_activo;
  }, [filtro_activo]);

  const lista_filtrada = trabajadores.filter((trabajador) => {
    if (filtro_activo === "Todos") return true;

    return trabajador.rol === filtro_activo;
  });
  return (
    <>
      <BotonesFiltro accion_todos={setFiltroActivo}></BotonesFiltro>
      <ul>
        {lista_filtrada.map((trabajador, index) => {
          return (
            <li key={index}>
              {trabajador.nombre} {trabajador.rol}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;

/*








*/

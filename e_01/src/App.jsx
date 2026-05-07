import {TarjetaPersonalizada} from "./Tarjeta.jsx";
import {ContenedorElegante} from "./Envoltorio.jsx";
import {Interruptor} from "./Interruptor.jsx";
import {UsuarioCard} from "./UsuarioCard.jsx";
import { useState } from "react";
import "./tarjeta.css";
export function App() {
  const usuarios = [
  { id: 1, nombre: "Dani", puntos: 150, esVip: true },
  { id: 2, nombre: "Juan", puntos: 80, esVip: false },
  { id: 3, nombre: "Alex", puntos: 200, esVip: true },
  { id: 4, nombre: "Marta", puntos: 45, esVip: false }
  ];
  const [estado_interruptor, setEstado] = useState(false);
  // Función para pasarle al hijo
  const manejarCambio = () => setEstado(prev => !prev);
  return (
    <>
    {usuarios.map(usuario => (
      <UsuarioCard
        key={usuario.id}
        id={usuario.id}
        nombre={usuario.nombre}
        puntos={usuario.puntos}
        esVip={usuario.esVip}
      />
    ))}
     <div className={estado_interruptor ? "fondo-claro" : "fondo-oscuro"}>
      <ContenedorElegante>
        <TarjetaPersonalizada nombre="Ordenador" precio={200} estaEnOferta></TarjetaPersonalizada>
      </ContenedorElegante>
      <ContenedorElegante>
        <TarjetaPersonalizada nombre="Motor" precio={134} estaEnOferta={false}></TarjetaPersonalizada>
      </ContenedorElegante>
      <ContenedorElegante>
        <TarjetaPersonalizada nombre="Teclado" precio={5} estaEnOferta></TarjetaPersonalizada>
      </ContenedorElegante>
      <Interruptor estado={estado_interruptor} cambiar={manejarCambio} />
    </div>
    
    </>

  )
}

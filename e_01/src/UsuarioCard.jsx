import { useState } from "react";
export function UsuarioCard({ id, nombre, puntos, esVip }) {
    const [siguiendo, setSiguiendo] = useState(false);
    return (
        <div>
        <h3>{nombre} {esVip ? "✭" : ""}</h3>
        <p>Puntos: {puntos}</p>
        <button onClick={() => setSiguiendo(prev => !prev)}>
            {siguiendo ? "Dejar de seguir" : "Seguir"}
        </button>
        </div>
     )
}
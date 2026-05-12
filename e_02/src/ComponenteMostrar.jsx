import { useState } from "react"
export function ComponenteMostrar({pregunta}) {
    const [filtro, setFiltro] = useState(false)
    return (   
        <>
            <li key={pregunta.id}>
            <p>{pregunta.titulo}</p>
            {filtro && <p>{pregunta.respuesta}</p>}
            <button onClick={() => setFiltro(prev => !prev)}>
            {filtro ? "Ocultar respuesta" : "Mostrar respuesta"}
            </button>
            </li>
              
        </>
    )
}  
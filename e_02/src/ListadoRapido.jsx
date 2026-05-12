export function ListadoRapido({accion, filtrado}) {
    return (   
        <button onClick={() => accion()}>{filtrado ? "Mostrar todas las tareas" : "Mostrar solo tareas completadas"}</button>
    )
}   
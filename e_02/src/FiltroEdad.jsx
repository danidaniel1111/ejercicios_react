
export function FiltroEdad({accion , estado}) {
   
    return (   
        <>
            <button onClick={() => accion(true)}>Mayores de 18</button>
            <button onClick={() => accion(false)}>Mostrar todos</button>
    
        </>
    )
}  
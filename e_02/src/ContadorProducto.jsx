
export function ContadorProducto({accion}) {
    return (   
        <>
            <button className="boton_agregar" onClick={() => accion(prev => prev + 1)}>+</button>
            <button className="boton_restar" onClick={() => accion(prev => prev > 0 ? prev - 1 : 0)}>-</button>
        </>
    )
}


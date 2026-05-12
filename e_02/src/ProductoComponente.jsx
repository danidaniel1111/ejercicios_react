export function ComponenteProducto({accion , contenido}) {
   
    return (   
        <>
            <p>{contenido.nombre} - {contenido.precio} $</p>
            <button onClick={() => accion(prev => prev + 1)}>Agregar al carrito</button>
        </>
    )
}  
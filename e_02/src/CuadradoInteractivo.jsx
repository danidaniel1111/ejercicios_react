export function CambioColor({accion}) {
    return (   
    <>
      <button onClick={() => accion("cuadrado_rojo")}>Rojo</button>
      <button onClick={() => accion("cuadrado_verde")}>Verde</button>
      <button onClick={() => accion("cuadrado_azul")}>Azul</button>
      <button onClick={() => accion("cuadrado_blanco")}>Reset</button>
    </>
    )
}   
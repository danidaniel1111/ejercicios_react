  
export function LimpiarArray({lista}){
    const copia_lista={...lista};
    const{ puntuacionSucia, ...lista_limpia}=copia_lista;

    return(
        <>
            <ul>
                <li>ID de Partida: {lista_limpia.idPartida}</li>
                <li>Jugador 1: {lista_limpia.jugador1}</li>
                <li>Jugador 2: {lista_limpia.jugador2}</li>
                <li>Turnos Jugados: {lista_limpia.turnosJugados}</li>
            </ul>
            {console.log(lista_limpia)}
        </>
    )


}
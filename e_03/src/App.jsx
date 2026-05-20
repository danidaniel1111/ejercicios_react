import { useEffect, useState } from "react";
import { FichaJugador } from "./FichaJugador";
import { BotonInteraccion } from "./BotonInteraccion";
import { BotonReset } from "./BotonReset";
import { BotonesLista } from "./BotonesLista";
import { BotonesInventario } from "./ModificaInventario";
import { MostrarDatos } from "./MostrarDatos";
import { LimpiarArray } from "./LimpiarArray";
import { InputBoton } from "./InputyBoton";
import { BotonBorrar } from "./BotonBorrarPeli";
import { JuegoBoton } from "./JuegoBoton";
import { BotonesUsuarios } from "./BotonesUsuarios";
import { BotonesModos } from "./BotonesModos";
import { BotonesPuntuacion } from "./BotonesPuntuacion";
import { CarritoCompra } from "./CarritoCompra";
const codigo_ganador = ["a", "s", "d"];
function App() {
  const [lista_teclas, setTeclas] = useState([]);
  const [modo_dios, setDios] = useState(false);
  const comprobar_codigo = (lista) => {
    console.log("Codigo a comprobar :" + lista);
    return JSON.stringify(lista) === JSON.stringify(codigo_ganador);
  };
  useEffect(() => {
    const captar_teclas = (e) => {
      //Comprobar si hay hueco para eso, si no , quitamos el primer elemento del array y metemos el de ahora con rest

      //quitar el primer elemento del array  const [primero, ...array_limpio] = lista_teclas;
      setTeclas((prev) => {
        console.log("Longitud de la lista: " + prev.length);
        if (prev.length + 1 > 3) {
          const [primero, ...array_limpio] = prev;
          const nuevo_array = [...array_limpio, e.key];
          if (comprobar_codigo(nuevo_array)) {
            console.log("Codigo ganador");
            setDios((prev) => (prev = true));
          }
          return nuevo_array;
        } else {
          const nueva_lista = [...prev, e.key];
          if (comprobar_codigo(nueva_lista)) {
            console.log("Codigo ganador");
            setDios((prev) => (prev = true));
          }
          return nueva_lista;
        }

        //comprobar si el codigo es el ganador
      });
    };

    window.addEventListener("keydown", captar_teclas);
  }, []);
  return (
    <>
      <p>Tecla pulsada</p>
      {modo_dios ? (
        <h1>"🔓 ¡MODO DIOS ACTIVADO!"</h1>
      ) : (
        lista_teclas.map((nombre, index) => {
          return <p key={nombre}> Tecla pulsada: {nombre}</p>;
        })
      )}
    </>
  );
}

/*
{console.log("Lista: " + lista_teclas)}
  const [precio_articulo, setPrecio] = useState(0);
  const [tiene_cupon, setCupon] = useState(false);
  const [carrito_compra, setCarrito] = useState([]);

  const añadir_carrito = () => {
    //comprobar si el input esta vacio
    if (precio_articulo > 0 && precio_articulo.length > 0) {
      const copia_precio = parseInt(precio_articulo);
      if (tiene_cupon) {
        const copia_con_descuento = copia_precio * 0.8;
        const copia_carro = [...carrito_compra];
        setCarrito([...copia_carro, copia_con_descuento]);
      } else {
        const copia_carro = [...carrito_compra];
        setCarrito([...copia_carro, copia_precio]);
      }
    } else {
      console.log("No hay nada en el input");
    }

    setCupon(false);
  };



        <label>Escribe precio de un articulo</label>
      <input type="number" onInput={(e) => setPrecio(e.target.value)}></input>
      <CarritoCompra
        accion_boton={añadir_carrito}
        accion_checkbox={setCupon}
        marcado={tiene_cupon}
      ></CarritoCompra>
      {console.log("Precio : " + precio_articulo)}
      {carrito_compra.length == 0 ? (
        <p>No hay articulos en el carro</p>
      ) : (
        <ul>
          {carrito_compra.map((nombre, index) => {
            return (
              <li key={index}>
                Precio de articulo {index + 1} :{nombre}
              </li>
            );
          })}
        </ul>
      )}
      {carrito_compra.length > 0 && (
        <h1>
          Precio Total del Carrito:{" "}
          {carrito_compra.reduce((acumulador, p) => acumulador + p, 0)}
        </h1>
      )}

*/

/*  

const[puntuacion_actual,setActual]= useState(0);
  const[historial_record,setRecord]=useState([]);

  const guardar_record = (opcion) =>{
    console.log("Guardar Record");
    //Sacamos la fecha actual, copia de puntuacion, y lo guardamos en la lista 
    const fecha = new Date();
    const fecha_final = fecha.getDate()+"-"+(fecha.getMonth()+1)+"-"+fecha.getFullYear();
    console.log(fecha_final);
    const copia_puntuacion_actual=puntuacion_actual;
    const nuevo_record={puntos: copia_puntuacion_actual, fecha: fecha_final};
    const copia_historial=[...historial_record];
    const lista_a_ordenar=[...copia_historial, nuevo_record];
    setRecord(lista_a_ordenar.sort((a,b)=>a.puntos - b.puntos));
    setActual(0);
    console.log(copia_historial);
  }



        <div className='contenedor_juego'>
        <h1>Puntuacion actual: {puntuacion_actual}</h1>
        <BotonesPuntuacion accion_puntos={setActual} accion_guardar_record={guardar_record}></BotonesPuntuacion> 
      </div>
      {historial_record.length>0 && 
        <ul>
          {historial_record.map((nombre, index) => {
          //falta ordenar
            return <li key={nombre.puntos}>Puntos: {nombre.puntos} , Fecha: {nombre.fecha}</li>
          })}
        </ul>
      }


*/

/*
  const[modo_oscuro,setOscuro]=useState(false);
  const[modo_sonido,setSonido]=useState(false);
  const[modo_animaciones,setAnimaciones]=useState(false);
  const lista_modos = [
    ...(modo_oscuro ? ["Modo Oscuro Activo"] : []),
    ...(modo_sonido ? ["Modo Sonido Activo"] : []),
    ...(modo_animaciones ? ["Modo Animaciones Activo"] : [])
  ];



        {lista_modos.length>0 && 
        <ul>
          {lista_modos.map((nombre, index) => {
            return <li key={index}>{nombre}</li>
          })}
        </ul>
      }
      <div className='contenedor_botones'>
        <BotonesModos accion_oscuro={setOscuro} accion_sonido={setSonido} accion_animacion={setAnimaciones}></BotonesModos>
      </div>
*/

/*

  const [usuario, setUsuario]= useState({
    nickname: "Player1",
    nivel: 1,
    clan: "Ninguno",
    online: true
  });

  const cambiar_usuario = (opcion) =>{
    console.log("Opcion pulsada: "+opcion);
    const copia_usuario={...usuario};
    const copia_final={...copia_usuario , nivel: (opcion =="nivel" ? copia_usuario.nivel + 1 : copia_usuario.nivel), clan: (opcion =="clan" ? "React Lords" : copia_usuario.clan)};
    setUsuario(copia_final);
  }



        <p>Nickname: {usuario.nickname}</p>
      <p>Nivel: {usuario.nivel}</p>
      <p>Clan: {usuario.clan}</p>  
      <p>{usuario.online ? "Esta conectado" : "No esta conectado"}</p>   
      <BotonesUsuarios accion={cambiar_usuario}></BotonesUsuarios>

*/

/*
  const [puntuacion_actual, setPuntuacionActual]=useState(0);
  const [puntuacion_record, setRecord]= useState(() => {
    const puntuacion_guardada=window.localStorage.getItem('puntuacion_guardada');
    return puntuacion_guardada ? parseInt(puntuacion_guardada) : 0;
  });
  const jugar_juego = () => {
    // Para la asincronia
    const nueva_puntuacion = puntuacion_actual + 1;
    setPuntuacionActual(nueva_puntuacion);
   
    if (nueva_puntuacion > puntuacion_record) {
      setRecord(nueva_puntuacion);
      window.localStorage.setItem('puntuacion_guardada', nueva_puntuacion);
    }
  }


        <div className='contenedor_juego'>
        <p>Puntuacion Actual: {puntuacion_actual}   Puntuacion Record: {puntuacion_record}</p>
        <JuegoBoton accion={jugar_juego}></JuegoBoton>

      </div>

*/

/*
  const [lista_peliculas, setLista]= useState([]);
  const [textoInput, setTextoInput] = useState("");



  const agregar_lista = () => {
    
    //hay que mirar si esta vacio o no 
    if(textoInput.length==0){
      console.log("Esta vacio, no hacemos nada");
    }
    else{
      const copia_lista_pelis=[...lista_peliculas];
      const contenido_input=textoInput;
      const copia_final=[contenido_input, ...copia_lista_pelis];
      setLista(copia_final);

      console.log("Contenido de la lista: "+lista_peliculas);
    }
  }

  const borrar_peli = (nombre) => {
    console.log("Pelicula a borrar: "+nombre);
    const copia_lista_borrar=[...lista_peliculas];
    const lista_filtrada=copia_lista_borrar.filter(pelicula => pelicula !== nombre );
    setLista(lista_filtrada);
  }


      <div className='contenedor_lista'>
        {lista_peliculas.length > 0 &&
          lista_peliculas.map((nombre, index)=>{
            return <p key={nombre}> Titulo de película: {nombre}   <BotonBorrar accion={borrar_peli} nombre={nombre}></BotonBorrar></p>
            
          })        
        
        
        
        }
        <label>Escriba su pelicula</label>
        <InputBoton accion_boton={agregar_lista} accion_input={setTextoInput}></InputBoton>

      </div>



*/

/*

const partidaVieja = {
  idPartida: "99A",
  jugador1: "Dani",
  jugador2: "Marta",
  puntuacionSucia: -999,
  turnosJugados: 12
};


      <LimpiarArray lista={partidaVieja}></LimpiarArray>

*/

/*

  const [valores_heroe, setValores]= useState({
    nombre: "Héroe",
    oro: 100,
    armadura: { 
      tipo: "Cuero", 
      defensa: 10 
    }
  
  });
  const [pobre, setPobre]=useState(false);
  const modificar_armadura = () => {
    if(valores_heroe.oro < 50){
      setPobre(true);
    }
    else{
     
      const heroe_final = {...valores_heroe, oro: valores_heroe.oro - 50, armadura: { ...valores_heroe.armadura, defensa: valores_heroe.armadura.defensa + 15}};
      setValores(heroe_final);
      setPobre(false);

    }
  }





        <div className='contenedor_personaje'>
        <MostrarDatos datos={valores_heroe}></MostrarDatos>
        {pobre && <p>No cuenta con oro para subir la armadura</p>}
      </div>
      <BotonesInventario accion ={modificar_armadura}></BotonesInventario>


*/

/*
  const [lista_movimientos, setListaMovimientos] = useState([]);
  const agregar_lista = (jugador) => {
    const nuevo_movimiento = `El jugador ${jugador} se movió`;
    setListaMovimientos([nuevo_movimiento, ...lista_movimientos]);
  }


      <ul>
      {lista_movimientos.map((movimiento, index) => {
        return <li key ={index}>{movimiento}</li>
      })}
    </ul>
    <div className='contenedor_botones'>
      <BotonesLista accion={agregar_lista}></BotonesLista>
    </div>

*/

/*
  const [contador_jugadores, setContadorJugadores] = useState(()=>{
    const contador_guardados= window.localStorage.getItem('puntuacion_guardada');
    return contador_guardados ? JSON.parse(contador_guardados) : [0,0];
  });

  const funcion_reset = () =>{
  setContadorJugadores([0,0]);
  window.localStorage.removeItem('puntuacion_guardada');

}



      <div className='contenedor_jugadores'>
        {contador_jugadores.map((contador, index) => {
           return <FichaJugador key ={index}  nombre={`Jugador ${index +1}`} puntos={contador}></FichaJugador>;
        })}
      </div>
      <div className='contenedor_botones'>
        <BotonInteraccion id_usuario="0" accion_jugadores={setContadorJugadores} contadores={contador_jugadores}></BotonInteraccion>
        <BotonInteraccion id_usuario="1" accion_jugadores={setContadorJugadores} contadores={contador_jugadores}></BotonInteraccion>
        <BotonReset accion_reset={funcion_reset}></BotonReset>
      </div>

*/
export default App;

import { useState } from "react"
import {ContadorProducto} from "./ContadorProducto"
import {GaleriaFotos} from "./GaleriaFotos"
import {ListadoRapido} from "./ListadoRapido"
import {CambioColor} from "./CuadradoInteractivo"
import "./contador_producto.css"
import "./cuadrado.css"
import { ValidadorTexto } from "./ValidadorTexto"
import { ComponenteMostrar } from "./ComponenteMostrar"
import { FiltroEdad } from "./FiltroEdad"
import { ComponenteProducto } from "./ProductoComponente"

export function App() {
  const productos = [
  { id: 1, nombre: "Monitor Gaming", precio: 300 },
  { id: 2, nombre: "Teclado Mecánico", precio: 100 },
  { id: 3, nombre: "Ratón Inalámbrico", precio: 50 }
];

  const [contador, setContador] = useState(0)
  return (
    <>
    <div className="contenedor_producto">
        <h2>Tienda Daniel Perez</h2>
        <h2>Carrito con {contador} productos</h2>
        {productos.map(producto => (
         <ComponenteProducto key={producto.id} accion={setContador} contenido={producto} />
        ))}  
     </div>
    </>

  );
} 


/*
const usuarios = [
  { id: 1, nombre: "Dani", edad: 25 },
  { id: 2, nombre: "Marta", edad: 16 },
  { id: 3, nombre: "Alex", edad: 30 },
  { id: 4, nombre: "Sara", edad: 15 }
];

const [filtro, setFiltro] = useState(false);
const usuarios_filtrados = usuarios.filter(usuario => filtro ? usuario.edad >= 18 : true);



      <div className="contenedor_ejercicio">
        {usuarios_filtrados.map(usuario => (
          <p key={usuario.id}>{usuario.nombre} - {usuario.edad} años</p>
        ))}
        <FiltroEdad accion={setFiltro} estado={filtro} />
      </div>

*/







/*
  const preguntas = [
    { id: 1, titulo: "¿Qué es React?", respuesta: "Una biblioteca de JS para interfaces." },
    { id: 2, titulo: "¿Qué es un componente?", respuesta: "Una pieza reutilizable de la interfaz." },
    { id: 3, titulo: "¿Qué es el estado?", respuesta: "La memoria del componente." }
  ];
      <ul>
        {preguntas.map((pregunta) => (
          <ComponenteMostrar key={pregunta.id} pregunta={pregunta}/>
        ))}  
      </ul>
*/



/*
  const [contador_letras, setContadorLetras] = useState(0)

      <div className="contenedor_input">
        <input type="text" data-id="1" onChange={(e) => setContadorLetras(e.target.value.length)} />
        <ValidadorTexto contador_letras={contador_letras} />
      </div>
*/




/*
    <>
    const [contador, setContador] = useState(0)
      <div className="contenedor_producto">
        <h2>Producto 1</h2>
        <h2 className={contador > 0 ? "contador_activo" : "contador_inactivo"}>{contador}</h2>
        <ContadorProducto accion={setContador} />
     </div>
    </>

*/


/*
    const fotos = [
  { id: 1, url: "https://picsum.photos/id/237/200/300" },
  { id: 2, url: "https://picsum.photos/id/1/5000/3333" },
  { id: 3, url: "https://picsum.photos/id/13/2500/1667" },
  { id: 4, url: "https://picsum.photos/id/23/3887/4899" }
    ];
     const [url_actual, setUrl_actual] = useState(fotos[0].url)




     <GaleriaFotos fotos={fotos} accion={setUrl_actual} foto_actual={url_actual} />

*/



  /*
  const tareas = [
    { id: 1, texto: "Comprar pan", completada: false },
    { id: 2, texto: "Aprender React", completada: true },
    { id: 3, texto: "Ir al gym", completada: false },
    { id: 4, texto: "Lavar el coche", completada: true }
  ];

  const [filtrado, setFiltrado] = useState(false);

  // La función solo tiene que cambiar el interruptor (true/false)
  const filtro_lista = () => setFiltrado(prev => !prev);
  */


  /*
  const [color_actual, setColor_actual] = useState("cuadrado_blanco")
      <div className="contenedor_ejercicio">
      <div className={color_actual} ></div>
      <div className="contenedor_botones">
        <CambioColor accion={setColor_actual} />
      </div>
    </div> 

  */
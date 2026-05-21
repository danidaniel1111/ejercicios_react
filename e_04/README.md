# 👥 Panel de Control de Empleados Dinámico

Aplicación interactiva desarrollada en React para la gestión y filtrado en tiempo real de equipos de trabajo según su rol profesional. El proyecto está enfocado en aplicar las mejores prácticas de rendimiento del ecosistema moderno de React, optimización de renderizados y sincronización de efectos secundarios.

---

## 🚀 Demostración Técnica y Buenas Prácticas

* **Cero Estados Duplicados (Renderizado Óptimo):** Se eliminó el antipatrón común de almacenar la lista filtrada en un estado pesado. En su lugar, el filtrado se calcula en vivo mediante una **constante normal en el renderizado** utilizando el método `.filter()`. Esto garantiza que la aplicación realice un único renderizado por acción, acelerando el procesamiento en la CPU.
* **Componentes Controlados y Modularización:** Separación limpia de responsabilidades entre el componente raíz (`App`) y el componente secundario (`BotonesFiltro`), comunicándose mediante el paso de funciones a través de `props`.
* **Manejo Estricto de Efectos Secundarios:** Uso de un `useEffect` vigilante acoplado exclusivamente al estado del filtro. Su único propósito es sincronizar la aplicación con el DOM externo modificando de forma automática el `document.title` de la pestaña del navegador, cumpliendo con el principio de responsabilidad única.

---

## 🛠️ Tecnologías Utilizadas

* **React (v18+)** & Vite como empaquetador.
* **JavaScript Moderno:** Métodos de arrays inmutables (`.filter`, `.map`) y desestructuración de objetos.
* **Calidad de Código:** Formateo y ordenación estricta global automatizada con **Prettier**.

---

## 💻 Estructura del Almacén de Datos

Los datos iniciales se manejan mediante una colección inmutable de objetos estructurados:

```javascript
const TRABAJADORES = [
  { nombre: "Dani", rol: "Desarrollador" },
  { nombre: "Marta", rol: "Diseñador" },
  { nombre: "Clara", rol: "Desarrollador" },
  { nombre: "Lucas", rol: "Marketing" }


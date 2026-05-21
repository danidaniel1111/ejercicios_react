# ⚛️ Ejercicios y Miniretos de React (v18/v19)

¡Hola! En este repositorio almaceno los ejercicios, miniretos y algoritmos de control que he desarrollado de forma autónoma para dominar el ecosistema moderno de React. Todos los proyectos están enfocados en la optimización del rendimiento, la inmutabilidad de los datos y las buenas prácticas de arquitectura.

---

## 🛠️ Tecnologías aplicadas
* **React (v18+) & Vite:** Inicialización ágil y modularización de componentes.
* **JavaScript Moderno:** Operadores Spread/Rest, desestructuración y métodos de arrays inmutables (`.map`, `.filter`, `.slice`).
* **Estilos & Calidad:** Formateo estricto global con **Prettier** y optimización del linter nativo.

---

## 📋 Índice de Proyectos y Demostración Técnica

### 1️⃣ ⌨️ Detector de Código Secreto ("Konami Code")
* **Conceptos clave:** Control de asincronía, eventos globales del navegador y optimización del ciclo de vida.
* **Lógica implementada:** Uso de un `useEffect` con candado vacío `[]` para enganchar un oyente global (`window.addEventListener`) al teclado. Filtrado e inmutabilidad en el historial de pulsaciones usando el operador Rest para descabezar el array y comparación limpia con `JSON.stringify`. Uso estratégico de `prev` en los setters para evitar re-creaciones e hilos duplicados en la memoria de la CPU.

### 2️⃣ 👥 Panel de Control de Empleados Dinámico
* **Conceptos clave:** Buenas prácticas de rendimiento, estados controlados y manipulación del DOM externo.
* **Lógica implementada:** Implementación de un único estado de tipo string para el filtro activo. Filtrado de listas en vivo calculado a través de **constantes normales en el renderizado** (`.filter`), evitando el antipatrón de duplicar estados pesados. Sincronización del entorno a través de un `useEffect` vigilante encargado exclusivamente de actualizar el `document.title` de la pestaña del navegador como consecuencia secundaria.

### 3️⃣ 📝 Tablón Kanban con Persistencia Automática *(En desarrollo)*
* **Conceptos clave:** Inicialización perezosa (*Lazy State*), inmutabilidad compleja y persistencia de datos local.
* **Lógica implementada:** Manejo de un estado estructurado en un array de objetos (`id`, `texto`, `completada`). Recuperación de datos iniciales desde `window.localStorage` en la carga y sincronización automatizada de fondo a través de un `useEffect` vigilante. Modificaciones seguras de elementos individuales dentro del array combinando `.map` y Spread Operator.

---

   npm run dev
   ```

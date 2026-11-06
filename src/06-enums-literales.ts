// Tema 6: Enums y tipos literales
// Ejecutar: npm run tema6 (con tsx; node src/06-enums-literales.ts no soporta enum)
export {};

// ● Enum: conjunto de constantes con nombre
// Enum numérico: si no se les da valor, arrancan en 0 y suben de a 1
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right, // 3
}

let movimiento: Direction = Direction.Up;
console.log("Direction.Up =", movimiento);
console.log("Direction.Right =", Direction.Right);
// Los enums numéricos permiten buscar el nombre a partir del número
console.log("Direction[2] =", Direction[2]);

// Enum de string: cada miembro tiene un texto legible
enum EstadoPedido {
  PENDIENTE = "PENDIENTE",
  ENVIADO = "ENVIADO",
  ENTREGADO = "ENTREGADO",
  CANCELADO = "CANCELADO",
}

function describirPedido(estado: EstadoPedido): string {
  switch (estado) {
    case EstadoPedido.PENDIENTE:
      return "El pedido todavía no salió";
    case EstadoPedido.ENVIADO:
      return "El pedido está en camino";
    case EstadoPedido.ENTREGADO:
      return "El pedido llegó";
    case EstadoPedido.CANCELADO:
      return "El pedido se canceló";
  }
}

console.log(describirPedido(EstadoPedido.ENVIADO));
// describirPedido("ENVIADO"); // Error: un string suelto no es del tipo EstadoPedido

// El enum existe en ejecución: es un objeto de JavaScript que se puede recorrer
console.log("Valores del enum:", Object.values(EstadoPedido));

// ● Tipo literal: un tipo con exactamente un valor
let soloArriba: "up" = "up";
// soloArriba = "down"; // Error: solo acepta "up"
let codigoNoEncontrado: 404 = 404;
console.log("Literales sueltos:", soloArriba, codigoNoEncontrado);

// Solos no sirven de mucho; unidos con | dan una lista cerrada de valores
type Rol = "ADMIN" | "USER";
type EstadoTarea = "Pendiente" | "En proceso" | "Completada";
type Dado = 1 | 2 | 3 | 4 | 5 | 6;

function puedeBorrar(rol: Rol): boolean {
  return rol === "ADMIN";
}

console.log("¿ADMIN puede borrar?", puedeBorrar("ADMIN")); // se escribe el texto directo
console.log("¿USER puede borrar?", puedeBorrar("USER"));
// puedeBorrar("INVITADO"); // Error: "INVITADO" no está en Rol

let tarea: EstadoTarea = "Pendiente";
tarea = "En proceso";
// tarea = "Terminada"; // Error: no es un valor permitido

const tirada: Dado = 4;
// const tiradaMala: Dado = 7; // Error: 7 no es un valor del dado
console.log("Tarea:", tarea, "| Dado:", tirada);

// Inferencia: const guarda el literal, let lo amplía al tipo general
const fija = "ADMIN"; // tipo: "ADMIN"
let variable = "ADMIN"; // tipo: string
console.log("const vs let:", fija, variable);

// ● En qué se parecen y en qué se diferencian
// Se parecen: los dos limitan una variable a un conjunto fijo de valores
// y TypeScript marca error si se usa otro.
//
// Se diferencian:
//  - El enum crea un objeto en ejecución (se puede recorrer con Object.values);
//    el tipo literal se borra al compilar, no queda nada en el JavaScript.
//  - Con un enum se escribe EstadoPedido.ENVIADO; con un literal, el texto directo "ENVIADO".
//  - El enum necesita tsx o tsc; los literales andan también con node archivo.ts.

// Alternativa que combina las dos ideas: objeto "as const" + tipo literal derivado
const Prioridad = {
  BAJA: "BAJA",
  MEDIA: "MEDIA",
  ALTA: "ALTA",
} as const;
type Prioridad = typeof Prioridad[keyof typeof Prioridad]; // "BAJA" | "MEDIA" | "ALTA"

const p1: Prioridad = Prioridad.ALTA; // como un enum
const p2: Prioridad = "BAJA";         // o con el texto directo
console.log("as const:", p1, p2, Object.values(Prioridad));

// ● En qué situaciones usar cada uno
// Enum → constantes relacionadas que se necesitan en ejecución:
//        días de la semana, estados de un pedido, direcciones de movimiento.
enum DiaSemana {
  Lunes = 1,
  Martes,
  Miercoles,
  Jueves,
  Viernes,
}
console.log("Martes es el día", DiaSemana.Martes);

// Tipo literal → limitar valores permitidos sin generar código:
//                roles de usuario, estados de una tarea, tamaños, colores.
type Talle = "S" | "M" | "L" | "XL";
function elegirTalle(talle: Talle): string {
  return `Elegiste talle ${talle}`;
}
console.log(elegirTalle("M"));

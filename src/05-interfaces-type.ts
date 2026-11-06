// Tema 5: Interfaces y type
// Ejecutar: npm run tema5
export {};

// ● Interfaz: describe la estructura de un objeto (qué propiedades y métodos tiene)
// Solo define, no implementa
interface Alumno {
  legajo: number;
  nombre: string;
  email: string;
  telefono?: string;        // ● Propiedad opcional: "?" después del nombre
  readonly fechaAlta: Date; // Solo lectura: no se puede cambiar después
}

const alumno1: Alumno = {
  legajo: 1001,
  nombre: "Franco",
  email: "franco@example.com",
  fechaAlta: new Date(),
  // telefono no está: es opcional
};

const alumno2: Alumno = {
  legajo: 1002,
  nombre: "Ana",
  email: "ana@example.com",
  telefono: "3704-123456",
  fechaAlta: new Date(),
};

// alumno1.fechaAlta = new Date(); // Error: es de solo lectura
// const alumno3: Alumno = { legajo: 1003, nombre: "Luis" }; // Error: faltan email y fechaAlta

console.log(alumno1.nombre, "-", alumno1.telefono ?? "sin teléfono");
console.log(alumno2.nombre, "-", alumno2.telefono ?? "sin teléfono");

// Interfaz con métodos
interface Producto {
  nombre: string;
  precio: number;
  calcularDescuento(porcentaje: number): number;
}

const cuaderno: Producto = {
  nombre: "Cuaderno",
  precio: 2000,
  calcularDescuento(porcentaje: number): number {
    return this.precio - (this.precio * porcentaje) / 100;
  },
};
console.log(`${cuaderno.nombre} con 10% de descuento: $${cuaderno.calcularDescuento(10)}`);

// Extender una interfaz: hereda todas las propiedades y agrega otras
interface Egresado extends Alumno {
  titulo: string;
  anioEgreso: number;
}

const egresado: Egresado = {
  legajo: 900,
  nombre: "María",
  email: "maria@example.com",
  fechaAlta: new Date(),
  titulo: "Técnica Superior en Desarrollo de Software",
  anioEgreso: 2025,
};
console.log(`${egresado.nombre} egresó en ${egresado.anioEgreso}`);

// Una clase puede comprometerse a cumplir una interfaz con "implements"
interface Imprimible {
  imprimir(): string;
}

class Certificado implements Imprimible {
  constructor(private alumno: string) {}
  imprimir(): string {
    return `Certificado de ${this.alumno}`;
  }
}
console.log(new Certificado("Franco").imprimir());

// ● type: alias para un tipo existente o una combinación de tipos
type ID = string | number;            // alias de una unión
type Rol = "ADMIN" | "USER" | "GUEST"; // unión de tipos literales

type Coordenada = {                    // type para objetos
  x: number;
  y: number;
  z?: number;                          // ● también admite propiedades opcionales
};

let idPedido: ID = "PED-001";
idPedido = 42;
const rolActual: Rol = "ADMIN";
const punto: Coordenada = { x: 10, y: 20 };

console.log("ID:", idPedido, "| Rol:", rolActual, "| Punto:", punto);

// Intersección (&): combina tipos en uno solo
type ConFecha = { creadoEn: Date };
type AlumnoConFecha = Alumno & ConFecha;

const alumnoConFecha: AlumnoConFecha = {
  ...alumno1,
  creadoEn: new Date(),
};
console.log("Intersección:", alumnoConFecha.nombre, alumnoConFecha.creadoEn instanceof Date);

// ● ¿Cuándo conviene cada uno?
// interface → estructura de objetos y clases, sobre todo si se va a extender (extends / implements)
// type      → uniones (|), intersecciones (&), tipos literales y alias de primitivos
//
// Diferencia práctica: una interface se puede declarar dos veces y se fusiona;
// un type con el mismo nombre da error.
interface Configuracion {
  tema: string;
}
interface Configuracion {
  idioma: string;
}
const config: Configuracion = { tema: "oscuro", idioma: "es" }; // tiene las dos propiedades
console.log("Interfaces fusionadas:", config);

// type Color = "rojo";
// type Color = "azul"; // Error: identificador duplicado

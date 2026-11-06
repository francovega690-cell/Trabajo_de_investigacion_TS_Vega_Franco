// Tema 3: Tipos básicos
// Ejecutar: npm run tema3
export {};

// ● string, number y boolean
// string: texto. Las tres comillas dan el mismo tipo
let nombre: string = "Franco";
let apellido: string = 'Vega';
let saludo: string = `Hola, ${nombre} ${apellido}`;

// number: cualquier número, entero o con decimales (no existe int ni float)
let edad: number = 20;
let promedio: number = 8.75;
let temperatura: number = -3;

// boolean: solo true o false
let aprobado: boolean = true;
let tieneDeuda: boolean = false;

console.log(saludo);
console.log("Edad:", edad, "| Promedio:", promedio, "| Temperatura:", temperatura);
console.log("¿Aprobó?", aprobado, "| ¿Tiene deuda?", tieneDeuda);

// Inferencia: si se inicializa, TypeScript deduce el tipo solo
let ciudad = "Formosa"; // TypeScript infiere string
// ciudad = 42;         // Error: number no se puede asignar a string

// ● Arrays con tipo
// Dos formas equivalentes de escribirlo
const notas: number[] = [9, 7, 10];
const scores: Array<number> = [90, 85, 72];
const materias: string[] = ["Programación", "Base de datos", "Inglés"];

// notas.push("diez"); // Error: string no se puede asignar a number

console.log("Notas:", notas, "| Scores:", scores);
console.log("Materias:", materias.join(", "));

// Tupla: cantidad y tipo fijos en cada posición
const alumno: [string, number] = ["Franco", 20];
console.log("Tupla alumno:", alumno[0], alumno[1]);

// ● Tipo unión: uno u otro tipo, separados por |
let valor: string | number;
valor = "ABC123"; // Correcto
valor = 456;      // Correcto
// valor = true;  // Error: boolean no está en la unión

// Antes de usar métodos propios de un tipo, hay que verificar cuál es
function mostrarId(id: string | number): string {
  if (typeof id === "string") {
    return `ID de texto: ${id.toUpperCase()}`;
  }
  return `ID numérico: ${id.toFixed(0)}`;
}

console.log(mostrarId("abc123"));
console.log(mostrarId(456));

// Unión con null: con strict hay que declararlo y verificarlo
function buscarTelefono(legajo: number): string | null {
  return legajo === 1 ? "3704-123456" : null;
}

const telefono = buscarTelefono(1);
// telefono.length; // Error: telefono puede ser null
if (telefono !== null) {
  console.log("Teléfono:", telefono, "con", telefono.length, "caracteres"); // Dentro del if es string
}
console.log("Teléfono del legajo 2:", buscarTelefono(2) ?? "sin cargar");

// ● Por qué evitar any
// any desactiva la verificación: TypeScript no avisa nada
let cualquierCosa: any = "texto";
cualquierCosa = 42;
// cualquierCosa.toUpperCase(); // Sin error al escribir, pero falla al ejecutar:
//                              // TypeError: cualquierCosa.toUpperCase is not a function

// La alternativa segura es unknown: acepta cualquier valor,
// pero obliga a verificar el tipo antes de usarlo
let dato: unknown = "llegó de una API";
// dato.toUpperCase(); // Error: dato es de tipo unknown

if (typeof dato === "string") {
  console.log("unknown verificado:", dato.toUpperCase());
}

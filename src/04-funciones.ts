// Tema 4: Funciones
// Ejecutar: npm run tema4
export {};

// ● Tipos de los parámetros: ":" después de cada parámetro
// ● Tipo de retorno: ":" después de los paréntesis
function sumar(a: number, b: number): number {
  return a + b;
}

console.log("sumar(5, 3) =", sumar(5, 3));
// sumar("5", 3); // Error: string no se puede asignar a number
// sumar(5);      // Error: se esperaban 2 argumentos

// Arrow function con tipos
const multiplicar = (a: number, b: number): number => a * b;
console.log("multiplicar(4, 6) =", multiplicar(4, 6));

// Retorno boolean
function esMayorDeEdad(edad: number): boolean {
  return edad >= 18;
}
console.log("¿20 es mayor de edad?", esMayorDeEdad(20));

// void: la función no devuelve nada
function mostrarMensaje(mensaje: string): void {
  console.log("Mensaje:", mensaje);
}
mostrarMensaje("Las funciones también tipan lo que devuelven");

// ● Parámetro opcional: "?" después del nombre
// Adentro de la función vale string | undefined, por eso se verifica
function saludar(nombre: string, apellido?: string): string {
  if (apellido) {
    return `Hola ${nombre} ${apellido}`;
  }
  return `Hola ${nombre}`;
}

console.log(saludar("Franco"));
console.log(saludar("Franco", "Vega"));

// ● Parámetro por defecto: "=" con el valor que toma si no se pasa
function crearUsuario(nombre: string, rol: string = "USER"): string {
  return `Usuario ${nombre} con rol ${rol}`;
}

console.log(crearUsuario("Ana"));          // usa el valor por defecto
console.log(crearUsuario("Luis", "ADMIN")); // reemplaza el valor por defecto

// Opcional y por defecto juntos
function calcularPrecio(precio: number, descuento: number = 0, cupon?: string): number {
  let total = precio - (precio * descuento) / 100;
  if (cupon === "FORMOSA10") {
    total -= 10;
  }
  return total;
}

console.log("Sin descuento:", calcularPrecio(100));
console.log("Con 20%:", calcularPrecio(100, 20));
console.log("Con 20% y cupón:", calcularPrecio(100, 20, "FORMOSA10"));

// Rest parameters: cualquier cantidad de argumentos del mismo tipo
function sumarTodos(...numeros: number[]): number {
  return numeros.reduce((total, n) => total + n, 0);
}
console.log("sumarTodos(1, 2, 3, 4) =", sumarTodos(1, 2, 3, 4));

// Función async: siempre devuelve una Promise del tipo indicado
async function esperarYSaludar(nombre: string): Promise<string> {
  await new Promise((resolver) => setTimeout(resolver, 100));
  return `Hola ${nombre}, terminé de esperar`;
}

esperarYSaludar("Franco").then(console.log);

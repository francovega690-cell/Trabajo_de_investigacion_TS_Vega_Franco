Tema 1: ¿Qué es TypeScript?

¿Qué es TypeScript y quién lo desarrolla?
TypeScript es un lenguaje de programación de tipado estático que se compila (transpila) a JavaScript. Fue creado por Microsoft y está diseñado para proyectos chicos o a gran escala. Su propuesta central: agregar tipos y herramientas que hacen más seguro y mantenible el desarrollo. La documentación oficial lo define como «JavaScript con sintaxis para tipos» y destaca mejoras en autocompletado, chequeos en el editor e interfaces para modelar datos (TypeScript Official).
Typescript fue desarrollado en 2012 por Anders Hejlsberg, creador de Pascal, Delphi y C#, y su equipo en Microsoft.
¿Qué diferencias tiene con JavaScript?
Las diferencias que tiene con javascript

- TypeScript es un Lenguaje fuertemente tipado donde se pueden crear tipos genéricos o interfaces, mientras que en JS no existen como tal los tipados

Fuentes//
https://www.coderhouse.com/ar/coderlibrary/que-es-typescript-y-por-que-es-clave-en-desarrollo-web-moderno

https://softwarecrafters.io/typescript/typescript-tutorial-javascript-introduccion¿Qué

http://profile.es/blog/que-es-typescript-vs-javascript/

ventajas ofrece?
*/ Las ventajas clave que tiene TS son:
*Menos bugs en producción
*Mejor DX
*Mantenibilidad
*Escalabilidad
*Ecosistema compatible

Fuentes//
https://www.coderhouse.com/ar/coderlibrary/que-es-typescript-y-por-que-es-clave-en-desarrollo-web-moderno
¿Cuál es su versión actual?
\*/La version actual de TS Microsoft lanzó oficialmente TypeScript 7.0.2

Tema 2: Crear y ejecutar un proyecto
¿Cómo se instala TypeScript en un proyecto?

npm install -g typescript // esto para instalar

tsc -v // Para comprobar que la instalación se ha realizado correctamente y la version instalada

Fuentes:
https://softwarecrafters.io/typescript/typescript-tutorial-javascript-introduccion

¿Para qué sirve el archivo tsconfig.json?
//El tsconfig.json Es el archivo de configuración del proyecto. Le indica a TypeScript tres cosas:

1. Qué archivos forman el proyecto: include.
2. Qué tan estricto debe ser al verificar tipos: strict y opciones relacionadas.
3. Cómo generar el JavaScript: versión (target), sistema de módulos (module) y carpeta de salid(outDir).

   ¿Qué hace el comando tsc?
   // Es el compilador. Cuando se ejecuta sin argumentos:

4. Busca el tsconfig.json en la carpeta actual.
5. Toma los archivos indicados en include.
6. Verifica los tipos de todo el código y muestra los errores.

¿Qué diferencia hay entre ejecutar un archivo con tsc, tsx y node?
//

tsc: verifica tipos y compila cuando usas npm run check/ build

node: Describe a TypeScript la API de Node

tsx: ejecuta .ts sin compilar, con recarga automatica cuando usas npm run dev

Tema 3: Tipos básicos
● ¿Qué son los tipos string, number y boolean?
string: Texto. Los tres estilos de comillas tienen el mismo tipo.
number: Cualquier número, entero o no. No existe int ni float.
boolean: true, false, solo estos dos valores.
● ¿Cómo se declara un array con tipo?
const scores: Array<number> = [90, 85, 72];
● ¿Qué es un tipo unión?
TypeScript permite un tipo flexible llamado cualquiera que puede asignarse a una variable cuyo tipo no es específico. Por otro lado, TypeScript permite combinar tipos específicos como un tipo de unión.TypeScript le permite crear un tipo de unión que es una combinación de tipos seleccionados separados por una barra vertical | .
Sintaxis básica: let valor: string | number;

fuente: https://www.codecademy.com/learn/learn-typescript/modules/learn-typescript-union-types/cheatsheet
● ¿Por qué se recomienda evitar any?
any es un tipo especial de TypeScript que desactiva toda verificación de tipos para una variable. Le permite asignar cualquier valor y llamar a cualquier metodo sin errores. Esto hace que parezca útil, pero silenciosamente rompe la seguridad que le brinda TypeScript.

fuentes:https://dev.to/krunalkanojiya/how-to-use-the-any-type-and-when-to-avoid-it-148m

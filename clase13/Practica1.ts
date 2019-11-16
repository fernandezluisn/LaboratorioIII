//instalar tsc
//npm install tsc -g
// tsc ./practica1.ts
// tsc ./practica1.ts -w observa el archivo
// tsc ./*.ts -w compila todos los archivos
//usar namespace cuando hay mvc, usar export y extends, llamando al namespace en el onclick y llamar a todos los js en html en el orden adecuado

// Tipos
var batman: string = "Bruce";
var superman: string = "Clark";

var existe: boolean = false;

// Tuplas
var parejaHeroes: [string, string] = [batman,superman];
var villano :[string, number, boolean]= ["Lex Lutor",5,true];

// Arreglos
var aliados: string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
enum fuerza{
 fuerzaFlash = 5,
 fuerzaSuperman = 100,
 fuerzaBatman = 1,
 fuerzaAcuaman = 0
}

// Retorno de funciones
function activar_batiseñal(): string{
  return "activada";
}

function pedir_ayuda(): void{
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
var poder = "100";
var largoDelPoder = poder.length;
console.log( largoDelPoder );

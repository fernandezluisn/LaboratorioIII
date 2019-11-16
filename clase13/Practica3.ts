
// Objetos
var batimovil = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

var bumblebee :{carroceria:string, modelo:string, antibalas:boolean, pasajeros:number, disparar?:()=>void}= {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};


// Villanos debe de ser un arreglo de objetos personalizados
type villano={nombre: string, edad:number, mutante:boolean}
var villanos:villano[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type m1={
  poder:string,
  estatura:number
}

var charles:m1 = {
  poder:"psiquico",
  estatura: 1.78
};

type m2={
  lider:boolean,
  miembros:string[]
}
var apocalipsis:m2 = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
var mystique: m1|m2;

mystique = charles;
mystique = apocalipsis;

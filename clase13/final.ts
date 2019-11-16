interface animal{//acá todo es público
    name: string;
    makesound();
}

class Perro implements animal{

    name:string;

    constructor(name:string){
        this.name=name;
    }
    makesound(){
        console.log("guau, guau "+this.name);
    }
}


var miPerro:Perro=new Perro("jorge");


class gato implements animal{
    name:string

    constructor(name:string){
        this.name=name;
    }

    makesound(){
        console.log("miau "+this.name);
    }
}

var miGato:gato=new gato("adolfo");


var lista:Array<animal>=new Array<animal>();
lista.push(miGato);
lista.push(miPerro);

lista.forEach(function(animal){
    animal.makesound();
})
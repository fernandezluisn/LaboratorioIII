namespace preparcial{
    export class Alumno extends Persona{

        private legajo:number;

        constructor(legajo:number, nombre:string, ape:string){
            super(nombre, ape);
            this.legajo=legajo;
        }

        
        public getLegajo() : number {
            return this.legajo;
        }
        
    }
}
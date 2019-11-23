namespace preparcial{
    export class Profesor extends Persona{

        private cuil:number;

        constructor(cuil:number, ape:string, nom:string){
            super(nom, ape);
            this.cuil=cuil;
        }

        
        public getCuil() : number {
            return this.cuil;
        }
        
    }
}
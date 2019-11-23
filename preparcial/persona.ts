namespace preparcial{
    export abstract class Persona{

        private nombre:string;
        private apellido:string;

        constructor(nombre:string, apellido:string){
            this.apellido=apellido;
            this.nombre=nombre;
        }

        
            
            public getNombre() : string {
                return this.nombre;
            }
            
            public getApellido() : string {
                return this.apellido;
            }
    }

}
namespace preparcial{
//agregar spinner y formulario
    var lista:Array<Persona>=new Array<Persona>();

    export function HacerTabla(listaD:Array<any>){
        let tBody=$("tbody");

        lista.forEach(function(objeto){
            var tr=document.createElement("tr");
            var listaClaves2=Object.keys(objeto);
            tBody.append(tr);
            

            listaClaves2.forEach(function(clave){
              var texto=document.createTextNode(objeto[clave]);
              var td=document.createElement("td");
              td.appendChild(texto);
              tr.appendChild(td);
            });
        });

    }

    export function Mostrar(){
        if($("#tipo").val()=="alumno")
        {
            $("#alumnoDiv").show();
            $("#profesorDiv").hide();
        }        
        else
        {
            $("#profesorDiv").show();
            $("#alumnoDiv").hide();
        }
    }

    export function AgregarFila(item){
        
        
        let tbody=$("tbody");
        if(item instanceof Alumno)
        {          

            
            let tr=document.createElement("tr");
            let td=document.createElement("td");
            let nTd=document.createTextNode(item.getNombre());
            td.appendChild(nTd);
            let td1=document.createElement("td");
            let nTd1=document.createTextNode(item.getApellido());
            td1.appendChild(nTd1);

            let td2=document.createElement("td");
            let ntd2=document.createTextNode(item.getLegajo().toString());
            td2.appendChild(ntd2);
            
            

            tr.appendChild(td);
            tr.appendChild(td1);
            tr.appendChild(td2);

            td.setAttribute("id", "n");
            td1.setAttribute("id", "a");
            td2.setAttribute("id", "l");

            let n=lista.indexOf(item);

            let btn=document.createElement("button");
            btn.setAttribute("class", "borrar");
            btn.setAttribute("onclick","preparcial.eliminarFila("+n+")");
            btn.innerHTML="eliminar";
            let td3=document.createElement("td");


            tr.setAttribute("id", "fila"+n);
            
            td3.appendChild(btn);
            tr.appendChild(td3);
            tbody.append(tr);

            tbody.append(tr);
        }else
        {                          
                       
          
            let tr=document.createElement("tr");
            let td=document.createElement("td");
            let nTd=document.createTextNode(item.getNombre());
            td.appendChild(nTd);
            let td1=document.createElement("td");
            let nTd1=document.createTextNode(item.getApellido());
            td1.appendChild(nTd1);

            let td2=document.createElement("td");
            let ntd2=document.createTextNode(item.getCuil().toString());
            td2.appendChild(ntd2);
            
            tr.appendChild(td);
            tr.appendChild(td1);
            tr.appendChild(td2);

            let n=lista.indexOf(item);

            let btn=document.createElement("button");
            btn.setAttribute("class", "borrar");
            btn.setAttribute("onclick","preparcial.eliminarFila("+n+")");
            btn.innerHTML="eliminar";
            let td3=document.createElement("td");

            td.setAttribute("id", "n");
            td1.setAttribute("id", "a");
            td2.setAttribute("id", "l");
            td3.appendChild(btn);
            tr.setAttribute("id", "fila"+n);
            tr.appendChild(td3);
            tbody.append(tr);
        }
    }



    export function FiltrarColumna(lista:Array<Persona>){
        
        let b1=$('#filtroN').is(':checked');
        let b2=$('#filtroA').is(':checked');
        let b3=$('#filtroL').is(':checked');

        

        /*let fruits: boolean[] = [b1, b2, b3];
        let listaS;
        switch(fruits)
        {
            case [true, true, true]:
                    listaS=lista.map(function(item){
                        if(item instanceof Alumno)
                     return [item.getNombre(), item.getApellido(), item.getLegajo()];
                     else if (item instanceof Profesor)
                     return[item.getNombre(), item.getApellido(), item.getCuil()];
                   });
                   break;
            case [true, true, false]:
                    listaS=lista.map(function(item){                        
                     return [item.getNombre(), item.getApellido()];                     
                   });
                   break;
            case [true, false, false]:
                    listaS=lista.map(function(item){                       
                     return[item.getNombre()];
                   });
                   break;
            case [true, false, true]:
                    listaS=lista.map(function(item){
                        if(item instanceof Alumno)
                     return [item.getNombre(), item.getLegajo()];
                     else if (item instanceof Profesor)
                     return[item.getNombre(), item.getCuil()];
                   });
                   break;
            case [false, true, true]:
                        listaS=lista.map(function(item){
                            if(item instanceof Alumno)
                         return [item.getApellido(), item.getLegajo()];
                         else if (item instanceof Profesor)
                         return[item.getApellido(), item.getCuil()];
                       });
                       break;
            case [false, false, true]:
                            listaS=lista.map(function(item){
                                if(item instanceof Alumno)
                             return [item.getLegajo()];
                             else if (item instanceof Profesor)
                             return[item.getCuil()];
                           });
                           break;
            case [false, true, false]:
                                listaS=lista.map(function(item){
                                return item.getApellido();
                               });
                               break;
            case [false, false, false]:
                listaS=null;
                break;
        }*/
           

        if(!(b1))
        {
            $("#th1").hide();
            lista.forEach(item=>{
                ($("#fila" + lista.indexOf(item)+">td:nth-child(1)").hide());
            });
        }else
        {
            $("#th1").show();
            lista.forEach(item=>{
                ($("#fila" + lista.indexOf(item)+">td:nth-child(1)").show());
            });
            
        }

        
        if(!(b2))
        {
            $("#th2").hide();
            lista.forEach(item=>{
                ($("#fila" + lista.indexOf(item)+">td:nth-child(2)").hide());
            });
        }else
        {
            $("#th2").show();
            lista.forEach(item=>{
                ($("#fila" + lista.indexOf(item)+">td:nth-child(2)").show());
            });
        }

        if(!(b3))
        {
            $("#th3").hide();
            lista.forEach(item=>{
                ($("#fila" + lista.indexOf(item)+">td:nth-child(3)").hide());
            });
        }else
        {
            $("#th3").show();
           

              lista.forEach(item=>{
                ($("#fila" + lista.indexOf(item)+">td:nth-child(3)").show());
            });
        }          
        

        
    }

    export function Filtrar(){

        let index=0;
        for(var i=0; i<lista.length; i++)
        {
            $("#fila" + index).remove();
            index++;
        }
        

        if($("#filtro").val()=="todos")
            {
                lista.forEach(item=>{
                    AgregarFila(item);
                });
                FiltrarColumna(lista);
            }
        else if ($("#filtro").val()=="alumno")
            {
                let listaP:Array<Persona>;
                listaP=lista.filter(function(item){
                      return item instanceof Alumno;
                    });

                    listaP.forEach(element => {
                        AgregarFila(element);
                    });
                    FiltrarColumna(listaP);
            }
            else if  ($("#filtro").val()=="profesor")
            {
                let listaS:Array<Persona>;
                listaS=lista.filter(function(item){
                      return item instanceof Profesor;
                    });

                    listaS.forEach(element => {
                        AgregarFila(element);
                    });
                    FiltrarColumna(listaS);
            }

            
    }

    export function Agregar(){

        let ape=String($("#txtApe").val());
        let nom=String($("#txtNom").val());

        
        if($("#tipo").val()=="alumno")
        {
            
            let leg=Number($("#n1").val());
            
            let persona:Alumno=new Alumno(leg, nom, ape);
            

            let tbody=$("tbody");
            let tr=document.createElement("tr");
            let td=document.createElement("td");
            let nTd=document.createTextNode(persona.getNombre());
            td.appendChild(nTd);
            let td1=document.createElement("td");
            let nTd1=document.createTextNode(persona.getApellido());
            td1.appendChild(nTd1);

            let td2=document.createElement("td");
            let ntd2=document.createTextNode(persona.getLegajo().toString());
            td2.appendChild(ntd2);
            
            

            tr.appendChild(td);
            tr.appendChild(td1);
            tr.appendChild(td2);

            let n=lista.length;

            let btn=document.createElement("button");
            btn.setAttribute("class", "borrar");
            btn.setAttribute("onclick","preparcial.eliminarFila("+n+")");
            btn.innerHTML="eliminar";
            let td3=document.createElement("td");

            td.setAttribute("id", "n");
            td1.setAttribute("id", "a");
            td2.setAttribute("id", "l");
            tr.setAttribute("id", "fila"+n);
            td3.appendChild(btn);
            tr.appendChild(td3);
            tbody.append(tr);

            tbody.append(tr);
            lista.push(persona);
        }else
        {            
            let leg=Number($("#n2").val());            
            let persona:Profesor=new Profesor(leg, ape, nom);
            

            let tbody=$("tbody");
            let tr=document.createElement("tr");
            let td=document.createElement("td");
            let nTd=document.createTextNode(persona.getNombre());
            td.appendChild(nTd);
            let td1=document.createElement("td");
            let nTd1=document.createTextNode(persona.getApellido());
            td1.appendChild(nTd1);

            let td2=document.createElement("td");
            let ntd2=document.createTextNode(persona.getCuil().toString());
            td2.appendChild(ntd2);
            
            tr.appendChild(td);
            tr.appendChild(td1);
            tr.appendChild(td2);

            let n=lista.length;

            let btn=document.createElement("button");
            btn.setAttribute("class", "borrar");
            btn.setAttribute("onclick","preparcial.eliminarFila("+n+")");
            btn.innerHTML="eliminar";
            let td3=document.createElement("td");
            td.setAttribute("id", "n");
            td1.setAttribute("id", "a");
            td2.setAttribute("id", "l");
            td3.appendChild(btn);
            tr.setAttribute("id", "fila"+n);
            tr.appendChild(td3);
            tbody.append(tr);
            lista.push(persona);
        }
        
    }

    export function eliminarFila(index) {        

        
        

        let nom=($("#fila" + index+">td:nth-child(1)").html());
        let ape=($("#fila" + index+">td:nth-child(2)").html());
        let num:number=(Number)($("#fila" + index+">td:nth-child(3)").html());

        
        
        

        $("#fila" + index).remove();

        lista.forEach(item=>{
            if(item.getApellido()==ape && item.getNombre()==nom && item instanceof Profesor && item.getCuil()==num)
            lista.splice(lista.indexOf(item));
            else if (item.getApellido()==ape && item.getNombre()==nom && item instanceof Alumno && item.getLegajo()==num)
            lista.splice(lista.indexOf(item));
        });

        
    }

    export function Promediar() {
        
        var total= lista.reduce(function(tot, item){
            if (item instanceof Profesor)
            return tot+item.getCuil();
            else if (item instanceof Alumno)
            return tot+item.getLegajo();
          }, 0)
        
          $("#txtProm").val(total/lista.length);

    }

}
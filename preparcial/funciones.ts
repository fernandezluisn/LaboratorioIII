namespace preparcial{

    var lista:Array<Persona>=new Array<Persona>();

    

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

    

    export function Filtrar(){

    }

    export function Agregar(){

        let ape=String($("#txtApe").val());
        let nom=String($("#txtNom").val());

        
        if($("#tipo").val()=="alumno")
        {
            
            let leg=Number($("#n1").val());
            
            let persona:Alumno=new Alumno(leg, nom, ape);
            lista.push(persona);

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


            tr.setAttribute("id", "fila"+n);
            td3.appendChild(btn);
            tr.appendChild(td3);
            tbody.append(tr);

            tbody.append(tr);
        }else
        {            
            let leg=Number($("#n2").val());            
            let persona:Profesor=new Profesor(leg, ape, nom);
            lista.push(persona);

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

            td3.appendChild(btn);
            tr.setAttribute("id", "fila"+n);
            tr.appendChild(td3);
            tbody.append(tr);
        }
        
    }

    export function eliminarFila(index) {
        $("#fila" + index).remove();
    }

}
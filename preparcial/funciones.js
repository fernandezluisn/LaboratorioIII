var preparcial;
(function (preparcial) {
    //agregar spinner y formulario
    var lista = new Array();
    function HacerTabla(listaD) {
        var tBody = $("tbody");
        lista.forEach(function (objeto) {
            var tr = document.createElement("tr");
            var listaClaves2 = Object.keys(objeto);
            tBody.append(tr);
            listaClaves2.forEach(function (clave) {
                var texto = document.createTextNode(objeto[clave]);
                var td = document.createElement("td");
                td.appendChild(texto);
                tr.appendChild(td);
            });
        });
    }
    preparcial.HacerTabla = HacerTabla;
    function Mostrar() {
        if ($("#tipo").val() == "alumno") {
            $("#alumnoDiv").show();
            $("#profesorDiv").hide();
        }
        else {
            $("#profesorDiv").show();
            $("#alumnoDiv").hide();
        }
    }
    preparcial.Mostrar = Mostrar;
    function AgregarFila(item) {
        var tbody = $("tbody");
        if (item instanceof preparcial.Alumno) {
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            var nTd = document.createTextNode(item.getNombre());
            td.appendChild(nTd);
            var td1 = document.createElement("td");
            var nTd1 = document.createTextNode(item.getApellido());
            td1.appendChild(nTd1);
            var td2 = document.createElement("td");
            var ntd2 = document.createTextNode(item.getLegajo().toString());
            td2.appendChild(ntd2);
            tr.appendChild(td);
            tr.appendChild(td1);
            tr.appendChild(td2);
            td.setAttribute("id", "n");
            td1.setAttribute("id", "a");
            td2.setAttribute("id", "l");
            var n = lista.indexOf(item);
            var btn = document.createElement("button");
            btn.setAttribute("class", "borrar");
            btn.setAttribute("onclick", "preparcial.eliminarFila(" + n + ")");
            btn.innerHTML = "eliminar";
            var td3 = document.createElement("td");
            tr.setAttribute("id", "fila" + n);
            td3.appendChild(btn);
            tr.appendChild(td3);
            tbody.append(tr);
            tbody.append(tr);
        }
        else {
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            var nTd = document.createTextNode(item.getNombre());
            td.appendChild(nTd);
            var td1 = document.createElement("td");
            var nTd1 = document.createTextNode(item.getApellido());
            td1.appendChild(nTd1);
            var td2 = document.createElement("td");
            var ntd2 = document.createTextNode(item.getCuil().toString());
            td2.appendChild(ntd2);
            tr.appendChild(td);
            tr.appendChild(td1);
            tr.appendChild(td2);
            var n = lista.indexOf(item);
            var btn = document.createElement("button");
            btn.setAttribute("class", "borrar");
            btn.setAttribute("onclick", "preparcial.eliminarFila(" + n + ")");
            btn.innerHTML = "eliminar";
            var td3 = document.createElement("td");
            td.setAttribute("id", "n");
            td1.setAttribute("id", "a");
            td2.setAttribute("id", "l");
            td3.appendChild(btn);
            tr.setAttribute("id", "fila" + n);
            tr.appendChild(td3);
            tbody.append(tr);
        }
    }
    preparcial.AgregarFila = AgregarFila;
    function FiltrarColumna(lista) {
        var b1 = $('#filtroN').is(':checked');
        var b2 = $('#filtroA').is(':checked');
        var b3 = $('#filtroL').is(':checked');
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
        if (!(b1)) {
            $("#th1").hide();
            lista.forEach(function (item) {
                ($("#fila" + lista.indexOf(item) + ">td:nth-child(1)").hide());
            });
        }
        else {
            $("#th1").show();
            lista.forEach(function (item) {
                ($("#fila" + lista.indexOf(item) + ">td:nth-child(1)").show());
            });
        }
        if (!(b2)) {
            $("#th2").hide();
            lista.forEach(function (item) {
                ($("#fila" + lista.indexOf(item) + ">td:nth-child(2)").hide());
            });
        }
        else {
            $("#th2").show();
            lista.forEach(function (item) {
                ($("#fila" + lista.indexOf(item) + ">td:nth-child(2)").show());
            });
        }
        if (!(b3)) {
            $("#th3").hide();
            lista.forEach(function (item) {
                ($("#fila" + lista.indexOf(item) + ">td:nth-child(3)").hide());
            });
        }
        else {
            $("#th3").show();
            lista.forEach(function (item) {
                ($("#fila" + lista.indexOf(item) + ">td:nth-child(3)").show());
            });
        }
    }
    preparcial.FiltrarColumna = FiltrarColumna;
    function Filtrar() {
        var index = 0;
        for (var i = 0; i < lista.length; i++) {
            $("#fila" + index).remove();
            index++;
        }
        if ($("#filtro").val() == "todos") {
            lista.forEach(function (item) {
                AgregarFila(item);
            });
            FiltrarColumna(lista);
        }
        else if ($("#filtro").val() == "alumno") {
            var listaP = void 0;
            listaP = lista.filter(function (item) {
                return item instanceof preparcial.Alumno;
            });
            listaP.forEach(function (element) {
                AgregarFila(element);
            });
            FiltrarColumna(listaP);
        }
        else if ($("#filtro").val() == "profesor") {
            var listaS = void 0;
            listaS = lista.filter(function (item) {
                return item instanceof preparcial.Profesor;
            });
            listaS.forEach(function (element) {
                AgregarFila(element);
            });
            FiltrarColumna(listaS);
        }
    }
    preparcial.Filtrar = Filtrar;
    function Agregar() {
        var ape = String($("#txtApe").val());
        var nom = String($("#txtNom").val());
        if ($("#tipo").val() == "alumno") {
            var leg = Number($("#n1").val());
            var persona = new preparcial.Alumno(leg, nom, ape);
            var tbody = $("tbody");
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            var nTd = document.createTextNode(persona.getNombre());
            td.appendChild(nTd);
            var td1 = document.createElement("td");
            var nTd1 = document.createTextNode(persona.getApellido());
            td1.appendChild(nTd1);
            var td2 = document.createElement("td");
            var ntd2 = document.createTextNode(persona.getLegajo().toString());
            td2.appendChild(ntd2);
            tr.appendChild(td);
            tr.appendChild(td1);
            tr.appendChild(td2);
            var n = lista.length;
            var btn = document.createElement("button");
            btn.setAttribute("class", "borrar");
            btn.setAttribute("onclick", "preparcial.eliminarFila(" + n + ")");
            btn.innerHTML = "eliminar";
            var td3 = document.createElement("td");
            td.setAttribute("id", "n");
            td1.setAttribute("id", "a");
            td2.setAttribute("id", "l");
            tr.setAttribute("id", "fila" + n);
            td3.appendChild(btn);
            tr.appendChild(td3);
            tbody.append(tr);
            tbody.append(tr);
            lista.push(persona);
        }
        else {
            var leg = Number($("#n2").val());
            var persona = new preparcial.Profesor(leg, ape, nom);
            var tbody = $("tbody");
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            var nTd = document.createTextNode(persona.getNombre());
            td.appendChild(nTd);
            var td1 = document.createElement("td");
            var nTd1 = document.createTextNode(persona.getApellido());
            td1.appendChild(nTd1);
            var td2 = document.createElement("td");
            var ntd2 = document.createTextNode(persona.getCuil().toString());
            td2.appendChild(ntd2);
            tr.appendChild(td);
            tr.appendChild(td1);
            tr.appendChild(td2);
            var n = lista.length;
            var btn = document.createElement("button");
            btn.setAttribute("class", "borrar");
            btn.setAttribute("onclick", "preparcial.eliminarFila(" + n + ")");
            btn.innerHTML = "eliminar";
            var td3 = document.createElement("td");
            td.setAttribute("id", "n");
            td1.setAttribute("id", "a");
            td2.setAttribute("id", "l");
            td3.appendChild(btn);
            tr.setAttribute("id", "fila" + n);
            tr.appendChild(td3);
            tbody.append(tr);
            lista.push(persona);
        }
    }
    preparcial.Agregar = Agregar;
    function eliminarFila(index) {
        var nom = ($("#fila" + index + ">td:nth-child(1)").html());
        var ape = ($("#fila" + index + ">td:nth-child(2)").html());
        var num = (Number)($("#fila" + index + ">td:nth-child(3)").html());
        $("#fila" + index).remove();
        lista.forEach(function (item) {
            if (item.getApellido() == ape && item.getNombre() == nom && item instanceof preparcial.Profesor && item.getCuil() == num)
                lista.splice(lista.indexOf(item));
            else if (item.getApellido() == ape && item.getNombre() == nom && item instanceof preparcial.Alumno && item.getLegajo() == num)
                lista.splice(lista.indexOf(item));
        });
    }
    preparcial.eliminarFila = eliminarFila;
    function Promediar() {
        var total = lista.reduce(function (tot, item) {
            if (item instanceof preparcial.Profesor)
                return tot + item.getCuil();
            else if (item instanceof preparcial.Alumno)
                return tot + item.getLegajo();
        }, 0);
        $("#txtProm").val(total / lista.length);
    }
    preparcial.Promediar = Promediar;
})(preparcial || (preparcial = {}));

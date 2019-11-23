var preparcial;
(function (preparcial) {
    var lista = new Array();
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
    function Filtrar() {
    }
    preparcial.Filtrar = Filtrar;
    function Agregar() {
        var ape = String($("#txtApe").val());
        var nom = String($("#txtNom").val());
        if ($("#tipo").val() == "alumno") {
            var leg = Number($("#n1").val());
            var persona = new preparcial.Alumno(leg, nom, ape);
            lista.push(persona);
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
            tr.setAttribute("id", "fila" + n);
            td3.appendChild(btn);
            tr.appendChild(td3);
            tbody.append(tr);
            tbody.append(tr);
        }
        else {
            var leg = Number($("#n2").val());
            var persona = new preparcial.Profesor(leg, ape, nom);
            lista.push(persona);
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
            td3.appendChild(btn);
            tr.setAttribute("id", "fila" + n);
            tr.appendChild(td3);
            tbody.append(tr);
        }
    }
    preparcial.Agregar = Agregar;
    function eliminarFila(index) {
        $("#fila" + index).remove();
    }
    preparcial.eliminarFila = eliminarFila;
})(preparcial || (preparcial = {}));

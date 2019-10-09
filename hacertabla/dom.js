function hacerTabla(url){
  window.addEventListener("load", function(){


    var xml=new XMLHttpRequest();
    xml.open("GET", url);

    xml.onreadystatechange=function(){
      if(xml.readyState===4 && xml.status===200)
      {
          var s=xml.responseText;

          var body=document.getElementById("body");

          var listaT=JSON.parse(s);

          var listaClaves=listaT[0].keys;

          var tabla=document.createElement("table");
          var thead=document.createElement("thead");
          var th=document.createElement("th");
          body.appendChild(tabla);
          tabla.appendChild(thead);

          listaClaves.forEach(function(clave){
            var texto=document.createTextNode(clave);
            th.appendChild(texto);
            thead.appendChild(th);
          })

          listaT.forEach(function(objeto){


          document.getElementById("tbody").innerHTML += "<tr><td>" + persona.nombre + "</td><td>" + persona.apellido + "</td><td>" + persona.telefono + "</td><td>" + persona.fecha + "</td><td>borrar</td></tr>";
      });


    /*
    var elemento=document.createElement("p");//<p></p>

    var texto=document.createTextNode("Hola mundo");
    elemento.appendChild(texto);
    var body=document.getElementById("body");
    body.appendChild(elemento);


    xml.onreadystatechange=function(){
        if(xml.readyState===4 && xml.status===200)
        {
            var s=xml.responseText;

    var lista=JSON.parse(s);
        lista.forEach(function(persona){
            document.getElementById("tbody").innerHTML += "<tr><td>" + persona.nombre + "</td><td>" + persona.apellido + "</td><td>" + persona.telefono + "</td><td>" + persona.fecha + "</td><td>borrar</td></tr>";
        });

        }
    }
    xml.send(); */
  })
}

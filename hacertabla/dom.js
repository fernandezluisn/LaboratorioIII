function hacerTabla(url){
  


    var xml=new XMLHttpRequest();
    xml.open("GET", url);

    xml.onreadystatechange=function(){
      if(xml.readyState===4 && xml.status===200)
      {
          var s=xml.responseText;

          var body=document.getElementById("body");

          var listaT=JSON.parse(s);

          var listaClaves=Object.keys(listaT[0]);
          

          console.log(listaClaves);

          var tabla=document.createElement("table");
          
          var thead=document.createElement("thead");
          var tr=document.createElement("tr");
          
          
          

          body.appendChild(tabla);
          tabla.appendChild(thead);
          thead.appendChild(tr);

          listaClaves.forEach(function(clave){
            var texto=document.createTextNode(clave);
            var th=document.createElement("th");
            th.appendChild(texto);
            tr.appendChild(th);
          })

          var tBody=document.createElement("tbody");
          tabla.appendChild(tBody);


          listaT.forEach(function(objeto){
            var tr=document.createElement("tr");
            var listaClaves2=Object.keys(objeto);
            tBody.appendChild(tr);
            console.log(listaClaves2);

            listaClaves2.forEach(function(clave){
              var texto=document.createTextNode(objeto[clave]);
              var td=document.createElement("td");
              td.appendChild(texto);
              tr.appendChild(td);
            })

      });


   
        }
    }
    xml.send(); 
  
}


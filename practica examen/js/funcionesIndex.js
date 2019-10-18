window.addEventListener("load",hacerDivs);

function hacerDivs(){
  

    var n=0;
    var xml=new XMLHttpRequest();
    xml.open("GET", "http://localhost:3000/personas");

    xml.onreadystatechange=function(){
      if(xml.readyState===4 && xml.status===200)
      {
          var s=xml.responseText;

          var body=document.getElementById("body");

          var listaT=JSON.parse(s);     
          

          
//hacer una funcion generica que haga esto
          listaT.forEach(function(objeto){
            var div=document.createElement("div");
            
            body.appendChild(div);

            var br=document.createElement("br");
            var br1=document.createElement("br");
            var lb=document.createElement("label");
            var texto=document.createTextNode(objeto['nombre']);
              lb.appendChild(texto);
              div.appendChild(lb);
              
              
              var lb1=document.createElement("label");
              var texto=document.createTextNode(objeto['apellido']);
              lb1.appendChild(texto);
              div.appendChild(br);
              div.appendChild(lb1);
              div.appendChild(br1);
              var lb2=document.createElement("label");
              var texto2=document.createTextNode(objeto['sexo']);
              lb2.appendChild(texto2);
              
              div.appendChild(lb2);
              

              
              div.setAttribute("class", "tarjetas");
              
              div.id="d"+n;

              
             
                
                n=n+1;

               /*div.style.position="relative";modificar(listaT, objeto['nombre'], objeto['apellido'], objeto['sexo'], objeto['id'])
                div.style.width="30%";
                div.style.padding="0.3rem";
                div.style.marginTop="0.1rem";
                div.style.marginLeft="4rem";*/

                
            
            
      });


   
        }
    }
    xml.send(); 
  
}
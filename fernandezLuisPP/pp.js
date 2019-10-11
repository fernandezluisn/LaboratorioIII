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
          

          

          listaT.forEach(function(objeto){
            var div=document.createElement("button");
            
            body.appendChild(div);

            var lb=document.createElement("label");
            var texto=document.createTextNode(objeto['nombre']);
              lb.appendChild(texto);
              div.appendChild(lb);

              var lb1=document.createElement("label");
              var texto=document.createTextNode(objeto['apellido']);
              lb1.appendChild(texto);
              div.appendChild(lb1);

              var lb2=document.createElement("label");
              var texto2=document.createTextNode(objeto['sexo']);
              lb2.appendChild(texto2);
              div.appendChild(lb2);
              lb2.style.marginLeft="1rem";
              lb1.style.marginLeft="1rem";

              lb.style.marginLeft="1rem";

              
              div.style.background="red";
              div.style.border="white 0.1rem solid";
              
              div.id="d"+n;

              
             
                div.onclick= mostrar;
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

function mostrar(){
    document.getElementById("div1").style.display="block"; 

   
}

function modificar () {
      
    nombre=document.getElementById("txtNom").value;
    apellido=document.getElementById("txtApe").value;
    sexo=document.getElementByName("radio").value;

    if(nombre.length>3 && apellido.lenght>3 && !(sexo==null))
    {
        http.open("POST"," http://localhost:3000/editar");/* por defecto es true**/
        /* En post lleva content type**/
        http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        http.send(JSON.stringify("nombre="+nombre+"apellido="+apellido+"sexo="+sexo));
        
    }
    else
        {
            alert("falta llenar campos");
        }

        var http=new XMLHttpRequest();
        http.onreadystatechange=function(){
            console.log("llegó respuesta", http.readyState, http.status);
      
            if(http.readyState==4){
                if(http.status===200){
    
                    console.log("tenemos respuesta",http.responseText);
    
                    var resp=JSON.parse(http.responseText);    

                    console.log(resp);
                    
                }
                /* funcion anonima. **/
            }
            }
              
            
            
            
    };



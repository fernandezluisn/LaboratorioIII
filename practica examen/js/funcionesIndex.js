window.addEventListener("load",hacerDivs);

/*
https://www.anerbarrena.com/jquery-selectors-selectores-4768/
*/

function hacerDivs(){
  
  var form=document.getElementById("form");
  form.style.visibility="hidden";
  $(".spinner").css("display", "none");

    
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
              
             
              
              var lb3=document.createElement("label");
              
              
              div.appendChild(lb3);
              
              lb3.setAttribute("value", objeto['id']);
              lb3.setAttribute("class", "oculto");
              
              div.setAttribute("class", "tarjetas");
              
              div.id="i"+objeto['id'];

              
              div.addEventListener("dblclick", mostrar);               
                  

                
            
            
      });


   
        }
    }
    xml.send(); 
  
}

    function modificarPost(){

      var nom=$("#txtNom").val();
      var ape=$("#txtApe").val();
      var idV=$("#lblId").html();

      var sex=$('input[name=radio]:checked', '#myForm').val();      

      $(".spinner").css("display", "block");

      if(ape.length>3 && nom.length>3 && sex != null)
      {
        
        $.post("http://localhost:3000/editar",
        {
          id: idV,
          apellido: ape,
          nombre: nom,
          sexo: sex
        },function(data, status){
          console.log("Data: " + data + "\nStatus: " + status);

          if(status=="success")
          {       

            
            //$("#i"+idV+">lbl:second-of-type").val(ape);

            $("#form").hide();//oculto el form con jquery
            $(".spinner").css("display", "none");

            //modifico los datos del div
           
            //para buscar el div uso el cambio de color
            $("#i"+idV+">label:nth-child(1)").css("color","red");
            
            $("#i"+idV+">label:nth-child(1)").html(nom);
            
            $("#i"+idV+">label:nth-child(2)").html(ape);

            $("#i"+idV+">label:nth-child(3)").html(sex);

            
          }
          

        }

        )
       
      }
      else
      {
        alert("Las cadenas de texto deben tener más de 3 caracteres.");
      }
    }
    
  
  function mostrar(evento){
    document.getElementById("form").style.visibility="visible"; 
    $("#form").css("display", "block");
    

    var idC=evento.target.childNodes[3].getAttribute("value");
    var sexo=evento.target.children[2].innerText;
    
    console.log(evento.target.childNodes[3]);
    console.log(idC);
    $("#txtNom").val(evento.target.childNodes[0].innerText);
    $("#txtApe").val(evento.target.childNodes[1].innerText);
    
    $("#lblId").html(idC);

   if(sexo=="Female")
   {
    $("#fem").prop('checked',true);
   }
   else
   $("#mas").prop('checked',true);   

   
   
   $("#btnM").click(modificarPost);
   $("#btnE").click(eliminarPost);
}

function eliminarPost(){
  var idV=$("#lblId").html();  


  $(".spinner").css("display", "block");

  
  $.post("http://localhost:3000/eliminar",
  {
    id: idV
  },
  function(data, status){
    if(status=="success")
    {    

      $("#form").hide();//oculto el form con jquery
      $(".spinner").css("display", "none");

      //elimina el div
      $("#i"+idV).remove();

    }
    
  }
  );
}
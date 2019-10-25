window.addEventListener("load",hacerDivs);

/*
https://www.anerbarrena.com/jquery-selectors-selectores-4768/
*/

function hacerDivs(){
  
  
  $("#form").css("visibility", "hidden");
  $(".spinner").css("display", "none");

$.get("http://localhost:3000/personas",function(data, status){

  var n=3;
    if(status=="success")
    {             
    
      data.forEach(function(objeto){
          
       var div=document.createElement("div");        
        $("#body").append(div);   
        $("#body>div:nth-child("+n+")").attr("id", "i"+objeto['id']);
             

        $("#body>div:nth-child("+n+")").attr("class", "tarjetas");

        var lb=document.createElement("label");
      

        $("#body>div:nth-child("+n+")").append(lb);
          
    
    
      var lb1=document.createElement("label");
      
   
      $("#body>div:nth-child("+n+")").append(lb1);
    
      var lb2=document.createElement("label");
      
    
      $("#body>div:nth-child("+n+")").append(lb2);
    
   
    
        var lb3=document.createElement("label");
    
    
        $("#body>div:nth-child("+n+")").append(lb3); 
        
        
    
        $("#i"+objeto['id']+">label:nth-child(1)").html(objeto['nombre']);
            
        $("#i"+objeto['id']+">label:nth-child(2)").html(objeto['apellido']);

        $("#i"+objeto['id']+">label:nth-child(3)").html(objeto['sexo']);

        $("#i"+objeto['id']+">label:nth-child(4)").attr("value", objeto["id"]);
        
        $("#i"+objeto['id']+">label:nth-child(4)").attr("class", "oculto");
    
        
        

    
        div.addEventListener("dblclick", mostrar); 
        n++;
       });
       }

  });
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
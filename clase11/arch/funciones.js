//NPM INSTALL save -y bootstrap

var person2={
    nombre:"Carlos",
    apellido:"Lopez"
}

var printName=function(){
    console.log(this.nombre+" "+this.apellido);
}

//funciones tienen un metodo apply y un metodo call

printName.apply(person2);//this va a tener como referencia esta variable.
//printName.call(person2);
this.person2.name

$(document).ready(function(){
$("#div1").fadeOut();//oculta
$("#div1").fadeIn();//muestra y se le pueden pasar parametros

});//es un listener

$("div").click(function(){
    $(this).hide();//esto funciona y oculta el objeto
});

$.post(url,
    {
        /*objeto json. si es compuesto usar $.ajax(
            {
                url: "",
                type:"post",
                data:{nombre:"", apellido: ""},
                contentType:"application/json",****************************
                succes: function(result){
                    $("#div1").fadeOut();
                }
            }
        )
        **/
    },
    function(){

    }
    );
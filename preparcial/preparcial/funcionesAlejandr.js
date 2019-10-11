

window.addEventListener("load", cargar);
window.addEventListener("load", cargarIndex);

var datosLogin = {
    email = $("email").value,
    password = $("password").value,
}

var datosPost = {
    "title" : texttitle,
    "header": textheader,
    "posttext": posttext,
    "author": author,
}

var url = "http://localhost:1337/login";
var urlPosteo = "http://localhost:1337/postearNuevaEntrada";

function cargar()
{
    $("btnSignIn").addEventListener("click", guardar);
    $("checkbox").addEventListener("click", recordarUsuario);
}

function cargarIndex()
{
    getParameterByName(datosLogin.email,url);
    getParameterByName(datosLogin.usuario,url);
}

/*function cargarTabla(e)
{
    alert("guardado");
    var nombre = e.target.parentNode.parentNode.children[0].innerHTML;
    var apellido = e.target.parentNode.parentNode.children[1].innerHTML;
    var fechaNac = e.target.parentNode.parentNode.children[2].innerHTML;
    var telefono = e.target.parentNode.parentNode.children[3].innerHTML;
    document.getElementById("nombre").value = nombre;
    document.getElementById("apellido").value = apellido;
    document.getElementById("fechaNac").value = fechaNac;
    document.getElementById("telefono").value = telefono;

    var tCuerpo = document.getElementById("tableBody");
    tCuerpo.innerHTML = tCuerpo.innerHTML + "<tr><td>" + nombre + "</td><td>" + apellido + "</td><td>" + fechaNac + "</td><td>" + telefono + "</td><td><a href='' onclick='borrar(event)'>borrar</a><a href='' onclick='modificar(event)'>editar</a></td></tr>";
}*/


function guardar()
{
    alert("guardado");
    datosLogin.email = $("email").value;
    datosLogin.password = $("password").value;

    if(datosLogin.email == "" || datosLogin.password == "")
    {
        $("email").className = "email";
        $("password").className = "password";
        alert("Debe ingresar email y password");
        return;
    }

    var xml = new XMLHttpRequest();
    xml.open("POST",url,true);
    xml.onreadystatechange = function(){
         
          var infoJson = JSON.stringify(datosLogin.email);
         infoJson.forEach(function(x){
            console.log(x);
            //Pregunto si el objeto JSON esta autenticado
            
         })
          
         var info = JSON.parse(datosLogin.email);
         if(info.autenticado == "si")
         {
            windows.location.replace(url);
         }
       
    }

    xml.send(infoJson); //Tengo que pasar el objeto JSON pero pasado a string
}

function recordarUsuario()
{

}

function BoShowMessage(str)
{
    alert(str);
}

function $(id)
{
    return document.getElementById(id);
}

function Equals(val1, val2)
{
    return val1 === val2;
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

/*function abrir(mostrarForm)
{
    var contAgregar = document.getElementById("contenedor");
    var btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.hidden = mostrarForm;
    contAgregar.hidden = !mostrarForm;
}

function modificar(e)
{
    e.preventDefault();
    var nombre = e.target.parentNode.parentNode.children[0].innerHTML;
    var apellido = e.target.parentNode.parentNode.children[1].innerHTML;
    var fechaNac = e.target.parentNode.parentNode.children[2].innerHTML;
    var telefono = e.target.parentNode.parentNode.children[3].innerHTML;
    document.getElementById("nombre").value = nombre;
    document.getElementById("apellido").value = apellido;
    document.getElementById("fechaNac").value = fechaNac;
    document.getElementById("telefono").value = telefono;
    abrir(true);
    guardar();
    
    /*var tagA = e.target;
    //tagA.innerHTML = "Otra cosa";
    //console.log(e.target);
    //console.log(e.target.parentNode);
    console.log(tagA.parentNode.parentNode);
    var tr = tagA.parentNode.parentNode;
    //tr.innerHTML= "";

    var nombre = tr.children[0].innerHTML;
    var apellido = tr.children[1].innerHTML;

    borrar(e);

    /*if(nombre == "" || apellido == "")
    {
        tr.children[0].innerHTML.className = "error";
        tr.children[0].innerHTML.className = "error";
        alert("Debe ingresar un nombre y un apellido");
        return;
    }*/

    /*var tCuerpo = document.getElementById("tableBody");
    tCuerpo.innerHTML = tCuerpo.innerHTML + "<tr><td>" + nombre + "</td><td>" + apellido + "</td><td><a href='' onclick='borrar(event)'>borrar</a><a href='' onclick='modificar(event)'>editar</a></td></tr>";
    
    alert(apellido + nombre);*/
//}

/*function mostrarForm()
{
    document.getElementById("contenedor").hidden = false;
}

function borrar(e)
{
    e.preventDefault();
    var tagA = e.target;
    //tagA.innerHTML = "Otra cosa";
    //console.log(e.target);
    //console.log(e.target.parentNode);
    console.log(tagA.parentNode.parentNode);
    tagA.parentNode.parentNode.innerHTML= "";
    alert("Se borro la persona");
}

function cerrarForm()
{
    document.getElementById("contenedor").hidden = true;
}*/
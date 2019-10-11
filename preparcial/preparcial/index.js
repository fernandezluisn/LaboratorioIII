function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}    



window.addEventListener("load",saludar);

function saludar(){
    nombre=getParameterByName("name", window.location.href);//así uso getparameter

    var objeto = document.createElement("h2");
    var nodoTexto = document.createTextNode("hola "+nombre);
    objeto.appendChild(nodoTexto);
    var body=document.getElementById("body");
    body.appendChild(objeto);
}

function mostrar(idDiv){    
    
        document.getElementById(idDiv).style.display="block";   
    
}

function ocultar(idDiv){    
    document.getElementById(idDiv).style.display="none";  

}

function Post(){
    
    var http=new XMLHttpRequest();
    http.onreadystatechange=function(){
        console.log("llegó respuesta", http.readyState, http.status);
   // document.getElementById("spiner").style.display="block";
        if(http.readyState==4){
            if(http.status===200){

                console.log("tenemos respuesta",http.responseText);

                var resp=JSON.parse(http.responseText);

                if (resp['autenticado']=="si")
                {
                console.log(resp.autenticado);
                window.location.replace("index.html?name="+name);
                }
            }
            /* funcion anonima. **/
        }
        }
        var pass=document.getElementById("pass").value;
        var name=document.getElementById("txtUser").value;
        console.log("pass:"+pass);
        console.log("user:"+name);

        if(name == "" || pass == "")
        {
        
        alert("Debe ingresar email y password");
        return;
        }
        
        http.open("POST"," http://localhost:1337/postearNuevaEntrada");/* por defecto es true**/
        /* En post lleva content type**/
        //http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        http.send(JSON.stringify("title="+title+"header="+header+"posttext="+postText+"author="+author));

        
    

    
    }
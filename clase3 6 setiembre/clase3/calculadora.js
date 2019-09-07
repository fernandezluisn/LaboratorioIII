
window.onload=

function cargar()
{   
    document.getElementById("botonSumar").onclick=sumar;
    document.getElementById("botonSumaryGuardar").onclick=sumarYguardar;
}


function sumar()
{
    var resultado;
    var num1=document.getElementById("n1");
    var num2=document.getElementById("t1");
    resultado=parseInt(num1.value)+parseInt(num2.value);
    document.getElementById("textoResultado").value=resultado;

    if(num1=="" || num2=="")
    {
        document.getElementById("n1").className="error";
        document.getElementById("t1").className="error";
        alert("debe ingresar numeros");
        return;
        
    }
}

function sumarYguardar()
{
    var resultado;
    var num1=document.getElementById("n1");
    var num2=document.getElementById("t1");
    resultado=parseInt(num1.value)+parseInt(num2.value);
    document.getElementById("textoResultado").value=resultado;


    var tabla=document.getElementById("tabla");
    var row=tabla.insertRow(1);
    var cel1=row.insertCell(1);
    var cel2=row.insertCell(2);
    var cel3=row.insertCell(3);
}

function $(id)
{
    var num1=document.getElementById(id);
    return num1;
}

function borrar(e){
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.parentNode);
    console.log(e.target.parentNode.parentNode);
    alert("ver e.target y parentNode para encontrar los padres de cada componente");
}
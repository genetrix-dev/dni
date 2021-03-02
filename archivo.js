const litera = [["T"], ["R"], ["W"], ["A"], ["G"], ["M"], ["Y"], ["F"], ["P"], ["D"], ["X"], ["B"], ["N"], ["J"], ["Z"], ["S"], ["Q"], ["V"], ["H"], ["L"], ["C"], ["K"], ["E"], ["T"]]

function validar(){
    var number = document.getElementById("numero").value;
    var letr = document.getElementById("letra").value.toUpperCase();
    var resto = number % 23;
    if (number.length<8 || isNaN(number)) {
        alert("Por favor, introduzca un número de DNI válido")
        document.getElementById("numero").value=""
        document.getElementById("letra").value=""
    }
    else if(isNaN(document.getElementById("letra").value) && (document.getElementById("letra").length!=1)){
        if (letr == litera[resto]){
            document.getElementById("validacion").innerHTML="<h3>Letra correcta</h3>";
            document.getElementById("validacion").style.color="green";
            document.getElementById("resultado").innerHTML="<h1>"+ litera[resto]+" </h1>"
            
        }
        else{
            document.getElementById("validacion").innerHTML="<h3>Letra incorrecta</h3>";
            document.getElementById("validacion").style.color="red";
            document.getElementById("resultado").innerHTML="<h1>La letra de ese número de DNI es &nbsp"+ litera[resto]+".</h1>"
            document.getElementById("numero").value=""
            document.getElementById("letra").value=""
        }
    }
    else{  
        alert("Por favor, introduzca un carácter alfanumérico válido")
        document.getElementById("numero").value=""
        document.getElementById("letra").value="" 

    }
}
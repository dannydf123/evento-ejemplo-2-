
function division (x,y) {
return x/y

}
 z= function divisionForm2 (x,y) {

    return x/y
 }



document.getElementById ("resDivision").innerHTML= division(10,2)

document.getElementById ("resDivision2").innerHTML= z(25,0)

function realizarDivision (){
var num1 = document.getElementById ("numerador").value
var num2 = document.getElementById ("divisor").value
document.getElementById("resultadoDivision").innerHTML= division (num1,num2)
}


function eventoCargado(){
  alert ("YA CARGE")
}

function mostrar()
{
	let dark;

dark= document.getElementById("txtIdMes").value;

switch(dark)

{

case "Febrero":

alert("Este mes no tiene más de 29 días");
break;

default:
	alert("Este mes tiene 30 o más días");


}
	


}//FIN DE LA FUNCIÓN
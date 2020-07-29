function mostrar()
{
let days;

days= document.getElementById("txtIdMes").value;


switch(days)

{

	case "Enero":
	case "Febrero":
	case "Marzo":
		alert("Ya pasamos el frio ahora calor");
	break;

	case "Julio":
	case "Agosto":
		alert("Abrigate que hace frio");
	break;

	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
		alert("Falta para el invierno");

}




}//FIN DE LA FUNCIÓN
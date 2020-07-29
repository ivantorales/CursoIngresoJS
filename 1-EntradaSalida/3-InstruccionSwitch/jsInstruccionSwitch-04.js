function mostrar()
{
	let souls;
	

	souls= document.getElementById("txtIdMes").value;

	switch(souls)

	{
	
	case "Febrero":
		alert(" tiene 28 dias ");
		break;

	case "Junio":
	case "Abril":
	case "Septiembre":
	case "Noviembre":
		alert(" tiene 30 dias ");
		break;

		default:
		alert(" tiene 31 dias ");






	}
	



}//FIN DE LA FUNCIÓN
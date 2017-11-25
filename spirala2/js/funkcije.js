function promijeni_formu()
{
	if(document.getElementById("registracijaNastavnika").style.display == "none")
	{
		document.getElementById("registracijaNastavnika").style.display = "block";
		document.getElementById("registracijaStudenta").style.display = "none";	
	}
	else
	{
		document.getElementById("registracijaStudenta").style.display = "block";
		document.getElementById("registracijaNastavnika").style.display = "none";	
	}
}
function fja(lname, sname) {
	 lista=document.getElementById(lname)
	 sign=document.getElementById(sname)
    
	if ( lista.style.display=="none" || lista.style.display==""){
	lista.style.display="block";
	sign.innerHtml=" - ";
	}
	else {
		lista.style.display="none";
		sign.innerHtml=" - ";
	}
       
}
function fja(){
	text=document.getElementById('text').value;
	
	var regtag=/&gout/g;
	var regtag=/&nbsp/g;
	var regtag=/&amp/g;
	var regtag=/<\/?\w+/g;
}
text.replace(regqout,'"');
text.replace(regamp,'&');
text.replace(regnbsp," ");
text.replace(regtag,"");

document.getElementById('tekst').value=tekst;
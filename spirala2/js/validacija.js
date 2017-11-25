var Validacija = (function(){	
	var regEmail = /^\w{1}(\w|\.){4,28}\w{1}@etf\.unsa\.ba$/;
	var regIndex = /^1{1}\d{4}$/;
	var maxGrupa =7;
	var akGod;
	var trenutniSemestar=0;
	var regGrupa = /^[1-9]{1,2}$/;
	var regAkGod = /^20\d{2}\/20\d{2}$/;
	var regPassword = /^[a-zA-Z0-9]+$/; //ne provjerava da li se malo, veliko slovo i broj pojavljuju bar jednom
	var regRepozitorij;
	var index;
	var regName = /^\b[A-Z]([a-zA-Z-'](?!--)(?!'')){2,12}(\s\b[A-Z]([a-zA-Z-'](?!--)(?!''))*)*$/;
	var regUrl = /^https:\/\/\w+@bitbucet\.org\/\w+\/\w+\.git\.$/;
	var regSsh = /^git@bitbucet\.org:\w+\/\w+\.git\.$/;
	var regUsername = /^\w{1,30}$/;

	return{
		
		validirajUsername: function ( username ){
		if ( username.value.match(regUsername)){
			return true;
		}
		else{
			return false;
			}
		},
		validirajFakultetski: function (email){
			if(email.value.match(regEmail)){
				return true;
			}
			
			else{
				return false;
			}
		},

		validirajIndex: function (index){
			if(index.value.match(regIndex)){
				return true;
			}
			
			else{
				return false;
			}
		},

		validirajGrupu: function (grupa){
			if((grupa.value.match(regGrupa)) && (grupa <= maxGrupa)){
				return true;
			}
			
			else{
				return false;
			}
		},

		validirajAkGod: function (akGod){
			var validno = false;
			var d = new Date();
			var godTrenutna = Number(getFullYear());
			if(akGod.value.match(regAkGod)){
				var god1 = Number(akGod.substring(0, 5));
				var god2 = Number(akGod.substring(6, 10));
				if ( god2 - god1 == 1 ) {
					if ( ((trenutniSemestar == 0) && (god1 == godTrenutna)) || ( (trenutniSemestar == 1) && (god2 == godTrenutna))){
						validno = true;
					}			
				}
			}
			return validno;
		},

		validirajPassword: function (password){
			if(password.value.match(regPassword)){
				return true;
			}
			
			else{
				return false;
			}
		},

		validirajPotvrdu: function (sifra1, sifra2){
			if((sifra1.localeCompare(sifra2)) == 0 ){
				return true;
			}
			
			else{
				return false;
			}
		},

		validirajBitbucetURL: function (url){ 
			var validno = false;
			if (url.value.match(regUrl)){
				var pocetakR = url.lastIndexOf("/") + 1;
				var krajR = url.length - 4;
				var nazivRep = url.substring(pocetak, kraj);
				var krajU1 = url.indexOf("@");
				var username1 = url.substring(8, krajU1);
				var pocetakU2 = url.IndexOf("org") + 4;
				var username2 = url.substring(pocetakU2, pocetakR)
			/*	if ((validirajNazivRepozitorija​(nazivRep)) && (validirajUsername(username1)) && (validirajUsername(username2)) ){
					validno = true;
				}*/
			}
			return validno;
		},

		validirajBitbucketSSH: function (ssh){
			var validno = false;
			if(ssh.value.match(regSsh)){
				var pocetak = ssh.lastIndexOf("/") + 1;
				var kraj = ssh.length - 4;
				var nazivRep = ssh.substring(pocetak, kraj);
				var krajU = ssh.lastIndexOf("/");
				var username = ssh.substring(19, krajU);
				/*if ( (validirajNazivRepozitorija​(regRepozitorij, nazivRep)) && (validirajUsername(username)) ){
					validno = true;
				}*/
			}
			return validno;
		},

		​validirajNazivRepozitorija:function(regRepozitorij, naziv){
			var validno = false;
			var nazivDef1 = "wtProjekat" + String(index);
			var nazivDef2 = "wtprojekat" + String(index);
			if ( (regRepozitorij == null) && (naziv.value.match(nazivDef1)) || (naziv.value.match(nazivDef2)) ){
				validno = true;
			}
			else if ( (regRepozitorij != null) && (naziv.value.match(regRepozitorij)) ){
				validno = true;
			}
			return validno;
		},

		validirajImeiPrezime: function (name){
			if(name.value.match(regName)){
				return true;
			}
			
			else{
				return false;
			}
		},
		
		postaviMaxGrupa: function (brGrupa) {
			this.maxGrupa = brGrupa;
		},
		
		postaviTrenSemestar: function (semestar) {
			this.trenutniSemestar = semestar;
		}
	}
}());


function signup(){
	
	var username = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	var email = document.getElementById("email").value;
	var tel = document.getElementById("tel").value;
	var nom = document.getElementById("nom").value;
	var prenom = document.getElementById("prenom").value;
	// isNaN(taux)
	
	if(nom === null || nom==="") {
		alert("Veuillez remplir le champs Nom correctement");
		return;
	}
	
	if(prenom === null || prenom==="") {
		alert("Veuillez remplir le champs Prénom correctement");
		return;
	}
	
	if(tel === null || tel==="" || isNaN(tel) || tel.length != 8) {
		alert("Veuillez remplir le champs Téléphone correctement");
		return;
	}
	
	if(!validateEmail(email)) {
		alert("Veuillez remplir le champs E-mail correctement");
		return;
	}
	
	if(username === null || username==="") {
		alert("Veuillez remplir le champs Nom d'utilisateur correctement");
		return;
	}
	
	if(pass === null || pass==="") {
		alert("Veuillez remplir le champs Mot de passe correctement");
		return;
	}
	
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
    }
  };
  xhttp.open("POST", "http://41.226.11.252:1180/espritfood/ProjetAndroidSim/InscriptionClient.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("nom="+nom+"&prenom="+prenom+"&email="+email+"&tel="+tel+"&username="+username+"&password="+pass);
  
  
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
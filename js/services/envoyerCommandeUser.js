function envoyerCmd(){
  
	var panierContent = JSON.parse(sessionStorage.getItem("panier"));
	var username = sessionStorage.getItem("username");
	var position = sessionStorage.getItem("position");
	var panier = [];
	
	if(position === null || position==="") {
		alert("Veuillez choisir l'adresse de livraison s'il vous plaît");
		return;
	}
	
	var params ="";
	  for (var i = 0; i < panierContent.length; i++) {
		  params +="&nb"+i+"="+panierContent.length;
		  params +="&username"+i+"="+username;
		  params +="&libelleCommande"+i+"="+panierContent[i].libelleFood;
		  params +="&quantite"+i+"="+panierContent[i].quantiteFood;
		  params +="&adresse"+i+"="+position;
	}
	  
	  
	  params = params.substr(1);

	
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
      sessionStorage.setItem("panier", JSON.stringify(panier));
      window.location.href = "index.html";
    }
  };
  
  
  
  
  xhttp.open("POST", "http://41.226.11.252:1180/espritfood/ProjetAndroidSim/EnvoyerCommande.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(params);
  
  
}
  
  

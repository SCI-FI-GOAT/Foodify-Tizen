function traiterCmd(etat){
	
	var GET = {};
	  var query = window.location.search.substring(1).split("&");
	  for (var i = 0, max = query.length; i < max; i++) {
	    if (query[i] === "") // check for trailing & with no param
	      continue;

	    var param = query[i].split("=");
	    GET[decodeURIComponent(param[0])] = decodeURIComponent(param[1] || "");
	  }

	  setTimeout(function() {}, 1000);

	
	
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
    }
  };
  xhttp.open("POST", "http://41.226.11.252:1180/espritfood/ProjetAndroidSim/TraiterCommande.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("etat="+etat+"&id_commande="+GET['id']);
  
  
}
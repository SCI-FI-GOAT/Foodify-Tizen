function changerVal() {

  //Delete all options
  while (document.getElementById('sousMenu').options.length)
    document.getElementById('sousMenu').options.remove(0);

  var e = document.getElementById("menu");
  var category = e.options[e.selectedIndex].value;

  var obj;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4) {
      obj = JSON.parse(xhttp.responseText);

      var i;
      for (i = 0; i < obj.length; i++) {
        if (i === 0) {
          document.getElementById('sousMenu').options.add(new Option(obj[i].libelleFood, obj[i].libelleFood, false, true), i);
        } else {
          document.getElementById('sousMenu').options.add(new Option(obj[i].libelleFood, obj[i].libelleFood, false, false), i);
        }
      }
    }
  };
  xhttp.open("GET", "http://41.226.11.252:1180/espritfood/ProjetAndroidSim/ListeFood.php?libelleFood=" + category);
  xhttp.send();

}

function ajouterOffre() {
  var e1 = document.getElementById("menu");
  var category = e1.options[e1.selectedIndex].value;

  var e2 = document.getElementById("sousMenu");
  var subCategory = e2.options[e2.selectedIndex].value;

  var taux = document.getElementById("reduction").value;
  var desc = document.getElementById("description").value;

	if(taux ===null || taux==="" || isNaN(taux) || taux < 1 || taux > 100) {
		alert("Veuillez remplir le champs taux correctement");
		return;
	}

	if(desc ===null || desc==="") {
		alert("Veuillez remplir le champs description correctement");
		return;
	}


  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
      window.location.reload();
    }
  };
  xhttp.open("POST", "http://41.226.11.252:1180/espritfood/ProjetAndroidSim/AjouterOffre.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("description=" + desc + "&taux=" + taux + "&libelle_food=" + subCategory);
}

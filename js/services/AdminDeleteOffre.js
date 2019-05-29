function deleteOffre(_id) {

  console.log("id_offre= " + _id);

  var id_offre = _id;
  var libelle_food = null;
  var taux = null;

  var obj;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {

    if (this.readyState === 4) {
      obj = JSON.parse(xhttp.responseText);
      var i;
      for (i = 0; i < obj.length; i++) {
        if (obj[i].id_offre == _id) {

          libelle_food = obj[i].libelle_food;
          taux = "- "+obj[i].taux+" %";
					deleteItem(id_offre, libelle_food, taux);
        }
      }

    }
  };
  xhttp.open("GET", "http://41.226.11.252:1180/espritfood/ProjetAndroidSim/ListeOffreAdmin.php");
  xhttp.send();
}

function deleteItem(id_offre,libelle_food, taux) {
	if (libelle_food !== null && taux !== null) {
		var xhttp2 = new XMLHttpRequest();
		xhttp2.onreadystatechange = function() {

			if (this.readyState == 4 && this.status == 200) {
				alert(this.responseText);
				window.location.reload();
			}

		};
		xhttp2.open("POST", "http://41.226.11.252:1180/espritfood/ProjetAndroidSim/SupprimerOffre.php", true);
		xhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp2.send("id_offre=" + id_offre + "&taux=" + taux + "&libelle_food=" + libelle_food);
	} else {
		console.log("Erreur offre non trouvée !");
	}
}

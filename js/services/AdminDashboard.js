function getDashTop() {

  // DashTopAdmin	
  var obj;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4) {
      obj = JSON.parse(xhttp.responseText);

      document.getElementById("nbCmd").innerHTML = obj[0].commandes;
      document.getElementById("nbOffres").innerHTML = obj[0].offres;
      document.getElementById("nbRest").innerHTML = obj[0].restaurants;
      document.getElementById("nbClients").innerHTML = obj[0].users;

    }

  };
  xhttp.open("GET", "http://41.226.11.252:1180/espritfood/ProjetAndroidSim/DashTopAdmin.php");
  xhttp.send();


  // CommandeDash
  var obj2;
  var xhttp2 = new XMLHttpRequest();
  xhttp2.onreadystatechange = function() {
    if (this.readyState === 4) {
      obj2 = JSON.parse(xhttp2.responseText);

      document.getElementById("nbCmdEnCours").innerHTML = obj2[0].EnCours;
      document.getElementById("nbCmdTraitee").innerHTML = obj2[0].Traitee;
      document.getElementById("nbCmdAnnulee").innerHTML = obj2[0].Annulee;

    }


  };
  xhttp2.open("GET", "http://41.226.11.252:1180/espritfood/ProjetAndroidSim/CommandeDash.php");
  xhttp2.send();


}

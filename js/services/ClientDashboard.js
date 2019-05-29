
function dashboardClient() {

	var username = sessionStorage.getItem('username');

  // Commandes
    var obj;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4) {
        obj = JSON.parse(xhttp.responseText);

        var target = document.getElementById("commandeItem");

        var code = '<div class="box-a">';
        var i;

        for (i = 0; i < obj.length; i++) { //onClick="changecolor();"

          code += '<div class="card-a" onclick="location.href=\'commandes.html?id=' + obj[i].id_commandeP +'\';">  <img src="../images/commande.png" alt="" style="height: 100px; width: 100px;">   <div class="team-tt">';
          code += '<h4 style="color: #FC6930;">Commande N° ' + obj[i].id_commandeP + ' </h4>';
          code += '<p>' + obj[i].date_commandeP + '</p>';

          if (obj[i].etat_commandeP === "En cours") {
            code += '<h4 style="color: #F9C464;">En Cours</h4> </div> </div>';
          } else if (obj[i].etat_commandeP === "Traitee") {
            code += '<h4 style="color: #42b883;">Traitée</h4> </div> </div>';
          } else {
            code += '<h4 style="color: #c70d3a;">Annulée</h4> </div> </div>';
          }


        }

        code += '</div>';
        target.innerHTML = code;

      }

    };
    xhttp.open("GET", "http://41.226.11.252:1180/espritfood/ProjetAndroidSim/ListeCommandeUser.php?username="+username);
    xhttp.send();



  // TOP 5
  var obj1;
  var xhttp1 = new XMLHttpRequest();
  xhttp1.onreadystatechange = function() {
    if (this.readyState === 4) {
      obj1 = JSON.parse(xhttp1.responseText);

      var target = document.getElementById("top5Item");

      var code = '<div class="box-a">';
      var i;

      for (i = 0; i < obj1.length; i++) {
        code += '<div class="card-a" onclick="location.href=\'foodDetails.html?libelle='+obj1[i].libelleTOP+'\';">  <img src="http://41.226.11.252:1180/espritfood/ProjetAndroidSim/images/' + obj1[i].imageTOP + '" alt="" style="height: 150px; width: 150px;">';
        code += '<div class="team-tt">  <h4 style="color: #293462;">' + obj1[i].libelleTOP + '</h4>';
        code += '<h5 style="color: #f0134d;"><strong>' + obj1[i].RatioTOP + ' %</strong></h5>  </div> </div>';
      }
      code += '</div>';
      target.innerHTML = code;
    }

  };
  xhttp1.open("GET", "http://41.226.11.252:1180/espritfood/ProjetAndroidSim/TOP5.php");
  xhttp1.send();



  // Promos
  var obj2;
  var xhttp2 = new XMLHttpRequest();
  xhttp2.onreadystatechange = function() {
    if (this.readyState === 4) {
      obj2 = JSON.parse(xhttp2.responseText);

      var target = document.getElementById("promosItem");

      var code = '<div class="box-a">';
      var i;

      for (i = 0; i < obj2.length; i++) {
        code += '<div class="card-a" onclick="location.href=\'foodDetails.html?libelle='+obj2[i].libelle_food+'\';">   <img src="http://41.226.11.252:1180/espritfood/ProjetAndroidSim/images/'+ obj2[i].image +'" alt="" style="height: 150px; width: 150px;">';
        code += '<div class="team-tt">  <h4 style="color: #293462;">'+ obj2[i].libelle_food +'</h4>';
        code += '<h5 style="color: #f0134d;"><strong>- '+ obj2[i].taux +' %</strong></h5>  </div>  </div>';
      }
      code += '</div>';
      target.innerHTML = code;
    }

  };
  xhttp2.open("GET", "http://41.226.11.252:1180/espritfood/ProjetAndroidSim/ListeOffreClient.php");
  xhttp2.send();



  // Recommanded
  var obj3;
  var xhttp3 = new XMLHttpRequest();
  xhttp3.onreadystatechange = function() {
    if (this.readyState === 4) {
      obj3 = JSON.parse(xhttp3.responseText);

      var target = document.getElementById("recommandedItem");

      var code = '<div class="box-a">';
      var i;

      for (i = 0; i < obj3.length; i++) {
      	code += '<div class="card-a" onclick="location.href=\'foodDetails.html?libelle='+obj3[i].libelleTOP+'\';">   <img src="http://41.226.11.252:1180/espritfood/ProjetAndroidSim/images/'+ obj3[i].imageTOP +'" alt="" style="height: 150px; width: 150px;">';
        code += '<div class="team-tt">  <h4 style="color: #293462;">'+ obj3[i].libelleTOP +'</h4> </div> </div>';
      }
      code += '</div>';
      target.innerHTML = code;
    }

  };
  xhttp3.open("GET", "http://41.226.11.252:1180/espritfood/ProjetAndroidSim/Recommanded.php?username="+username);
  xhttp3.send();

}

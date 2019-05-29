function commandesClient() {


    var GET = {};
    var query = window.location.search.substring(1).split("&");
    for (var i = 0, max = query.length; i < max; i++) {
      if (query[i] === "") // check for trailing & with no param
        continue;

      var param = query[i].split("=");
      GET[decodeURIComponent(param[0])] = decodeURIComponent(param[1] || "");
    }

    setTimeout(function() {}, 1000);

    var obj;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4) {
        obj = JSON.parse(xhttp.responseText);
        var target = document.getElementById("commandeDetail"); // find the list-item

        code = '';
        var i;
        for (i = 0; i < obj.length; i++) {
      	code += '<div class="col-md-4">  ';
      	code += '<img class="img-responsive" src="http://41.226.11.252:1180/espritfood/ProjetAndroidSim/images/' + obj[i].image + '" alt="" /> ';
      	code += '<h4>' + obj[i].libelle_commande + '</h4>';
      	code += '<p class="w3_agileits_para"><span class="fa fa-shopping-basket" style="color: #f13d00;"></span> Quantité: ' + obj[i].quantite + '</p>  </div>  <div class="clearfix"> </div> </div> <hr>';
        }

        target.innerHTML = code;

        document.getElementById("numCmd").innerHTML = "Commande N°"+GET['id'];
        document.getElementById("userCmd").innerHTML = '<span class="glyphicon glyphicon-user" style="color: #4caf50;"></span> ' + obj[0].username;
        document.getElementById("dateCmd").innerHTML = '<span class="glyphicon glyphicon-calendar" style="color: #4caf50;"></span> ' + obj[0].date;
  	  document.getElementById("adresseCmd").innerHTML = '<span class="glyphicon glyphicon-map-marker" style="color: #4caf50;"></span> ' + obj[0].adresse;
        

      }

    };
    xhttp.open("GET", "http://41.226.11.252:1180/espritfood/ProjetAndroidSim/ListeSousCommandeAdmin.php?id_commandeP=" + GET['id']);
    xhttp.send();

}

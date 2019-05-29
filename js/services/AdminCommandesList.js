function adminCommandesList() {

  var obj;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4) {
      obj = JSON.parse(xhttp.responseText);

      var target = document.getElementById("commandes"); // find the list-item

      var code = '';
      var i;

      for (i = 0; i < obj.length; i++) {

    	  code += '<div class="card"> <div class="card-body" onclick="location.href=\'commandeDetail.html?id=' + obj[i].id_commandeP +'\';">';
        code += '<h3 class="page-header page-header icon-subheading"> <a href="#" style="color: #F13D00">ID : ' + obj[i].id_commandeP + '</a> </h3>';
        code += '<p><span class="glyphicon glyphicon-calendar"></span>  ' + obj[i].date_commandeP + '</p>';
        code += '<p><span class="fa fa-user"></span>  ' + obj[i].user_commandeP + ' </p> <br>';

        if (obj[i].etat_commandeP === "En cours") {
          code += '<h4 style="color: #F9C464">En Cours</h4></div></div>';
        } else if (obj[i].etat_commandeP === "Traitee") {
          code += '<h4 style="color: #42b883">Traitée</h4></div></div>';
        } else {
          code += '<h4 style="color: #c70d3a">Annulée</h4></div></div>';
        }

      }

      target.innerHTML = code;

    }

  };
  xhttp.open("GET", "http://41.226.11.252:1180/espritfood/ProjetAndroidSim/ListeCommandeAdmin.php");
  xhttp.send();
}




function changerValCmd(){

  var e = document.getElementById("cmd");
  var selectedState = e.options[e.selectedIndex].value;

  var obj;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4) {
      obj = JSON.parse(xhttp.responseText);

      var target = document.getElementById("commandes"); // find the list-item

      var code = '';
      var i;

      for (i = 0; i < obj.length; i++) {

        if (selectedState === "Tout") {

          code += '<div class="card"> <div class="card-body" onclick="location.href=\'commandeDetail.html?id=' + obj[i].id_commandeP +'\';">';
          code += '<h3 class="page-header page-header icon-subheading"> <a href="#" style="color: #F13D00">ID : ' + obj[i].id_commandeP + '</a> </h3>';
          code += '<p><span class="glyphicon glyphicon-calendar"></span>  ' + obj[i].date_commandeP + '</p>';
          code += '<p><span class="fa fa-user"></span>  ' + obj[i].user_commandeP + ' </p> <br>';
          if (obj[i].etat_commandeP === "En cours") {
            code += '<h4 style="color: #F9C464">En Cours</h4></div></div>';
          } else if (obj[i].etat_commandeP === "Traitee") {
            code += '<h4 style="color: #42b883">Traitée</h4></div></div>';
          } else {
            code += '<h4 style="color: #c70d3a">Annulée</h4></div></div>';
          }

        } else if (selectedState === "Traitée" && obj[i].etat_commandeP === "Traitee") {

          code += '<div class="card"> <div class="card-body" onclick="location.href=\'commandeDetail.html?id=' + obj[i].id_commandeP +'\';">';
          code += '<h3 class="page-header page-header icon-subheading"> <a href="#" style="color: #F13D00">ID : ' + obj[i].id_commandeP + '</a> </h3>';
          code += '<p><span class="glyphicon glyphicon-calendar"></span>  ' + obj[i].date_commandeP + '</p>';
          code += '<p><span class="fa fa-user"></span>  ' + obj[i].user_commandeP + ' </p> <br>';
          code += '<h4 style="color: #42b883">Traitée</h4></div></div>';

        } else if (selectedState === "En Cours" && obj[i].etat_commandeP === "En cours"){

          code += '<div class="card"> <div class="card-body" onclick="location.href=\'commandeDetail.html?id=' + obj[i].id_commandeP +'\';">';
          code += '<h3 class="page-header page-header icon-subheading"> <a href="#" style="color: #F13D00">ID : ' + obj[i].id_commandeP + '</a> </h3>';
          code += '<p><span class="glyphicon glyphicon-calendar"></span>  ' + obj[i].date_commandeP + '</p>';
          code += '<p><span class="fa fa-user"></span>  ' + obj[i].user_commandeP + ' </p> <br>';
          code += '<h4 style="color: #F9C464">En Cours</h4></div></div>';

        } else if (selectedState === "Annulée" && obj[i].etat_commandeP === "Annulee") {

          code += '<div class="card"> <div class="card-body" onclick="location.href=\'commandeDetail.html?id=' + obj[i].id_commandeP +'\';">';
          code += '<h3 class="page-header page-header icon-subheading"> <a href="#" style="color: #F13D00">ID : ' + obj[i].id_commandeP + '</a> </h3>';
          code += '<p><span class="glyphicon glyphicon-calendar"></span>  ' + obj[i].date_commandeP + '</p>';
          code += '<p><span class="fa fa-user"></span>  ' + obj[i].user_commandeP + ' </p> <br>';
          code += '<h4 style="color: #c70d3a">Annulée</h4></div></div>';

        }


      }

      target.innerHTML = code;

    }

  };
  xhttp.open("GET", "http://41.226.11.252:1180/espritfood/ProjetAndroidSim/ListeCommandeAdmin.php");
  xhttp.send();
}

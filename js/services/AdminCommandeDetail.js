function commandesDetailsAdmin() {


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

      //var code ='';
      // code += '<h2 class="mb-4">Commande N° '+GET["id"]+'</h2>';
      // code += '<div><a href="#"><span class="icon-person"></span> '+obj[0].username +'</a></div>';
      // code += '<div><a href="#"><span class="icon-calendar"></span> '+obj[0].date +'</a></div><br>';
      // code += '<p class="flip"><span class="deg1"></span><span class="deg2"></span><span class="deg3"></span></p> ';
      // document.getElementById("commandeInfos").innerHTML=code;

      var target = document.getElementById("commandeDetail"); // find the list-item

      code = '';
      var i;
      for (i = 0; i < obj.length; i++) {
/*
        code += '<div class="col-md-4 agileinfo_banner_bottom_grid_three_left">  <div class="wthree_banner_bottom_grid_three_left1 grid"> ';
        code += '<figure class="effect-roxy"> <img src="http://41.226.11.252:1180/espritfood/ProjetAndroidSim/images/' + obj[i].image + '"  class="img-responsive" alt=""> <figcaption>';
        code += '<h3><span>' + obj[i].libelle_commande + '</span></h3>';
        code += '<p><span class="glyphicon glyphicon-calendar"></span>' + obj[0].date + '</p>';
        code += '</figcaption>  </figure>  </div>';
        code += '<p class="w3_agileits_para"><span class="fa fa-user" style="color: #4caf50;"></span> ' + obj[0].username + '</p>';
        code += '<p class="w3_agileits_para"><span class="fa fa-shopping-basket" style="color: #f13d00;"></span> Quantité: ' + obj[i].quantite + '</p>  </div>  <div class="clearfix"> </div>';
*/
    	  /*<div class="col-md-4">  <div class="wthree_banner_bottom_grid_three_left1 grid"> 
          
          <img src="../images/dinner.jpg" alt="" />  </div>
          <h4>Salisbury Steaks <span>
          <p class="w3_agileits_para"><span class="fa fa-shopping-basket" style="color: #f13d00;"></span> Quantité: ' + obj[i].quantite + '</p>  </div>  <div class="clearfix"> </div>


        </div>
    	  */
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

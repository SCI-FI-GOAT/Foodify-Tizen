function listeOffresAdmin(){

var obj;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState === 4 ) {
    	obj =  JSON.parse(xhttp.responseText);

    	var target = document.getElementById("offre"); // find the list-item

    	var code ='';
    	var i;

    	for (i = 0; i < obj.length; i++) {

				code += '<div class="col-md-4">  <h3 class="page-header page-header icon-subheading"> ID Offre : ' + obj[i].id_offre + ' </h3>';
				code += '<img src="http://41.226.11.252:1180/espritfood/ProjetAndroidSim/images/' + obj[i].image + '" alt="">';
				code += '<div class="menu-items">  <h4> ' + obj[i].libelle_food + ' <span>- ' + obj[i].taux +' %</span></h4>';
				code += '<p> ' + obj[i].description +' </p>';
        _id = obj[i].id_offre;
				code += '<p><a href="#" onclick ="deleteOffre('+_id+')" ';
        code +='class="btn btn-outline btn-danger" id="deleteOffreButton">Delete</a></p>  </div>  </div>  <div class="clearfix"></div>';
    	}

    	target.innerHTML = code;

    	}

     };
    xhttp.open("GET", "http://41.226.11.252:1180/espritfood/ProjetAndroidSim/ListeOffreAdmin.php");
    xhttp.send();


}

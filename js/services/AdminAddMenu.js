var url;

function ajouterMenu() {
  var e1 = document.getElementById("menu");
  var id_categorie = e1.options[e1.selectedIndex].value;
  var libelle_food = document.getElementById("libelle_food").value;
  var prix_food = document.getElementById("prix_food").value;
  var description = document.getElementById("description").value;

  if (libelle_food === null || libelle_food === "")  {
		alert("Veuillez remplir le champs libellé correctement");
    return;
	}
  if (prix_food === null || isNaN(prix_food) || prix_food < 1)  {
    alert("Veuillez remplir le champs prix correctement");
    return;
  }
  if (description === null || description ==="")  {
    alert("Veuillez remplir le champs description correctement");
    return;
  }


  if (url === null || url === "")  {
    alert("Veuillez ajouter une image!");
    return;
  }
      console.log("img length "+String(url).length);
console.log(url);


  
  var imageSelecter = document.getElementById("image-selecter"),
		file = imageSelecter.files[0];
	if (!file) 
		return ;
  
  
      setTimeout(function() {}, 1000);


  
  /////////////////////////////////////////////////////////////////////////////
  
  // create form data and append the file
	var formData = new FormData();
	formData.append("image", url);
	formData.append("libelle_food", libelle_food);
	formData.append("prix_food", prix_food);
	formData.append("description", description);
	formData.append("id_categorie", id_categorie);
	// do the ajax part
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if (this.readyState === 4 && this.status === 200) {
			alert(this.responseText);
		      window.location.reload();


		}
		
	}
	ajax.open("POST", "http://41.226.11.252:1180/espritfood/ProjetAndroidSim/AjouterFood2.php", true);
	ajax.send(formData); // send the form data
  
  
}

function readURL(input) {

        if (input.files && input.files[0]) {

            var reader = new FileReader();

            

            reader.onload = function (e) {

                $('#profile-img-tag').attr('src', e.target.result);

            }

            reader.readAsDataURL(input.files[0]);

        }

    }

    $("#image-selecter").change(function(){

        readURL(this);

    });

function encodeImageFileAsURL(element) {
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
    //console.log( reader.result)
    url = reader.result.slice(23)
  }
  reader.readAsDataURL(file);
       
}

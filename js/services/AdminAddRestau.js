function ajouterRestau() {

  var adresse = document.getElementById("address").value;
  var position = sessionStorage.getItem("position");
  var latlng = sessionStorage.getItem("latlng");

  var x = "";
  var y = "";

  if (latlng) {
    x = latlng.substring(0, latlng.indexOf(","));
    y = latlng.substring(latlng.indexOf(",") + 1, latlng.length);
  }

  if (adresse === null || adresse === "") {
    alert("Veuillez remplir le champs Libellé");
    return;
  }

  if (x === null || x === "" || y === null || y === "") {
    alert("Veuillez choisir un emplacement valide sur la carte");
    return;
  }

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
      sessionStorage.setItem("latlng", "");
      window.location.reload();
    }
  };
  xhttp.open("POST", "http://41.226.11.252:1180/espritfood/ProjetAndroidSim/AjouterRestauTizen.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("villeRestau=" + adresse + "&adresseRestau=" + position + "&cordonneeX=" + x + "&cordonneeY=" + y);

}

function login(){
	var username = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	var obj;
	var panier = [];
    if(username === "" || pass === ""){
    	alert("Remplissez tout les champs s'il vous plaît.");
    	return;
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState === 4 ) {
    	obj =  JSON.parse(xhttp.responseText);
    	if ((obj[0].userName !== "") && (obj[0].Role === "0")){
    		sessionStorage.setItem("username", obj[0].userName);
    		sessionStorage.setItem("password", obj[0].passWord);
			sessionStorage.setItem("panier", JSON.stringify(panier));
    		window.location = 'pages-client/index.html';
    	}
    	else if ((obj[0].userName !== "") && (obj[0].Role === "1")){
    		window.location = 'pages-admin/index.html';
    	}
    	else{
    		alert("Vérifiez vos coordonnées.");
    	}
     }
     };
    xhttp.open("GET", "http://41.226.11.252:1180/espritfood/ProjetAndroidSim/LoginClient.php?username="+username+"&password="+pass);
    xhttp.send();


}

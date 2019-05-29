/* Set values + misc */
var promoCode;
var promoPrice;
var fadeTime = 300;


/* Assign actions */
$('.quantity input').change(function() {
  updateQuantity(this);
});

$('.remove button').click(function() {
  removeItem(this);
});

$(document).ready(function() {
  updateSumItems();
});

$('.promo-code-cta').click(function() {

  promoCode = $('#promo-code').val();

  if (promoCode == '10off' || promoCode == '10OFF') {
    //If promoPrice has no value, set it as 10 for the 10OFF promocode
    if (!promoPrice) {
      promoPrice = 10;
    } else if (promoCode) {
      promoPrice = promoPrice * 1;
    }
  } else if (promoCode != '') {
    alert("Invalid Promo Code");
    promoPrice = 0;
  }
  //If there is a promoPrice that has been set (it means there is a valid promoCode input) show promo
  if (promoPrice) {
    $('.summary-promo').removeClass('hide');
    $('.promo-value').text(promoPrice.toFixed(2));
    recalculateCart(true);
  }
});


/* onload */

window.onload = function calculateCart(onlyTotal) {
	
	console.log("you have " + JSON.parse(sessionStorage.getItem("panier")).length + " items");
	console.log(JSON.stringify(sessionStorage.getItem("panier")));
	var panierContent = JSON.parse(sessionStorage.getItem("panier"));
	
	/***********************CONTENT************************/
	
	
	var obj = panierContent;
	
	var code ='';
    	var i;
    	for (i = 0; i < obj.length; i++) {
    	
    		/*code += '<li class="items odd" ><div class="infoWrap">  <div class="cartSection">';
    		code += '<img src="http://41.226.11.252:1180/espritfood/ProjetAndroidSim/images/'+obj[i].imageFood+'"  class="itemImg"  alt=""/> ';
    		code += '<p class="itemNumber"><h3>'+obj[i].libelleFood+'</h3></p><h3></h3>';
    		code += '<p> <span id="qte'+i+'">'+obj[i].quantiteFood+'</span> x <span id="pu'+i+'">'+obj[i].prixRemise+'</span> DT</p></div>  ';
    		code += '<div class="prodTotal cartSection" onload="totalLigne()"><p> <span id="totalLigne'+i+'">15.00</span> DT</p> </div>';
    		code += '<div class="cartSection removeWrap"><a href="#" class="remove">x</a></div></div></li>';*/
			code += '<div class="basket-product">';
        code += '<div class="item">';
          code += '<div class="product-image">';
            code += '<img src="http://41.226.11.252:1180/espritfood/ProjetAndroidSim/images/'+obj[i].imageFood+'" alt="Placholder Image 2" class="product-frame">';
          code += '</div>';
          code += '<div class="product-details">';
            code += '<h1><strong><span class="item-quantity" id="qte'+i+'">'+obj[i].quantiteFood+'</span> x </strong> '+obj[i].libelleFood+'</h1>';
          code += '</div>';
        code += '</div>';
        code += '<div class="price" id="prix'+i+'">'+obj[i].prixRemise+'</div>';
        code += '<div class="quantity">';
        	code += '<input type="number" onchange="updateQuantity(this,'+i+')" value="'+obj[i].quantiteFood+'" min="1" max="10" class="quantity-field" id="qnte'+i+'">';
        code += '</div>';
        code += '<div class="subtotal" id="subtotal'+i+'"></div>';
        code += '<div class="remove">';
          code += '<button onclick="removeItem(this,'+i+')">Retirer</button>';
        code += '</div>';
      code += '</div>';
    		   		
    	}
    document.getElementById("cartContent").innerHTML = code;
	
	var tot=0;
	for(var i=0 ; i<obj.length ; i++){
		document.getElementById("qnte"+i).value = document.getElementById("qte"+i).innerHTML;
		tot += parseInt(document.getElementById("qte"+i).innerHTML);
		document.getElementById('subtotal'+i).innerHTML = (document.getElementById("qte"+i).innerHTML * document.getElementById("prix"+i).innerHTML).toFixed(2);
	}
	document.getElementById("qtetot").innerHTML = tot;
  recalculateCart(onlyTotal);
}


/* Recalculate cart */
function recalculateCart(onlyTotal) {
  var subtotal = 0;

  /* Sum up row totals */
  $('.basket-product').each(function() {
    subtotal += parseFloat($(this).children('.subtotal').text());
  });

  /* Calculate totals */
  var total = subtotal;

  //If there is a valid promoCode, and subtotal < 10 subtract from total
  var promoPrice = parseFloat($('.promo-value').text());
  if (promoPrice) {
    if (subtotal >= 10) {
      total -= promoPrice;
    } else {
      alert('Order must be more than £10 for Promo code to apply.');
      $('.summary-promo').addClass('hide');
    }
  }

  /*If switch for update only total, update only total display*/
  if (onlyTotal) {
    /* Update total display */
    $('.total-value').fadeOut(fadeTime, function() {
      $('#basket-total').html(total.toFixed(2));
      $('.total-value').fadeIn(fadeTime);
    });
  } else {
    /* Update summary display. */
    $('.final-value').fadeOut(fadeTime, function() {
      $('#basket-subtotal').html(subtotal.toFixed(2));
      $('#basket-total').html(total.toFixed(2));
      if (total == 0) {
        $('.checkout-cta').fadeOut(fadeTime);
      } else {
        $('.checkout-cta').fadeIn(fadeTime);
      }
      $('.final-value').fadeIn(fadeTime);
    });
  }
}

/* Update quantity */
function updateQuantity(quantityInput,indice) {
  /* Calculate line price */
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children('.price').text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;

  /* Update line price display and recalc cart totals */
  productRow.children('.subtotal').each(function() {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(linePrice.toFixed(2));
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });

  productRow.find('.item-quantity').text(quantity);
  
  console.log("updating "+ indice);
	var panierContent = JSON.parse(sessionStorage.getItem("panier"));
	panierContent[indice].quantiteFood = quantity;
	sessionStorage.setItem("panier", JSON.stringify(panierContent));
  
  
  
  
  updateSumItems();
}

function updateSumItems() {
  var sumItems = 0;
  $('.quantity input').each(function() {
    sumItems += parseInt($(this).val());
  });
  $('.total-items').text(sumItems);
}

/* Remove item from cart */
function removeItem(removeButton,indice) {
  /* Remove row from DOM and recalc cart total */
	console.log("deleting "+ indice);
	var panierContent = JSON.parse(sessionStorage.getItem("panier"));
	panierContent.splice(indice, 1);
	sessionStorage.setItem("panier", JSON.stringify(panierContent));
	
  var productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function() {
    productRow.remove();
    recalculateCart();
    updateSumItems();
  });
  
  location.reload();
}
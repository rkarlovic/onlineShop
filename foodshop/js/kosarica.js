var meal = {};
$(document).ready(function() {
  $.getJSON({
      url: "http://ec2-52-28-87-138.eu-central-1.compute.amazonaws.com/rest/public/api/meals"
  }).then(function(meal2) {
     meal = meal2;
     for (var i = 0; i < meal.length; i++) {
      $("#appendItems").append('<figure class="snip1423 col-lg-3 col-md-5 mb-5" style="margin:auto">' +
        '<img src="http://ec2-52-28-87-138.eu-central-1.compute.amazonaws.com/'+meal[i].image+'" class="card-img-top" alt="sample57" />' +
        '<figcaption><h3>' + meal[i].meal_name +
        '</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales metus.</p><div class="price">' +
        meal[i].price + 'kn</div></figcaption id="test123"><i class="ion-android-cart dodaj-item notification" data-name="' +
        meal[i].meal_name + '" data-price="' + meal[i].price + '"data-id="'+meal[i].id+'"></i></figure>');
      }


  });

});


function checkLogin() {
  var mailLogin = document.getElementById('mailLogin').value;
  var passwordLogin = CryptoJS.SHA3(document.getElementById("passwordLogin").value.toString());
  console.log(mailLogin);
  console.log(passwordLogin.toString());

  $.getJSON({
    url: "http://ec2-52-28-87-138.eu-central-1.compute.amazonaws.com/rest/public/api/users/login/"+mailLogin+"/"+passwordLogin+""
  }).then(function(idLogin) {
    console.log(idLogin);
    if(idLogin[0] != null){
      console.log("Radi :)");
      sessionStorage.setItem('id',idLogin[0].id);
      sessionStorage.setItem('mailLogin', mailLogin);
      sessionStorage.setItem('passwordLogin', passwordLogin);
      document.getElementById('prijavaToggle').style.display = "none";
      document.getElementById('odjavaToggle').style.display = "block";
      $('#prijava').modal("hide");
    }else{
      console.log("Ne radi :(");
      loginFail();
    }

    

    
  });

};



function Registration(){
var mailRegistration = document.getElementById('mailRegistration').value;
var passwordRegistration = CryptoJS.SHA3(document.getElementById('passwordRegistration').value).toString();
console.log(mailRegistration);
console.log(passwordRegistration);

$.ajax({
  type: "POST",
  contentType: 'application/json',
  cache: false,
  url: 'http://ec2-52-28-87-138.eu-central-1.compute.amazonaws.com/rest/public/api/users/add',
  data: JSON.stringify({ 
    "email": mailRegistration,
    "password": passwordRegistration,
    "first_name": document.getElementById("nameRegistration").value,
    "last_name": document.getElementById("lastnameRegistration").value
  }),
  dataType:'json',
  success: function(data) {
    console.log(data);
    $.each(data, function(index, element) {
        if(element=="User failed"){
            registracijaFail();
        } else {
            registracijaSuccess();
        }
    });
  }.bind(this),
  error: function(xhr, status, err) {
    console.error(status, err.toString());
    registracijaFail();
  }.bind(this)

});
};


function sendOrder(){
  $('#narudzbaPrikaz').modal("hide");
  //var time = new Date();
  var timeOrder = new Date().toISOString().substr(0, 19).replace('T', ' ');
  var orderAddress = document.getElementById('orderAdress').value;


  var kolicinaPolje=[];
  var idPolje=[];

  for(var i in shoppingCart.cart){
    kolicinaPolje[i] = shoppingCart.cart[i].count;
    idPolje[i] = shoppingCart.cart[i].id;
  }


  // var kolicina = {};
  // var idJela = {};
  //   shoppingCart.cart.forEach((item) => {
  //   kolicina[item.id] = item.count;
  //   idJela[item.id] = item.id;
  //   })

  var data = {
    "orderedBy":sessionStorage.getItem('id'),
    "orderTime": timeOrder,
    "orderAddress": orderAddress,
    "meal": JSON.stringify(idPolje),
    "amount":JSON.stringify(kolicinaPolje)
  };
  console.log(data);

  $.ajax({
    type: "POST",
    contentType: 'application/json',
    cache: false,
    url: 'http://ec2-52-28-87-138.eu-central-1.compute.amazonaws.com/rest/public/api/orders/add',
    data: JSON.stringify(data),
    dataType: 'json',
        success: function(response) {
          poslano();
          shoppingCart.clearCart();
          displayCart();
        },
        error: function(xhr, status, err) {
          nijePoslano();
          console.error(status, err.toString());
        }    
  });

}




// function sendOrder(){
//   $('#narudzbaPrikaz').modal("hide");
//   var time = new Date();
//   var timeOrder = (time.getFullYear()+"-"+time.getMonth()+1+"-"+time.getDate()+" "+(time.getHours()<10?'0':'') + time.getHours()+":"+(time.getMinutes()<10?'0':'') + time.getMinutes() +":"+(time.getSeconds()<10?'0':'') + time.getSeconds());
//   var orderAddress = document.getElementById('orderAdress').value;
//   $.ajax({
//     type: "POST",
//     contentType: 'application/json',
//     cache: false,
//     url: 'http://ec2-52-28-87-138.eu-central-1.compute.amazonaws.com/rest/public/api/orders/add',
//     data: { 
//       "orderedBy": sessionStorage.getItem('id'),
//       "orderTime": timeOrder,
//       "orderAddress": orderAddress,
//       "meal": JSON.stringify(shoppingCart.cart.id),
//       "amount": JSON.stringify(shoppingCart.cart.count)
//     },
//     dataType: 'json',
//         success: function() {
//         },
//         error: function(xhr, status, err) {
//           console.error(status, err.toString());
//         }    
//   });

// }






var shoppingCart = {};
shoppingCart.cart = [];

shoppingCart.Item = function (name, price, count, id) {
  this.name = name;
  this.price = price;
  this.count = count;
  this.id = id;

};

shoppingCart.addItemToCart = function(name, price, count, id) {
  for (var i in shoppingCart.cart) {
    if (shoppingCart.cart[i].name === name) {
      shoppingCart.cart[i].count++;
      shoppingCart.saveCart();
      return;
    }
  }
  var item = new shoppingCart.Item(name, price, count, id);
  console.log(item.id);
  shoppingCart.cart.push(item);
  shoppingCart.saveCart();

};


shoppingCart.decreaseItemNumber = function(name) {
  for (var i in shoppingCart.cart) {
    if (shoppingCart.cart[i].name === name) {
      shoppingCart.cart[i].count--;
      if (shoppingCart.cart[i].count === 0) {
        shoppingCart.cart.splice(i, 1); // arg1 za poziciju, arg2 za koliko remove, arg3 za dodavanje
      }
      break;
    }
  }
  saveCart();
};


//deleteItemFromCart(name ili ID)
shoppingCart.removeItemCartAll = function(name) {
  for (var i in shoppingCart.cart) {
    // console.log(shoppingCart.cart[i].name);
    if (shoppingCart.cart[i].name === name) {
      shoppingCart.cart.splice(i, 1);
      break;
    }
  }

  shoppingCart.saveCart();
};


shoppingCart.increaseItemNumber = function(name) {
  for (var i in shoppingCart.cart) {
    if (shoppingCart.cart[i].name === name) {
      shoppingCart.cart[i].count++;
      break;
    }
  }
};


shoppingCart.clearCart = function() {
  shoppingCart.cart = []; //treba postojati i bolji nacin za prznjenje
  shoppingCart.saveCart();
}

shoppingCart.countCart = function() {
  var total = 0;
  for (var i in shoppingCart.cart) {
    total += shoppingCart.cart[i].count;
  }
  return total;
};

// shoppingCart.totalAmmount = function() {
//   var price = 0;
//   for (var i in shoppingCart.cart) {
//     price += shoppingCart.cart[i].price * cart[i].count;
//   }
//   return price.toFixed(2);
// };

shoppingCart.listCart = function() {
  var copyCart = [];
  for (var i in shoppingCart.cart) {
    var item = shoppingCart.cart[i];
    var itemCopy = {};
    for (var p in item) {
      itemCopy[p] = item[p];
    }
    itemCopy.total = (item.price * item.count).toFixed(2);
    copyCart.push(itemCopy);
  }
  return copyCart;

};

shoppingCart.setCountForItem = function(name, count){
  for (var i in shoppingCart.cart){
    console.log(shoppingCart.cart[i].name);
     if(shoppingCart.cart[i].name == name){
      shoppingCart.cart[i].count = parseInt(count);
      break;
     };
  };
  shoppingCart.saveCart();
};



$('#show-cart').on("change",'.kolicinaArtikl', function(event) {
  var name = $(this).attr("data-name");
  var count = $(this).val();
  console.log(name);
  shoppingCart.setCountForItem(name, $(this).val());
  displayCart();
});

shoppingCart.totalCart = function() {
  var price = 0;
  for (var i in shoppingCart.cart) {
    price += shoppingCart.cart[i].price * shoppingCart.cart[i].count;
  }
  return price.toFixed(2);
};

shoppingCart.saveCart = function() {
  localStorage.setItem("cartSave", JSON.stringify(shoppingCart.cart));
};

shoppingCart.loadCart = function() {
  shoppingCart.cart = JSON.parse(localStorage.getItem("cartSave")); //stringify treba pretvorit nazad u normalan objekt
};



//Zasto dolazi do krivog brojanja ako je prva naredba ukjucena
 $('body').on('click', '.dodaj-item', function(event) {
//$( document ).ready(function() {
// $(".dodaj-item").click(function (event) {
  event.preventDefault();
  var name = $(this).attr("data-name"); //var name = $(this).data('name')
  var price = Number($(this).attr("data-price"));
  var id = Number($(this).attr("data-id"));
  shoppingCart.addItemToCart(name, price, 1,id);
  displayCart();
  dodano();
});

// });

//function se prvo compile, nije bitno gdje je poziv
function displayCart() {
  var cartArray = shoppingCart.listCart();
  var output = "";
  for (var i in cartArray) {
    // output += "<li>" + cartArray[i].name + " " + cartArray[i].count + "</li>";
    output += '<tr><td class="col-sm-8 col-md-6"><div class="media"><div class="media-body"><h5 class="media-heading">'+
              cartArray[i].name + '</h5></div></div></td><td class="col-sm-1 col-md-1" style="text-align: center"><input type="number" class="form-control-sm form-control kolicinaArtikl" data-name="'+cartArray[i].name+'"value="' +
              cartArray[i].count + '"></td><td class="col-sm-1 col-md-1 text-center"><strong>' +
              cartArray[i].price + '</strong></td><td class="col-sm-1 col-md-1 text-center"><strong>' +
              cartArray[i].total + '</strong></td><td class="col-sm-1 col-md-1"><button type="button" class="btn btn-danger delete-item"  data-name="' +
              cartArray[i].name + '"><span class="glyphicon glyphicon-remove"></span>Ukloni</button></td></tr>';
  }
  $("#show-cart").html(output);
  $("#totalCart").html(shoppingCart.totalCart());
};
// Prikaz itema



$("#show-cart").on("click", ".delete-item", function (event) {
  var name = $(this).data('name');
  shoppingCart.removeItemCartAll(name);
  displayCart();

});


//shoppingCart.loadCart();
displayCart(); //displayCart() je ovdje jer treba prikazivati sve stavke narudzbe


$(document).ready(function() {

  var mailLoginProvjera = sessionStorage.getItem('mailLogin');
  var passwordLoginProvjera = sessionStorage.getItem('passwordLogin');

  if(mailLoginProvjera != null && passwordLoginProvjera != null) {

    $.getJSON({
      url: "http://ec2-52-28-87-138.eu-central-1.compute.amazonaws.com/rest/public/api/users/login/"+mailLoginProvjera+"/"+passwordLoginProvjera+""
    }).then(function(idLogin) {
      console.log(idLogin);
      if(idLogin[0] != null){
        console.log("User logiran preko session storage");
        sessionStorage.setItem('id',idLogin[0].id);
      }else{
        console.log("User nije logiran preko session storage");
      }
    });


    document.getElementById('prijavaToggle').style.display = "none";
    document.getElementById('odjavaToggle').style.display = "block";

  }


    $('#narudzbaButton').click(function(e){

      if(sessionStorage.getItem('id')==null){
      document.getElementById('naruci').disabled=true;
      }
      else{
      document.getElementById('naruci').disabled=false;
      }
      
      })

      $('#odjavaToggle').click(function(e) {
        console.log("odjava");
        sessionStorage.removeItem('mailLogin');
        sessionStorage.removeItem('passwordLogin');
        shoppingCart.clearCart();
        document.getElementById('prijavaToggle').style.display = "block";
        document.getElementById('odjavaToggle').style.display = "none";
        location.reload();
        // you code here!!
      }) 

});

//=============variableSelection====================//
var search = document.getElementById("search");
var navLastDiv = document.getElementById("navLastDiv");
var logo = document.getElementById("logoId");
var section_box = document.querySelector(".section-box");
var imageDiv = document.querySelector(".imageDiv")
var tgl2 = document.querySelector(".tgl2");
var toggleBar = document.querySelector(".toggleBar");
var tglFwd = document.querySelector(".tglFwd");
var toggleBar2 = document.querySelector(".toggleBar2");
var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");
var fourth = document.getElementById("fourth");
var fifth = document.getElementById("fifth");
var sixth = document.getElementById("sixth");
var login = document.getElementById("login")
var cart0 = document.getElementById("cart0");
var help = document.getElementById("help");
var cartcnt = document.getElementById("cartcnt")
cartcnt.textContent = cartItemCount

//=============functionSelection====================//
function activation(){
    toggleBar.style.display = "block";
    toggleBar2.style.display = "block"
    tglFwd.style.display = "none";
}

function deactivation(){
    toggleBar.style.display = "none";
    tglFwd.style.display = "block";
    toggleBar2.style.display = "none"
    console.log("helo");
}

function goToWomenPage(){
    console.log("hello")
    window.location.href = "productDisplay.html"
  }
  function goToKidsPage(){
      console.log("helo")
  }
  function goToLilPage(){
      console.log("helo")
  }
  function goToManPage(){
      console.log("helo")
  }
  function goToAthleticzPage(){
      console.log("hleo")
  }
  function goToShoesBagsPage(){
      console.log("hlo")
  }
  //========== toggle functions ends here============ //
  function goToHomePage(){
    window.location.href = "index.html"
}

  function goToSearchPage(){
    window.location.href = "search.html"
}

function goToLoginPage(){
    window.location.href = "login.html"
}

function goToCartPage(){
    window.location.href = "cart.html"
    console.log("cart")
  }

  
  function goToHelpPage(){
    window.location.href = "help.html"
    console.log("hleo")
  }

//=============eventsSelection====================//

tgl2.addEventListener("click",deactivation);
// toggleBar.addEventListener("click",print);
tglFwd.addEventListener("click",activation);
first.addEventListener("click",goToWomenPage);
  second.addEventListener("click",goToManPage);
  third.addEventListener("click",goToKidsPage);
  fourth.addEventListener("click",goToLilPage);
  fifth.addEventListener("click",goToShoesBagsPage);
  sixth.addEventListener("click",goToAthleticzPage);
  login.addEventListener("click",goToLoginPage);
  logo.addEventListener("click",goToHomePage)
  search.addEventListener("click",goToSearchPage)
  help.addEventListener("click",goToHelpPage)
  cart0.addEventListener("click",goToCartPage)
  var cartBtn = document.getElementById("cartBtn");
  var cartBtn2 = document.getElementById("cartBtn2")
  var cartBtn3 = document.getElementById("cartBtn3")
  var cartStore = JSON.parse(localStorage.getItem("cartStore")) || [];
  var cartTotalPrice = JSON.parse(localStorage.getItem("cartTotalPrice")) || 0;
  var cartItemCount = JSON.parse(localStorage.getItem("cartItemCount")) || 0;

var selectedData = JSON.parse(localStorage.getItem("selectedProduct"))  
var price = document.getElementById("price");
var productName = document.getElementById("productName");
var desc = document.getElementById("desc");
var color = document.getElementById("color");
var basketItemName = document.getElementById("basketItemName");
var quantityPrice = document.getElementById("quantityPrice");
var basketImg = document.getElementById("basketImg");
var basketBar = document.getElementById("basketBar");

var productImage = document.getElementById("productImage");


price.textContent = selectedData.price;
productName.textContent = selectedData.name;
desc.textContent = selectedData.desc;
color.textContent = selectedData.color;
productImage.src = selectedData.image_url;

basketItemName.textContent = selectedData.name
quantityPrice.textContent = selectedData.price
basketImg.setAttribute("src",selectedData.image_url)


function addItemsToCart(){
  cartItemCount++
  cartStore.push(selectedData)
  cartTotalPrice += selectedData.price
  localStorage.setItem("cartItemCount",JSON.stringify(cartItemCount))
  localStorage.setItem("cartTotalPrice",JSON.stringify(cartTotalPrice))
 localStorage.setItem("cartStore",JSON.stringify(cartStore))
 cartBtn2.style.display = "block"
 basketBar.style.display = "block"
 setTimeout("hideDiv()",2000)
}

function hideDiv(){
  basketBar.style.display = "none"
}

function goToCartPage(){
  window.location.href = "cart.html"
}

function goToPaymentPage(){
  window.location.href = "payment.html"
}

cartBtn.addEventListener("click",addItemsToCart);
cartBtn3.addEventListener("click",goToCartPage);
cartBtn2.addEventListener("click",goToPaymentPage)


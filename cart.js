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
var cartcnt = document.getElementById("cartcnt");
var cartItemCount = JSON.parse(localStorage.getItem("cartItemCount"))
cartcnt.textContent = cartItemCount
var conti = document.getElementById("continue")


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

  function goToPaymentPage(){
      window.location.href = "payment.html"
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
  logo.addEventListener("click",goToHomePage);
  search.addEventListener("click",goToSearchPage);
  help.addEventListener("click",goToHelpPage);
  cart0.addEventListener("click",goToCartPage);
  conti.addEventListener("click",goToPaymentPage)
  var totalPrice = document.getElementById("totalPrice")

  var cartStore = JSON.parse(localStorage.getItem("cartStore"))

  var cartImage = document.querySelector(".cartImage")
  console.log(cartImage)

  var cartTotalPrice = JSON.parse(localStorage.getItem("cartTotalPrice"))
  


  displayCartProducts(cartStore);

  function displayCartProducts(cartStore){
      cartImage.textContent = ""
      cartStore.map(function(item,index){
        var cartInnerDivs = document.createElement("div");
        cartInnerDivs.setAttribute("id","cartInnerDiv");

        var eleName = document.createElement("h2");
        var elePrice = document.createElement("span");
        var eleColor = document.createElement("span");
        var eleImg = document.createElement("img");
        var clrSpan = document.createElement("div");
        var priceSpan = document.createElement("div");
        var delbtn = document.createElement("div")
        delbtn.setAttribute("id","delbtn")

        clrSpan.textContent = "Color :-"
        priceSpan.textContent = "₹ "
        delbtn.innerHTML = `<span class="material-icons-outlined">
        delete_outline
        </span>`
        totalPrice.textContent = cartTotalPrice

        eleName.setAttribute("id","eleName")
        elePrice.setAttribute("id","elePrice")
        eleColor.setAttribute("id","eleColor")

        eleImg.setAttribute("id","eleImg")



        eleName.textContent = item.name;
        elePrice.textContent = item.price;
        eleColor.textContent = item.color;
        eleImg.src = item.image_url;

        clrSpan.append(eleColor)
        priceSpan.append(elePrice)
        cartInnerDivs.append(eleImg,eleName,priceSpan,clrSpan,delbtn)


        delbtn.addEventListener("click",function(){
            deleteCartItem(item,index)
        })
        cartImage.append(cartInnerDivs)

      })
  }

function deleteCartItem(item,index){
cartStore.splice(index,1)
// console.log(item)
cartItemCount = cartItemCount - 1
console.log(cartItemCount)
localStorage.setItem("cartItemCount",JSON.stringify(cartItemCount))
cartTotalPrice = cartTotalPrice - item.price
console.log(cartTotalPrice)
localStorage.setItem("cartTotalPrice",JSON.stringify(cartTotalPrice))
console.log(index)
localStorage.setItem("cartStore",JSON.stringify
(cartStore))
displayCartProducts(cartStore)
window.location.href = "cart.html"
// localStorage.setItem
  }
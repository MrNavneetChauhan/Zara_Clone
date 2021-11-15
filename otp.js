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
var cartItemCount = JSON.parse(localStorage.getItem("cartItemCount"))
cartcnt.textContent = cartItemCount
var enterOtp = document.getElementById("enterOtp")
var helpContainer = document.querySelector(".helpContainer")
var ticketContainer = document.querySelector(".tickContainer")
var label = document.getElementById("label")

var checkicon = document.querySelector(".check-icon")
var gotohome = document.getElementById("goToHome")
var cnfrm = document.getElementById("cnfrm")
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

  function openOtp(){
helpContainer.style.display = "none"
ticketContainer.style.display = "block"
setTimeout("showTick()",2000)
  }

  function showTick(){
    checkicon.style.display = "block"
    label.style.animation = "none"
    label.style.borderColor = "black"
    label.style.transition = "border 0.5s ease-out"
    gotohome.style.display = "block"
    cnfrm.style.display = "block"
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
  enterOtp.addEventListener("click",openOtp)
  gotohome.addEventListener("click",goToHomePage)

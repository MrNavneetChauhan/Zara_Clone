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
var createbtn = document.getElementById("createbtn")
var cart0 = document.getElementById("cart0");
var help = document.getElementById("help");
var zaraUserInfo = JSON.parse(localStorage.getItem("zaraUserInfo"));
var loginBtn = document.getElementById("loginbtn");
var email = document.getElementById("email");
var password = document.getElementById("password");
var p = document.getElementById("notif")
var form  = document.querySelector("form");



//=============functionSelection====================//


function activation(){
    toggleBar.style.display = "block";
    toggleBar2.style.display = "block"
    tglFwd.style.display = "none";
    console.log("hlo")
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

function goToCreatePage(){
    window.location.href = "signup.html"
}

function goToHome(){
    window.location.href = "index.html"
}

function goToSearch(){
    window.location.href = "search.html"
}

function goToCartPage(){
    window.location.href = "cart.html"
    console.log("cart")
  }

  
  function goToHelpPage(){
    window.location.href = "help.html"
    console.log("hleo")
  }

  function goToUserPage(event){
      event.preventDefault();
      console.log("hi")
      for(var i = 0; i < zaraUserInfo.length; i++){
         if(zaraUserInfo[i].userEmail != email.value){
            p.textContent = "please check your mail"
         }else if(zaraUserInfo[i].userPassword != password.value){
             p.textContent = "please check your password"
         }else{
             p.textContent = "";
             window.location.href = "index.html"
         }
    }
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
  createbtn.addEventListener("click",goToCreatePage);
  logo.addEventListener("click",goToHome);
  search.addEventListener("click",goToSearch);
  help.addEventListener("click",goToHelpPage);
  cart0.addEventListener("click",goToCartPage);
  form.addEventListener("submit",goToUserPage);


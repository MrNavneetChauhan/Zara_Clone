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
var login = document.getElementById("login");
var cart0 = document.getElementById("cart0");
var help = document.getElementById("help");
var btn = document.getElementById("createBtn");

var pswd1 = document.getElementById("pswd1");
var pswd2 = document.getElementById("pswd2");
var names = document.getElementById("name");
var address = document.getElementById("address");
var email = document.getElementById("email");

var zaraUserInfo = JSON.parse(localStorage.getItem("zaraUserInfo")) || [];

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

function goToLoginPage(){
    window.location.href = "login.html"
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
  function goToHomePage(){
      window.location.href = "index.html"
  }
  //========== toggle functions ends here============ //

function goToSearchPage(){
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

  function storeInfo(){
      var zaraUserList = {
            userEmail:email.value,
            userPassword:pswd2.value,
            userName:names.value
      }

      if(names.value == ""){
          alert("Please fill the name")
      }
      else if(email.value == ""){
          alert("plese fill the email")
      }
      else if(pswd1.value == ""){
          alert("please enter the password")
      } 
      else if(pswd1.value =! pswd2.value){
          alert("your password is not matching")
      }
       else if(address.value == ""){
          alert("please fill the address area")
      }else{
        alert("You have signup successfully!")
         zaraUserInfo.push(zaraUserList)
         console.log(zaraUserInfo)
         localStorage.setItem("zaraUserInfo",JSON.stringify(zaraUserInfo));
         window.location.href = "login.html"
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
  login.addEventListener("click",goToLoginPage)
  logo.addEventListener("click",goToHomePage)
  search.addEventListener("click",goToSearchPage)
  help.addEventListener("click",goToHelpPage)
  cart0.addEventListener("click",goToCartPage)
  btn.addEventListener("click",storeInfo)

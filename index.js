
  // -----------------variable sections ----------------//
  var mov1 = document.querySelector(".mov1");
  var mov2 = document.querySelector(".mov2");
  var mov3 = document.querySelector(".mov3");
  var mov4 = document.querySelector(".mov4");
  var mov5 = document.querySelector(".mov5");
  var mov6 = document.querySelector(".mov6");
  var mov7 = document.querySelector(".mov7");
  var mov8 = document.querySelector(".mov8");
  var section_box = document.querySelector(".section-box");
  var body = document.querySelector("body");
  var svg = document.querySelector("svg");
  var nav = document.querySelector("nav");
  var logo = document.querySelector("#logoId");
  var hide0 = document.querySelector(".hide0");
  var hide1 = document.querySelector("#hide1");
  var hide2 = document.querySelector("#hide2");
  var hide3 = document.querySelector("#hide3");
  var hide4 = document.querySelector("#hide4");
  var login = document.querySelector("#login");
  var nav = document.querySelector("nav");
  var videoSide = document.querySelector("#videoSide");
  var toggleBar = document.querySelector(".toggleBar");
  var toggleBar2 = document.querySelector(".toggleBar2")
  var tglFwd = document.querySelector(".tglFwd");
  var tgl2 = document.querySelector(".tgl2");
  var first = document.getElementById("first")
  var second = document.getElementById("second")
  var third = document.getElementById("third")
  var fourth = document.getElementById("fourth")
  var fifth = document.getElementById("fifth")
  var sixth = document.getElementById("sixth")
  var search = document.getElementById("search")
  var help = document.getElementById("help");
  var cart0 = document.getElementById("cart0")
  var cartcnt = document.getElementById("cartcnt")
  var cartItemCount = JSON.parse(localStorage.getItem("cartItemCount"))
  cartcnt.textContent = cartItemCount
  var imageDiv = document.querySelector(".imageDiv")
  var gtmn = document.getElementById("gtmn")
  var gtwmn = document.getElementById("gtwmn")
  var gtkd = document.getElementById("gtkd")
  var gtlil = document.getElementById("gtlil")
  // var inside1 = document.querySelector(".inside1")

  //----------------- function section------------------ //

  function zeroSlide() {
    section_box.style.transform = "translateX(0)";
    section_box.style.transition = "1s";
    hide1.style.display = "flex";
    hide0.style.display = "none";
    hide0.style.transition = "1s";
  }

  function firstSlide() {
    section_box.style.transform = "translateX(0)";
    console.log("helo");
    section_box.style.transition = "1s";
    hide0.style.display = "flex";
    hide1.style.display = "none";
    hide1.style.transition = "1s";
  }

  function secondSlide() {
    section_box.style.transform = "translateX(-0)";
    section_box.style.transition = "1s";
    hide0.style.display = "none";
    hide1.style.display = "none";
    hide2.style.display = "flex";
  }

  function thirdSlide() {
    section_box.style.transform = "translateX(0)";
    section_box.style.transition = "1s";
    hide0.style.display = "none";
    hide1.style.display = "flex";
    hide2.style.display = "none";
  }

  function fourthSlide() {
    section_box.style.transform = "translateX(0)";
    section_box.style.transition = "1s";
    hide0.style.display = "none";
    hide1.style.display = "none";
    hide2.style.display = "none";
    hide3.style.display = "flex";
  }

  function fifthSlide() {
    section_box.style.transform = "translateX(0)";
    section_box.style.transition = "1s";
    hide0.style.display = "none";
    hide1.style.display = "none";
    hide2.style.display = "flex";
    hide3.style.display = "none";
  }

  function sixthSlide() {
    section_box.style.transform = "translateX(0)";
    section_box.style.transition = "1s";
    hide0.style.display = "none";
    hide1.style.display = "none";
    hide2.style.display = "none";
    hide3.style.display = "none";
    hide4.style.display = "flex";
  }

  function seventhSlide() {
    section_box.style.transform = "translateX(0)";
    section_box.style.transition = "1s";
    hide0.style.display = "none";
    hide1.style.display = "none";
    hide2.style.display = "none";
    hide3.style.display = "flex";
    hide4.style.display = "none";
  }

  function comeToHome() {
    section_box.style.transform = "translateX(0)";
    section_box.style.transition = "1s";
    hide0.style.display = "none";
    hide1.style.display = "flex";
    hide2.style.display = "none";
    hide3.style.display = "none";
    hide4.style.display = "none";
  }

  function goToFirstPage() {
    section_box.style.transform = "translateX(0)";
    section_box.style.transition = "1s";
    hide0.style.display = "none";
    hide1.style.display = "flex";
    hide2.style.display = "none";
    hide3.style.display = "none";
    hide4.style.display = "none";
  }

  function consoleo() {
    window.location.href = "login.html";
  }

  function activation() {
    toggleBar.style.display = "block";
    toggleBar2.style.display = "block"
    tglFwd.style.display = "none";
  }

  function deactivation1() {
    toggleBar.style.display = "none";
    tglFwd.style.display = "block";
    toggleBar2.style.display = "none"
    console.log("helo");
  }
//========== toggle functions============ //
  function goToWomenPage(){
    console.log("woman")
    window.location.href = "productDisplay.html"
  }
  function goToKidsPage(){
      console.log("kid")
  }
  function goToLilPage(){
      console.log("lil")
  }
  function goToManPage(){
      console.log("man")
  }
  function goToAthleticzPage(){
      console.log("athl")
  }
  function goToShoesBagsPage(){
      console.log("shoes")
  }
  //========== toggle functions ends here============ //

  function goToSearchPage(){
    window.location.href = "search.html"
  }

  function print(){
      console.log("helo")
  }

  function goToHelpPage(){
    window.location.href = "help.html"
  }

  function goToCartPage(){
    window.location.href = "cart.html"
  }

  function goToWomanProductPage(){
    window.location.href = "productDisplay.html"
  }

  function samePage(){
    alert("Sorry! Produts are sold & we are left with women stock, please try next time")
  }




  //----------------addEventListener section-------------------//
  mov1.addEventListener("click", zeroSlide);
  mov2.addEventListener("click", firstSlide);
  mov3.addEventListener("click", secondSlide);
  mov4.addEventListener("click", thirdSlide);
  mov5.addEventListener("click", fourthSlide);
  mov6.addEventListener("click", fifthSlide);
  mov7.addEventListener("click", sixthSlide);
  mov8.addEventListener("click", seventhSlide);
  logo.addEventListener("click", comeToHome);
  login.addEventListener("click", consoleo);
  videoSide.addEventListener("click", goToFirstPage);
  tglFwd.addEventListener("click", activation);
  tgl2.addEventListener("click", deactivation1);
  search.addEventListener("click",goToSearchPage);
  toggleBar.addEventListener("click",print)
  first.addEventListener("click",goToWomenPage);
  second.addEventListener("click",goToManPage);
  third.addEventListener("click",goToKidsPage);
  fourth.addEventListener("click",goToLilPage);
  fifth.addEventListener("click",goToShoesBagsPage);
  sixth.addEventListener("click",goToAthleticzPage);
  help.addEventListener("click",goToHelpPage);
  cart0.addEventListener("click",goToCartPage);
  gtmn.addEventListener("click",samePage);
  gtwmn.addEventListener("click",goToWomanProductPage);
  gtkd.addEventListener("click",samePage);
  gtlil.addEventListener("click",samePage);

  
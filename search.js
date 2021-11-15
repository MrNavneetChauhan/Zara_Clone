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
var dress = document.getElementById("dress");
var top = document.getElementById("top");
var jeans = document.getElementById("jeans");
var blazer = document.getElementById("blazer");
var d1 = document.getElementById("d1");
var t1 = document.getElementById("t1");
var j1 = document.getElementById("j1");
var b1 = document.getElementById("b1");
// var tops = document.getElementById("tops")
var deleteAll = document.getElementById("deleteAll")
var cart0 = document.getElementById("cart0");
var help = document.getElementById("help");
var b = document.getElementById("b")
var c = document.getElementById("c")
var d = document.getElementById("d")
var e = document.getElementById("e")

var b1 = document.getElementById("b1")
var c1 = document.getElementById("c1")
var d1 = document.getElementById("d1")
var e1 = document.getElementById("e1")

var del = document.getElementById("f")
var cartcnt = document.getElementById("cartcnt")
var cartItemCount = JSON.parse(localStorage.getItem("cartItemCount"))
cartcnt.textContent = cartItemCount
var fullSearch = document.getElementById("fullSearch")

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

function goToHome(){
    window.location.href = "index.html"
}

function goToLogin(){
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

  function showB(){
    b1.textContent = b.textContent
    b.style.color = "black"
    c.style.color = "rgba(0, 0, 0, 0.397)"
    d.style.color = "rgba(0, 0, 0, 0.397)"
    e.style.color = "rgba(0, 0, 0, 0.397)"
}


function showC(){
  c1.textContent = c.textContent
  b.style.color = "rgba(0, 0, 0, 0.397)"
  c.style.color = "black"
  d.style.color = "rgba(0, 0, 0, 0.397)"
  e.style.color = "rgba(0, 0, 0, 0.397)"
}

function showD(){
  d1.textContent = d.textContent
  b.style.color = "rgba(0, 0, 0, 0.397)"
  c.style.color = "rgba(0, 0, 0, 0.397)"
  d.style.color = "black"
  e.style.color = "rgba(0, 0, 0, 0.397)"
}

function showE(){
  e1.textContent =e.textContent
  b.style.color = "rgba(0, 0, 0, 0.397)"
  c.style.color = "rgba(0, 0, 0, 0.397)"
  d.style.color = "rgba(0, 0, 0, 0.397)"
  e.style.color = "black"
}

function deletingAll(){
  b1.textContent = ""
  c1.textContent = ""
  d1.textContent = ""
  e1.textContent = ""
}

function searchItems(){
  if(fullSearch.value == "dress"){
    showB()
  }else if(fullSearch.value == "top"){
    showC()
  }else if(fullSearch.value == "jeans"){
    showD()
  }else if(fullSearch.value == "blazer"){
    showE()
  }

}

//=============eventsSelection====================//

tgl2.addEventListener("click",deactivation);
tglFwd.addEventListener("click",activation);
first.addEventListener("click",goToWomenPage);
second.addEventListener("click",goToManPage);
third.addEventListener("click",goToKidsPage);
fourth.addEventListener("click",goToLilPage);
fifth.addEventListener("click",goToShoesBagsPage);
sixth.addEventListener("click",goToAthleticzPage);
logo.addEventListener("click",goToHome);
login.addEventListener("click",goToLogin);
help.addEventListener("click",goToHelpPage);
cart0.addEventListener("click",goToCartPage);
b.addEventListener("click",showB)
c.addEventListener("click",showC)
d.addEventListener("click",showD)
e.addEventListener("click",showE)
del.addEventListener("click",deletingAll)
fullSearch.addEventListener("keyup",searchItems)


//=============== data display section===================== //
var zaraProductData = JSON.parse(localStorage.getItem("zaraProductData"))

var blazers = [
	{
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/2369/676/800/3/w/288/2369676800_1_1_1.jpg?ts=1636046578942",
		name:"LONG BLAZER WITH INVERTED LAPEL COLLAR",
		desc:"BLAZER WITH AN INVERTED LAPEL COLLAR. LONG SLEEVES AND PRONOUNCED SHOULDERS. FRONT WELT POCKETS. METAL HOOK FASTENING AT THE FRONT.",
		price:5590.00,
		color:"black",
	},
	{
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/7822/457/600/2/w/288/7822457600_1_1_1.jpg?ts=1633518459326",
		name:"TEXTURED DOUBLE-BREASTED BLAZER",
		desc:"LONG SLEEVE BLAZER WITH A LAPEL COLLAR. FEATURING PRONOUNCED SHOULDERS, FRONT FLAP POCKETS AND DOUBLE-BREASTED METAL BUTTON FASTENING AT THE FRONT.",
		price:5590.00,
		color:"red",
	},
	{
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/8412/218/070/2/w/288/8412218070_1_1_1.jpg?ts=1634832300137",
		name:"TEXTURED BLAZER WITH CONTRAST PIPING",
		desc:"LONG SLEEVE TAILORED BLAZER WITH A LAPEL COLLAR. FEATURING PRONOUNCED SHOULDERS, CONTRAST PIPING DETAILS, AND DOUBLE-BREASTED BUTTON FASTENING AT THE FRONT.",
		price:6990.00,
		color:"gray",
	},
	{
		image_url:"https://static.zara.net/photos//mkt/misc/watermarks/joinlife-ss19-v2/joinlife-large.svg?ts=1587055628000",
		name:"OVERSIZE MASCULINE BLAZER",
		desc:"LONG SLEEVE OVERSIZE BLAZER WITH A LAPEL COLLAR AND SHOULDER PADS. FRONT WELT FLAP POCKETS. BUTTON FASTENING AT THE FRONT.",
		price:5590.00,
		color:"blue",
	},
	{
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/9431/620/330/4/w/288/9431620330_1_1_1.jpg?ts=1635510803767",
		name:"FITTED JACQUARD BLAZER",
		desc:"BLAZER WITH A LAPEL COLLAR, LONG SLEEVES AND DEFINED SHOULDERS. FEATURING FRONT POCKETS WITH FLAPS AND TEXTURED GOLDEN BUTTONS AT THE FRONT.",
		price:6990.00,
		color:"brown",
	},
	{
		image_url:"https://static.zara.net/photos//mkt/misc/watermarks/joinlife-ss19-v2/joinlife-large.svg?ts=1587055628000",
		name:"CROPPED BUTTONED BLAZER",
		desc:"SHORT BLAZER WITH LAPEL COLLAR AND LONG SLEEVES. FEATURING FALSE FRONT WELT POCKETS, RAISED METALLIC BUTTON DETAIL AND MATCHING LINING. DOUBLE-BREASTED BUTTON FASTENING AT THE FRONT.",
		price:7990.00,
		color:"black",
	},
	{
		image_url:"https://static.zara.net/photos//mkt/misc/watermarks/joinlife-ss19-v2/joinlife-large.svg?ts=1587055628000",
		name:"MASCULINE BLAZER",
		desc:"LONG SLEEVE BLAZER WITH A LAPEL COLLAR AND SHOULDER PADS. FRONT WELT FLAP POCKETS. BUTTON FASTENING AT THE FRONT.",
		price:5590.00,
		color:"red",
	},
	{
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/2239/295/251/2/w/288/2239295251_1_1_1.jpg?ts=1629185088626",
		name:"LONG DOUBLE-BREASTED BLAZER",
		desc:"BLAZER WITH A LAPEL COLLAR, LONG SLEEVES AND PRONOUNCED SHOULDERS. FRONT FLAP POCKETS. DOUBLE-BREASTED FRONT WITH METAL BUTTON FASTENING.",
		price:5490.00,
		color:"white",
	},
	{
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/7776/553/644/2/w/288/7776553644_1_1_1.jpg?ts=1626954228624",
		name:"BASIC BLAZER",
		desc:"BLAZER WITH A LAPEL COLLAR, LONG SLEEVES AND PRONOUNCED SHOULDERS. FRONT WELT POCKETS. FRONT BUTTON FASTENING.",
		price:2990.00,
		color:"pink",
	},
	{
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/8300/112/500/2/w/288/8300112500_1_1_1.jpg?ts=1632829951904",
		name:"TEXTURED FITTED BLAZER",
		desc:"BLAZER WITH A LAPEL COLLAR, LONG SLEEVES AND PRONOUNCED SHOULDERS. FEATURING FRONT WELT POCKETS AND DOUBLE-BREASTED FRONT WITH TEXTURED GOLDEN BUTTONS.",
		price:5590.00,
		color:"green",
	},
	{
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/2761/244/800/2/w/288/2761244800_1_1_1.jpg?ts=1630566509045",
		name:"DOUBLE-BREASTED BLAZER WITH SHOULDER PADS",
		desc:"BLAZER FEATURING A LAPEL COLLAR AND LONG SLEEVES WITH VERY PRONOUNCED SHOULDER PADS. FRONT WELT POCKETS. INTERIOR LINING. DOUBLE-BREASTED FRONT WITH METAL BUTTON FASTENING.",
		price:6990.00,
		color:"black",
	},
	{
		image_url:"https://static.zara.net/photos///2021/V/0/1/p/3187/273/250/2/w/288/3187273250_1_1_1.jpg?ts=1619601165162",
		name:"TEXTURED CROPPED BLAZER",
		desc:"CROPPED BLAZER WITH A LAPEL COLLAR AND SHORT SLEEVES. FRONT PATCH POCKETS. MATCHING LINING. FRONT FASTENING WITH METAL TEXTURED BUTTONS.",
		price:5490.00,
		color:"white",
	},
	{
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/8015/374/712/2/w/288/8015374712_1_1_1.jpg?ts=1622620797047",
		name:"BLAZER WITH PATCH POCKETS",
		desc:"BLAZER WITH A LAPEL COLLAR AND PRONOUNCED SHOULDERS. FEATURING FRONT PATCH POCKETS AND BUTTON FASTENING AT THE FRONT.",
		price:5590.00,
		color:"white",
	},
	{
		image_url:"https://static.zara.net/photos//mkt/misc/watermarks/joinlife-ss19-v2/joinlife-large.svg?ts=1587055628000",
		name:"STRAIGHT CUT BLAZER",
		desc:"LONG SLEEVE BLAZER WITH A LAPEL COLLAR, PRONOUNCED SHOULDERS, FRONT FLAP POCKETS AND A FRONT BUTTON FASTENING.",
		price:5590.00,
		color:"green",
	},
	{
		image_url:"https://static.zara.net/photos//mkt/misc/watermarks/joinlife-ss19-v2/joinlife-large.svg?ts=1587055628000",
		name:"FITTED DOUBLE-BREASTED BLAZER",
		desc:"BLAZER WITH A LAPEL COLLAR AND LONG SLEEVES. FEATURING PRONOUNCED SHOULDERS, FRONT WELT POCKETS, A BACK VENT AND DOUBLE-BREASTED FASTENING WITH METAL BUTTONS.",
		price:5590.00,
		color:"red",
	},
	{
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/8541/122/131/2/w/288/8541122131_1_1_1.jpg?ts=1630067359585",
		name:"TEXTURED DOUBLE-BREASTED BLAZER",
		desc:"LAPELLESS BLAZER WITH LONG SLEEVES AND PRONOUNCED SHOULDERS. FEATURING FRONT WELT POCKETS AND CROSSOVER FASTENING WITH RHINESTONE BUTTONS.",
		price:6990.00,
		color:"green",
	},

	{
		image_url:"https://static.zara.net/photos//mkt/misc/watermarks/joinlife-ss19-v2/joinlife-large.svg?ts=1587055628000",
		name:"DOUBLE-BREASTED BLAZER",
		desc:"BLAZER WITH A LAPEL COLLAR, CROSSOVER V-NECKLINE AND LONG SLEEVES. FEATURING FRONT FLAP POCKETS AND DOUBLE-BREASTED FRONT BUTTON FASTENING.",
		price:5590.00,
		color:"green",
	},
	{
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/8505/676/600/2/w/288/8505676600_1_1_1.jpg?ts=1632467643104",
		name:"LONG FITTED BLAZER",
		desc:"FITTED BLAZER FEATURING A ROUND COLLAR AND LONG SLEEVES WITH SHOULDER PADS. FRONT POCKETS. FRONT METAL BUTTON FASTENING.",
		price:5590.00,
		color:"red",
	},
	{
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/9929/126/405/2/w/288/9929126405_1_1_1.jpg?ts=1632736473253",
		name:"FLECKED TAILORED BLAZER",
		desc:"BLAZER WITH A V-NECKLINE, LONG SLEEVES AND PRONOUNCED SHOULDERS. FRONT POCKETS WITH FLAPS. BUTTON-UP FRONT.",
		price:2990.00,
		color:"gray",
	},
	{
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/7822/150/250/2/w/288/7822150250_1_1_1.jpg?ts=1620821844974",
		name:"TEXTURED FITTED BLAZER",
		desc:"BLAZER WITH A LAPEL COLLAR, LONG SLEEVES AND PRONOUNCED SHOULDERS. FRONT FLAP POCKETS. CHEST WELT POCKET. DOUBLE-BREASTED METAL BUTTON FASTENING AT THE FRONT.",
		price:5590.00,
		color:"white",
	},
	{
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/8510/730/676/2/w/288/8510730676_1_1_1.jpg?ts=1629711309674",
		name:"TAILORED DOUBLE-BREASTED BLAZER",
		desc:"BLAZER FEATURING A LAPEL COLLAR AND LONG SLEEVES WITH PRONOUNCED SHOULDERS. FRONT FLAP POCKETS. BACK VENT. DOUBLE-BREASTED FRONT WITH METAL BUTTON FASTENING.",
		price:5590.00,
		color:"pink",
	},
	{
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/2753/328/812/2/w/288/2753328812_1_1_1.jpg?ts=1631277971882",
		name:"DOUBLE-BREASTED BLAZER WITH BELT",
		desc:"BLAZER WITH A LAPEL COLLAR, LONG SLEEVES AND PRONOUNCED SHOULDERS. FEATURING FRONT FLAP POCKETS AND DOUBLE-BREASTED FASTENING WITH BUTTONS AND MATCHING BELT.",
		price:5590.00,
		color:"gray",
	},
	{
		image_url:"https://static.zara.net/photos//mkt/misc/watermarks/joinlife-ss19-v2/joinlife-large.svg?ts=1587055628000",
		name:"DINNER JACKET",
		desc:"BLAZER WITH A SATIN LAPEL COLLAR, LONG SLEEVES AND DEFINED SHOULDERS. FRONT FLAP POCKETS. FRONT FASTENING WITH COVERED BUTTON.",
		price:5590.00,
		color:"red",
	},
	{
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/2674/712/305/17/w/288/2674712305_1_1_1.jpg?ts=1630946318082",
		name:"TEXTURED JACKET",
		desc:"CROPPED CARDIGAN WITH A ROUND NECKLINE AND LONG SLEEVES WITH SHOULDER PADS. FALSE WELT POCKETS ON THE CHEST. INTERIOR LINING. METAL BUTTON FASTENING ON THE FRONT.",
		price:4590.00,
		color:"yellow",
	},
	{
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/8476/505/800/2/w/288/8476505800_1_1_1.jpg?ts=1631202960361",
		name:"JACKET WITH SHOULDER PADS - LIMITED EDITION",
		desc:"TAILORED JACKET WITH A LAPEL COLLAR AND LONG SLEEVES WITH SHOULDER PADS. FEATURING FRONT PATCH POCKETS WITH FLAPS AND SNAP-BUTTON FASTENING AT THE FRONT.",
		price:7990.00,
		color:"black",
	},
];

var jeans = [
  {
      image_url : "https://static.zara.net/photos///2021/I/0/1/p/6164/174/800/2/w/750/6164174800_1_1_1.jpg?ts=1629297376936",
      name : "Z1975 MOM JEANS",
      desc : "FADED HIGH-WAIST JEANS FEATURING A FIVE-POCKET DESIGN AND ZIP FLY AND METAL TOP BUTTON FASTENING.",
      price: 2790.00,
      color: "black",
  },
  {
      image_url : "https://static.zara.net/photos///2021/I/0/1/p/5862/180/407/3/w/750/5862180407_1_1_1.jpg?ts=1629298398070",
      name : "Z1975 MOM JEANS",
      desc : "FADED HIGH-WAIST JEANS FEATURING A FIVE-POCKET DESIGN AND ZIP FLY AND METAL TOP BUTTON FASTENING.",
      price : 2790.00,
      color : "blue",
  },
  {
      image_url : "https://static.zara.net/photos///2021/I/0/1/p/6164/174/427/2/w/750/6164174427_1_1_1.jpg?ts=1629297398103",
      name : "Z1975 MOM JEANS",
      desc : "FADED HIGH-WAIST JEANS FEATURING A FIVE-POCKET DESIGN AND ZIP FLY AND METAL TOP BUTTON FASTENING.",
      price : 2790.00,
      color : "white",
  },
  {
      image_url : "https://static.zara.net/photos///2021/I/0/1/p/6164/228/427/2/w/750/6164228427_2_1_1.jpg?ts=1633078881318",
      name : "Z1975 HIGH-RISE STRAIGHT JEANS",
      desc : "FADED HIGH-WAIST JEANS WITH A FIVE-POCKET DESIGN AND STRAIGHT-LEG DESIGN. SEAMLESS HEMS. FASTENS AT THE FRONT WITH METAL BUTTONS.",
      price : 2990.00,
      color : "blue",
  },
  {
      image_url : "https://static.zara.net/photos///2021/I/0/1/p/6164/199/800/2/w/750/6164199800_2_1_1.jpg?ts=1629896977723",
      name : "Z1975 HIGH-RISE STRAIGHT JEANS",
      desc : "FADED HIGH-WAIST JEANS FEATURING A FIVE-POCKET DESIGN AND ZIP FLY AND METAL TOP BUTTON FASTENING.",
      price : 2790.00,
      color : "black",
  },
  {
      image_url : "https://static.zara.net/photos///2021/I/0/1/p/6147/176/681/2/w/750/6147176681_2_1_1.jpg?ts=1635337396735",
      name : "Z1975 HIGH-RISE FULL-LENGTH JEANS",
      desc : "HIGH-WAIST STRAIGHT-LEG JEANS WITH A FIVE-POCKET DESIGN. FEATURING A ZIP FLY AND METAL TOP BUTTON FASTENING.",
      price : 2990.00,
      color : "black",
  },
  {
      image_url : "https://static.zara.net/photos///2021/I/0/1/p/6164/170/427/2/w/750/6164170427_2_2_1.jpg?ts=1634294301947",
      name : "Z1975 HIGH RISE SLIM FLARE JEANS",
      desc : "FADED HIGH-WAISTED JEANS WITH A FIVE-POCKET DESIGN. SEAMLESS HEMS WITH SIDE VENT. ZIP FLY AND METAL BUTTON FASTENING.",
      price : 2790.00,
      color : "black",
  },
  {
      image_url : "https://static.zara.net/photos///2021/I/0/1/p/6164/170/427/2/w/750/6164170427_1_1_1.jpg?ts=1634294292927",
      name : "Z1975 HIGH RISE SLIM FLARE JEANS",
      desc : "FADED HIGH-WAISTED JEANS WITH A FIVE-POCKET DESIGN. SEAMLESS HEMS WITH SIDE VENT. ZIP FLY AND METAL BUTTON FASTENING.",
      price : 2790.00,
      color : "blue",
  },

  {
      image_url: "https://static.zara.net/photos///2021/I/0/1/p/9374/261/430/2/w/750/9374261430_2_1_1.jpg?ts=1631706739525",
      name : "HIGH-RISE STRAIGHT JEANS",
      desc : "HIGH-RISE JEANS MADE OF RIGID FABRIC WITH FIVE POCKETS. FRONT FASTENING WITH METAL BUTTONS.",
      price : 2790.00,
      color : "blue",
  },
  {
      image_url : "https://static.zara.net/photos//mkt/misc/watermarks/joinlife-ss19-v2/joinlife-large.svg?ts=1587055628000",
      name : "HIGH-RISE STRAIGHT JEANS",
      desc : "HIGH-RISE JEANS MADE OF RIGID FABRIC WITH FIVE POCKETS. FRONT FASTENING WITH METAL BUTTONS.",
      price: 2790.00,
      color : "white",
  },
  {
      image_url : "https://static.zara.net/photos///2021/I/0/1/p/6164/170/406/4/w/750/6164170406_2_3_1.jpg?ts=1632745792401",
      name : "Z1975 HIGH RISE SLIM FLARE JEANS",
      desc : "FADED HIGH-WAISTED JEANS WITH A FIVE-POCKET DESIGN. SEAMLESS HEMS WITH SIDE VENT. ZIP FLY AND METAL BUTTON FASTENING.",
      price : 2790.00,
      color : "blue",
  },
  {
      image_url : "https://static.zara.net/photos///2021/I/0/1/p/4341/731/600/2/w/750/4341731600_2_2_1.jpg?ts=1635854834656",
      name : "STRAIGHT FIT JEANS",
      desc : "MID-RISE JEANS IN RIGID FABRIC WITH A FIVE-POCKET DESIGN. ZIP FLY AND METAL TOP BUTTON FASTENING AT THE FRONT.",
      price : 2990.00,
      color : "blue",
  },
  {
      image_url : "https://static.zara.net/photos///2021/I/0/1/p/6045/228/462/2/w/750/6045228462_2_4_1.jpg?ts=1626175225088",
      name : "WIDE-LEG JEANS",
      desc : "HIGH-WAIST RIGID JEANS WITH FIVE POCKETS. EXTRA LONG WIDE LEG. ZIP FLY AND METAL BUTTON FASTENING.",
      price : 2990.00,
      color : "blue",
  },
  {
      image_url : "https://static.zara.net/photos///2021/I/0/1/p/6688/224/401/2/w/750/6688224401_2_3_1.jpg?ts=1626175255852",
      name : "WIDE-LEG JEANS",
      desc : "HIGH-WAIST RIGID JEANS WITH FIVE POCKETS. EXTRA LONG WIDE LEG. ZIP FLY AND METAL BUTTON FASTENING.",
      price : 2990.00,
      color : "blue",
  },
  {
      image_url : "https://static.zara.net/photos///2021/I/0/1/p/2553/245/400/2/w/750/2553245400_6_1_1.jpg?ts=1623399158239",
      name : "ZW THE ‘90S FULL-LENGTH JEANS",
      desc : "FADED HIGH-WAIST JEANS WITH A FIVE-POCKET DESIGN. RIPPED DETAIL. SEAMLESS HEMS. ZIP FLY AND METAL TOP BUTTON",
      price : 2990.00,
      color : "blue",
  },
  {
      image_url : "https://static.zara.net/photos///2021/I/0/1/p/6840/064/401/2/w/750/6840064401_1_1_1.jpg?ts=1631095455398",
      name : "ZW THE TREVOR FULL-LENGTH JEANS",
      desc : "MID-RISE JEANS WITH FIVE POCKETS. STRAIGHT LEG. ZIP FLY AND METAL TOP BUTTON FASTENING.",
      price : 1790.00,
      color : "black",
  },
  {
      image_url : "https://static.zara.net/photos///2021/I/0/1/p/5862/194/407/2/w/750/5862194407_6_1_1.jpg?ts=1630573848706",
      name : "JEANS Z1975 HIGH RISE FLARE",
      desc : "FADED HIGH-WAIST JEANS WITH FIVE POCKETS. FEATURING FLARED HEMS AND ZIP FLY AND METAL TOP BUTTON FASTENING.",
      price : 2790.00,
      color : "blue",
  },
  {
      image_url : "https://static.zara.net/photos///2021/I/0/1/p/5862/194/800/2/w/750/5862194800_6_1_1.jpg?ts=1630573846493",
      name : "JEANS Z1975 HIGH RISE FLARE",
      desc : "FADED HIGH-WAIST JEANS WITH FIVE POCKETS. FEATURING FLARED HEMS AND ZIP FLY AND METAL TOP BUTTON FASTENING.",
      price : 2790.00,
      color : "black",
  },
  {
      image_url : "https://static.zara.net/photos///2021/I/0/1/p/5862/194/407/2/w/750/5862194407_6_2_1.jpg?ts=1630573869774",
      name : "JEANS Z1975 HIGH RISE FLARE",
      desc : "FADED HIGH-WAIST JEANS WITH FIVE POCKETS. FEATURING FLARED HEMS AND ZIP FLY AND METAL TOP BUTTON FASTENING.",
      price : 2790.00,
      color : "blue",
  },
  {
      image_url : "https://static.zara.net/photos///2021/I/0/1/p/6045/011/500/2/w/750/6045011500_2_3_1.jpg?ts=1626787734465",
      name : "WIDE-LEG JEANS",
      desc : "HIGH-WAIST RIGID JEANS WITH FIVE POCKETS. FEATURING AN EXTRA-LONG WIDE-LEG WITH SEAMLESS HEMS. ZIP FLY AND METAL BUTTON FASTENING.",
      price : 1790.00,
      color : "green",
  },
  {
      image_url : "https://static.zara.net/photos///2021/I/0/1/p/9863/254/800/2/w/750/9863254800_2_3_1.jpg?ts=1630504886643",
      name : "ZW THE 90´S MOM FIT JEANS",
      desc : "HIGH-WAIST JEANS WITH FIVE POCKETS. ZIP FLY AND METAL TOP BUTTON FASTENING.",
      price : 2790.00,
      color : "black",
  },
  {
      image_url : "https://static.zara.net/photos///2021/I/0/1/p/5520/223/462/2/w/750/5520223462_6_2_1.jpg?ts=1629456018888",
      name : "VINTAGE SKINNY JEANS",
      desc : "VINTAGE-STYLE HIGH-WAIST JEANS MADE OF STRETCHY FABRIC. FEATURING A FIVE-POCKET DESIGN, A ZIP FLY AND METAL TOP BUTTON FASTENING.",
      price : 2590.00,
      color : "black",
  },
  {
      image_url : "https://static.zara.net/photos///2021/I/0/1/p/7215/212/407/2/w/750/7215212407_1_1_1.jpg?ts=1634559814349",
      name : "REGULAR-LENGTH FLARED JEANS",
      desc : "MID-RISE JEANS WITH FIVE POCKETS MADE OF RIGID FABRIC. FLARED HEMS. ZIP FLY AND METAL BUTTON FASTENING.",
      price : 2990.00,
      color : "blue",
  },
  {
      image_url : "https://static.zara.net/photos//mkt/misc/watermarks/joinlife-ss19-v2/joinlife-large.svg?ts=1587055628000",
      name : "SLIM FIT HIGH-RISE JEANS WITH RIPPED DETAILS",
      desc : "FADED HIGH-WAIST JEANS IN SLIGHTLY STRETCHY FABRIC FOR ADDED COMFORT. FEATURING FIVE POCKETS AND RIPPED DETAIL. ZIP FLY AND METAL TOP BUTTON",
      price : 2790.00,
      color : "black",
  },
  {
      image_url : "https://static.zara.net/photos///2021/I/0/1/p/2553/250/400/2/w/750/2553250400_2_4_1.jpg?ts=1630585897081",
      name : "ZW THE MID WAIST STRAIGHT JEANS",
      desc : "FADED MID-WAIST JEANS FEATURING A FIVE-POCKET DESIGN AND ZIP FLY AND METAL TOP BUTTON FASTENING. STRAIGHT-LEG DESIGN.",
      price : 1790.00,
      color : "blue",
  },
];

var tops = [
  {
    image_url:
      "//static.zara.net/photos///2021/I/0/1/p/7901/530/933/2/w/281/7901530933_1_1_1.jpg?ts=1635865794516",
    name: "DRAPED ASYMMETRIC TOP",
    desc: "TOP WITH AN ASYMMETRIC NECKLINE AND LONG SLEEVES. PLEATED DETAIL ON THE SHOULDERS.",
    price: 1890.00,
    color: "green",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/0/1/p/8799/545/800/2/w/281/8799545800_1_1_1.jpg?ts=1629902428640",
    name: "FAUX LEATHER CROP TOP",
    desc: "CROP TOP WITH A SWEETHEART NECKLINE AND THIN STRAPS.",
    price: 2590.00,
    color: "black",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/0/1/p/9333/322/800/2/w/281/9333322800_1_1_1.jpg?ts=1636112375209",
    name: "DRAPED ASYMMETRIC TOP",
    desc: "TOP WITH AN ASYMMETRIC NECKLINE AND LONG SLEEVES. PLEATED DETAIL ON THE SHOULDERS.",
    price: 1990.00,
    color: "black",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/0/1/p/8741/279/064/2/w/281/8741279064_1_1_1.jpg?ts=1636108274032",
    name: "CONTRAST TEXTURED TOP",
    desc: "TOP WITH A ROUND NECKLINE AND CONTRAST LONG SLEEVES IN POPLIN. FRONT PATCH POCKETS. FRONT FASTENING WITH MATCHING COVERED BUTTONS.",
    price: 2990.00,
    color: "black",
  },
  {
    image_url:
      "https://static.zara.net/photos//mkt/misc/watermarks/joinlife-ss19-v2/joinlife-large.svg?ts=1587055628000",
    name: "FLORAL PRINT CROP TOP",
    desc: "CROP TOP WITH A STRAIGHT NECKLINE AND THIN ADJUSTABLE STRAPS. RUFFLED DETAILS AND DRAPED FABRIC. INVISIBLE SIDE ZIP FASTENING.",
    price: 2590.00,
    color: "red",
  },
  {
    image_url:
      "//static.zara.net/photos///2021/I/0/1/p/7901/530/933/2/w/281/7901530933_1_1_1.jpg?ts=1635865794516",
    name: "DRAPED ASYMMETRIC TOP",
    desc: "TOP WITH AN ASYMMETRIC NECKLINE AND LONG SLEEVES. PLEATED DETAIL ON THE SHOULDERS.",
    price: 1890.00,
    color: "green",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/0/1/p/8799/545/800/2/w/281/8799545800_1_1_1.jpg?ts=1629902428640",
    name: "FAUX LEATHER CROP TOP",
    desc: "CROP TOP WITH A SWEETHEART NECKLINE AND THIN STRAPS.",
    price: 2590.00,
    color: "black",
  },
  {
    image_url:
      "https://static.zara.net/photos//mkt/misc/watermarks/joinlife-ss19-v2/joinlife-large.svg?ts=1587055628000",
    name: "GEOMETRIC CROP TOP",
    desc: "TOP WITH AN ASYMMETRIC NECKLINE AND LONG SLEEVES. PLEATED DETAIL ON THE SHOULDERS.",
    price: 2990.00,
    color: "black",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/0/1/p/7385/426/050/17/w/281/7385426050_1_1_1.jpg?ts=1627569104227",
    name: "PRINTED CROP  TOP",
    desc: "TOP WITH A ROUND NECKLINE AND CONTRAST LONG SLEEVES IN POPLIN. FRONT PATCH POCKETS. FRONT FASTENING WITH MATCHING COVERED BUTTONS.",
    price: 1990.00,
    color: "red",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/0/1/p/8808/546/050/17/w/281/8808546050_1_1_1.jpg?ts=1629904180620",
    name: "FLORAL PRINT CROP TOP",
    desc: "CROP TOP WITH A STRAIGHT NECKLINE AND THIN ADJUSTABLE STRAPS. RUFFLED DETAILS AND DRAPED FABRIC. INVISIBLE SIDE ZIP FASTENING.",
    price: 2690.00,
    color: "pink",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/0/1/p/3067/415/800/2/w/750/3067415800_1_1_1.jpg?ts=1627993689538",
    name: "CROPPED CORSETRY-INSPIRED TOP",
    desc: "CROP TOP WITH A SWEETHEART NECKLINE, ADJUSTABLE THIN STRAPS AND INVISIBLE SIDE ZIP FASTENING.",
    price: 1990.00,
    color: "black",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/0/1/p/7385/429/800/2/w/750/7385429800_2_1_1.jpg?ts=1629730134627",
    name: "SATIN CROP TOP",
    desc: "TOP FEATURING A SQUARE-CUT NECKLINE, LONG SLEEVES WITH INVISIBLE ZIP FASTENING AND CRISS-CROSS TIES AT THE BACK.",
    price: 1990.00,
    color: "black",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/0/1/p/3067/428/800/3/w/1920/3067428800_1_1_1.jpg?ts=1632737904015",
    name: "CROPPED CORSETRY-INSPIRED TOP",
    desc: "STRAIGHT NECKLINE CROP TOP WITH STRAPS. METAL HOOK CLASPS AT THE BACK.",
    price: 1990.00,
    color: "black",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/0/1/p/9021/178/080/2/w/750/9021178080_1_1_1.jpg?ts=1633345716833",
    name: "CHAIN PRINT TOP",
    desc: "V-NECK TOP WITH LONG SLEEVES. FEATURING GATHERED DETAIL AT THE WAIST AND INVISIBLE SIDE ZIP FASTENING. ASYMMETRIC HEM.",
    price: 2790.00,
    color: "blue",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/0/1/p/3067/466/064/2/w/750/3067466064_1_1_1.jpg?ts=1632219082779",
    name: "HOUNDSTOOTH CROP TOP",
    desc: "CROP TOP WITH A ROUND NECKLINE AND FRAYED STRAPS. HOOK-AND-EYE FASTENING AT THE BACK.",
    price: 1990.00,
    color: "black",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/0/1/p/3067/430/712/2/w/750/3067430712_1_1_1.jpg?ts=1628759666796",
    name: "STRETCH LINEN CROP TOP",
    desc: "SLEEVELESS TOP MADE OF A LINEN BLEND. FEATURING AN ASYMMETRIC NECKLINE WITH STRAP. GATHERED DETAIL. FASTENING WITH INVISIBLE SIDE ZIP AND BACK BUTTONED OPENING",
    price: 1990.00,
    color: "ecru",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/0/1/p/6929/216/636/2/w/750/6929216636_1_1_1.jpg?ts=1622712675379",
    name: "MATERIALS, CARE AND ORIGIN",
    desc: "CROP TOP FEATURING A ROUND NECKLINE WITH VENT DETAIL, ADJUSTABLE THIN STRAPS AND INVISIBLE SIDE ZIP FASTENING.",
    price: 2490.00,
    color: "pink",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/0/1/p/4437/324/611/2/w/281/4437324611_1_1_1.jpg?ts=1635258857359",
    name: "DRAPED PRINTED TOP",
    desc: "PRINTED V-NECK TOP WITH LONG SLEEVES AND PLEATED DETAIL.",
    price: 2590.00,
    color: "purple",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/0/1/p/7385/414/712/2/w/281/7385414712_1_1_1.jpg?ts=1626866622006",
    name: "FLORAL PRINT SATINY TOP",
    desc: "V-NECK CROP TOP WITH ADJUSTABLE THIN STRAPS, ELASTIC RUCHED DETAIL AT THE BACK AND AN INVISIBLE IN-SEAM SIDE ZIP FASTENING.",
    price: 1990,
    color: "black",
  },
  {
    image_url:
      "https://static.zara.net/photos//mkt/misc/watermarks/joinlife-ss19-v2/joinlife-large.svg?ts=1587055628000",
    name: "SEAMLESS HIGH NECK TOP",
    desc: "LIMITLESS CONTOUR COLLECTION SLEEVELESS TOP WITH A HIGH NECK.",
    price: 890.00,
    color: "pink",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/0/1/p/2731/291/500/2/w/750/2731291500_1_1_1.jpg?ts=1627488558828",
    name: "CROCHET TOP",
    desc: "COLLARED TOP WITH A V-NECKLINE AND LONG SLEEVES. FRONT BUTTON FASTENING.",
    price: 2990.00,
    color: "green",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/0/1/p/3067/463/630/2/w/750/3067463630_1_1_1.jpg?ts=1631276341433",
    name: "CROPPED CORSETRY-INSPIRED TOP",
    desc: "CROP TOP WITH A SWEETHEART NECKLINE, ADJUSTABLE THIN STRAPS AND INVISIBLE SIDE ZIP FASTENING.",
    price: 1990.00,
    color: "pink",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/0/1/p/7837/604/611/2/w/750/7837604611_6_1_1.jpg?ts=1622454683968",
    name: "LINEN BLEND PRINTED CROP TOP",
    desc: "CROP TOP MADE OF A LINEN BLEND WITH A ROUND NECKLINE. TIED FASTENING IN THE SAME FABRIC ON THE BACK AND NECK.",
    price: 1990.00,
    color: "purple",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/0/1/p/8514/157/330/2/w/750/8514157330_1_1_1.jpg?ts=1626887263014",
    name: "FLORAL PRINT TOP",
    desc: "CROP TOP FEATURING A V-NECKLINE WITH KNOT DETAIL AND SLEEVES FALLING BELOW THE ELBOW. GATHERED HEM. INVISIBLE SIDE ZIP FASTENING.",
    price: 2790.00,
    color: "blue",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/0/1/p/8649/303/330/3/w/750/8649303330_1_1_1.jpg?ts=1630578502946",
    name: "FLORAL PRINT HALTERNECK TOP",
    desc: "HALTER NECK TOP. GATHERING AT THE HEM. OPENING AT THE BACK WITH TIE DETAIL.",
    price: 2790.00,
    color: "blue",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/0/1/p/1198/200/445/2/w/1920/1198200445_1_1_1.jpg?ts=1621419376945",
    name: "JACQUARD CROP TOP",
    desc: "SLEEVELESS CROP TOP WITH A ROUND NECKLINE.",
    price: 990.00,
    color: "blue",
  },
];

var dress=[
	{
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/9320/717/093/2/w/288/9320717093_1_1_1.jpg?ts=1635857322410",
		name:"HOUNDSTOOTH BLAZER DRESS",
		desc:"BLAZER DRESS WITH A V-NECK AND LAPELS. LONG SLEEVES WITH SHOULDER PADS. WRAP-STYLE FRONT WITH BEJEWELLED BUCKLE DETAIL AT THE WAIST. LINING. INVISIBLE SIDE ZIP FASTENING.",
		price:4590.00,
		color:"gray",
	},
	{
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/4437/313/800/2/w/288/4437313800_1_1_1.jpg?ts=1632320606871",
		name:"DRAPED DRESS WITH RUFFLES",
		desc:"V-NECK DRESS WITH LONG SLEEVES. DRAPED FABRIC DETAIL WITH RUFFLES. CONTRAST LINING. INVISIBLE SIDE ZIP FASTENING.",
		price:2990.00,
		color:"blue",
	},
  {
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/9302/394/800/2/w/288/9302394800_1_1_1.jpg?ts=1635941056166",
		name:"MATCHING CORSETRY-INSPIRED DRESS",
		desc:"SHORT DRESS WITH THIN STRAPS. MATCHING SEMI-SHEER DETAIL AT THE WAIST. INVISIBLE BACK ZIP FASTENING.",
		price:2990.00,
		color:"black",
	},
	{   
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/9371/636/420/2/w/288/9371636420_1_1_1.jpg?ts=1635857334171",
		name:"ASYMMETRIC MINI DRESS",
		desc:"SHORT DRESS FEATURING AN ASYMMETRIC NECKLINE AND LONG SLEEVES WITH SHOULDER PADS. METALLIC THREAD DETAIL. FRONT SLIT AT THE HEM. INVISIBLE SIDE ZIP FASTENING.",
		price:4590.00,
		color:"blue",
	},
	{   
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/0387/204/312/2/w/288/0387204312_1_1_1.jpg?ts=1635934440496",
		name:"ASYMMETRIC DRAPED DRESS WITH SHINY DETAILS",
		desc:"DRESS WITH AN ASYMMETRIC NECKLINE AND LONG SLEEVES. SIDE GATHERED DETAILS AT THE WAIST AND SIDE OPENING WITH ASYMMETRIC HEM.",
		price:4590.00,
		color:"brown",
	},
	{   
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/9359/510/630/2/w/288/9359510630_1_1_1.jpg?ts=1635857326604",
		name:"VELVET MIDI DRESS",
		desc:"DRESS WITH A SWEETHEART NECKLINE AND EXPOSED SHOULDERS. BACK VENT. INVISIBLE ZIP FASTENING.",
		price:2990.00,
		color:"pink",
	},
	{   
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/4786/334/800/3/w/288/4786334800_1_1_1.jpg?ts=1631211452696",
		name:"DRAPED DRESS",
		desc:"MIDI DRESS WITH A SURPLICE NECKLINE AND ADJUSTABLE THIN STRAPS. DRAPED FABRIC. SIDE SLIT AT THE HEM. INVISIBLE SIDE ZIP FASTENING.",
		price:2990.00,
		color:"black",
	},
	{   
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/9492/650/667/2/w/288/9492650667_1_1_1.jpg?ts=1634744258734",
		name:"SHORT SATIN DRESS",
		desc:"SHORT COLLARED DRESS WITH A SURPLICE V-NECKLINE. LONG CUFFED SLEEVES. GATHERED DETAIL.",
		price:2990.00,
		color:"pink",
	},
	{   
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/0387/206/800/2/w/288/0387206800_1_1_1.jpg?ts=1635934452091",
		name:"CORSETRY-INSPIRED DRESS",
		desc:"DRESS WITH A SWEETHEART NECKLINE. ADJUSTABLE GATHERED DETAILS AT THE SIDE WITH DRAWSTRING. ASYMMETRIC SPLIT HEM AT THE SIDE. INVISIBLE ZIP FASTENING.",
		price:4590.00,
		color:"black",
	},
	{   
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/8741/281/641/2/w/288/8741281641_1_1_1.jpg?ts=1633685993740",
		name:"PLEATED MIDI DRESS",
		desc:"DRESS WITH A SURPLICE V-NECKLINE AND LONG SLEEVES. ELASTIC WAISTBAND. LINING.",
		price:4590.00,
		color:"red",
	},
	{   
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/7757/878/800/4/w/288/7757878800_1_1_1.jpg?ts=1636111099554",
		name:"MINI DRESS WITH DRAPED DETAIL",
		desc:"SHORT DRESS WITH AN OPENING AND CONCEALED METAL APPLIQUÉ ON THE FRONT. THIN ADJUSTABLE STRAPS WITH A TIE IN THE SAME FABRIC. PLEATED DETAILS AND SMOCKING. INVISIBLE ZIP FASTENING.",
		price:4590.00,
		color:"black",
	},
	{   
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/7899/657/069/2/w/288/7899657069_1_1_1.jpg?ts=1620749807063",
		name:"PRINTED LINEN BLEND DRESS",
		desc:"DRESS IN A LINEN BLEND. V-NECKLINE AND THIN STRAPS. DRAPED FABRIC DETAIL ON THE FRONT. INVISIBLE SIDE ZIP FASTENING.",
		price:2990.00,
		color:"white",
	},
	{   
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/7385/309/251/2/w/288/7385309251_1_1_1.jpg?ts=1624433373442",
		name:"TEXTURED DRESS",
		desc:"STRAPPY DRESS WITH A ROUND NECK. FALSE FLAP POCKETS ON THE FRONT. MATCHING PRONOUNCED SEAM DETAIL.",
		price:2990.00,
		color:"white",
	},
	{   
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/2157/259/630/3/w/288/2157259630_1_1_1.jpg?ts=1636364990736",
		name:"SATIN DRESS WITH RHINESTONE STRAPS",
		desc:"MINI DRESS WITH A STRAIGHT NECKLINE AND THIN STRAPS WITH RHINESTONE APPLIQUÉS. GATHERED DETAILING ON THE SIDES AT THE WAIST. INVISIBLE BACK ZIP FASTENING.",
		price:2990.00,
		color:"pink",
	},
 	{   
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/3666/180/800/4/w/288/3666180800_1_1_1.jpg?ts=1634809661358",
		name:"MINI DRESS WITH CUT-OUT DETAIL",
		desc:"DRESS WITH A SURPLICE NECKLINE AND THIN STRAPS. FEATURING A FRONT VENT AT THE WAIST, GATHERING AND INVISIBLE BACK ZIP FASTENING.",
		price:2990.00,
		color:"black",
	},
	{   
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/3067/321/600/18/w/288/3067321600_1_1_1.jpg?ts=1628175341711",
		name:"SATIN-FINISH DRESS WITH DRAPED DETAIL",
		desc:"SHORT DRESS WITH A STRAIGHT NECKLINE AND EXPOSED SHOULDERS. DRAPED FABRIC. INVISIBLE BACK ZIP FASTENING.",
		price:2790.00,
		color:"red",
	},
	{   
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/8790/330/700/18/w/288/8790330700_1_1_1.jpg?ts=1631702272684",
		name:"SATIN MIDI DRESS",
		desc:"V-NECK MIDI DRESS FEATURING THIN STRAPS THAT CROSS AT THE BACK WITH ADJUSTABLE TIES.",
		price:2990.00,
		color:"brown",
	},
	{   
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/0387/185/600/2/w/288/0387185600_1_1_1.jpg?ts=1631102096700",
		name:"MINI DRESS WITH DRAPED DETAIL",
		desc:"DRESS WITH A FLOWING NECKLINE AND THIN STRAPS. GATHERED DETAIL AT THE FRONT. INVISIBLE BACK ZIP FASTENING.",
		price:2990.00,
		color:"red",
	},
	{   
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/0387/184/538/2/w/288/0387184538_1_1_1.jpg?ts=1631186644608",
		name:"SATIN MINI DRESS",
		desc:"DRESS WITH A FLOWING NECKLINE AND THIN STRAPS. GATHERED DETAIL AT THE FRONT. INVISIBLE BACK ZIP FASTENING.",
		price:2990.00,
		color:"green",
	},
	{   
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/1165/241/500/2/w/288/1165241500_1_1_1.jpg?ts=1632413840549",
		name:"RUFFLED PRINTED DRESS",
		desc:"SATIN DRESS FEATURING A V-NECKLINE AND SLEEVES FALLING BELOW THE ELBOW WITH ELASTIC TRIM. SMOCKED ELASTIC WAISTBAND. RUFFLED HEM.",
		price:2990.00,
		color:"green",
	},
	{   
		image_url:"https://static.zara.net/photos///2021/V/0/1/p/3253/330/500/2/w/288/3253330500_1_1_1.jpg?ts=1618236721858",
		name:"RIBBED DRESS",
		desc:"FITTED DRESS WITH A STRAIGHT NECKLINE AND THIN STRAPS.",
		price:990.00,
    color:"green",
	},
	{   
		image_url:"https://static.zara.net/photos///2021/V/0/1/p/3280/338/250/2/w/288/3280338250_1_1_1.jpg?ts=1618311930224",
		name:"SHORT SATIN DRESS",
		desc:"SHORT DRESS WITH A COWL NECKLINE AND THIN STRAPS THAT CROSS AT THE BACK.",
		price:2790.00,
		color:"white",
	},
	{   
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/7385/324/700/2/w/288/7385324700_1_1_1.jpg?ts=1631620479370",
		name:"DRAPED DRESS WITH TOPSTITCHING",
		desc:"SHORT DRESS WITH A STRAIGHT NECKLINE AND EXPOSED SHOULDERS. FEATURING A FRONT KNOT DETAIL, CONTRAST TOPSTITCHING AND INVISIBLE BACK ZIP FASTENING.",
		price:2990.00,
		color:"brown",
	},
	{   
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/0219/312/306/2/w/288/0219312306_1_1_1.jpg?ts=1622626154742",
		name:"SHORT SATIN DRESS",
		desc:"SHORT DRESS WITH A ROUND NECKLINE AND ADJUSTABLE THIN STRAPS.",
		price:2590.00,
		color:"yellow",
	},
	{   
		image_url:"https://static.zara.net/photos///2021/I/0/1/p/9006/157/305/2/w/288/9006157305_1_1_1.jpg?ts=1628597315497",
		name:"MIDI DRESS WITH GATHERED DETAIL",
		desc:"V-NECK MIDI DRESS WITH THIN ADJUSTABLE STRAPS. DRAWSTRING OPENING DETAIL ON THE CHEST. INVISIBLE BACK ZIP FASTENING.",
		price:2990.00,
		color:"yellow",
	},
];

var totalWomanProducts = [
  {
image_url:"https://static.zara.net/photos///2021/I/0/1/p/2369/676/800/3/w/288/2369676800_1_1_1.jpg?ts=1636046578942",
name:"LONG BLAZER WITH INVERTED LAPEL COLLAR",
desc:"BLAZER WITH AN INVERTED LAPEL COLLAR. LONG SLEEVES AND PRONOUNCED SHOULDERS. FRONT WELT POCKETS. METAL HOOK FASTENING AT THE FRONT.",
price:5590.00,
color:"black",
},
{
image_url:"https://static.zara.net/photos///2021/I/0/1/p/7822/457/600/2/w/288/7822457600_1_1_1.jpg?ts=1633518459326",
name:"TEXTURED DOUBLE-BREASTED BLAZER",
desc:"LONG SLEEVE BLAZER WITH A LAPEL COLLAR. FEATURING PRONOUNCED SHOULDERS, FRONT FLAP POCKETS AND DOUBLE-BREASTED METAL BUTTON FASTENING AT THE FRONT.",
price:5590.00,
color:"red",
},
{
image_url:"https://static.zara.net/photos///2021/I/0/1/p/8412/218/070/2/w/288/8412218070_1_1_1.jpg?ts=1634832300137",
name:"TEXTURED BLAZER WITH CONTRAST PIPING",
desc:"LONG SLEEVE TAILORED BLAZER WITH A LAPEL COLLAR. FEATURING PRONOUNCED SHOULDERS, CONTRAST PIPING DETAILS, AND DOUBLE-BREASTED BUTTON FASTENING AT THE FRONT.",
price:6990.00,
color:"gray",
},
{
image_url:"https://static.zara.net/photos//mkt/misc/watermarks/joinlife-ss19-v2/joinlife-large.svg?ts=1587055628000",
name:"OVERSIZE MASCULINE BLAZER",
desc:"LONG SLEEVE OVERSIZE BLAZER WITH A LAPEL COLLAR AND SHOULDER PADS. FRONT WELT FLAP POCKETS. BUTTON FASTENING AT THE FRONT.",
price:5590.00,
color:"blue",
},
{
image_url:"https://static.zara.net/photos///2021/I/0/1/p/9431/620/330/4/w/288/9431620330_1_1_1.jpg?ts=1635510803767",
name:"FITTED JACQUARD BLAZER",
desc:"BLAZER WITH A LAPEL COLLAR, LONG SLEEVES AND DEFINED SHOULDERS. FEATURING FRONT POCKETS WITH FLAPS AND TEXTURED GOLDEN BUTTONS AT THE FRONT.",
price:6990.00,
color:"brown",
},
{
image_url:"https://static.zara.net/photos//mkt/misc/watermarks/joinlife-ss19-v2/joinlife-large.svg?ts=1587055628000",
name:"CROPPED BUTTONED BLAZER",
desc:"SHORT BLAZER WITH LAPEL COLLAR AND LONG SLEEVES. FEATURING FALSE FRONT WELT POCKETS, RAISED METALLIC BUTTON DETAIL AND MATCHING LINING. DOUBLE-BREASTED BUTTON FASTENING AT THE FRONT.",
price:7990.00,
color:"black",
},
{
image_url:"https://static.zara.net/photos//mkt/misc/watermarks/joinlife-ss19-v2/joinlife-large.svg?ts=1587055628000",
name:"MASCULINE BLAZER",
desc:"LONG SLEEVE BLAZER WITH A LAPEL COLLAR AND SHOULDER PADS. FRONT WELT FLAP POCKETS. BUTTON FASTENING AT THE FRONT.",
price:5590.00,
color:"red",
},
{
image_url:"https://static.zara.net/photos///2021/I/0/1/p/2239/295/251/2/w/288/2239295251_1_1_1.jpg?ts=1629185088626",
name:"LONG DOUBLE-BREASTED BLAZER",
desc:"BLAZER WITH A LAPEL COLLAR, LONG SLEEVES AND PRONOUNCED SHOULDERS. FRONT FLAP POCKETS. DOUBLE-BREASTED FRONT WITH METAL BUTTON FASTENING.",
price:5490.00,
color:"white",
},
{
image_url:"https://static.zara.net/photos///2021/I/0/1/p/7776/553/644/2/w/288/7776553644_1_1_1.jpg?ts=1626954228624",
name:"BASIC BLAZER",
desc:"BLAZER WITH A LAPEL COLLAR, LONG SLEEVES AND PRONOUNCED SHOULDERS. FRONT WELT POCKETS. FRONT BUTTON FASTENING.",
price:2990.00,
color:"pink",
},
{
image_url:"https://static.zara.net/photos///2021/I/0/1/p/8300/112/500/2/w/288/8300112500_1_1_1.jpg?ts=1632829951904",
name:"TEXTURED FITTED BLAZER",
desc:"BLAZER WITH A LAPEL COLLAR, LONG SLEEVES AND PRONOUNCED SHOULDERS. FEATURING FRONT WELT POCKETS AND DOUBLE-BREASTED FRONT WITH TEXTURED GOLDEN BUTTONS.",
price:5590.00,
color:"green",
},
{
image_url:"https://static.zara.net/photos///2021/I/0/1/p/2761/244/800/2/w/288/2761244800_1_1_1.jpg?ts=1630566509045",
name:"DOUBLE-BREASTED BLAZER WITH SHOULDER PADS",
desc:"BLAZER FEATURING A LAPEL COLLAR AND LONG SLEEVES WITH VERY PRONOUNCED SHOULDER PADS. FRONT WELT POCKETS. INTERIOR LINING. DOUBLE-BREASTED FRONT WITH METAL BUTTON FASTENING.",
price:6990.00,
color:"black",
},
{
image_url:"https://static.zara.net/photos///2021/V/0/1/p/3187/273/250/2/w/288/3187273250_1_1_1.jpg?ts=1619601165162",
name:"TEXTURED CROPPED BLAZER",
desc:"CROPPED BLAZER WITH A LAPEL COLLAR AND SHORT SLEEVES. FRONT PATCH POCKETS. MATCHING LINING. FRONT FASTENING WITH METAL TEXTURED BUTTONS.",
price:5490.00,
color:"white",
},
{
image_url:"https://static.zara.net/photos///2021/I/0/1/p/8015/374/712/2/w/288/8015374712_1_1_1.jpg?ts=1622620797047",
name:"BLAZER WITH PATCH POCKETS",
desc:"BLAZER WITH A LAPEL COLLAR AND PRONOUNCED SHOULDERS. FEATURING FRONT PATCH POCKETS AND BUTTON FASTENING AT THE FRONT.",
price:5590.00,
color:"white",
},
{
image_url:"https://static.zara.net/photos//mkt/misc/watermarks/joinlife-ss19-v2/joinlife-large.svg?ts=1587055628000",
name:"STRAIGHT CUT BLAZER",
desc:"LONG SLEEVE BLAZER WITH A LAPEL COLLAR, PRONOUNCED SHOULDERS, FRONT FLAP POCKETS AND A FRONT BUTTON FASTENING.",
price:5590.00,
color:"green",
},
{
image_url:"https://static.zara.net/photos//mkt/misc/watermarks/joinlife-ss19-v2/joinlife-large.svg?ts=1587055628000",
name:"FITTED DOUBLE-BREASTED BLAZER",
desc:"BLAZER WITH A LAPEL COLLAR AND LONG SLEEVES. FEATURING PRONOUNCED SHOULDERS, FRONT WELT POCKETS, A BACK VENT AND DOUBLE-BREASTED FASTENING WITH METAL BUTTONS.",
price:5590.00,
color:"red",
},
{
image_url:"https://static.zara.net/photos///2021/I/0/1/p/8541/122/131/2/w/288/8541122131_1_1_1.jpg?ts=1630067359585",
name:"TEXTURED DOUBLE-BREASTED BLAZER",
desc:"LAPELLESS BLAZER WITH LONG SLEEVES AND PRONOUNCED SHOULDERS. FEATURING FRONT WELT POCKETS AND CROSSOVER FASTENING WITH RHINESTONE BUTTONS.",
price:6990.00,
color:"green",
},

{
image_url:"https://static.zara.net/photos//mkt/misc/watermarks/joinlife-ss19-v2/joinlife-large.svg?ts=1587055628000",
name:"DOUBLE-BREASTED BLAZER",
desc:"BLAZER WITH A LAPEL COLLAR, CROSSOVER V-NECKLINE AND LONG SLEEVES. FEATURING FRONT FLAP POCKETS AND DOUBLE-BREASTED FRONT BUTTON FASTENING.",
price:5590.00,
color:"green",
},
{
image_url:"https://static.zara.net/photos///2021/I/0/1/p/8505/676/600/2/w/288/8505676600_1_1_1.jpg?ts=1632467643104",
name:"LONG FITTED BLAZER",
desc:"FITTED BLAZER FEATURING A ROUND COLLAR AND LONG SLEEVES WITH SHOULDER PADS. FRONT POCKETS. FRONT METAL BUTTON FASTENING.",
price:5590.00,
color:"red",
},
{
image_url:"https://static.zara.net/photos///2021/I/0/1/p/9929/126/405/2/w/288/9929126405_1_1_1.jpg?ts=1632736473253",
name:"FLECKED TAILORED BLAZER",
desc:"BLAZER WITH A V-NECKLINE, LONG SLEEVES AND PRONOUNCED SHOULDERS. FRONT POCKETS WITH FLAPS. BUTTON-UP FRONT.",
price:2990.00,
color:"gray",
},
{
image_url:"https://static.zara.net/photos///2021/I/0/1/p/7822/150/250/2/w/288/7822150250_1_1_1.jpg?ts=1620821844974",
name:"TEXTURED FITTED BLAZER",
desc:"BLAZER WITH A LAPEL COLLAR, LONG SLEEVES AND PRONOUNCED SHOULDERS. FRONT FLAP POCKETS. CHEST WELT POCKET. DOUBLE-BREASTED METAL BUTTON FASTENING AT THE FRONT.",
price:5590.00,
color:"white",
},
{
image_url:"https://static.zara.net/photos///2021/I/0/1/p/8510/730/676/2/w/288/8510730676_1_1_1.jpg?ts=1629711309674",
name:"TAILORED DOUBLE-BREASTED BLAZER",
desc:"BLAZER FEATURING A LAPEL COLLAR AND LONG SLEEVES WITH PRONOUNCED SHOULDERS. FRONT FLAP POCKETS. BACK VENT. DOUBLE-BREASTED FRONT WITH METAL BUTTON FASTENING.",
price:5590.00,
color:"pink",
},
{
image_url:"https://static.zara.net/photos///2021/I/0/1/p/2753/328/812/2/w/288/2753328812_1_1_1.jpg?ts=1631277971882",
name:"DOUBLE-BREASTED BLAZER WITH BELT",
desc:"BLAZER WITH A LAPEL COLLAR, LONG SLEEVES AND PRONOUNCED SHOULDERS. FEATURING FRONT FLAP POCKETS AND DOUBLE-BREASTED FASTENING WITH BUTTONS AND MATCHING BELT.",
price:5590.00,
color:"gray",
},
{
image_url:"https://static.zara.net/photos//mkt/misc/watermarks/joinlife-ss19-v2/joinlife-large.svg?ts=1587055628000",
name:"DINNER JACKET",
desc:"BLAZER WITH A SATIN LAPEL COLLAR, LONG SLEEVES AND DEFINED SHOULDERS. FRONT FLAP POCKETS. FRONT FASTENING WITH COVERED BUTTON.",
price:5590.00,
color:"red",
},
{
image_url:"https://static.zara.net/photos///2021/I/0/1/p/2674/712/305/17/w/288/2674712305_1_1_1.jpg?ts=1630946318082",
name:"TEXTURED JACKET",
desc:"CROPPED CARDIGAN WITH A ROUND NECKLINE AND LONG SLEEVES WITH SHOULDER PADS. FALSE WELT POCKETS ON THE CHEST. INTERIOR LINING. METAL BUTTON FASTENING ON THE FRONT.",
price:4590.00,
color:"yellow",
},
{
image_url:"https://static.zara.net/photos///2021/I/0/1/p/8476/505/800/2/w/288/8476505800_1_1_1.jpg?ts=1631202960361",
name:"JACKET WITH SHOULDER PADS - LIMITED EDITION",
desc:"TAILORED JACKET WITH A LAPEL COLLAR AND LONG SLEEVES WITH SHOULDER PADS. FEATURING FRONT PATCH POCKETS WITH FLAPS AND SNAP-BUTTON FASTENING AT THE FRONT.",
price:7990.00,
color:"black",
},
{
image_url : "https://static.zara.net/photos///2021/I/0/1/p/6164/174/800/2/w/750/6164174800_1_1_1.jpg?ts=1629297376936",
name : "Z1975 MOM JEANS",
desc : "FADED HIGH-WAIST JEANS FEATURING A FIVE-POCKET DESIGN AND ZIP FLY AND METAL TOP BUTTON FASTENING.",
price: 2790.00,
color: "black",
},
{
image_url : "https://static.zara.net/photos///2021/I/0/1/p/5862/180/407/3/w/750/5862180407_1_1_1.jpg?ts=1629298398070",
name : "Z1975 MOM JEANS",
desc : "FADED HIGH-WAIST JEANS FEATURING A FIVE-POCKET DESIGN AND ZIP FLY AND METAL TOP BUTTON FASTENING.",
price : 2790.00,
color : "blue",
},
{
image_url : "https://static.zara.net/photos///2021/I/0/1/p/6164/174/427/2/w/750/6164174427_1_1_1.jpg?ts=1629297398103",
name : "Z1975 MOM JEANS",
desc : "FADED HIGH-WAIST JEANS FEATURING A FIVE-POCKET DESIGN AND ZIP FLY AND METAL TOP BUTTON FASTENING.",
price : 2790.00,
color : "white",
},
{
image_url : "https://static.zara.net/photos///2021/I/0/1/p/6164/228/427/2/w/750/6164228427_2_1_1.jpg?ts=1633078881318",
name : "Z1975 HIGH-RISE STRAIGHT JEANS",
desc : "FADED HIGH-WAIST JEANS WITH A FIVE-POCKET DESIGN AND STRAIGHT-LEG DESIGN. SEAMLESS HEMS. FASTENS AT THE FRONT WITH METAL BUTTONS.",
price : 2990.00,
color : "blue",
},
{
image_url : "https://static.zara.net/photos///2021/I/0/1/p/6164/199/800/2/w/750/6164199800_2_1_1.jpg?ts=1629896977723",
name : "Z1975 HIGH-RISE STRAIGHT JEANS",
desc : "FADED HIGH-WAIST JEANS FEATURING A FIVE-POCKET DESIGN AND ZIP FLY AND METAL TOP BUTTON FASTENING.",
price : 2790.00,
color : "black",
},
{
image_url : "https://static.zara.net/photos///2021/I/0/1/p/6147/176/681/2/w/750/6147176681_2_1_1.jpg?ts=1635337396735",
name : "Z1975 HIGH-RISE FULL-LENGTH JEANS",
desc : "HIGH-WAIST STRAIGHT-LEG JEANS WITH A FIVE-POCKET DESIGN. FEATURING A ZIP FLY AND METAL TOP BUTTON FASTENING.",
price : 2990.00,
color : "black",
},
{
image_url : "https://static.zara.net/photos///2021/I/0/1/p/6164/170/427/2/w/750/6164170427_2_2_1.jpg?ts=1634294301947",
name : "Z1975 HIGH RISE SLIM FLARE JEANS",
desc : "FADED HIGH-WAISTED JEANS WITH A FIVE-POCKET DESIGN. SEAMLESS HEMS WITH SIDE VENT. ZIP FLY AND METAL BUTTON FASTENING.",
price : 2790.00,
color : "black",
},
{
image_url : "https://static.zara.net/photos///2021/I/0/1/p/6164/170/427/2/w/750/6164170427_1_1_1.jpg?ts=1634294292927",
name : "Z1975 HIGH RISE SLIM FLARE JEANS",
desc : "FADED HIGH-WAISTED JEANS WITH A FIVE-POCKET DESIGN. SEAMLESS HEMS WITH SIDE VENT. ZIP FLY AND METAL BUTTON FASTENING.",
price : 2790.00,
color : "blue",
},

{
image_url: "https://static.zara.net/photos///2021/I/0/1/p/9374/261/430/2/w/750/9374261430_2_1_1.jpg?ts=1631706739525",
name : "HIGH-RISE STRAIGHT JEANS",
desc : "HIGH-RISE JEANS MADE OF RIGID FABRIC WITH FIVE POCKETS. FRONT FASTENING WITH METAL BUTTONS.",
price : 2790.00,
color : "blue",
},
{
image_url : "https://static.zara.net/photos//mkt/misc/watermarks/joinlife-ss19-v2/joinlife-large.svg?ts=1587055628000",
name : "HIGH-RISE STRAIGHT JEANS",
desc : "HIGH-RISE JEANS MADE OF RIGID FABRIC WITH FIVE POCKETS. FRONT FASTENING WITH METAL BUTTONS.",
price: 2790.00,
color : "white",
},
{
image_url : "https://static.zara.net/photos///2021/I/0/1/p/6164/170/406/4/w/750/6164170406_2_3_1.jpg?ts=1632745792401",
name : "Z1975 HIGH RISE SLIM FLARE JEANS",
desc : "FADED HIGH-WAISTED JEANS WITH A FIVE-POCKET DESIGN. SEAMLESS HEMS WITH SIDE VENT. ZIP FLY AND METAL BUTTON FASTENING.",
price : 2790.00,
color : "blue",
},
{
image_url : "https://static.zara.net/photos///2021/I/0/1/p/4341/731/600/2/w/750/4341731600_2_2_1.jpg?ts=1635854834656",
name : "STRAIGHT FIT JEANS",
desc : "MID-RISE JEANS IN RIGID FABRIC WITH A FIVE-POCKET DESIGN. ZIP FLY AND METAL TOP BUTTON FASTENING AT THE FRONT.",
price : 2990.00,
color : "blue",
},
{
image_url : "https://static.zara.net/photos///2021/I/0/1/p/6045/228/462/2/w/750/6045228462_2_4_1.jpg?ts=1626175225088",
name : "WIDE-LEG JEANS",
desc : "HIGH-WAIST RIGID JEANS WITH FIVE POCKETS. EXTRA LONG WIDE LEG. ZIP FLY AND METAL BUTTON FASTENING.",
price : 2990.00,
color : "blue",
},
{
image_url : "https://static.zara.net/photos///2021/I/0/1/p/6688/224/401/2/w/750/6688224401_2_3_1.jpg?ts=1626175255852",
name : "WIDE-LEG JEANS",
desc : "HIGH-WAIST RIGID JEANS WITH FIVE POCKETS. EXTRA LONG WIDE LEG. ZIP FLY AND METAL BUTTON FASTENING.",
price : 2990.00,
color : "blue",
},
{
image_url : "https://static.zara.net/photos///2021/I/0/1/p/2553/245/400/2/w/750/2553245400_6_1_1.jpg?ts=1623399158239",
name : "ZW THE ‘90S FULL-LENGTH JEANS",
desc : "FADED HIGH-WAIST JEANS WITH A FIVE-POCKET DESIGN. RIPPED DETAIL. SEAMLESS HEMS. ZIP FLY AND METAL TOP BUTTON",
price : 2990.00,
color : "blue",
},
{
image_url : "https://static.zara.net/photos///2021/I/0/1/p/6840/064/401/2/w/750/6840064401_1_1_1.jpg?ts=1631095455398",
name : "ZW THE TREVOR FULL-LENGTH JEANS",
desc : "MID-RISE JEANS WITH FIVE POCKETS. STRAIGHT LEG. ZIP FLY AND METAL TOP BUTTON FASTENING.",
price : 1790.00,
color : "black",
},
{
image_url : "https://static.zara.net/photos///2021/I/0/1/p/5862/194/407/2/w/750/5862194407_6_1_1.jpg?ts=1630573848706",
name : "JEANS Z1975 HIGH RISE FLARE",
desc : "FADED HIGH-WAIST JEANS WITH FIVE POCKETS. FEATURING FLARED HEMS AND ZIP FLY AND METAL TOP BUTTON FASTENING.",
price : 2790.00,
color : "blue",
},
{
image_url : "https://static.zara.net/photos///2021/I/0/1/p/5862/194/800/2/w/750/5862194800_6_1_1.jpg?ts=1630573846493",
name : "JEANS Z1975 HIGH RISE FLARE",
desc : "FADED HIGH-WAIST JEANS WITH FIVE POCKETS. FEATURING FLARED HEMS AND ZIP FLY AND METAL TOP BUTTON FASTENING.",
price : 2790.00,
color : "black",
},
{
image_url : "https://static.zara.net/photos///2021/I/0/1/p/5862/194/407/2/w/750/5862194407_6_2_1.jpg?ts=1630573869774",
name : "JEANS Z1975 HIGH RISE FLARE",
desc : "FADED HIGH-WAIST JEANS WITH FIVE POCKETS. FEATURING FLARED HEMS AND ZIP FLY AND METAL TOP BUTTON FASTENING.",
price : 2790.00,
color : "blue",
},
{
image_url : "https://static.zara.net/photos///2021/I/0/1/p/6045/011/500/2/w/750/6045011500_2_3_1.jpg?ts=1626787734465",
name : "WIDE-LEG JEANS",
desc : "HIGH-WAIST RIGID JEANS WITH FIVE POCKETS. FEATURING AN EXTRA-LONG WIDE-LEG WITH SEAMLESS HEMS. ZIP FLY AND METAL BUTTON FASTENING.",
price : 1790.00,
color : "green",
},
{
image_url : "https://static.zara.net/photos///2021/I/0/1/p/9863/254/800/2/w/750/9863254800_2_3_1.jpg?ts=1630504886643",
name : "ZW THE 90´S MOM FIT JEANS",
desc : "HIGH-WAIST JEANS WITH FIVE POCKETS. ZIP FLY AND METAL TOP BUTTON FASTENING.",
price : 2790.00,
color : "black",
},
{
image_url : "https://static.zara.net/photos///2021/I/0/1/p/5520/223/462/2/w/750/5520223462_6_2_1.jpg?ts=1629456018888",
name : "VINTAGE SKINNY JEANS",
desc : "VINTAGE-STYLE HIGH-WAIST JEANS MADE OF STRETCHY FABRIC. FEATURING A FIVE-POCKET DESIGN, A ZIP FLY AND METAL TOP BUTTON FASTENING.",
price : 2590.00,
color : "black",
},
{
image_url : "https://static.zara.net/photos///2021/I/0/1/p/7215/212/407/2/w/750/7215212407_1_1_1.jpg?ts=1634559814349",
name : "REGULAR-LENGTH FLARED JEANS",
desc : "MID-RISE JEANS WITH FIVE POCKETS MADE OF RIGID FABRIC. FLARED HEMS. ZIP FLY AND METAL BUTTON FASTENING.",
price : 2990.00,
color : "blue",
},
{
image_url : "https://static.zara.net/photos//mkt/misc/watermarks/joinlife-ss19-v2/joinlife-large.svg?ts=1587055628000",
name : "SLIM FIT HIGH-RISE JEANS WITH RIPPED DETAILS",
desc : "FADED HIGH-WAIST JEANS IN SLIGHTLY STRETCHY FABRIC FOR ADDED COMFORT. FEATURING FIVE POCKETS AND RIPPED DETAIL. ZIP FLY AND METAL TOP BUTTON",
price : 2790.00,
color : "black",
},
{
image_url : "https://static.zara.net/photos///2021/I/0/1/p/2553/250/400/2/w/750/2553250400_2_4_1.jpg?ts=1630585897081",
name : "ZW THE MID WAIST STRAIGHT JEANS",
desc : "FADED MID-WAIST JEANS FEATURING A FIVE-POCKET DESIGN AND ZIP FLY AND METAL TOP BUTTON FASTENING. STRAIGHT-LEG DESIGN.",
price : 1790.00,
color : "blue",
},
{
image_url:
"//static.zara.net/photos///2021/I/0/1/p/7901/530/933/2/w/281/7901530933_1_1_1.jpg?ts=1635865794516",
name: "DRAPED ASYMMETRIC TOP",
desc: "TOP WITH AN ASYMMETRIC NECKLINE AND LONG SLEEVES. PLEATED DETAIL ON THE SHOULDERS.",
price: 1890.00,
color: "green",
},
{
image_url:
"https://static.zara.net/photos///2021/I/0/1/p/8799/545/800/2/w/281/8799545800_1_1_1.jpg?ts=1629902428640",
name: "FAUX LEATHER CROP TOP",
desc: "CROP TOP WITH A SWEETHEART NECKLINE AND THIN STRAPS.",
price: 2590.00,
color: "black",
},
{
image_url:
"https://static.zara.net/photos///2021/I/0/1/p/9333/322/800/2/w/281/9333322800_1_1_1.jpg?ts=1636112375209",
name: "DRAPED ASYMMETRIC TOP",
desc: "TOP WITH AN ASYMMETRIC NECKLINE AND LONG SLEEVES. PLEATED DETAIL ON THE SHOULDERS.",
price: 1990.00,
color: "black",
},
{
image_url:
"https://static.zara.net/photos///2021/I/0/1/p/8741/279/064/2/w/281/8741279064_1_1_1.jpg?ts=1636108274032",
name: "CONTRAST TEXTURED TOP",
desc: "TOP WITH A ROUND NECKLINE AND CONTRAST LONG SLEEVES IN POPLIN. FRONT PATCH POCKETS. FRONT FASTENING WITH MATCHING COVERED BUTTONS.",
price: 2990.00,
color: "black",
},
{
image_url:
"https://static.zara.net/photos//mkt/misc/watermarks/joinlife-ss19-v2/joinlife-large.svg?ts=1587055628000",
name: "FLORAL PRINT CROP TOP",
desc: "CROP TOP WITH A STRAIGHT NECKLINE AND THIN ADJUSTABLE STRAPS. RUFFLED DETAILS AND DRAPED FABRIC. INVISIBLE SIDE ZIP FASTENING.",
price: 2590.00,
color: "red",
},
{
image_url:
"//static.zara.net/photos///2021/I/0/1/p/7901/530/933/2/w/281/7901530933_1_1_1.jpg?ts=1635865794516",
name: "DRAPED ASYMMETRIC TOP",
desc: "TOP WITH AN ASYMMETRIC NECKLINE AND LONG SLEEVES. PLEATED DETAIL ON THE SHOULDERS.",
price: 1890.00,
color: "green",
},
{
image_url:
"https://static.zara.net/photos///2021/I/0/1/p/8799/545/800/2/w/281/8799545800_1_1_1.jpg?ts=1629902428640",
name: "FAUX LEATHER CROP TOP",
desc: "CROP TOP WITH A SWEETHEART NECKLINE AND THIN STRAPS.",
price: 2590.00,
color: "black",
},
{
image_url:
"https://static.zara.net/photos//mkt/misc/watermarks/joinlife-ss19-v2/joinlife-large.svg?ts=1587055628000",
name: "GEOMETRIC CROP TOP",
desc: "TOP WITH AN ASYMMETRIC NECKLINE AND LONG SLEEVES. PLEATED DETAIL ON THE SHOULDERS.",
price: 2990.00,
color: "black",
},
{
image_url:
"https://static.zara.net/photos///2021/I/0/1/p/7385/426/050/17/w/281/7385426050_1_1_1.jpg?ts=1627569104227",
name: "PRINTED CROP  TOP",
desc: "TOP WITH A ROUND NECKLINE AND CONTRAST LONG SLEEVES IN POPLIN. FRONT PATCH POCKETS. FRONT FASTENING WITH MATCHING COVERED BUTTONS.",
price: 1990.00,
color: "red",
},
{
image_url:
"https://static.zara.net/photos///2021/I/0/1/p/8808/546/050/17/w/281/8808546050_1_1_1.jpg?ts=1629904180620",
name: "FLORAL PRINT CROP TOP",
desc: "CROP TOP WITH A STRAIGHT NECKLINE AND THIN ADJUSTABLE STRAPS. RUFFLED DETAILS AND DRAPED FABRIC. INVISIBLE SIDE ZIP FASTENING.",
price: 2690.00,
color: "pink",
},
{
image_url:
"https://static.zara.net/photos///2021/I/0/1/p/3067/415/800/2/w/750/3067415800_1_1_1.jpg?ts=1627993689538",
name: "CROPPED CORSETRY-INSPIRED TOP",
desc: "CROP TOP WITH A SWEETHEART NECKLINE, ADJUSTABLE THIN STRAPS AND INVISIBLE SIDE ZIP FASTENING.",
price: 1990.00,
color: "black",
},
{
image_url:
"https://static.zara.net/photos///2021/I/0/1/p/7385/429/800/2/w/750/7385429800_2_1_1.jpg?ts=1629730134627",
name: "SATIN CROP TOP",
desc: "TOP FEATURING A SQUARE-CUT NECKLINE, LONG SLEEVES WITH INVISIBLE ZIP FASTENING AND CRISS-CROSS TIES AT THE BACK.",
price: 1990.00,
color: "black",
},
{
image_url:
"https://static.zara.net/photos///2021/I/0/1/p/3067/428/800/3/w/1920/3067428800_1_1_1.jpg?ts=1632737904015",
name: "CROPPED CORSETRY-INSPIRED TOP",
desc: "STRAIGHT NECKLINE CROP TOP WITH STRAPS. METAL HOOK CLASPS AT THE BACK.",
price: 1990.00,
color: "black",
},
{
image_url:
"https://static.zara.net/photos///2021/I/0/1/p/9021/178/080/2/w/750/9021178080_1_1_1.jpg?ts=1633345716833",
name: "CHAIN PRINT TOP",
desc: "V-NECK TOP WITH LONG SLEEVES. FEATURING GATHERED DETAIL AT THE WAIST AND INVISIBLE SIDE ZIP FASTENING. ASYMMETRIC HEM.",
price: 2790.00,
color: "blue",
},
{
image_url:
"https://static.zara.net/photos///2021/I/0/1/p/3067/466/064/2/w/750/3067466064_1_1_1.jpg?ts=1632219082779",
name: "HOUNDSTOOTH CROP TOP",
desc: "CROP TOP WITH A ROUND NECKLINE AND FRAYED STRAPS. HOOK-AND-EYE FASTENING AT THE BACK.",
price: 1990.00,
color: "black",
},
{
image_url:
"https://static.zara.net/photos///2021/I/0/1/p/3067/430/712/2/w/750/3067430712_1_1_1.jpg?ts=1628759666796",
name: "STRETCH LINEN CROP TOP",
desc: "SLEEVELESS TOP MADE OF A LINEN BLEND. FEATURING AN ASYMMETRIC NECKLINE WITH STRAP. GATHERED DETAIL. FASTENING WITH INVISIBLE SIDE ZIP AND BACK BUTTONED OPENING",
price: 1990.00,
color: "ecru",
},
{
image_url:
"https://static.zara.net/photos///2021/I/0/1/p/6929/216/636/2/w/750/6929216636_1_1_1.jpg?ts=1622712675379",
name: "MATERIALS, CARE AND ORIGIN",
desc: "CROP TOP FEATURING A ROUND NECKLINE WITH VENT DETAIL, ADJUSTABLE THIN STRAPS AND INVISIBLE SIDE ZIP FASTENING.",
price: 2490.00,
color: "pink",
},
{
image_url:
"https://static.zara.net/photos///2021/I/0/1/p/4437/324/611/2/w/281/4437324611_1_1_1.jpg?ts=1635258857359",
name: "DRAPED PRINTED TOP",
desc: "PRINTED V-NECK TOP WITH LONG SLEEVES AND PLEATED DETAIL.",
price: 2590.00,
color: "purple",
},
{
image_url:
"https://static.zara.net/photos///2021/I/0/1/p/7385/414/712/2/w/281/7385414712_1_1_1.jpg?ts=1626866622006",
name: "FLORAL PRINT SATINY TOP",
desc: "V-NECK CROP TOP WITH ADJUSTABLE THIN STRAPS, ELASTIC RUCHED DETAIL AT THE BACK AND AN INVISIBLE IN-SEAM SIDE ZIP FASTENING.",
price: 1990,
color: "black",
},
{
image_url:
"https://static.zara.net/photos//mkt/misc/watermarks/joinlife-ss19-v2/joinlife-large.svg?ts=1587055628000",
name: "SEAMLESS HIGH NECK TOP",
desc: "LIMITLESS CONTOUR COLLECTION SLEEVELESS TOP WITH A HIGH NECK.",
price: 890.00,
color: "pink",
},
{
image_url:
"https://static.zara.net/photos///2021/I/0/1/p/2731/291/500/2/w/750/2731291500_1_1_1.jpg?ts=1627488558828",
name: "CROCHET TOP",
desc: "COLLARED TOP WITH A V-NECKLINE AND LONG SLEEVES. FRONT BUTTON FASTENING.",
price: 2990.00,
color: "green",
},
{
image_url:
"https://static.zara.net/photos///2021/I/0/1/p/3067/463/630/2/w/750/3067463630_1_1_1.jpg?ts=1631276341433",
name: "CROPPED CORSETRY-INSPIRED TOP",
desc: "CROP TOP WITH A SWEETHEART NECKLINE, ADJUSTABLE THIN STRAPS AND INVISIBLE SIDE ZIP FASTENING.",
price: 1990.00,
color: "pink",
},
{
image_url:
"https://static.zara.net/photos///2021/I/0/1/p/7837/604/611/2/w/750/7837604611_6_1_1.jpg?ts=1622454683968",
name: "LINEN BLEND PRINTED CROP TOP",
desc: "CROP TOP MADE OF A LINEN BLEND WITH A ROUND NECKLINE. TIED FASTENING IN THE SAME FABRIC ON THE BACK AND NECK.",
price: 1990.00,
color: "purple",
},
{
image_url:
"https://static.zara.net/photos///2021/I/0/1/p/8514/157/330/2/w/750/8514157330_1_1_1.jpg?ts=1626887263014",
name: "FLORAL PRINT TOP",
desc: "CROP TOP FEATURING A V-NECKLINE WITH KNOT DETAIL AND SLEEVES FALLING BELOW THE ELBOW. GATHERED HEM. INVISIBLE SIDE ZIP FASTENING.",
price: 2790.00,
color: "blue",
},
{
image_url:
"https://static.zara.net/photos///2021/I/0/1/p/8649/303/330/3/w/750/8649303330_1_1_1.jpg?ts=1630578502946",
name: "FLORAL PRINT HALTERNECK TOP",
desc: "HALTER NECK TOP. GATHERING AT THE HEM. OPENING AT THE BACK WITH TIE DETAIL.",
price: 2790.00,
color: "blue",
},
{
image_url:
"https://static.zara.net/photos///2021/I/0/1/p/1198/200/445/2/w/1920/1198200445_1_1_1.jpg?ts=1621419376945",
name: "JACQUARD CROP TOP",
desc: "SLEEVELESS CROP TOP WITH A ROUND NECKLINE.",
price: 990.00,
color: "blue",
},
{
image_url:"https://static.zara.net/photos///2021/I/0/1/p/9320/717/093/2/w/288/9320717093_1_1_1.jpg?ts=1635857322410",
name:"HOUNDSTOOTH BLAZER DRESS",
desc:"BLAZER DRESS WITH A V-NECK AND LAPELS. LONG SLEEVES WITH SHOULDER PADS. WRAP-STYLE FRONT WITH BEJEWELLED BUCKLE DETAIL AT THE WAIST. LINING. INVISIBLE SIDE ZIP FASTENING.",
price:4590.00,
color:"gray",
},
{
image_url:"https://static.zara.net/photos///2021/I/0/1/p/4437/313/800/2/w/288/4437313800_1_1_1.jpg?ts=1632320606871",
name:"DRAPED DRESS WITH RUFFLES",
desc:"V-NECK DRESS WITH LONG SLEEVES. DRAPED FABRIC DETAIL WITH RUFFLES. CONTRAST LINING. INVISIBLE SIDE ZIP FASTENING.",
price:2990.00,
color:"blue",
},
{
image_url:"https://static.zara.net/photos///2021/I/0/1/p/9302/394/800/2/w/288/9302394800_1_1_1.jpg?ts=1635941056166",
name:"MATCHING CORSETRY-INSPIRED DRESS",
desc:"SHORT DRESS WITH THIN STRAPS. MATCHING SEMI-SHEER DETAIL AT THE WAIST. INVISIBLE BACK ZIP FASTENING.",
price:2990.00,
color:"black",
},
{   
image_url:"https://static.zara.net/photos///2021/I/0/1/p/9371/636/420/2/w/288/9371636420_1_1_1.jpg?ts=1635857334171",
name:"ASYMMETRIC MINI DRESS",
desc:"SHORT DRESS FEATURING AN ASYMMETRIC NECKLINE AND LONG SLEEVES WITH SHOULDER PADS. METALLIC THREAD DETAIL. FRONT SLIT AT THE HEM. INVISIBLE SIDE ZIP FASTENING.",
price:4590.00,
color:"blue",
},
{   
image_url:"https://static.zara.net/photos///2021/I/0/1/p/0387/204/312/2/w/288/0387204312_1_1_1.jpg?ts=1635934440496",
name:"ASYMMETRIC DRAPED DRESS WITH SHINY DETAILS",
desc:"DRESS WITH AN ASYMMETRIC NECKLINE AND LONG SLEEVES. SIDE GATHERED DETAILS AT THE WAIST AND SIDE OPENING WITH ASYMMETRIC HEM.",
price:4590.00,
color:"brown",
},
{   
image_url:"https://static.zara.net/photos///2021/I/0/1/p/9359/510/630/2/w/288/9359510630_1_1_1.jpg?ts=1635857326604",
name:"VELVET MIDI DRESS",
desc:"DRESS WITH A SWEETHEART NECKLINE AND EXPOSED SHOULDERS. BACK VENT. INVISIBLE ZIP FASTENING.",
price:2990.00,
color:"pink",
},
{   
image_url:"https://static.zara.net/photos///2021/I/0/1/p/4786/334/800/3/w/288/4786334800_1_1_1.jpg?ts=1631211452696",
name:"DRAPED DRESS",
desc:"MIDI DRESS WITH A SURPLICE NECKLINE AND ADJUSTABLE THIN STRAPS. DRAPED FABRIC. SIDE SLIT AT THE HEM. INVISIBLE SIDE ZIP FASTENING.",
price:2990.00,
color:"black",
},
{   
image_url:"https://static.zara.net/photos///2021/I/0/1/p/9492/650/667/2/w/288/9492650667_1_1_1.jpg?ts=1634744258734",
name:"SHORT SATIN DRESS",
desc:"SHORT COLLARED DRESS WITH A SURPLICE V-NECKLINE. LONG CUFFED SLEEVES. GATHERED DETAIL.",
price:2990.00,
color:"pink",
},
{   
image_url:"https://static.zara.net/photos///2021/I/0/1/p/0387/206/800/2/w/288/0387206800_1_1_1.jpg?ts=1635934452091",
name:"CORSETRY-INSPIRED DRESS",
desc:"DRESS WITH A SWEETHEART NECKLINE. ADJUSTABLE GATHERED DETAILS AT THE SIDE WITH DRAWSTRING. ASYMMETRIC SPLIT HEM AT THE SIDE. INVISIBLE ZIP FASTENING.",
price:4590.00,
color:"black",
},
{   
image_url:"https://static.zara.net/photos///2021/I/0/1/p/8741/281/641/2/w/288/8741281641_1_1_1.jpg?ts=1633685993740",
name:"PLEATED MIDI DRESS",
desc:"DRESS WITH A SURPLICE V-NECKLINE AND LONG SLEEVES. ELASTIC WAISTBAND. LINING.",
price:4590.00,
color:"red",
},
{   
image_url:"https://static.zara.net/photos///2021/I/0/1/p/7757/878/800/4/w/288/7757878800_1_1_1.jpg?ts=1636111099554",
name:"MINI DRESS WITH DRAPED DETAIL",
desc:"SHORT DRESS WITH AN OPENING AND CONCEALED METAL APPLIQUÉ ON THE FRONT. THIN ADJUSTABLE STRAPS WITH A TIE IN THE SAME FABRIC. PLEATED DETAILS AND SMOCKING. INVISIBLE ZIP FASTENING.",
price:4590.00,
color:"black",
},
{   
image_url:"https://static.zara.net/photos///2021/I/0/1/p/7899/657/069/2/w/288/7899657069_1_1_1.jpg?ts=1620749807063",
name:"PRINTED LINEN BLEND DRESS",
desc:"DRESS IN A LINEN BLEND. V-NECKLINE AND THIN STRAPS. DRAPED FABRIC DETAIL ON THE FRONT. INVISIBLE SIDE ZIP FASTENING.",
price:2990.00,
color:"white",
},
{   
image_url:"https://static.zara.net/photos///2021/I/0/1/p/7385/309/251/2/w/288/7385309251_1_1_1.jpg?ts=1624433373442",
name:"TEXTURED DRESS",
desc:"STRAPPY DRESS WITH A ROUND NECK. FALSE FLAP POCKETS ON THE FRONT. MATCHING PRONOUNCED SEAM DETAIL.",
price:2990.00,
color:"white",
},
{   
image_url:"https://static.zara.net/photos///2021/I/0/1/p/2157/259/630/3/w/288/2157259630_1_1_1.jpg?ts=1636364990736",
name:"SATIN DRESS WITH RHINESTONE STRAPS",
desc:"MINI DRESS WITH A STRAIGHT NECKLINE AND THIN STRAPS WITH RHINESTONE APPLIQUÉS. GATHERED DETAILING ON THE SIDES AT THE WAIST. INVISIBLE BACK ZIP FASTENING.",
price:2990.00,
color:"pink",
},
{   
image_url:"https://static.zara.net/photos///2021/I/0/1/p/3666/180/800/4/w/288/3666180800_1_1_1.jpg?ts=1634809661358",
name:"MINI DRESS WITH CUT-OUT DETAIL",
desc:"DRESS WITH A SURPLICE NECKLINE AND THIN STRAPS. FEATURING A FRONT VENT AT THE WAIST, GATHERING AND INVISIBLE BACK ZIP FASTENING.",
price:2990.00,
color:"black",
},
{   
image_url:"https://static.zara.net/photos///2021/I/0/1/p/3067/321/600/18/w/288/3067321600_1_1_1.jpg?ts=1628175341711",
name:"SATIN-FINISH DRESS WITH DRAPED DETAIL",
desc:"SHORT DRESS WITH A STRAIGHT NECKLINE AND EXPOSED SHOULDERS. DRAPED FABRIC. INVISIBLE BACK ZIP FASTENING.",
price:2790.00,
color:"red",
},
{   
image_url:"https://static.zara.net/photos///2021/I/0/1/p/8790/330/700/18/w/288/8790330700_1_1_1.jpg?ts=1631702272684",
name:"SATIN MIDI DRESS",
desc:"V-NECK MIDI DRESS FEATURING THIN STRAPS THAT CROSS AT THE BACK WITH ADJUSTABLE TIES.",
price:2990.00,
color:"brown",
},
{   
image_url:"https://static.zara.net/photos///2021/I/0/1/p/0387/185/600/2/w/288/0387185600_1_1_1.jpg?ts=1631102096700",
name:"MINI DRESS WITH DRAPED DETAIL",
desc:"DRESS WITH A FLOWING NECKLINE AND THIN STRAPS. GATHERED DETAIL AT THE FRONT. INVISIBLE BACK ZIP FASTENING.",
price:2990.00,
color:"red",
},
{   
image_url:"https://static.zara.net/photos///2021/I/0/1/p/0387/184/538/2/w/288/0387184538_1_1_1.jpg?ts=1631186644608",
name:"SATIN MINI DRESS",
desc:"DRESS WITH A FLOWING NECKLINE AND THIN STRAPS. GATHERED DETAIL AT THE FRONT. INVISIBLE BACK ZIP FASTENING.",
price:2990.00,
color:"green",
},
{   
image_url:"https://static.zara.net/photos///2021/I/0/1/p/1165/241/500/2/w/288/1165241500_1_1_1.jpg?ts=1632413840549",
name:"RUFFLED PRINTED DRESS",
desc:"SATIN DRESS FEATURING A V-NECKLINE AND SLEEVES FALLING BELOW THE ELBOW WITH ELASTIC TRIM. SMOCKED ELASTIC WAISTBAND. RUFFLED HEM.",
price:2990.00,
color:"green",
},
{   
image_url:"https://static.zara.net/photos///2021/V/0/1/p/3253/330/500/2/w/288/3253330500_1_1_1.jpg?ts=1618236721858",
name:"RIBBED DRESS",
desc:"FITTED DRESS WITH A STRAIGHT NECKLINE AND THIN STRAPS.",
price:990.00,
         color:"green",
},
{   
image_url:"https://static.zara.net/photos///2021/V/0/1/p/3280/338/250/2/w/288/3280338250_1_1_1.jpg?ts=1618311930224",
name:"SHORT SATIN DRESS",
desc:"SHORT DRESS WITH A COWL NECKLINE AND THIN STRAPS THAT CROSS AT THE BACK.",
price:2790.00,
color:"white",
},
{   
image_url:"https://static.zara.net/photos///2021/I/0/1/p/7385/324/700/2/w/288/7385324700_1_1_1.jpg?ts=1631620479370",
name:"DRAPED DRESS WITH TOPSTITCHING",
desc:"SHORT DRESS WITH A STRAIGHT NECKLINE AND EXPOSED SHOULDERS. FEATURING A FRONT KNOT DETAIL, CONTRAST TOPSTITCHING AND INVISIBLE BACK ZIP FASTENING.",
price:2990.00,
color:"brown",
},
{   
image_url:"https://static.zara.net/photos///2021/I/0/1/p/0219/312/306/2/w/288/0219312306_1_1_1.jpg?ts=1622626154742",
name:"SHORT SATIN DRESS",
desc:"SHORT DRESS WITH A ROUND NECKLINE AND ADJUSTABLE THIN STRAPS.",
price:2590.00,
color:"yellow",
},
{   
image_url:"https://static.zara.net/photos///2021/I/0/1/p/9006/157/305/2/w/288/9006157305_1_1_1.jpg?ts=1628597315497",
name:"MIDI DRESS WITH GATHERED DETAIL",
desc:"V-NECK MIDI DRESS WITH THIN ADJUSTABLE STRAPS. DRAWSTRING OPENING DETAIL ON THE CHEST. INVISIBLE BACK ZIP FASTENING.",
price:2990.00,
color:"yellow",
},

]

localStorage.setItem("anotherData",JSON.stringify(totalWomanProducts));
localStorage.setItem("zaraProductData",JSON.stringify(totalWomanProducts));

function showB(){
  localStorage.setItem("zaraProductData",JSON.stringify(dress))
  console.log("helo")
  window.location.href = "productDisplay.html"
}

function showC(){
  localStorage.setItem("zaraProductData",JSON.stringify(tops))
  console.log("helo")
  window.location.href = "productDisplay.html"
}
function showD(){
  localStorage.setItem("zaraProductData",JSON.stringify(jeans))
  console.log("helo")
  window.location.href = "productDisplay.html"
}

function showE(){
  localStorage.setItem("zaraProductData",JSON.stringify(blazers))
  console.log("helo")
  window.location.href = "productDisplay.html"
}







       

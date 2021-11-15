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
var data = JSON.parse(localStorage.getItem("blazers"))
var close = document.getElementById("close")
var fltr = document.getElementById("fltr")
var filterDiv = document.querySelector(".filterDiv")
var cartcnt = document.getElementById("cartcnt")
var cartItemCount = JSON.parse(localStorage.getItem("cartItemCount"))
cartcnt.textContent = cartItemCount
var fullSearch = document.getElementById("fullSearch")
var wmn = document.getElementById("wmn")
var mn = document.getElementById("mn")
var kds = document.getElementById("kds")

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

  function openFilterPage(){
    filterDiv.style.display = "block"
      }
    
    function closeFilterPage(){
        filterDiv.style.display = "none"
    }

    function goToProductPage(){
        var anotherdata = JSON.parse(localStorage.getItem("anotherData"))
       displayProduct(anotherdata)
        
    }

    function samePage(){
        alert("Sorry! Produts are sold & we are left with women stock, please try next time")
    }

    function goToSearchPage(){
        window.location.href = "search.html"
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
fltr.addEventListener("click",openFilterPage)
close.addEventListener("click",closeFilterPage)
wmn.addEventListener("click",goToProductPage)
mn.addEventListener("click",samePage);
kds.addEventListener("click",samePage);
fullSearch.addEventListener("click",goToSearchPage);



//============================= Now product displaying of this page ============================= //

var zaraData = JSON.parse(localStorage.getItem("zaraProductData"));
var results = document.getElementById("results");

//====================== sorting section========================= //
var blue = document.getElementById("blue")
var black = document.getElementById("black")
var brown = document.getElementById("brown")
var pink = document.getElementById("pink")
var red = document.getElementById("red")
var white = document.getElementById("white")
var green = document.getElementById("green")
var yellow = document.getElementById("yellow")
var purple = document.getElementById("purple")
var gray = document.getElementById("gray")
var ecru = document.getElementById("ecru")
var low = document.getElementById("low");
var high = document.getElementById("high");
displayProduct(zaraData)




blue.addEventListener("click",function(){
    sortByBlue(zaraData)
})

black.addEventListener("click",function(){
    sortByBlack(zaraData)
})

brown.addEventListener("click",function(){
    sortByBrown(zaraData)
})

pink.addEventListener("click",function(){
    sortByPink(zaraData)
})

red.addEventListener("click",function(){
    sortByRed(zaraData)
})

white.addEventListener("click",function(){
    sortByWhite(zaraData)
})

green.addEventListener("click",function(){
    sortByGreen(zaraData)
})

yellow.addEventListener("click",function(){
    sortByYellow(zaraData)
})

purple.addEventListener("click",function(){
    sortByPurple(zaraData)
})

gray.addEventListener("click",function(){
    sortByGray(zaraData)
})

ecru.addEventListener("click",function(){
    sortByEcru(zaraData)
})



function sortByBlue(zaraData){
    var sortedItems = zaraData.filter(function(item){
        return item.color == blue.textContent
    })
    displayProduct(sortedItems)
  }

  function sortByBlack(zaraData){
      var sortedItems = zaraData.filter(function(item){
          return item.color == black.textContent
      })
      displayProduct(sortedItems)
  }

  function sortByBrown(zaraData){
    var sortedItems = zaraData.filter(function(item){
        return item.color == brown.textContent
    })
    displayProduct(sortedItems)
}

function sortByPink(zaraData){
    var sortedItems = zaraData.filter(function(item){
        return item.color == pink.textContent
    })
    displayProduct(sortedItems)
}

function sortByRed(zaraData){
    var sortedItems = zaraData.filter(function(item){
        return item.color == red.textContent
    })
    displayProduct(sortedItems)
}

function sortByWhite(zaraData){
    var sortedItems = zaraData.filter(function(item){
        return item.color == white.textContent
    })
    displayProduct(sortedItems)
}

function sortByGreen(zaraData){
    var sortedItems = zaraData.filter(function(item){
        return item.color == green.textContent
    })
    displayProduct(sortedItems)
}

function sortByYellow(zaraData){
    var sortedItems = zaraData.filter(function(item){
        return item.color == yellow.textContent
    })
    displayProduct(sortedItems)
}

function sortByPurple(zaraData){
    var sortedItems = zaraData.filter(function(item){
        return item.color == purple.textContent
    })
    displayProduct(sortedItems)
}

function sortByGray(zaraData){
    var sortedItems = zaraData.filter(function(item){
        return item.color == gray.textContent
    })
    displayProduct(sortedItems)
}

function sortByEcru(zaraData){
    var sortedItems = zaraData.filter(function(item){
        return item.color == ecru.textContent
    })
    displayProduct(sortedItems)
}

function sortByLowPrice(zaraData){
    if(low.textContent == "low to high"){
        zaraData.sort(function(a,b){
            return a.price - b.price
        })
    }
     displayProduct(zaraData)

}


function sortByHighPrice(zaraData){
    if(high.textContent == "high to low"){
        zaraData.sort(function(a,b){
            return b.price - a.price
        })
    }
    displayProduct(zaraData)

}



displayProduct(zaraData);
function displayProduct(zaraData){
    imageDiv.textContent = "";
    var count = 0;
    zaraData.map(function(item){
        count++
        var div = document.createElement("div")
        div.setAttribute("id","clothesDiv")
         var h1 = document.createElement("h2");
         var img = document.createElement("img");
         var h2 = document.createElement("span")
         var h3 = document.createElement("span")
         var symbol = document.createElement("span")
         symbol.setAttribute("id","rupee")
         h2.setAttribute("id","priceTag")
         var clrTag = document.createElement("div");
         clrTag.setAttribute("id","clrTag")
         h3.setAttribute("id","clrCode")

        h1.textContent = item.name;
        h2.textContent = item.price;
        h3.textContent = item.color;
        img.setAttribute("src",item.image_url);
        symbol.textContent = "₹ "
        clrTag.textContent = "Color :- "

        symbol.append(h2)
        clrTag.append(h3)
        div.append(img,h1,clrTag,symbol)
        imageDiv.append(div)

        
        div.addEventListener("click",function(){
            displaySingleProduct(item)
        })

    });

low.addEventListener("click",function(){
    sortByLowPrice(zaraData)
})

high.addEventListener("click",function(){
    sortByHighPrice(zaraData)
})


    function displaySingleProduct(item){
        localStorage.setItem("selectedProduct",JSON.stringify(item))
        window.location.href = "selectedProduct.html"
       }
       results.textContent = count
}

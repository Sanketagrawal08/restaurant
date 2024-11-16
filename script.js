var menu = document.querySelector(".menu");
var main2 = document.querySelector(".main2");
var main1 = document.querySelector(".main1");


menu.addEventListener("click",function(){
    main2.scrollIntoView({behavior: "smooth"});
})

document.querySelector("#order").addEventListener("click",function(){
    main2.scrollIntoView({behavior: "smooth"});
})

var sign_page = document.querySelector("#sign-page")
var sign_btn = document.querySelector("#sign-btn")
var cutBtn = document.querySelector("#cutBtn")
var flag = 0;

sign_btn.addEventListener("click", function() {
    if (flag === 0) {
        // Hide the cart if it's open
        cartDiv.classList.add('hidden');
        cartDiv.style.display = 'none';
        flag2 = 0;

        sign_page.style.display = 'block';
        main1.classList.add('blurred');
        nav.classList.add('nav-disabled'); // Disable the nav
        flag = 1;
    } else {
        sign_page.style.display = 'none';
        main1.classList.remove('blurred');
        nav.classList.remove('nav-disabled'); // Enable the nav
        flag = 0;
    }
});


cutBtn.addEventListener("click",function(){
     sign_page.style.display = 'none'
     main1.classList.remove('blurred');
     nav.classList.remove('nav-disabled')
})

var cartBtn = document.querySelector("#cartBtn") 
var cartDiv = document.querySelector("#cartDiv")
var closeCart = document.querySelector("#closeCart")
var body = document.querySelector("body")
var nav = document.querySelector(".nav")
var flag2 = 0;

cartBtn.addEventListener("click",function(){
    if(flag2 === 0){
       cartDiv.classList.remove('hidden')
       cartDiv.style.display = 'block'
       body.style.overflow = 'hidden'
       nav.classList.add('nav-disabled');
       flag2 = 1;
    }
    else{
        cartDiv.classList.add('hidden')
        cartDiv.style.display = 'none'
        body.style.overflow = 'auto'
        nav.classList.remove('nav-disabled');
        flag2 = 0;
    }
})

closeCart.addEventListener("click",function(){
    cartDiv.classList.add('hidden')
    cartDiv.style.display = 'none'
    body.style.overflow = 'auto';
    nav.classList.remove('nav-disabled');
})




var address = document.getElementById("address");

var createAccount = document.getElementById("createAccount");
var delivery = document.querySelector("#delivery")

createAccount.addEventListener("click",function(){
    if(address.value == ""){
        alert("please fill out the details")
    }
    delivery.innerHTML =  `<i class="ri-map-pin-time-line"></i>` +  "Delivering to " + `${address.value}`
})


var cartArr = [];

let buttons = document.querySelectorAll(".addBtn");

buttons.forEach(function(button){
    button.addEventListener("click",function(){
        
        let card =  button.closest(".card");
        let name =  card.querySelector(".itemName").innerHTML;
        let price = parseFloat(card.querySelector(".itemPrice").innerHTML.replace('Only at ₹',''))
       
        let img = card.querySelector(".img img").src;
       
        cartArr.push({image: img, name: name, price: price })
       
        console.log(cartArr);

        display();
        
})
})

function display(){
    let cartDiv = document.querySelector(".cartsection")
    cartDiv.innerHTML = ""

    cartArr.forEach(function(item,index){
      let itemDiv = document.createElement("div")
      itemDiv.classList.add("itemdiv")

    //   let img = document.createElement('img')
    //   img.src = item.image;
    //   img.style.width = '100px';
    //   img.style.height = '150px';

      let details = document.createElement("div")

      let nameDiv = document.createElement("div")
      let priceDiv = document.createElement("div")

      details.classList.add('details')
      nameDiv.classList.add('nameDiv')
      priceDiv.classList.add('priceDiv')

      nameDiv.innerText = `${item.name}`
      priceDiv.innerHTML = ` ₹ ${item.price}`

    
        


    //  itemDiv.appendChild(img)
      details.appendChild(nameDiv)
      details.appendChild(priceDiv)
      itemDiv.appendChild(details)
      cartDiv.appendChild(itemDiv)
    })
}
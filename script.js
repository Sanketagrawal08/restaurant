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
    else{
       delivery.innerHTML =  `<i class="ri-map-pin-time-line"></i>` +  "Delivering to " + `${address.value}`
       sign_page.style.display = 'none'
       main1.classList.remove('blurred');
       nav.classList.remove('nav-disabled');
    }
})


var cartArr = [];

let buttons = document.querySelectorAll(".addBtn");

buttons.forEach(function(button){
    button.addEventListener("click",function(){
        
        let card =  button.closest(".card");
        let name =  card.querySelector(".itemName").innerHTML;
        let price = parseFloat(card.querySelector(".itemPrice").innerHTML.replace('Only at ₹',''))
       
        let img = card.querySelector(".img img").src;

        let existingItem = cartArr.find(function(item){
            return item.name === name;
        })

        if (existingItem) {
            // If the item exists, increment its quantity
            existingItem.quantity += 1;
        } else {
            // If the item doesn't exist, add it with quantity 1
            cartArr.push({ image: img, name: name, price: price, quantity: 1 });
        }
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
      var quantityDiv  = document.createElement("div")

      details.classList.add('details')
      nameDiv.classList.add('nameDiv')
      priceDiv.classList.add('priceDiv')
      quantityDiv.classList.add("quantityDiv")



      nameDiv.innerText = `${item.name}`
      priceDiv.innerHTML = ` ₹ ${item.price * item.quantity}`
      
      let minusBtn = document.createElement("button")
      minusBtn.classList.add('minusBtn')
      minusBtn.textContent = "-"
      let plusBtn = document.createElement("button")
      plusBtn.classList.add('plusBtn')
      plusBtn.textContent = "+"

      minusBtn.addEventListener("click",function(){
        if(item.quantity > 1){
            item.quantity -= 1;
        } else{
            minusBtn.disabled = true
        }
        priceDiv.innerHTML = ` ₹ ${item.price * item.quantity}`;
        display()
      })

      plusBtn.addEventListener("click",function(){
        item.quantity += 1;
        priceDiv.innerHTML = ` ₹ ${item.price * item.quantity}`;
        display();
      })

      let quantityText = document.createElement("span")
      quantityText.textContent = item.quantity

      

    //  itemDiv.appendChild(img)
        quantityDiv.appendChild(minusBtn)
        quantityDiv.appendChild(quantityText)
        quantityDiv.appendChild(plusBtn)
        details.appendChild(quantityDiv)
        details.appendChild(nameDiv)
        details.appendChild(priceDiv)
        itemDiv.appendChild(details)
        cartDiv.appendChild(itemDiv)
    })
}


var aboutBtn = document.querySelector("#aboutBtn")
var about_section = document.querySelector(".about-section")

aboutBtn.addEventListener("click",function(){
 about_section.scrollIntoView({behavior: 'smooth'})
})

var order = document.getElementById("order");
var order_icon = document.querySelector("#order i");

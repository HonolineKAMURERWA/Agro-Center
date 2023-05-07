
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'NEEM POWDER',
        image: 'neem-powder.png',
        price: 30 
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: '2.PNG',
        price: 120000
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: '3.PNG',
        price: 220000
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: '4.PNG',
        price: 123000
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: '5.PNG',
        price: 320000
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: '6.PNG',
        price: 120000
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">
            <i class="bx bxs-cart-alt" style="color: #ffffff"></i>
            </button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
=======
let buttonPrev = document.getElementById("prev-btn");
let buttonNext = document.getElementById("next-btn");
let person = document.querySelector(".client-details");
let personOne = document.querySelector(".perso");

buttonNext.addEventListener("click", nextPage);
function nextPage() {
  //   person.style.marginLeft = "-205px";
  personOne.style.marginLeft = "-305px";
  //   person.innerHTML = "kkkk";
  console.log("heloooooo");
}

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       entry.target.classList.add("show");
//     } else {
//       entry.target.classList.remove("show");
//     }
//   });
// });
// let hiddenElements = document.querySelectorAll(".hidden");
// hiddenElements.forEach((el) => observer.observe(el));

const navbar = document.querySelector(".header");
const logo = document.querySelector(".logo");
const search = document.getElementById("search");
const menu = document.getElementById("menu");
const ul = document.querySelector(".lists");
// const log = document.getElementById("logo");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 200) {
    navbar.classList.add("scrolled");
    // search.innerHTML = '<i class="bx bx-search" style="color: #ffffff"></i>';
    menu.innerHTML = '<i class="bx bx-menu" style="color: #749075"></i>';
    menu.style.display = "block";
    menu.style.float = "left";
    menu.style.fontSize = "30px";
    navbar.style.justfyContent = "space-around";
    search.style.display = "none";
    ul.style.display = "none";
    logo.style.display = "none";
  } else {
    navbar.classList.remove("scrolled");
    search.style.display = "flex";
    menu.innerHTML = "";
    menu.style.display = "none";
    ul.style.display = "flex";
    logo.style.display = "block";
  }
});

let newMenu = document.querySelector(".short-menu");
menu.addEventListener("click", function () {
  console.log("hi");
  // newMenu.style.display = "flex";
});


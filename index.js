// let buttonPrev = document.getElementById("prev-btn");
// let buttonNext = document.getElementById("next-btn");
// let person = document.querySelector(".card");
// let personOne = document.querySelector(".card-cont");

// const cardWidth = person[0];

// let currentCard = 0;

// buttonNext.addEventListener("click", () => {
//   currentCard++;
//   if (currentCard > person.length - 2) {
//     currentCard = person.length - 2;
//   }
//   const translateX = -currentCard * cardWidth;
//   personOne.style.transform = `translateX(${translateX}px)`;
//   console.log("hello");
// });

//
const nextIcon = document.querySelector("#next-icon");
const cardsContainer = document.querySelector(".cards-container");
const cards = document.querySelectorAll(".card");
const cardWidth = cards[0].offsetWidth;

let currentCard = 0;

nextIcon.addEventListener("click", () => {
  currentCard++;
  if (currentCard > cards.length - 2) {
    currentCard = cards.length - 2;
  }
  const translateX = -currentCard * cardWidth;
  cardsContainer.style.transform = `translateX(${translateX}px)`;
});
// .........
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

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 200) {
    navbar.classList.add("scrolled");
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
    newMenu.style.display = "none";
  }
});

let newMenu = document.querySelector(".short-menu");
menu.addEventListener("click", function () {
  console.log("hi");
  newMenu.style.display = "flex";
});

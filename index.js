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

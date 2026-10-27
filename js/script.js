// ハンバーガーメニュー
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

menuButton.addEventListener("click", function () {
  nav.classList.toggle("open");
  menuButton.classList.toggle("open");
});
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("open");
    menuButton.classList.remove("open");
  });
});

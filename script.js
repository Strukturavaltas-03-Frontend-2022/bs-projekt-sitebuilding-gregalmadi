"use strict";

const navbar = document.querySelector(".navigation");

window.addEventListener("scroll", () => {
  window.scrollY !== 0
    ? (navbar.style.backgroundColor = "white")
    : (navbar.style.backgroundColor = "rgba(0,0,0,0)");
});

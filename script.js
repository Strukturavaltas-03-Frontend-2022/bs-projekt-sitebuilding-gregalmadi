"use strict";

const navbar = document.querySelector(".navbar");
const navBrand = document.querySelector(".navbar .navbar-brand");
const navItem = document.querySelectorAll(".navbar-nav .nav-item");

window.addEventListener("scroll", () => {
  if (window.scrollY !== 0) {
    navbar.style.backgroundColor = "white";
    navBrand.style.color = "black";
    navItem.forEach((item) => (item.style.color = "black"));
  } else {
    navbar.style.backgroundColor = "rgba(0,0,0,0)";
    navBrand.style.color = "#fec947";
    navItem.forEach(
      (item) => (item.style.color = "rgba(221, 221, 221, 0.826)")
    );
  }
});

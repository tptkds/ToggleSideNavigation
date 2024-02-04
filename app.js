// do something!
const toggleBtn = document.querySelector(".toggle");
const nav = document.querySelector("nav");
let isNavOpened;
const toggleSideNav = () => {
  if (isNavOpened) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
  localStorage.setItem("isNavOpened", isNavOpened);
};

toggleBtn.addEventListener("click", () => {
  isNavOpened = !isNavOpened;
  toggleSideNav();
});


document.addEventListener("DOMContentLoaded", () => {
  isNavOpened = localStorage.getItem("isNavOpened") == "false" ? false : true;
  toggleSideNav();
  document.body.classList.add("visible");
});

window.onload = function () {
  document.body.classList.remove("preload");
};

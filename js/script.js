const burger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobileMenu");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});
const burger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobileMenu");
const mobileMenuA = document.querySelector(".mobileMenu_li");
const html = document.querySelector("html");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});

mobileMenuA.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    burger.classList.remove("active");
});

if (document.body.classList.contains("news")) {
    html.classList.add("greyHTML");
};
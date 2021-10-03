const burger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobileMenu");
const mobileMenuA = document.querySelector(".mobileMenu_li");
const html = document.querySelector("html");
const bodyNews = document.querySelector("body.news");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    document.body.classList.toggle("bodyBlocked");
    if ((burger.classList.contains("active")) && (document.body.classList.contains("news"))) {
        bodyNews.classList.add("fullWidth");
        burger.classList.add("fullWidthBurger");
    } else {
        bodyNews.classList.remove("fullWidth");
        burger.classList.remove("fullWidthBurger");
    };
});

mobileMenuA.addEventListener("click", () => {
    document.body.classList.remove("bodyBlocked");
    mobileMenu.classList.remove("active");
    burger.classList.remove("active");
});

if (document.body.classList.contains("news")) {
    html.classList.add("greyHTML");
};
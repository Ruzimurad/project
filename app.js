const Menu = document.querySelector(".header__menu");
const MenuButton = document.querySelector(".header__menu-button");
const Close = document.querySelector(".header__close");

MenuButton.addEventListener("click", function () {
  Close.classList.add("active");
  MenuButton.classList.add("active");
  Menu.classList.add("active");
});

Close.addEventListener("click", function () {
  Close.classList.remove("active");
  MenuButton.classList.remove("active");
  Menu.classList.remove("active");
});

const Links = document.querySelectorAll(".header__nav-link");

for (let i = 0; i < Links.length; i++) {
  Links[i].addEventListener("click", function () {
    if (Links[i].nextElementSibling.classList.contains("active")) {
      Links[i].nextElementSibling.classList.remove("active");
    } else {
      for (let j = 0; j < Links.length; j++) {
        Links[j].nextElementSibling.classList.remove("active");
         }
      Links[i].nextElementSibling.classList.add("active");
    }
  });
}
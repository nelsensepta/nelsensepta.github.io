const menuklik = document.querySelector(".nav__icon-hamburger");
const active = document.querySelector(".nav__menu");
const cross = document.querySelector(".bx-menu");

menuklik.addEventListener("click", function () {
  active.classList.toggle("nav__active");
});
menuklik.addEventListener("click", function () {
  cross.classList.toggle("bx-x");
});

// // Dark Light Theme
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// jik user menekan button light dark theme
const selectedTheme = localStorage.getItem("theme");
const selectedIcon = localStorage.getItem("icon");

// validasi icon
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-sun" : "bx-moon";

if (selectedTheme) {
  document.body.classList[selectedTheme === "light" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedTheme === "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// active theme and non active theme
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("theme", getCurrentTheme());
  localStorage.setItem("icon", getCurrentIcon());
});

// Scroll Section Active
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

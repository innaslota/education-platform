//sticky header
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});

//dark theme
const chk = document.querySelector(".dark-theme-input");

chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  if (this.checked) {
    localStorage.setItem("dark", this.checked);
  } else {
    localStorage.setItem("light", this.checked);
  }
});

//responsive hamburger menu
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};

//replace active class in navbar
const navlink = document.querySelectorAll(".navlink");
for (var i = 0; i < navlink.length; i++) {
  navlink[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace("active", "");
    }
    this.className += " active";
  });
}

//add active class on scroll

const sectionsOnScroll = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;

  sectionsOnScroll.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".navlist a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".navlist a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
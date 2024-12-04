let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  menu.classList.remove("active");
};

const typed = new Typed(".multiple-text", {
  strings: [
    "Fronted Developer",
    "Backend Developer",
    "Blockchain Developer",
    "Web Designer",
    "YouTuber",
  ],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1200,
  loop: true,
});

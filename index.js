console.log("script running...");

const openNav = document.querySelector(".ham");
const closeNav = document.querySelector(".cross");
const nav = document.querySelector(".hamburger");
closeNav.style.display = "none";
nav.addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("sidebarClose");
  if (document.querySelector(".sidebar").classList.contains("sidebarClose")) {
    openNav.style.display = "inline";
    closeNav.style.display = "none";
  } else {
    openNav.style.display = "none";
    setTimeout(() => {
      closeNav.style.display = "inline";
    }, 100);
  }
});

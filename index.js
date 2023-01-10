function toggleStylesheet() {
    var currentStylesheet = document.getElementById("stylesheet");
    var currentLinkText = document.getElementById("dark-link").textContent;
    if (currentStylesheet.getAttribute("href") === "style.css") {
      currentStylesheet.setAttribute("href", "stylesheetdark.css");
      document.getElementById("dark-link").textContent = "Light";
    } else {
      currentStylesheet.setAttribute("href", "style.css");
      document.getElementById("dark-link").textContent = "Dark";
    }
  }
  

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

navMenu.addEventListener('click', () => {
  navMenu.classList.remove('active');
  hamburger.classList.remove('active');
});
  
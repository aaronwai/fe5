document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar .mobile-menu-items");
  toggleButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  const date = (document.getElementById("date").innerHTML =
    new Date().getFullYear());
});

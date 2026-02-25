document.addEventListener("DOMContentLoaded", () => {
  // first layer arrow function
  // define variables for css selectors
  const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar .mobile-menu-items");
  //   add event into toggle button
  toggleButton.addEventListener("click", () => {
    // second layer arrow function
    // add active class into mobile-menu-items
    mobileMenu.classList.toggle("active");
  });
});

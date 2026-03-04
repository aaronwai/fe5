window.addEventListener("load", () => console.log("page loaded"));
window.addEventListener("DOMContentLoaded", () => console.log("DOM loaded"));

window.addEventListener("resize", () => {
  console.log("window resized");
  document.querySelector("h1").innerText =
    `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});
window.addEventListener("scroll", () => {
  console.log(`window scrolled ${window.scrollX} x ${window.scrollY}`);
  if (window.scrollY > 70) {
    document.body.style.backgroundColor = "lightblue";
  } else {
    document.body.style.backgroundColor = "white";
  }
});
window.addEventListener("focus", () => {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = "blue";
  });
});
window.addEventListener("blur", () => {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = "black";
  });
});
const p = document.querySelector("p");
p.addEventListener("click", () => console.log("paragraph clicked"));

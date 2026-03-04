// a. add event listener with callback function
const logo = document.querySelector("header");
logo.addEventListener("click", (e) => {
  console.log(e);
  console.log(e.currentTarget);
});

// b. rewrite to callback function
function onClick(e) {
  console.log(e.target); // return element that trigger the event, in this case is img
  console.log(e.currentTarget); // element that event is attached to, in this case is img
  e.target.style.backgroundColor = "red";
  console.log(e.clientX); // from page position
  console.log(e.clientY);
  console.log(e.offsetX); // from element position
  console.log(e.offsetY); // from element position
}
logo.addEventListener("click", onClick);

document.querySelector("a").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("link is clicked");
});

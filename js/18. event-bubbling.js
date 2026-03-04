const button = document.querySelector("form button");
const div = document.querySelector("form div:nth-child(2)");
const form = document.querySelector("form");

button.addEventListener("click", (e) => {
  alert("button was clicked");
  e.stopPropagation(); // stop the event from bubbling up to the parent elements
});

div.addEventListener("click", (e) => {
  alert("div was clicked");
});

form.addEventListener("click", (e) => {
  alert("form was clicked");
});
// document.body.addEventListener("click", (e) => {
//   alert("body was clicked");
// });
// loop through all the list items and add a click event listener to each of them
const listItems = document.querySelectorAll("li");
listItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.remove();
  });
});
// add a single event listener on parent
const list = document.querySelector("ul");
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});

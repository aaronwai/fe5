const itemInput = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const checkbox = document.getElementById("checkbox");
const heading = document.querySelector("h1");
function onInput(e) {
  heading.textContent = e.target.value;
}
itemInput.addEventListener("input", onInput);

function onChecked(e) {
  const isChecked = e.target.checked;
  if (isChecked) {
    heading.textContent = "Recurring Item";
  } else {
    heading.textContent = itemInput.value;
  }
}
checkbox.addEventListener("change", onChecked);
function onFocus() {
  console.log("Input is focused");
  itemInput.style.backgroundColor = "lightyellow";
  itemInput.style.outlineStyle = "solid";
  itemInput.style.outlineColor = "yellow";
  itemInput.style.outlineWidth = "5px";
}

function onBlur() {
  console.log("Input is blured");
  itemInput.style.backgroundColor = "white";
  itemInput.style.outlineStyle = "none";
}
itemInput.addEventListener("focus", onFocus);
itemInput.addEventListener("blur", onBlur);
priorityInput.addEventListener("change", onInput);

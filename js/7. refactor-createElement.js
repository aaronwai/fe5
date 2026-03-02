function createNewItem(item) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  //   const button = createButton("remove-item btn-link text-red");
  //   const icon = createIcon("fa-solid fa-xmark");
  const button = createItem("remove-item btn-link text-red", "button");
  const icon = createItem("fa-solid fa-xmark", "i");
  button.appendChild(icon);
  li.appendChild(button);
  document.querySelector(".items").appendChild(li);
}
createNewItem("bread");
function createItem(classes, element) {
  const item = document.createElement(element);
  item.className = classes;
  return item;
}
function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  return button;
}
function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

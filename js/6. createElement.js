const div = document.createElement("div");
div.className = "my-element";
div.id = "my-element";
div.setAttribute("title", "My element");
// <div class="my-element" id="my-element" title="My element">Hello World</div>
// a. create a text inside the div element
// div.innerText = "Hello world";
// b. create a text 'node'
const text = document.createTextNode("Hello world");
div.appendChild(text);
// document.querySelector("ul").appendChild(div);
//===================
// use a function to build an element group
function createListItem(item) {
  const li = document.createElement("li");
  li.innerHTML = `${item} 
  <button class="remove-item btn-link text-red">
              <i class="fa-solid fa-xmark"></i>
            </button>`;
  document.querySelector(".items").appendChild(li);
}
createListItem("egg");

function createNewItem(item) {
  // build li element
  const li = document.createElement("li");
  //   insert text into li element
  li.appendChild(document.createTextNode(item));
  //   build button element
  const button = document.createElement("button");
  // add css class to button element
  button.className = "remove-item btn-link text-red";
  //   build icon element
  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";
  // append incon into button element
  button.appendChild(icon);
  //   apeen button into li element
  li.appendChild(button);
  //   appen li into ul element
  document.querySelector(".items").appendChild(li);
}
createNewItem("bread");

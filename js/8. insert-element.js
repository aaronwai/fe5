function insertElement() {
  const filter = document.querySelector(".filter");
  const h1 = document.createElement("h1");
  h1.textContent = "insertAdjacentElement";
  filter.insertAdjacentElement("beforebegin", h1);
  //   filter.insertAdjacentElement("afterbegin", h1);
  const h1after = document.createElement("h1");
  h1after.textContent = "insertAdjacentElement";
  filter.insertAdjacentElement("afterend", h1after);
  //   filter.insertAdjacentElement("beforeend", h1after);
}
insertElement();
function insertText() {
  const item = document.querySelector("li:first-child");
  item.insertAdjacentText("beforebegin", "before-begin");
  item.insertAdjacentText("afterbegin", "after-begin");
}
insertText();
function insertHTML() {
  const clearBtn = document.querySelector("#clear");
  clearBtn.insertAdjacentHTML("beforebegin", "<h2>before-begin</h2>");
  clearBtn.insertAdjacentHTML("afterend", "<h2>after-end</h2>");
}
insertHTML();
function insertBeforeItem() {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.textContent = "insert-Before";
  const thirdItem = document.querySelector("li:nth-child(3)");
  // from parent insert before selected item, involves parent and child
  ul.insertBefore(li, thirdItem);
}
insertBeforeItem();
function insertAfter(newEl, existingEl) {
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

function insertAfterItem() {
  const li = document.createElement("li");
  li.textContent = "insert-After";
  const firstItem = document.querySelector("li:first-child");
  insertAfter(li, firstItem);
}
insertAfterItem();

// replace single item
function replaceFirstItem() {
  const firstItem = document.querySelector("li:first-child");
  const li = document.createElement("li");
  li.textContent = "Replace First";
  firstItem.replaceWith(li);
}
replaceFirstItem();
function replaceSecondItem(item) {
  const secondItem = document.querySelector(`li:nth-child(${item})`);
  secondItem.outerHTML = `<li>Replaced Second</li>`;
}
replaceSecondItem(2);
// replace group of items
function replaceAllItems() {
  const items = document.querySelectorAll("li");
  items.forEach((item, index) => {
    item.outerHTML = index % 2 ? `<li>Replaced All</li>` : `<li>Replaced</li>`;
  });
}
replaceAllItems();

function replaceChildHeading() {
  const header = document.querySelector("header");
  const h1 = document.querySelector("h1");
  const h2 = document.createElement("h2");
  h2.id = "app-title";
  h2.textContent = "Shopping List App";
  // from parent replace Child with new element
  header.replaceChild(h2, h1);
}
replaceChildHeading();

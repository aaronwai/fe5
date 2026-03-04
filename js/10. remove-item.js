// remove single item
function removeClearButton() {
  const clearBtn = document.querySelector("#clear");
  clearBtn.remove();
}
removeClearButton();

function removeFirstItem() {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li:first-child");
  ul.removeChild(li);
}
removeFirstItem();
// remove groups
function removeItemGroup() {
  const li = document.querySelectorAll("li");
  li.forEach((item, index) => {
    if (index % 2 === 0) item.remove();
  });
}
removeItemGroup();

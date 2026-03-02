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

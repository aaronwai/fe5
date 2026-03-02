// select multiple elements using selectElement(s)ByClassName, selectElement(s)ByTagName
// return HTMLCollection
const listItems = document.getElementsByClassName("item");
console.log(listItems);
console.log(listItems[2]);

const listItems1 = document.getElementsByTagName("li");
console.log(listItems1[3]);

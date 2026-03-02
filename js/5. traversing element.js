let output;
// a. get child elements from parent element
const parent = document.querySelector(".parent");
console.log(parent);
output = parent.children;
console.dir(output);
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;
parent.children[1].style.color = "red";
parent.firstElementChild.style.color = "blue";
parent.lastElementChild.style.color = "green";
// b. get parent element from child element
output = document.getElementsByClassName("item");
output = secondChild = document.getElementsByClassName("item")[1];
output = secondChild.parentElement;
// c. get sibling element
output = secondChild.previousElementSibling;
output = secondChild.nextElementSibling;
// =======================================
// nodelist
// const parent = document.querySelector(".parent");
output = parent.childNodes;
output = parent.childNodes[3].nodeName;
output = parent.childNodes[3].nodeType;
// complete node structure
output = parent.childNodes[3].outerHTML;
// from parent to child node
output = parent.firstChild;
output = parent.lastChild;
output = parent.lastChild.textContent = "hello";

// traverse the dom from child to parent
const childnode = document.querySelector(".item");
output = childnode; // first li
output = childnode.parentNode; // ul

// traverse the dom from sibling to sibling
output = childnode.nextSibling;
output = childnode.previousSibling;
console.log(output);
// =======================
// why nodelist ? nodelist return a static value, it will not change when the dom changes, while html collection will change when the dom changes

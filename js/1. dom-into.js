console.log(window);
console.dir(window.document);
console.log(document.body);
console.log(document.links[0]);
// insert element inside element
// document.body.innerHTML = "<h1>hello from body</h1>";
// inspect text protion of html element
// console.log(document.body.innerText);
// write something into document
// document.write("Hello from JS");
document.getElementById("main").innerHTML = "<h1>hello from body</h1>";
document.querySelector("#main h1").innerText = "Hello";

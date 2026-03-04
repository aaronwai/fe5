const logo = document.querySelector("img");
const onClick = () => console.log("click event");
const onDoubleClick = () => {
  if (document.body.style.backgroundColor !== "purple") {
    document.body.style.backgroundColor = "purple";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
};
const onRightClick = () => console.log("right click event");
const onMouseDown = () => console.log("mouse down event");
const onMouseUp = () => console.log("mouse up event");
logo.addEventListener("click", onClick);
logo.addEventListener("dblclick", onDoubleClick);
logo.addEventListener("contextmenu", onRightClick);
logo.addEventListener("mousedown", onMouseDown);
logo.addEventListener("mouseup", onMouseUp);
const onMouseWheel = () => console.log("mouse wheel event");
logo.addEventListener("wheel", onMouseWheel);
const onMouseOver = () => console.log("mouse over event");
logo.addEventListener("mouseover", onMouseOver);
const onMouseOut = () => console.log("mouse out event");
logo.addEventListener("mouseout", onMouseOut);
const onDragStart = () => console.log("drag start event");
logo.addEventListener("dragstart", onDragStart);
const onDragEnd = () => console.log("drag end event");
logo.addEventListener("dragend", onDragEnd);
const onDrag = () => console.log("drag event");
logo.addEventListener("drag", onDrag);

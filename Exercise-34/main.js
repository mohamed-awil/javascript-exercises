const parent = document.querySelector(".parent");

parent.style.backgroundColor = "#fefefef3";

function addChild() {
  const child = document.createElement("p");
  child.textContent = "New Child";
  parent.appendChild(child);
}

function removeLastChild() {
  if (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
}

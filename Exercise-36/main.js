const color = document.querySelector("#color");
const colorPreview = document.querySelector(".color-preview");
const historyContainer = document.querySelector(".history-container");
const clearHistory = document.querySelector("#clearHistoryBtn");

color.addEventListener("change", () => {
  colorPreview.style.backgroundColor = color.value;
  const newColor = document.createElement("li");
  newColor.textContent = color.value;
  newColor.style.color = color.value;
  historyContainer.appendChild(newColor);
});

clearHistory.addEventListener("click", () => {
  historyContainer.innerHTML = "";
});

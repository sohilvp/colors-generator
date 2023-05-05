const generateButton = document.querySelector("button");
const container = document.querySelector(".container");

let randomGenerate = () => {
  container.innerHTML = "";
  for (let i = 0; i < 11; i++) {
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;
    let color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = `<div class="color-img" style="background:${randomHex}"></div>
    <h3>${randomHex}</h3>`;
    container.appendChild(color);
  }
};
randomGenerate();

generateButton.addEventListener("click", randomGenerate);

const button = document.getElementById("add");
const output = document.getElementById("value");

let count = 0;

button.addEventListener("click", () => {
  count++;
  output.innerText = count;
});

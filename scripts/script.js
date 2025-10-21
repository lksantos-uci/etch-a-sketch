function getRandomColor() {
  const hue = Math.floor(Math.random() * 360); 
  const saturation = 100; 
  const lightness = 85 + Math.floor(Math.random() * 10); 
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function genSquares(numRows) {
    const numSquares = numRows;
    const container = document.querySelector(".container");
    for (let i = 0; i < numRows; i++) {
        const newRow = document.createElement("div");
        newRow.className = "row";
        for (let j = 0; j < numSquares; j++) {
            const square = document.createElement("div");
            square.className = "square";
            square.style.backgroundColor = "white";
            square.addEventListener("mouseenter", e => square.style.backgroundColor = getRandomColor());
            newRow.appendChild(square);
        }
        container.appendChild(newRow);
    }
}

function clearSquares() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.style.backgroundColor="white");
}

function delSquares() {
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => row.remove());
}

function changeDimensions() {
    const size = prompt("Enter a size.");
    delSquares();
    genSquares(size);
}

function initBtn() {
    const btn = document.querySelector("#btn-wrapper button");
    btn.addEventListener("click", changeDimensions);
}

initBtn();
genSquares(16);

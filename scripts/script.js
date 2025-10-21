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

genSquares(16);
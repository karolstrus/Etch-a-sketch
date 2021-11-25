
function createRows (gridSize) {
    let containerArray = [];
    for (let j = 0; j < gridSize; j++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add('containerStyle');
        containerArray.push(newDiv);
    }
    return containerArray;
}

function addElements(containerArray) {
    for (let i = 0; i < containerArray.length; i++) {
        for (let j = 0; j < containerArray.length; j++ ) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("gridBox");
            containerArray[i].append(newDiv);
        }
    }
    return containerArray;
}

function createGrid(gridSize) {
    displayGridSize(gridSize);

    let containerArray = createRows(gridSize);
    let gridArray = addElements(containerArray);
    const gridFrame = document.querySelector(".containerMain");
    for (let i =0; i<gridArray.length; i++) {
        gridFrame.append(gridArray[i]);
    }

    createListeners();
}

function displayGridSize(gridSize) {
    const gridDisplay = document.querySelector(".gridSizeDisplay");
    gridDisplay.textContent = 'Current grid size: ' + gridSize + ' by ' + gridSize;
    return false
}

function createListeners() {
    let gridItems = document.querySelectorAll(".gridBox");
    let resetButton = document.querySelector(".resetButton");
    
    gridItems.forEach(function(elem) {
        elem.addEventListener("mouseover", changeColor); 
    });
    
    resetButton.addEventListener("click", resetGrid);
}

function changeColor() {
    this.style.backgroundColor = "red";
    return false
}

function resetColor(elem) {
    elem.style.backgroundColor = "whitesmoke";
    return false
}

function resetGrid() {
    let gridItems = document.querySelectorAll(".gridBox");
    gridItems.forEach(elem => resetColor(elem));
    
    setTimeout(function() {
      let size = Number(prompt("What size grid do you want(N x N): "));
      
      while (size > 100) {
          size = Number(prompt("Enter a number less than 100: "));
      }
      
      document.querySelectorAll('.containerStyle').forEach(e => e.remove());
      createGrid(size);
    }, 500);
}

let gridSize = 16;

createGrid(gridSize);






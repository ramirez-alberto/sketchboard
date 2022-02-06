/*    GENERATE LAYOUT    */

const body = document.querySelector('body');

const divButtonClear = document.createElement('div');
const buttonClear = document.createElement('button');
buttonClear.setAttribute('onclick', 'clearAndGenerateGrid()')
buttonClear.textContent = 'Clear';

body.appendChild(buttonClear);
newGrid(16);

function addClassOnMouseOver(selector,className) {
    const nodes = document.querySelectorAll(`${selector}`);

    nodes.forEach((node) =>
        node.addEventListener('mouseover', (e) =>
            e.target.classList.add(`${className}`)
        ));
    return nodes;
}

/*    Utilities     */

function newGrid(squaresPerSide) {
    const body = document.querySelector('body');

    const container = document.createElement('div');
    container.setAttribute('id', 'container');


    for (let i = 0; i < squaresPerSide; i++) {
        const divColumn = document.createElement('div');
        divColumn.setAttribute('class', 'column');


        for (let j = 0; j < squaresPerSide; j++) {
            const divRow = document.createElement('div');
            divRow.setAttribute('class', 'row');
            divColumn.appendChild(divRow);
        }
        container.appendChild(divColumn);

    }
    body.appendChild(container);
    addClassOnMouseOver('.row','square');
}

function clearAndGenerateGrid() {
    let squaresPerSide = promptForSquares();
    const container = document.querySelector('#container');
    const squares = document.querySelectorAll('.row');

    removeSquareClass(squares);
    body.removeChild(container);
    if(squaresPerSide>100) squaresPerSide = 16;
    newGrid(squaresPerSide);
}

function removeSquareClass(nodes) {
    nodes.forEach((node) => node.classList.remove('square'));
}

function promptForSquares() {
    const squaresPerSide = parseInt(prompt("How many squares per side? Max: 100", "16"));
    return squaresPerSide;
}
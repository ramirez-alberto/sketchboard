/*    GENERATE LAYOUT    */

const body = document.querySelector('body');

const divButtonClear = document.createElement('div');
const buttonClear = document.createElement('button');
buttonClear.setAttribute('onclick', 'clearAndGenerateGrid()')
buttonClear.textContent = 'Clear';

body.appendChild(buttonClear);
newGrid(16);


/*    Add listeners    */

const squares = document.querySelectorAll('.row');

squares.forEach((square) =>
    square.addEventListener('mouseover', (e) =>
        e.target.classList.add('square')
    ));

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

            if (i === 0) divRow.textContent = `${j}`;
            if (j === 0) divRow.textContent = `${i}`;



            divColumn.appendChild(divRow);
        }
        container.appendChild(divColumn);

    }
    body.appendChild(container);
}

function clearAndGenerateGrid(){
    removeSquareClass();
    const squaresPerSide = promptForSquares();
    newGrid(squaresPerSide);
}

function removeSquareClass() {
    squares.forEach((square) => square.classList.remove('square'));
}

function promptForSquares(){
    const squaresPerSide = parseInt(prompt("How many squares per side?",""));
    return squaresPerSide;
}
/*    GENERATE LAYOUT    */

const body = document.querySelector('body');

const divButtonClear = document.createElement('div');
const buttonClear = document.createElement('button');
buttonClear.textContent = 'Clear';


const container = document.createElement('div');
container.setAttribute('id', 'container');


for (let i = 0; i < 16; i++) {
    const divColumn = document.createElement('div');
    divColumn.setAttribute('class', 'column');


    for (let j = 0; j < 16; j++) {
        const divRow = document.createElement('div');
        divRow.setAttribute('class', 'row');

        if (i === 0) divRow.textContent = `${j}`;
        if (j === 0) divRow.textContent = `${i}`;



        divColumn.appendChild(divRow);
    }
    container.appendChild(divColumn);
}
body.appendChild(buttonClear);
body.appendChild(container);



/*    Add listeners    */

const squares = document.querySelectorAll('.row');

squares.forEach((square) =>
    square.addEventListener('mouseover', (e) =>
        e.target.classList.add('square')
    ));

const button = document.querySelector('button');
button.addEventListener('click', () =>
    squares.forEach((square) => square.classList.remove('square')
    )
);
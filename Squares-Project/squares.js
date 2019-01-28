const squaresContainer = document.querySelector('#squaresContainer');
const buttonContainer = document.querySelector('#buttonsContainer');
const hideAllButton = document.querySelector('#hideAll');
const showAllButton = document.querySelector('#showAll');

function getAllSquares(toggle) {
    const allSquares = document.querySelectorAll('.square');
    allSquares.forEach((square) => {
        square.style.display = toggle;
    })
}

hideAllButton.addEventListener('click', function() {
    getAllSquares('none');
})

showAllButton.addEventListener('click', function() {
    getAllSquares('');
})

const colors = ['maroon', 'cyan', 'magenta', 'dodgerBlue', 'purple', 'orange', 'pink'];

colors.forEach((color) => {
    const square = document.createElement('div');
    square.classList.add('square');
    square.id = color;
    square.style.backgroundColor = color;
    square.innerHTML = color;
    squaresContainer.appendChild(square);

    const button = document.createElement('button');
    button.id = `toggle${color}`;
    button.innerHTML = `Toggle  ${color}`
    buttonContainer.append(button);
    button.addEventListener('click', function() {
        if (square.style.display === 'none') {
            square.style.display = '';
        }
        else {
            square.style.display = 'none';
        }
    })
})
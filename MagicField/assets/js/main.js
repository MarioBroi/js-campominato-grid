/* IIFE */

/**
 * Starts the game
 */
(function () {
    // select the magic field
    const magicField = document.getElementById('field');
    // define max cells numbers

    // select the play button from the dom to start the game
    document.querySelector('form').addEventListener('submit', function (e) {

        // Prevent default behaviour
        e.preventDefault();
        //Read the selected level
        console.log(e.target.level.value);
        const cellsNumber = e.target.level.value;
        // Use the selected level to generate the magic field

        // Start the game
        console.log('Start the game - show the magic field');

        generateMagicField(magicField, cellsNumber);

    })

})();

function generateMushrooms(level) {

    const mushrooms = [];

    while (mushrooms.length < 16) {
        const randomNumber = getRndInteger(1, level);
        if (!mushrooms.includes(randomNumber)) {
            mushrooms.push(randomNumber);
        }

    }

    return mushrooms;
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 
 * @param {*} fieldDomElement 
 * @param {*} level 
 */
function generateMagicField(fieldDomElement, level) {
    // Empty the magic filed before adding new cells
    fieldDomElement.innerHTML = '';

    // generate mushrooms
    const mushrooms = generateMushrooms(level)
    console.log(mushrooms.sort((a, b) => a - b));

    // generate the magic field 🍄
    for (let i = 1; i <= level; i++) {

        // generate the single cell
        const nodeCellElement = generateMagicCell(i, level);

        console.log(nodeCellElement);

        if (mushrooms.includes(i)) {
            nodeCellElement.querySelector('span').innerText = '🍄'
        }

        // add to the cell an event listener
        attachEventToMagicCell(nodeCellElement)

        fieldDomElement.insertAdjacentElement('beforeend', nodeCellElement)

    }

}

/**
 * 
 * @param {*} node 
 */
function attachEventToMagicCell(node) {
    node.addEventListener('click', handleClick)
}

function handleClick(e) {
    // add a active class to the clicked element
    console.log(this, e); // this é il nodo della dom in questo contesto - e é l'evento triggerato
    this.classList.toggle('bg-active');
    // print into the console the cell number
    if (this.querySelector('span').innerText == '🍄') {
        this.classList.remove('bg-active');
        this.classList.add('red');
        this.querySelector('span').style.display = 'inline';
        // end game
        gameOver();
    }

    // Check if the user has clickd on the last available cell based on the field generated
    const totalCells = document.querySelectorAll('.cell').length;
    const clickedCells = document.getElementsByClassName('bg-active').length;

    if (totalCells - clickedCells === 16) {
        gameOver();
    }

}

function gameOver() {
    console.log('game over');
    // find the score
    const score = document.getElementsByClassName('bg-active').length;

    console.log('your score: ', score);
    // prevent the click to all cell
    const cells = document.querySelectorAll('.cell');

    for (let i = 0; i < cells.length; i++) {
        const node = cells[i];
        node.removeEventListener('click', handleClick);
        // Show all mushrooms when the game ends
        const spanEl = node.querySelector('span');
        if (spanEl.innerText === '🍄') {
            node.classList.add('red');
            spanEl.style.display = 'inline';
        }

    }
    const gameOverElement = document.getElementById('game-over')
    gameOverElement.style.display = 'block';
    gameOverElement.querySelector('span').innerText = score;

}

/**
 * 
 * @param {*} numb 
 * @param {*} size 
 * @returns 
 */
function generateMagicCell(numb, size) {
    const nodeCellElement = document.createElement('div');
    nodeCellElement.classList.add('cell');

    const spanEl = document.createElement('span');
    spanEl.innerText = numb;

    nodeCellElement.appendChild(spanEl);
    /* nodeCellElement.style.width = `calc(100% / ${Math.sqrt(size)})`; */

    return nodeCellElement;
}
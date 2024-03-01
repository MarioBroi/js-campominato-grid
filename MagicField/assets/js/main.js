let mushroomArray = [];
let punteggio = 0;

/**
 * Inizia il gioco IIFE
 */
(function () {
    console.log('hi there');
    // select the magic field
    const magicField = document.getElementById('field');

    // select the play button from the dom to start the game
    document.querySelector('form').addEventListener('submit', function (e) {

        // Prevent default behaviour
        e.preventDefault();
        // Read the selected level
        console.log(e.target.level.value);
        const cellsNumber = e.target.level.value;
        // Use the selected level to generate the magic field

        // Start the game
        console.log('Start the game - show the magic field');

        generateMagicField(magicField, cellsNumber);

        //- (while) lopp over until the empty array has 16 elements (not repeated)
        while (mushroomArray.length < 16) {
            // inside the loop
            //console.log(cellsNumber);

            const randomNumber = getRandomInteger(1, cellsNumber);
            //console.log(randomNumber);

            // check if the number is already inside the array?
            if (!mushroomArray.includes(randomNumber)) {
                // otherwise push it
                mushroomArray.push(randomNumber);
            }
            console.log(mushroomArray);
        };

    });

})();

/**
 * Crea un numero random tra la difficoltá scelta
 * @param {number} min 
 * @param {number} max 
 * @returns 
 */
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Genera il campo prima pulendo il campo stesso, 
 * poi richiama la funzione generateMagicCell loopata in base alla difficoltá
 * @param {*} fieldDomElement 
 * @param {*} level 
 */
function generateMagicField(fieldDomElement, level) {
    // Empty the magic filed before adding new cells
    fieldDomElement.innerHTML = '';
    // generate the magic field 🍄
    for (let i = 1; i <= level; i++) {

        // generate the single cell
        const nodeCellElement = generateMagicCell(i, level);

        //console.log(nodeCellElement);

        // add to the cell an event listener
        attachEventToMagicCell(nodeCellElement);

        fieldDomElement.insertAdjacentElement('beforeend', nodeCellElement);

    };

};

/**
 * Al click sul nodo a questo viene aggiunta la classe bg-active
 * @param {*} node 
 */
function attachEventToMagicCell(node) {
    node.addEventListener('click', handleClick);
}

function handleClick(e) {
    // add a active class to the clicked element
    //console.log(this, e); // this é il nodo della dom in questo contesto - e é l'evento triggerato
    console.log(parseInt(this.innerText));

    if (mushroomArray.includes(parseInt(this.innerText)) == true) {
        console.log('perso');

        this.classList.toggle('red')
        this.innerText = '⚰️';
        //print the class whit red color
        /* 
                (!alert('You Lose, want to retry?')) {
                    wondow.location.reload();
                } */
    } else {
        console.log('vinto');
        this.classList.toggle('green')
        punteggio = punteggio + 1
        console.log(punteggio);
        //print the class whit green color
    }

}

function gameOver() {
    const score = document.getElementsByClassName('red').length;

    const cells = document.querySelectorAll('cells');

    for (let i = 0; i < cells.length; i++) {
        const node = cells[i];
        node.removeEventListener('click', handleClick)
    }
}

/**
 * Generate a cell whit a div, class cell and number inside
 * @param {*} numb 
 * @param {*} size 
 * @returns 
 */
function generateMagicCell(numb, size) {
    const nodeCellElement = document.createElement('div');
    nodeCellElement.classList.add('cell');
    nodeCellElement.innerText = numb;

    return nodeCellElement;
}
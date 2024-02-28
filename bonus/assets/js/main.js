//console.log('test');

//- Creare il bottone di inizio e collegerlo al main.js con la funzione onclick ✔
const buttonElement = document.querySelector('.start-button');

buttonElement.addEventListener('click', function () {

    //Definisco l'area di lavoro
    const container = document.querySelector('.container');
    //console.log(container);

    //Definisco la difficoltá selezionata
    const difficulty = parseInt(document.getElementById("difficulty").value);
    //console.log(difficulty); //valore della select

    //- Moltiplico il numero di celle per se stesso in modo tale da avere il num di celle corretto
    const gridSize = difficulty * difficulty;
    //console.log(gridSize);

    //Pulisco il container dal bottone e lo preparo per le caselle
    container.innerHTML = "";

    //Cambiamo impaginazione in base alla difficoltá
    if (difficulty === 7) {
        container.classList.add('easy-container');
        container.classList.remove('medium-container', 'hard-container');
    } else if (difficulty === 9) {
        container.classList.add('medium-container');
        container.classList.remove('easy-container', 'hard-container');
    } else if (difficulty === 10) {
        container.classList.add('hard-container');
        container.classList.remove('easy-container', 'medium-container');
    }

    //- Creare la griglia in base alla difficoltá scelta
    for (let i = 0; i < gridSize; i++) {
        //- Creo un elemento div e aggiungo la classe square
        const slot = document.createElement('div');
        slot.classList.add('square');

        //- la griglia deve avere un numero univoco tra 1 e il massimo dettato dalla difficoltá
        slot.innerText = i + 1;
        //console.log(slot);

        //- Al cliccare della della cella, si aggiungerá la classe con il color azzurro e apparirá in console con il cell number
        //- Rendo cliccabile il quadrato generato
        slot.addEventListener('click', function () {
            this.classList.toggle('active');
            console.log(this.innerText);
        })

        //- Aggiungo la casella a container
        container.append(slot);
    }

})
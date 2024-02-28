//console.log('test');


//- Creare il bottone di inizio e collegerlo al main.js con la funzione onclick ✔
const buttonElement = document.querySelector('.start-button')
buttonElement.addEventListener('click', function () {

    //Definisco l'area di lavoro
    const container = document.querySelector('.container')
    //console.log(container);

    //Pulisco il container dal bottone e lo preparo per le caselle
    container.innerHTML = "";

    //- Creare uno script che genera una griglia da 10 righe 
    //- la griglia deve avere un totale di 10 caselle
    for (let i = 0; i < 100; i++) {
        //- Creo un elemento div e aggiungo la classe square
        const slot = document.createElement('div');
        slot.classList.add('square');

        //- la griglia deve avere un numero univoco tra 1 e 100
        slot.innerText = i + 1
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

//console.log('test');

let container = document.getElementsByClassName('container')
//console.log(container);

//- Creare il bottone di inizio e collegerlo al main.js con la funzione onclick ✔

//- Creare uno script che genera una griglia da 10 righe 
//- la griglia deve avere un totale di 10 caselle
for (let i = 0; i < 100; i++) {
const slot = document.createElement("div");
slot.classList.add("square");

//- la griglia deve avere un numero univoco tra 1 e 100
slot.innerText = i + 1
console.log(slot);

}

//- Al cliccare della della cella, si aggiungerá la classe con il color azzurro e apparirá in console con il cell number
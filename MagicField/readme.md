# Instructions
- L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
- Ogni cella ha un numero progressivo, da 1 a 100.
- Ci saranno quindi 10 caselle per ognuna delle 10 righe.
- Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

## Steps
- Creare il bottone di inizio e collegerlo al main.js con la funzione onclick
- Creare uno script che genera una griglia da 10 righe 
    - la griglia deve avere un totale di 10 caselle
    - la griglia deve avere un numero univoco tra 1 e 100
- Al cliccare della della cella, si aggiungerá la classe con il color azzurro e apparirá in console con il cell number

## New Milestone
- Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: i funghi magici.
- Attenzione: nella stessa cella può essere posizionato al massimo un fungo, perciò nell’array dei funghi non potranno esserci due numeri uguali.
- In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati
    - abbiamo calpestato una fungo
    - la cella si colora di rosso e la partita termina.
- Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
- La partita termina quando il giocatore clicca su una fungo o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono funghi).
- Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una fungo.


### Steps
- create a random number function to generate a number between min and max (1-100, 1-81, 1-49)

- create an empty mushroomArray

- (while) loop over until the empty array has 16 elements (not repeated)
    - check the generated number is includeed for tyhe mush array
    - if not push the number in array

- read the numbers of the clicked cell

- check if the clicked cell's number is included inside the mush array

- if true 
    - pain the cell to red
    - end the game console.log('end game')
- else
    - paint the cell of green

- keep the count of the clicked cells

- end the game
    - when the num of clicked cell is = to the tot num of cells - numbs of mush you win

- prevent the user clicking again after the game is over
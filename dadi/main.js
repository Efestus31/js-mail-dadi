/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

//inizializzare le variabili
let player = Math.floor(Math.random() * 6) + 1;
let computer = Math.floor(Math.random() * 6) + 1;
//funzione math.random

//funzione i/elseif/else per confontare i numeri e stabilire quale sia quello maggiore
//all'interno della funzione dichiariamo anche il vincitore
if(player > computer){
    console.log('Vince il giocatore!'); 
    console.log(player, computer);
       
} else if(computer > player) {
    console.log('Vince il computer!');
    console.log(computer, player);
    
    
} else{
    console.log('Parità');
    console.log(computer, player);
    
}

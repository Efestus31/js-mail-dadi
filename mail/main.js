//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.  


//creo una lista usando un array
let email_autorizzate = [
    "mario.rossi@gmail.com",
    "lucia.bianchi@gmail.com",
    "carlo.verdi@gmail.com",
    "anna.gialli@gmail.com",
    "marco.neri@gmail.com",
    "biagiohd@gmail.com"
];
let trovata = false;


//prompt utente per inserire la propria mail
let email_da_autorizzare =prompt("ciao, inserisci la tua mail da verificare!");

//verifico che l'email fornita dall'utente sia nella lista
for(let i = 0; i < email_da_autorizzare.length; i++){
    if(email_autorizzate[i] === email_da_autorizzare){
        trovata = true; //email trovata
        break; //esci dal ciclo
    }
}
//messaggio di conferma
if(trovata){
    alert("accesso consentito!");
} else{
    alert("accesso negato!");
}
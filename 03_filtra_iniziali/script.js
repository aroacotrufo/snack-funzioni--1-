/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function iniziali (array, lettera){

    const inizialiNomiCon =[]; //array vuoto
    for (let i = 0; i<array.lenght; i++){
     if (array [i][0] === lettera){ //cerca la lettera che gli do nelle iniziali dei nomi
        result.push(array[i]);
     }
     return result;
    }
}
// Invoca la funzione qui e stampa il risultato in console

console.log(iniziali(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function contatore(val) {
    const vowels = "aeiou"
    let count = 0
for (let i = 0; 0 < val.lenght; i++){
    if (vowels.includes(val[i])){
        count++;
    }
}
return count;
}
// Invoca la funzione qui e stampa il risultato in console

console.log(contatore (word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
//chiedere numero di chilometri
const distance = parseInt( prompt('Quanti chilometri devi percorrere?') );
console.log('Distanza da percorrere', distance);
console.log(typeof distance);


//chidere età del passeggero
const age = parseInt( prompt('Quale è la tua età?'));
console.log('Età Viaggiatore', age);
console.log(typeof age);

//prezzo biglietto
let price = distance * 0.21;
console.log(price);
console.log(typeof price);

//sconto 20% se minorenne
//sconto 40% se over 65
// calcolo prezzo finale
//output
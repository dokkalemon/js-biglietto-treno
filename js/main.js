//chiedere numero di chilometri
const distance = parseInt( prompt('Quanti chilometri devi percorrere?') );
console.log('Distanza da percorrere', distance);
console.log(typeof distance);


//chidere età del passeggero
const age = parseInt( prompt('Quale è la tua età?'));
console.log('Età Viaggiatore', age);
console.log(typeof age);

//prezzo biglietto
let normalPrice = distance * 0.21;
console.log('Prezzo Intero',normalPrice);
console.log(typeof normalPrice);

//sconto 20% se minorenne
const underageDiscount = normalPrice * 20 / 100;
console.log('Sconto Minorenni', underageDiscount);


//sconto 40% se over 65
// calcolo prezzo finale
//output
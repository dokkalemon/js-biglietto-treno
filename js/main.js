//chiedere numero di chilometri
const distance = parseInt( prompt('Quanti chilometri devi percorrere?') );

console.log(isNaN(distance))
//chidere età del passeggero
const age = parseInt( prompt('Quale è la tua età?'));


//prezzo biglietto
let normalPrice = distance * 0.21;
let normalPriceRounded = normalPrice.toFixed(2);


//sconto 20% se minorenne
const underageDiscount = normalPrice * 0.2;

//sconto 40% se over 65
const adultDiscount = normalPrice * 0.4;

/* calcolo prezzo finale */
//PREZZO MINORENNI
const underagePrice = normalPrice - underageDiscount;
const underagePriceRounded = underagePrice.toFixed(2);

//PREZZO OVER 65
const adultPrice = normalPrice - adultDiscount;
let adultPriceRounded = adultPrice.toFixed(2);

//output
if ((isNaN(distance) == true) || (isNaN(age) == true)) {
    alert('Inserisci i valori in numeri');
    document.getElementById('result').innerHTML = `Prezzo non Calcolabile`
} else if (age <= 18) {
    document.getElementById('result').innerHTML = `Il prezzo del biglietto è ${underagePriceRounded}€`;
} else if (age >= 65) {
    document.getElementById('result').innerHTML = 'Il prezzo del biglietto è ' + adultPriceRounded + '€';
} else if ((age >= 19) || (age <=64)){
    document.getElementById('result').innerHTML = `Il prezzo del biglietto è ${normalPriceRounded}€`
} 




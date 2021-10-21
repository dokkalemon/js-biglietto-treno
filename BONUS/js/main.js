//chiedere numero di chilometri
const distance = parseInt( prompt('Quanti chilometri devi percorrere?') );

//chidere età del passeggero
const age = parseInt( prompt('Quale è la tua età?'));

//prezzo al km
const kmNormalPrice = 0.21;

const kmUnderagePrice = kmNormalPrice - (kmNormalPrice * 0.2);

const kmAdultPrice = kmNormalPrice - (kmNormalPrice * 0.4);

//prezzo biglietti
const normalTicket = distance * kmNormalPrice;
const normalTicketRounded = normalTicket.toFixed(2);

const underageTicket = distance * kmUnderagePrice;
const underageTicketRounded = underageTicket.toFixed(2);

const adultTicket = distance * kmAdultPrice;
const adultTicketRounded = adultTicket.toFixed(2);

//output

if (age <= 18) {
    document.getElementById('result').innerHTML = `Il prezzo del biglietto è ${underageTicketRounded}€`
} else if (age >= 65) {
    document.getElementById('result').innerHTML = `Il prezzo del biglietto è ${adultTicketRounded}€`
} else {
    document.getElementById('result').innerHTML = `Il prezzo del biglietto è ${normalTicketRounded}€`
}
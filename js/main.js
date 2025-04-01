//# RACCOLTA DATI

const km = parseInt(prompt(`Quanti chilometri vuoi percorrere?`));
const age = parseInt(prompt(`Quanti anni hai?`));

console.log(km);
console.log(age);

if ((km > 0 && !isNaN(km)) && (age > 0 && !isNaN(age))){

} else {
    alert(`I dati inseriti non sono corretti!`);
}

//# SVOLGIMENTO

const price = 0.21 * km;
let discountPerc;
let discountAmount;
let finalPrice;

if (age < 18) {
    discountPerc = 20;
    discountAmount = price * discountPerc / 100;
    finalPrice = price - discountAmount;
} 
else if (age > 65) {
    discountPerc = 40;
    discountAmount = price * discountPerc / 100;
    finalPrice = price - discountAmount;
}
else {
    finalPrice = price;
}

//# OUTPUT

alert(`Il prezzo del biglietto del treno è € ` + finalPrice.toFixed(2));


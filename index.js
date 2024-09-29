const day = 1000 * 60 * 60 * 24;
const today = new Date();
const carnaval = new Date(2025, 2, 2);

var date_difference = Math.ceil((carnaval - today) / day);

document.querySelector("p.dias").innerHTML = date_difference + " dias";

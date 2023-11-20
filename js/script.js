// Variabile distanza km da percorrere
let distance_km = prompt("Quanti km dovrai percorrere?");

// Variabile età dell'utente
let age = prompt("Quanti anni hai?");

// Variabile prezzo del biglietto
let price_ticket = distance_km * 0.21;

// Sè l'utente avrà meno di 18 anni verra applicato il 20% di sconto
if (age < 18) {
    discount = (price_ticket * 20) / 100;
    price_ticket -= discount
} 
// Sè l'utente avrà più di 18 anni ma meno di 65 verra applicato il 40% di sconto
else if (age > 65) {
    discount = (price_ticket * 40) / 100;
    price_ticket -= discount
}

console.log(price_ticket.toFixed(2));
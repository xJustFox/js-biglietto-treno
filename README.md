## esercizio di oggi: calcolo del prezzo del biglietto del treno
cartella/repo js-biglietto-treno

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo) in console.log()

### BONUS
1 - Mostrare il risultato a video in html;
2 - Stilizzare con i css la pagina



### Problem solving
1- Inizializzare la variabile "distance_km"
    1.1- Far definire il valore attraverso promt all'utente
2- Inizializzare la variabile "age"
    2.1- Far definire il valore attraverso promt all'utente
3- Inizializzare la variabile "price_ticket"
    3.1- Definire il valore del bigletto in base ai km da percorrere (0.21 € al km)
4- Creare un if else per applicare gli sconti in base all'età
5- Visualizzare il risultato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo)
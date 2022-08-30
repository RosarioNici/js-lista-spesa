/*Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
- Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while
Buon lavoro a tutte e a tutti!!*/



console.log('JS is OK!')


let list = ['Uova', 'Pecorino', 'Pepe', 'Guanciale', 'Rigatoni']

let markets = ['Esselunga', 'Carrefour', 'Lidl', 'Aldi', 'EuroSpin']


let lap = -1;
let marketLap = -1;
while (lap < list.length - 1) {
    lap++;
    console.log(lap, list[lap])
    const messageList = document.getElementById('list')
    messageList.innerHTML += `<li class="py-3 item">${list[lap]}</li>`
}



while (marketLap < markets.length - 1) {
    marketLap++;
    console.log(marketLap, markets[marketLap])

    const messageListMarkets = document.getElementById('list-market')
    messageListMarkets.innerHTML += `<li class="py-3 item">${markets[marketLap]}</li>`
}

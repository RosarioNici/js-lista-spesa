/*Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
- Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while
Buon lavoro a tutte e a tutti!!*/



console.log('JS is OK!')


let list = ['Uova', 'Pecorino', 'Pepe', 'Guanciale', 'Rigatoni', 'Pepe rosa']

let markets = ['Esselunga', 'Carrefour', 'Lidl', 'Aldi', 'EuroSpin']
const linkSupermercati = ['www.esselunga.it', 'www.carrefour.it', 'www.lidl.it', 'www.aldi.it', 'www.eurospin.it']


let lap = -1;
let marketLap = -1;
let linkLap = -1;


while (lap < list.length - 1) {
    lap++;
    console.log(lap, list[lap])
    const messageList = document.getElementById('list')
    messageList.innerHTML += `<li class="py-3 item">${list[lap]}</li>`
}


while (linkLap < linkSupermercati.length - 1) {
    linkLap++;
    console.log(linkSupermercati[linkLap])
}



while (marketLap < markets.length - 1) {
    marketLap++;
    console.log(marketLap, markets[marketLap])

    const messageListMarkets = document.getElementById('list-market')
    messageListMarkets.innerHTML += `<li class="py-3 item"><a href="${linkSupermercati[linkLap]}">${markets[marketLap]}</a></li>`
}




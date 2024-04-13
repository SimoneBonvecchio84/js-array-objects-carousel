#CREA CAROSELLO
Crea carosello come nella foto allegata.

Milestone 1:
  Nel markup allegato rimuoviamo i contenuti statici e usiaomo l'array di oggetti letterali per popolare
  dinamicamente il carosello.
  
  al click dell utente  sulle frecce verso sinistra o destra, l 'immagine attiva con i relativi titolo e testo diventerà visibile.

Svolgimento Primo Milestone

 Creao variabile nella quale deposito collegameto per il dom che mi servirà per inserire il contenuto da js dinamicamente.

 creo ciclo forEach tramite arrow function e testo tramite console.log se tutte le key dell oggetto sono visibili.
 e come parametro do oggetto corrente = curElem ne quale inserirò attraverso teplate literals tag HTML.
 Nei tag tramite sintassi dollaro graffe inserisco le varie key degli oggetti del mio array.   

Milestone 2:

Aggiungere ciclo infinito del carosello. Ovvero
se la miniatura attiva è la prima e l utente clicca la freccia verso destra, miniatura che deve attivarsi sarà l ultima e viceversa
 
 creo una node list ovvero
 deposito nella variabile myCarouselItem il collegamento attraverso querySelectorAll al
 l elemento HTML my-carousel-item.
 
 Il mio elemento corrente imgIndex sarà associato alla classe css active attraverso questa linea di codice:
 myCarouselItem[imgIndex].classList.add("active");
 Questa istruzione aggiunge all'elemento corrente la classe active

 collego degli eventi alle icone sia di sinistra che di destra

 BOTTONE NEXT
 Collego evento click al bottone di sinistra
 e creo una funzione nextImg
 All'interno della quale 
 aggiungo 
 myCarouselItem[imgIndex].classList.remove("active");
 Dunque rimuovo dall elemento corrente la classe active
 ogni volta che faccio click sul bottone
 
 Creo condizione
  se 
   imgIndex è minore della nodelist myCarouselItem.length -1 incrementa il mio indice ad ogni click
   aggiungendo la classe active all elemento corrente

  altrimenti
   se il mio elemento corrente sarà = 0 
   aggiungo la classe active all elemento corrento ovvero ad index 0, che corrisponde alla nostra prima immagine
   creando così un ciclo infinito.

 BOTTONE PREV
 Collego evento click al bottone di destra
 creo funzione prevImg
 imposto all elemento corrente la classe active disattivata
 come fatto precedentemente con il bottone diu sinistra

 Creo condizione
  se 
   il mio elemento corrente è maggiore di 0 
   decremento il mio indice ad ogni click e aggiungo la 
   calsse active all elemento corrente.

  altrimenti
   se il mio elemento corrente è uguale ad myCarouselItem.length - 1 ovvero all ultimo indice aggiungo la classe 
   active creando così un ciclo infinito.

 
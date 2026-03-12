/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function (l1, l2) {
  let areaRettangolo = l1 * l2;
  console.log("L'area del rettangolo è", areaRettangolo);
};

area(10, 15);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (n1, n2) {
  if (n1 === n2) {
    let somma = n1 + n2;
    let prodotto = somma * 3;
    console.log("Ho sommato e poi moltiplicato per tre", prodotto);
    return prodotto;
  } else {
    let somma = n1 + n2;
    console.log("Ho sommato i due numeri", somma);
    return somma;
  }
};

crazySum(4, 4);
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (n1, n2 = 19) {
  if (n1 > n2) {
    let differenza = Math.abs(n1 - n2);
    let diffPerTre = differenza * 3;
    console.log("la diff. assoluta moltiplicata per tre è", diffPerTre);
    return diffPerTre;
  } else {
    let differenza = Math.abs(n1 - n2);
    console.log("la differenza assoluta è", differenza);
    return differenza;
  }
};

crazyDiff(20);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};

console.log(boundary(101));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (parola) {
  if (parola === "EPICODE") {
    return parola;
  } else {
    stringaCompleta = "EPICODE " + parola;
    return stringaCompleta;
  }
};

console.log(epify("Accademy"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (n) {
  if (n % 3 === 0 && n % 7 === 0) {
    console.log("il numero è multiplo di entrambi i valori");
  }else if(n===3){
    console.log("il numero è 3 ")
  }else if(n===7){
    console.log("il numero è 7 ")
  }else if (n % 3 === 0) {
    console.log("il numero è multiplo di 3 ");
  } else if (n % 7 === 0) {
    console.log("il numero è multiplo di 7 ");
  } else {
    console.log("il numero non è multiplo dei valori indicati");
  }
};

check3and7(31);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function(parola){
    let parolaInvertita = ""
    for(let i = parola.length -1; i >= 0; i--){
        parolaInvertita = parolaInvertita + parola[i]
    }
    return parolaInvertita
}

console.log(reverseString("biagio"))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = function(stringa){
    let parolaSingola = stringa.split(" ")
    let tuttoInMaiuscolo = ""

    for(let i = 0 ; i < parolaSingola.length; i++ ){
        tuttoInMaiuscolo = tuttoInMaiuscolo + parolaSingola[i][0].toUpperCase() + parolaSingola[i].slice(1) + " "
    }
    return tuttoInMaiuscolo
}
console.log(upperFirst("ti piace il gelato?"))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function(stringa){
    let parolaTagliata = ""
    let firstLetter = stringa.slice(0,1)//FORSE NON SERVIVA???
    let lastLetter = stringa.slice(length - 1)//FORSE NON SERVIVA???
    let body = stringa.slice(1,stringa.length -1 )
    parolaTagliata = body
    return parolaTagliata
}

console.log(cutString("parola"))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function(n){
    let array = []
    for(let i = 0; i < n; i++){
      numeroCasuale = Math.ceil(Math.random()*10)  
      array.push(numeroCasuale)
    }
    return array
}

console.log(giveMeRandom(17))
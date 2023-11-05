// esercizio 1 
// conta gli elementi contenenti nell'arrey e restituisce un numero intero 

//const myArray = ["primo", "secondo", "terzo"];

//function contaElementi() {
   
//    const lunghezza = parseInt(myArray.length);
    //console.log(myArray.length) LASCIA COMMENTATO

//    return lunghezza;
//}

//const lunghezza = contaElementi();
//console.log(lunghezza)







// esercizio 2
// stampa ogni elemento dell'array in una stringa con la virgola 

//const myArray = ["primo", "secondo", "terzo"];

//function stampa() {
    
//    const myString = myArray.join(", ");

//    return myString;
//}

//const result = stampa();
//console.log(result);








// esercizio 3 
// dato un array A in input, restituisce array B con tutti gli elementi di A, tranne l'ultimo

//let myArray = ["primo", "secondo", "terzo", "quarto"];
//    console.log(myArray);
//    let secondArray = [];

//function togliDallaCoda() {

//for (let i = 0; i < myArray.length - 1; i++) {
//    secondArray.push(myArray[i]);
    
    //console.log(secondArray); //LASCIA COMMENTATO
//}

//return secondArray;
    
//}

//const result = togliDallaCoda();
//console.log(result);








// esercizio 4.1
// dato un array A e un elemento da inserire E, restituisca un nuovo array B con tutti gli elementi di A e come ultimo elemento E

//const myArray = ["A", "B", "C", "D",];
//const elemArray = [",E"];

//function inserisciInCoda() {
    
  //  const secondArray = [myArray + elemArray];
    
    //console.log(secondArray); //LASCIA COMMENTATO
    
    //return secondArray;
//}

//const result = inserisciInCoda();
//console.log(result);



  



// esercizio 4.2
// dato un array A di input, restituisce array B con tutti gli elementi di A scalati di una posizione verso sinistra e senza il primo elemento 

//let myArray = ["primo", "secondo", "terzo", "quarto"];
//    console.log(myArray);
//    let secondArray = [];

//function togliDallTaesta() {
    
//    for (let i = 1; i < myArray.length; i++) {
//        secondArray.push(myArray[i]);
        
        //console.log(secondArray); //LASCIA COMMENTATO
//    }
    
//    return secondArray;
//}
    

//const result = togliDallTaesta();
//console.log(result);










// esercizio 5
// dato un array A in input e un elemento da inserire E, restituisce un nuovo array B con tutti gli elementi da A scalati di una posizione verso destra e l'ultimo elemento E come primo elemento

//const myArray = ["A", "B", "C", "D",];
//const elemArray = [",E"];

//function inserisciInTesta() {
    

//    const secondArray = [elemArray + myArray];
    
    //console.log(secondArray); //LASCIA COMMENTATO
    
//    return secondArray;
//}


//const result = inserisciInTesta();
//console.log(result);








// esercizio 6
// dati due array A e B, restituisce un nuovo array C con tutti gli elementi di A e di B

//const myArray = ["primo", "secondo", "terzo"];
//const secondArray = [",quarto", "quinto", "sesto"];

//function unisci() {
    
//    const resultArray = [myArray + secondArray];
    //console.log(resultArray); LASCIA COMMENTATO

//    return resultArray;
//}

//const result = unisci();
//console.log(result)










// esercizio 7 
// dato un array A in input e un elemento E, restituisce true se l elemento E è presente nell'array A, false altrimenti

//const myInput = prompt("scrivi una parola");
//const letter = [];

//function cerca() {
    
//    for (let i = 0; i < myInput.length; i++) {
//        letter.push(myInput[i]);
        //console.log(letter); LASCIA COMMENTATO
        
//        if (myInput.includes("e")) {
//            console.log(true);
//        } else {
//            console.log(false);
//        }
//    }
    
//}
 
//const result = cerca();
//console.log(result);









// esercizio 8 
// dato un array A in input e un elemento E, restituisce l'indice della posizione in cui si trova tale elemento all' interno di A. se l' elemento E non è presente in A, la funzione restituisce il valore -1

//const myInput = prompt("scrivi una parola");
//function cercaIndice() {
    

//    for (let i = 0; i < myInput.length; i++) {
        
        //console.log(myInput[i]); //LASCIA COMMENTATO
        
//        if (myInput.includes("e")) {
//            console.log(myInput.indexOf("e"));

//        } else {
//            console.log(-1);
//        }
//    }

//}

     
//cercaIndice(myInput);










// esercizio 9 
// dato un array A in input, restituisce un nuovo array B con tutti gli elementi di A in ordine crescente 

function ordina() {
    
}
const myNumbers = parseInt(prompt("scrivi 5 numeri"));
const myArray = [];



for (let i = 0; i < myNumbers.length; i++) {
  
    console.log(myNumbers[i]);
}
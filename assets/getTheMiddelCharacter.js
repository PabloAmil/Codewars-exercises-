// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"


let string = "abcde"

function getMiddle(string) {

    console.log(string);
    let rest = string.split("")
    console.log(rest)
    
    if (rest.length % 2 == 0) {

        let esPar = (rest.length /2);
        let devolverPar = rest.splice((esPar - 1), 2);
        let toStringEven = devolverPar.join("");
        console.log(toStringEven);
        return toStringEven;
        
    } else if (rest.length % 2 !== 0) {

        let esImPar = (rest.length /2);
        let devolverImpar = rest.splice(esImPar, 1);
        let toStringOdd = devolverImpar.join("");
        console.log(toStringOdd);
        return toStringOdd;
    }
};

getMiddle(string);
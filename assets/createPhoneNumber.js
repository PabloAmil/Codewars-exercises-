

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

let phoneNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber(numbers){
  
    let areaCode = numbers.slice(0,3);
    let fist3Digits = numbers.slice(3,6);
    let last4Digits = numbers.slice(6,10);

    let areaCodeToS = areaCode.join("");
    let fist3DigitsToS = fist3Digits.join("");
    let last4DigitsToS = last4Digits.join("");

    let comb1 = fist3DigitsToS + "-" +last4DigitsToS;
    
    let comb2 = `(${areaCodeToS}) `

    let result = `${comb2 + comb1}`;

    return result;
}

createPhoneNumber(phoneNumber);

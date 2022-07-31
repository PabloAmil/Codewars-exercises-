// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"

const stringu = "camelCasinG";

function solution(string) {

    let newString = '';

    for (let i = 0; i < string.length; i++) {
    if (string[i] ==  string[i].toUpperCase()) {
            newString += " " + string[i]
        } else {newString += string[i]};
    };
    return newString;
};

solution(stringu);

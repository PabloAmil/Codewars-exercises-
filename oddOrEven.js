
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

let array = [1,2,4]

function oddOrEven(array) {

    let total = array.reduce((acumulador, numero) => {

        return acumulador + numero;
    
    }, 0)
    console.log(total);

    if (total % 2 == 0) {
        return 'even'
    } else {return'odd'}

};

oddOrEven(array);
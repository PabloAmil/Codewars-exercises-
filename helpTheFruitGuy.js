
// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

// Notes
// If the array is null/nil/None or empty you should return empty array ([]).
// The rotten fruit name will be in this camelcase (rottenFruit).
// The returned array should be in lowercase.





function removeRotten(bagOfFruits){

    let goodFruits = [];
    if (bagOfFruits == [] || bagOfFruits == undefined || bagOfFruits == null) {
        return []
    } else {
        bagOfFruits.forEach(fruit => {
        if (fruit.includes('rotten')) {
            for (let i = 0; i < fruit.length; i++) {
                if (fruit[i] === fruit[i].toUpperCase()) {
                    let nocap = fruit.split(fruit[i]);
                    let complete = fruit[i][0] + nocap[1];
                    goodFruits.push(complete.toLowerCase());
                };
            };
        } else {goodFruits.push(fruit.toLowerCase())};
    })
    console.log(goodFruits)
    return goodFruits;
    } 
}
removeRotten(['apple',"rottenBanana"])
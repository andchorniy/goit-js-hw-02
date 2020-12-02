const findLongestWord = function (string) {
    const array = string.split(' ');
    let longestWorld = array[0];
    for (const item  of array) {
        if (longestWorld.length < item.length) {
            longestWorld = item;
        }
        
    }
    return longestWorld;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
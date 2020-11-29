const findLongestWord = function (string) {
    const array = string.split(' ');
    let longestWorld = array[0];
    for (let i = 1; i < array.length; i += 1) {
        if (longestWorld.length < array[i].length) {
            longestWorld = array[i];
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
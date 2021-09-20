/* *****
 * *****
 * ***** CLASH OF CODE ********
 * *****
 * *****
*/

/**
 * Sum of letter into string
 * @param line
 */
const sumOfStrChars = (line) => {
    let value = 0;
    for (let i = 0; i < line.length; i++) {
        if (line.charAt(i) !== ' ') value += line.charAt(i).charCodeAt(0);
        if (line.charAt(i) === ' ' && i < line.length) { //regex for line.charAt(i) === ' '  ==> /\s/g.test(line)
            value = 0
        }
    }
    return value
}
/**
 * Nombre d'apparition d'un character dans une phrase
 * @param character le charactère recherché dans la chaine
 * @param str la chaine dans laquelle se fait la recherche
 * @returns {number}
 */
const letterAppears = (character, str) => {
    return (str.match(new RegExp(character, "g")) || []).length
}

//print(letterAppears('o','Bonjour'));
/**
 *
 * @param m
 * @param n
 * @returns {*|number|number}
 */
function ack(m, n) {
    if (m < 0) return -1;
    return m === 0 ? n + 1 : ack(m - 1, n === 0 ? 1 : ack(m, n - 1));
}
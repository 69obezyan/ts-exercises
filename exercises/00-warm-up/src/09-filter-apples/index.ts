/**
 * Write a function that removes all values from the given array that do not equal the word "apple".
 * 
 * Example
 * 
 * Input: ["STARWARS", "apple", "potato", "apple"]
 * Output: ["apple", "apple"]
 */

function filterApples(input: string[]) { 
    const arr = [];
    for (let i = 0; i < input.length; i++) {
        if(input[i] === 'apple') {
            arr.push(input[i]);
        }
    }
    return arr;
}

export { filterApples };
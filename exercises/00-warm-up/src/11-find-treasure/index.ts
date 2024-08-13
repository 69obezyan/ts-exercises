/**
 * Write a function that returns the index of the word "treasure" from the given array.
 * 
 * Example
 * 
 * Input: ['sand', treasure', 'boot']
 * Output: 1
 */

function findTreasure(input: string[]) {
    // for (let i = 0; i < input.length; i++) {
    //     if (input[i] === 'treasure') {
    //         return i;
    //     }

    // }
    // return -1;
    return input.findIndex(element => element === 'treasure')
}

export { findTreasure };
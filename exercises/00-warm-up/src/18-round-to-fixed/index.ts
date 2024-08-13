/**
 * Write a function that rounds up the given number to two decimal places.
 * 
 * Example
 * 
 * Input: 4.555
 * 
 * Output: 4.56
 */

function roundTofixed(input: number) {
    const toFixed = input.toFixed(2);
    return parseFloat(toFixed);
 }

export { roundTofixed };
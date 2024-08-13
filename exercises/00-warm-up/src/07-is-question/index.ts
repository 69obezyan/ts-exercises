/**
 * Write a function that returns true if the given string ends with a question mark, false if not.
 * 
 * Example
 * 
 * Input: "French fries?"
 * Output: true
 */

function isQuestion(input: string) { 
    const lastLetter = input.length - 1;
    // if(input[lastLetter] === '?') {
    //     return true;
    // } else{
    //     return false;
    // }
    return input[lastLetter] === '?';
}

export { isQuestion };
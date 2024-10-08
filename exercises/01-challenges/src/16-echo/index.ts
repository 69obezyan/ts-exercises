/**
 * You and your friends are visiting a huge cave and one of you decides to yell "Hello". To your surprise the cave answers.
 * Create a function that takes two parameters the first parameter is the string to be repeated and the second 
 * parameter is the number of times the string is to be repeated.
 */

function echo(text: string, repetition: number) {
    let result = '';
    for (let i = 0; i < repetition; i++) {
        result += text;  
    }
    return result;
 }

export { echo };
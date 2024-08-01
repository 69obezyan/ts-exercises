/**
 * Write a function that converts the given array of words into a sentence.
 * All words in the sentence should be separated by a comma and a space.
 * Return the result.
 * 
 * Example
 * 
 * Input: ["Banana", "apple"]
 * Output: "Banana, apple"
 */

function arrayToString(input: string[]) {
    let output = "";
    let isOnlyOneElement = input.length === 1;
    for (let i = 0; i < input.length; i++) {
        output += input[i];
        if (!isOnlyOneElement && i < input.length - 1) {
            output += ', ';
        }
    }
    return output;
}

export { arrayToString };

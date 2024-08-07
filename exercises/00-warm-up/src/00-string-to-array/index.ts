/**
 * Write a function that converts the given string to an array of it's characters.
 * Return the result.
 * 
 * Example
 * 
 * Input: "Kitten"
 * Output: ["K","i","t","t","e","n"]
 */
function stringToArray(input: string) {
    const arr = [];
    for (let i = 0; i < input.length; i++) {
        arr.push(input[i]);
    }
    return arr; 
}

export { stringToArray };

/**
 * You have decided to teach programming at a kindergarten, but you cannot understand half of what the children are saying.
 * Write a function that reverses all the words in a sentence that start with a particular letter.
 */

function kindergarten(sentence: string, letter: string) {
    let words = sentence.split(' ');

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        // Check if the word starts with the given letter (case-insensitive)
        if (word.charAt(0).toLowerCase() === letter.toLowerCase()) {
            // Reverse the word
            words[i] = word.split('').reverse().join('');
        }
    }
    return words.join(' ');
 }

export { kindergarten };
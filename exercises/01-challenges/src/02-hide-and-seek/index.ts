/**
 * A lowercase word is hiding amongst a crowd of uppercase letters! 
 * Write a function that returns the hidden name.
 */

function hideAndSeek(crowd: string): string {
    let hiddenName = '';
    for (let i = 0; i < crowd.length; i++) {
        if (crowd[i] >= 'a' && crowd[i] <= 'z') {
            hiddenName += crowd[i];
        }
    }
    return hiddenName;
}

export { hideAndSeek };
/**
 * Write a function that returns true if the given array includes the word "friend", false if not.
 * 
 * Example
 * 
 * Input: ["enemy", "friend", "enemy"]
 * 
 * Output: true
 */

function hasFriend(input: string[]) {
    const findIndex = input.findIndex(element => element === 'friend');
    // if(findIndex >= 0) {
    //     return true;
    // } else{
    //     return false;
    // }
    return findIndex >= 0;
 }

export { hasFriend };
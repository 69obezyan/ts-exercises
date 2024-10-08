/**
 * You are organizing an event and asked people to add their name to a list, if they want to attend.
 * But, oh no, some people wrote their name twice.
 * Create a function that takes an array of items, removes all duplicate items and
 * returns a new array in the same sequential order as the old array (minus duplicates).
 */

function doubleTrouble(list: string[]) {
    const uniqueNames = [];
    const seenNames = new Set();

    for (let name of list) {
        if (!seenNames.has(name)) {
            seenNames.add(name);
            uniqueNames.push(name);
        }
    }

    return uniqueNames;
}

export { doubleTrouble };

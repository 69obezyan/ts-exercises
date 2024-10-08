/**
 * Write a function that takes 4 arguments: color, name, location, item and
 * returns a fortune prediction like so: "You will meet X in Y, and find Z in a N room together."
 */

function fortuneTeller(color: string, location: string, name: string, item: string) {
    return `You will meet ${name} in ${location}, and find ${item} in a ${color} room together.`;
 }

export { fortuneTeller };

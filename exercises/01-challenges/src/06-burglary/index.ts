/**
 * You just returned home to find your mansion has been robbed! 
 * Given an object of the stolen items, return the total amount of the burglary (number).
 * If nothing was robbed, return the string "Lucky you!".
 */

function burglary(input: any) {
    if (Object.keys(input).length === 0) {
        return "Lucky you!";
    }

    // Calculate the total value of the stolen items
    let totalValue = 0;
    for (let item in input) {
        if (input.hasOwnProperty(item)) {
            totalValue += input[item];
        }
    }
    return totalValue;
 }

export { burglary };
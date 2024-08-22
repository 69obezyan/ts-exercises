/**
 * There's a great war between the even and odd numbers. 
 * Many numbers already lost their life in this war and it's your task to end this. 
 * You have to determine which group is larger: the even, or the odd. The larger group wins.
 * Create a function that takes an array of integers, sums the even and odd numbers seperately, 
 * then returns "Odd numbers win by X" or "Even numbers win by X", X is survivors.
 * If both groups are equal, return "There are no winners"
 */

function warOfNumbers(numbers: number[]) {
    let evenSum = 0;
    let oddSum = 0;

    for (let num of numbers) {
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    if (evenSum > oddSum) {
        return `Even numbers win by ${evenSum - oddSum}`;
    } else if (oddSum > evenSum) {
        return `Odd numbers win by ${oddSum - evenSum}`;
    } else {
        return "There are no winners";
    }
 }

export { warOfNumbers };
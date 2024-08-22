/**
 * Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order in a new array.
 */

function maxMin(numbers: number[]): number[] {
    if (numbers.length === 0) {
      throw new Error("Array must contain at least one number");
    }
  
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
  
    return [min, max];
  }
  
  export { maxMin };
/**
 * Write a function that takes a two-digit number and determines, if it's the largest of two possible digit swaps.
 */

function largestSwap(number: number): boolean {
    if (number < 10 || number > 99) {
      throw new Error("Input must be a two-digit number");
    }
  
    
    const numberStr = number.toString();
    const swappedNumberStr = numberStr[1] + numberStr[0];
 
    const swappedNumber = parseInt(swappedNumberStr, 10);
    return number >= swappedNumber;
  }
  
  export { largestSwap };
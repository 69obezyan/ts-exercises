/**
 * Write a function that takes a two-digit number and determines, if it's the largest of two possible digit swaps.
 */

function largestSwap(number: number): boolean {
    if (number < 10 || number > 99) {
      throw new Error("Input must be a two-digit number");
    }
  
    // Convert the number to a string to easily manipulate the digits
    const numberStr = number.toString();
  
    // Swap the digits
    const swappedNumberStr = numberStr[1] + numberStr[0];
  
    // Convert the swapped string back to a number
    const swappedNumber = parseInt(swappedNumberStr, 10);
  
    // Compare the original number with the swapped number
    return number >= swappedNumber;
  }
  
  export { largestSwap };
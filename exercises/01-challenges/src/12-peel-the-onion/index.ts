/**
 * You have made a virtual onion and want to peel off the outer layer.
 * Given an array of arrays, return a new array of arrays containing every element, except for the outer elements.
 * 
 * Example:
 * 
 * Input:
[
  ["a", "b", "c", "d"],
  ["e", "f", "g", "h"],
  ["i", "j", "k", "l"],
  ["m", "n", "o", "p"]
]

 * Output: 
[
  ["f", "g"],
  ["j", "k"]
]
 */

function peelTheOnion(onion: (string | number)[][]): (string | number)[][] {
  // Check if the onion has at least 3 rows and 3 columns
  if (onion.length < 3 || onion[0].length < 3) {
    return [];
  }

  // Remove the first and last rows
  const innerRows = onion.slice(1, -1);

  // Remove the first and last elements from each remaining row
  const peeledOnion = innerRows.map(row => row.slice(1, -1));

  return peeledOnion;
}

export { peelTheOnion };

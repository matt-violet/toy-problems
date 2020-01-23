// Hungry Rabbit
// A very hungry rabbit is placed in the center of of a garden, represented by a rectangular N x M 2D matrix.

// The values of the matrix will represent numbers of carrots available to the rabbit in each square of the garden. If the garden does not have an exact center, the rabbit should start in the square closest to the center with the highest carrot count.

// On a given turn, the rabbit will eat the carrots available on the square that it is on, and then move up, down, left, or right, choosing the square that has the most carrots. If there are no carrots left on any of the adjacent squares, the rabbit will go to sleep. You may assume that the rabbit will never have to choose between two squares with the same number of carrots.

// Write a function which takes a garden matrix and returns the number of carrots the rabbit eats. You may assume the matrix is rectangular with at least 1 row and 1 column, and that it is populated with non-negative integers. For example,

// [[5, 7, 8, 6, 3],
//  [0, 0, 7, 0, 4],
//  [4, 6, 3, 4, 9],
//  [3, 1, 0, 5, 8]]
// Should return

// 27

// input: 2D matrix (array)
// output: integer

const findNumCarrots = (matrix) => {

  const findCenter = (array) => {
    let midRow;
    let midCol;
    let rowLengthIsOdd = array.length % 2 !== 0;
    let colLengthIsOdd = array[0].length % 2 !== 0;
    if (rowLengthIsOdd) {
      midRow = Math.floor(array.length / 2);
      if (colLengthIsOdd) {
        midCol = Math.floor(array[0].length / 2);
      } else {
        midCol = array[midRow][Math.floor((array[0].length / 2) - 1)] > array[midRow][Math.floor(array[0].length / 2)] ?
        Math.floor((array[0].length / 2) - 1) :
        Math.floor(array[0].length / 2)
      }
    }
    return [midRow, midCol];
  };
  
  const centerCoords = findCenter(matrix);
  count += matrix[centerCoords[0]][centerCoords[1]];
  matrix[centerCoords[0]][centerCoords[1]] = 0;
  
  // implement recursive function that checks for the adjacent coordinates with largest count 

  return count;
};
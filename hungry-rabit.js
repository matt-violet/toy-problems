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

const field = [[7, 8, 6, 3],
 [0, 0, 7, 0],
 [4, 9, 8, 4],
 [3, 1, 0, 5]];

const findNumCarrots = (matrix) => {
  let centerCoords;

  const findCenter = (matrix) => {
    let midRow;
    let midCol;
    let rowLengthIsOdd = matrix.length % 2 !== 0;
    let colLengthIsOdd = matrix[0].length % 2 !== 0;

    if (rowLengthIsOdd) {
      midRow = Math.floor(matrix.length / 2);
      if (colLengthIsOdd) {
        midCol = Math.floor(matrix[0].length / 2);
      } else {
        midCol = matrix[midRow][Math.floor((matrix[0].length / 2) - 1)] > matrix[midRow][Math.floor(matrix[0].length / 2)] ?
        Math.floor((matrix[0].length / 2) - 1) :
        Math.floor(matrix[0].length / 2)
      }
    } else if (!rowLengthIsOdd) {
      midRow = matrix[Math.floor((matrix.length / 2) - 1)][midCol] > matrix[Math.floor(matrix.length / 2)][midCol] ?
        Math.floor((matrix.length / 2) - 1) :
        Math.floor(matrix.length / 2)
      if (colLengthIsOdd) {
        midCol = Math.floor(matrix[0].length / 2);
      } else {
        midCol = matrix[midRow][Math.floor((matrix[0].length / 2) - 1)] > matrix[midRow][Math.floor(matrix[0].length / 2)] ?
        Math.floor((matrix[0].length / 2) - 1) :
        Math.floor(matrix[0].length / 2)
      }
    }

    return [midRow, midCol];
  };
  
  centerCoords = findCenter(matrix);
  
  const eatLargestAdjacent = (matrix, currentSpot) => {
    let count = 0;
    let tempMatrix = matrix;
    let largestAdjacentVal = 0;
    let tempDirection;
    let newCenterCoords;
    const midRow = currentSpot[0];
    const midCol = currentSpot[1];
    const adjacents = {
      'tempMatrix[midRow - 1][midCol]': tempMatrix[midRow - 1][midCol],
      'tempMatrix[midRow - 1][midCol + 1]': tempMatrix[midRow - 1][midCol + 1],
      'tempMatrix[midRow][midCol + 1]': tempMatrix[midRow][midCol + 1],
      'tempMatrix[midRow + 1][midCol + 1]': tempMatrix[midRow + 1][midCol + 1],
      'tempMatrix[midRow + 1][midCol]': tempMatrix[midRow + 1][midCol],
      'tempMatrix[midRow + 1][midCol - 1]': tempMatrix[midRow + 1][midCol - 1],
      'tempMatrix[midRow][midCol - 1]': tempMatrix[midRow][midCol - 1],
      'tempMatrix[midRow - 1][midCol - 1]': tempMatrix[midRow - 1][midCol - 1]
    }
    // let above = tempMatrix[midRow - 1][midCol];
    // let aboveRight = tempMatrix[midRow - 1][midCol + 1];
    // let right = tempMatrix[midRow][midCol + 1];
    // let belowRight = tempMatrix[midRow + 1][midCol + 1];
    // let below = tempMatrix[midRow + 1][midCol];
    // let belowLeft = tempMatrix[midRow + 1][midCol - 1];
    // let left = tempMatrix[midRow][midCol - 1];
    // let aboveLeft = tempMatrix[midRow - 1][midCol - 1];

    count += tempMatrix[midRow][midCol];
    tempMatrix[midRow][midCol] = 0;
    
    for (let direction in adjacents) {
      if (adjacents[direction] > largestAdjacentVal) {
        largestAdjacentVal = adjacents[direction];
        tempDirection = direction.slice(10, -1) + ']';
        console.log(tempDirection)
      }
    }
  
    count += largestAdjacentVal;
    eval(tempDirection + '=' + 0);
    // console.log(tempDirection);
    // console.log(tempMatrix)

    if (largestAdjacentVal === 0) {
      return count;
    } else {
      // return eatLargestAdjacent(tempMatrix, newCenterCoords)
    }
  }

  return eatLargestAdjacent(matrix, centerCoords);
};

findNumCarrots(field);
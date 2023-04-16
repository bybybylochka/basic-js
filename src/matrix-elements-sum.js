const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix ) {
  matrix.forEach(array=>{
    let index=0;
    array.forEach(elem=>{

      if(elem===0){
        let column=index;
        let row =matrix.indexOf(array);
        for(let i=row;i<matrix.length;i++){
          matrix[i][column]=0;
        }
      }
      index++;
    })
  })
  let sum=0;
  matrix.forEach(array=>{
    array.forEach(elem=> {
      sum+=elem;
    })
  })
  return sum;
}

module.exports = {
  getMatrixElementsSum
};

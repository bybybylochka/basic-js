const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!(arr instanceof Array)){
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let new_arr=[];
  for(let i=0;i<arr.length;i++){
    new_arr.push(arr[i]);
    if(arr[i]==='--double-next'){
      new_arr.splice(i,1);
      new_arr.push(arr[i+1]);
    }
    else if(arr[i]==='--double-prev'){
      new_arr.splice(i,1);
      new_arr.push(arr[i-1]);
    }
    else if(arr[i]==='--discard-next'){
      new_arr.splice(i,1);
    }
    else if(arr[i]==='--discard-prev'){
      new_arr.splice(i,1);
      new_arr.splice(i-1,1);
    }
    if(new_arr[i]===undefined){
      new_arr.splice(i,1);
    }
  }
  return new_arr;
}

module.exports = {
  transform
};

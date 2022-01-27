
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(arguments.length == 0 || matrix.length == 0) return [];
  
  let arr = [];
  
  matrix.forEach((value, index) => {
    
    if(index % 2 != 0){
      value.sort((a,b) => b-a)
    }
    arr = arr.concat(value);
  });
  
  return arr;
}

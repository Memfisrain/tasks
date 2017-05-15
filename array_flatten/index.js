// TASK: write function which returns flattened array
//
// example:
//
// const arr = [1,2,[3,4],[[5,[6,[7,8]]]]];
//
// const flattened = flatten(arr);
//
// console.log(flattened) //[1,2,3,4,5,6,7,8]
//-------------------------------------------------------------------------------------

const flatten = (arr, res = []) => {
  return Array.isArray(arr) ? !arr.forEach(v => flatten(v, res)) && res : res.push(arr) && res;
};


const arr = [1,2,[3,4],[[5,[6,[7,8]]]]];

console.log(flatten(arr));

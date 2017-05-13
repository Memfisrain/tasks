// TASK: write function which mutates array passed array changing elements indexes
// according to array with new indexes passed as the second argument.
//
// example:
//
// const a = [1,3,5];
// const newIndexes = [1,2,0]
//
// reorder(a, newIndexes);
//
// console.log(a) // [5,1,3]

const reorder = (src, indx) => {
  const tmp = {};
  indx.forEach( (ni, i) => [ tmp[ni], src[ni] ] = [ src[ni], i in tmp ? tmp[i] : src[i] ] )
};

const check = (arr, ind, ex) => {
  reorder(arr, ind);

  console.log(`actual ${arr}`);
  console.log(`expected ${ex}`);
};

const arr = ["a", "b", "c", "d", "e", "f"];
const indices = [2, 3, 4, 0, 5, 1];

check(arr, indices, ['d','f','a','b','c','e']);

const nums = [5, 2, 0, 8, 9, 1];
const indexes = [2, 4, 1, 0, 3, 5];

check(nums, indexes, [8, 0, 5, 9, 2, 1]);

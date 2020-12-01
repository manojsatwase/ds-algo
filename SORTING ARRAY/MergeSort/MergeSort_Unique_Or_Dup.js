function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function Unique(arr) {
  let newArr = [];
  for (let nums of arr) {
    if (newArr.indexOf(nums) === -1) newArr.push(nums);
  }
  return newArr;
}

function dup(arr) {
  let result = [];
  let arrSort = mergeSort(arr);
  for (let i = 0; i <= arr.length; i++) {
    if (arrSort[i + 1] === arrSort[i]) result.push(arrSort[i]);
  }
  return result;
}
console.log(mergeSort([33, 2, 4, 55, 66, 77, 44, 99, 66, 33, 22, 1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 9, 5, 4, 3, 2, 1]));
console.log("Unique " + Unique(mergeSort([33, 2, 4, 55, 66, 77, 44, 99, 66, 33, 22, 1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 9, 5, 4, 3, 2, 1])));

console.log(
  "dup " +
  dup(
    mergeSort([
      33,
      2,
      4,
      55,
      66,
      77,
      44,
      99,
      66,
      33,
      22,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      8,
      7,
      9,
      5,
      4,
      3,
      2,
      1
    ])
  )
);

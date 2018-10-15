function binarySearch(array, target, left, right) {
  if (left > right) {
    return false;
  }
  var mid = Math.floor((left + right) / 2);
  if (array[mid] === target) {
    return true;
  } else if (array[mid] > target) {
    return binarySearch(array, target, left, mid - 1);
  } else {
    return binarySearch(array, target, mid + 1, right);
  }
}
var nums = [];
for (var i = 0; i < 1000; i++) {
  nums.push(i);
}
console.time("time");
console.log(binarySearch(nums, 990, 0, nums.length - 1));
console.timeEnd("time");
function search(array, n) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === n) {
      return true;
    }
  }
}
console.time("time1");
console.log(search(nums, 990));
console.timeEnd("time1");

function bS(array, target) {
  var left = 0;
  var right = array.length - 1;
  while (left <= right) {
    var mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      return true;
    } else if (array[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
}
console.time("time2");
console.log(bS(nums, 990));
console.timeEnd("time2");
console.log("hello are you here?");

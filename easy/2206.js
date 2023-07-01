var divideArray = function(nums) {
    let check = new Set();
    for (num of nums) {
       if (check.has(num)) {
           check.delete(num);
           
       } else {
           check.add(num);
           
       }
    }
    return check.size === 0
};

console.log(divideArray([3, 2, 3, 2, 2, 2]));
console.log(divideArray([2, 2, 1, 1]));
console.log(divideArray([1, 2, 3, 4]));
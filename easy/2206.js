// 2206. Divide Array Into Equal Pairs

var divideArray = function(nums) {
    let check = new Set(); // Initialize an empty Set to keep track of the elements
    
    for (num of nums) { // Iterate through the elements of the array
        if (check.has(num)) { // If the Set already contains the current element
            check.delete(num); // Remove the element from the Set
        } else {
            check.add(num); // Otherwise, add the element to the Set
        }
    }
    
    return check.size === 0; // Return true if the Set is empty, indicating that the array can be divided into two equal halves, otherwise return false
};

console.log(divideArray([3, 2, 3, 2, 2, 2]));
console.log(divideArray([2, 2, 1, 1]));
console.log(divideArray([1, 2, 3, 4]));
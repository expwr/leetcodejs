// 1. Two Sum

var twoSum = function(nums, target) {
    let map = new Map(); // Create a new Map to store values and their indices

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) { // If the complement of the current number exists in the Map
            return [map.get(nums[i]), i]; // Return the indices of the complement and the current number
        } else {
            let b = target - nums[i]; // Calculate the complement of the current number
            map.set(b, i); // Store the complement and its index in the Map
        }
    }
};

const nums = [1, 2, 3, 2, 1, 5]
const target = 7

console.log(twoSum(nums, target))
// 35. Search Insert Position

var searchInsert = function(nums, target) {
    let lo = 0, hi = nums.length; // Initialize the low and high pointers for binary search

    while (lo < hi) { // Perform binary search until low and high pointers meet
        let mid = lo + Math.floor((hi - lo) / 2); // Calculate the middle index
        
        if (target > nums[mid]) { // If the target is greater than the middle element
            lo = mid + 1; // Move the low pointer to mid + 1
        } else {
            hi = mid; // If the target is less than or equal to the middle element, move the high pointer to mid
        }
    }
    
    return lo; // Return the low pointer as the index where the target should be inserted
};

const nums = [1, 2, 3, 2, 1, 5]
const target = 7

console.log(searchInsert(nums, target))
// 69. Majority Element

var majorityElement = function(nums) {
    const frequencyMap = {}; // Initialize an empty object to store the frequency of each element
    let firstElement = nums[0]; // Assume the first element is the majority element
    let maxCount = 1; // Initialize the maximum count to 1

    for (let i = 0; i < nums.length; i++) { // Iterate through the elements of the array
        const curr = nums[i]; // Get the current element
        
        if (frequencyMap[curr]) { // If the current element already exists in the frequency map
            frequencyMap[curr]++; // Increment its frequency by 1
        } else {
            frequencyMap[curr] = 1; // Otherwise, initialize its frequency to 1
        }
        
        if (frequencyMap[curr] > maxCount) { // If the frequency of the current element is greater than the maximum count
            firstElement = curr; // Update the firstElement to the current element
            maxCount = frequencyMap[curr]; // Update the maximum count
        }
    }
    
    return firstElement; // Return the majority element
};

const nums = [5, 4, 3, 2, 3, 4, 5, 6, 6, 9, 8, 8, 8, 8]
console.log(nums)
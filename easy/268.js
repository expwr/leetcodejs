// 268. Missing Number

var missingNumber = function(nums) {
    const n = nums.length; // Get the length of the array
    const expectedSum = (n * (n + 1)) / 2; // Calculate the sum of the sequence from 0 to n using the formula (n * (n + 1)) / 2
    let setSum = 0; // Initialize the sum of the numbers in the array

    for (i = 0; i < nums.length; i++) { // Iterate through the elements of the array
        setSum = setSum + nums[i]; // Add each element to the setSum
    }

    return expectedSum - setSum; // Return the difference between the expected sum and the actual sum of the numbers in the array, which is the missing number
};
const nums = [3, 0, 1]
console.log(missingNumber(nums))
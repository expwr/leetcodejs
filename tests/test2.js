// finds the highest value in the array between two integers
const maxSubarraySum = (arr) => {
    let currentSum = arr[0];
    let maxSum = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      currentSum = Math.max(arr[i], currentSum + arr[i]);
      maxSum = Math.max(maxSum, currentSum);
    }
  
    return maxSum;
  };

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarraySum(arr));
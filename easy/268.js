var missingNumber = function(nums) {
const n = nums.length
const expectedSum = (n * (n + 1)) / 2
let setSum = 0

    for (i = 0; i < nums.length; i++) {
        setSum = setSum + nums[i]
    }

    return expectedSum - setSum
};

const nums = [3, 0, 1]
console.log(missingNumber(nums))
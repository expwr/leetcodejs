var majorityElement = function(nums) {
    const frequencyMap = {}
    let firstElement = nums[0];
    let maxCount = 1;

    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        if (frequencyMap[curr]) {
            frequencyMap[curr]++;
        } else {
            frequencyMap[curr] = 1
        }
        if (frequencyMap[curr] > maxCount) {
            firstElement = curr;
            maxCount = frequencyMap[curr]
        }
    }
    return firstElement
};

const nums = [5, 4, 3, 2, 3, 4, 5, 6, 6, 9, 8, 8, 8, 8]
console.log(nums)
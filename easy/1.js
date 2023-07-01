var twoSum = function(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return [map.get(nums[i]), i];
        } else {
            let b = target - nums[i];
            map.set(b, i)
        }
    }
};

const nums = [1, 2, 3, 2, 1, 5]
const target = 7

console.log(twoSum(nums, target))
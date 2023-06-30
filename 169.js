var majorityElement = function(nums) {

var xj = 1
var x = 0

for (let i = 0; i < nums.length; i++) {
    for (var m=i; m < nums.length; m++) {
        if (nums[i] == nums[m])
        x++;
        if (xj < x) {
            xj = x;
            ans = nums[i];
        }
    }
    x = 0;
console.log(ans)
}  
    

};

const nums = [2,3,4,3,2,3,4,4,4,4,1,2]

majorityElement()





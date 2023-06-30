
var merge = function(nums1, m, nums2, n) {

    let cur = m + n - 1;
    let i = m - 1, j= n - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] < nums2[j]) {
            nums1[cur] = nums2[j];
            j--;
        } else {
            nums1[cur] = nums1[i];
            i--;
        }
        cur--;
    }
    for (let k = 0; k <= j; k++) {
        nums1[k] = nums2[k]
    }
};

var nums1 = [1, 2, 3, 0, 0, 0];
var m = 3;
var nums2 = [2, 5, 6];
var n = 3;

merge(nums1, m, nums2, n);

console.log("After merging:");
console.log("nums1 =", nums1);
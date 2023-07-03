// 88. Merge Sorted Array

var merge = function(nums1, m, nums2, n) {
    let cur = m + n - 1; // Initialize a pointer to the last position of the merged array
    let i = m - 1, j = n - 1; // Initialize pointers for iterating through nums1 and nums2

    while (i >= 0 && j >= 0) { // Iterate until we reach the beginning of either nums1 or nums2
        if (nums1[i] < nums2[j]) { // If the current element in nums1 is smaller than the current element in nums2
            nums1[cur] = nums2[j]; // Set the current position in nums1 to the element from nums2
            j--; // Move the pointer for nums2 to the previous element
        } else {
            nums1[cur] = nums1[i]; // If the current element in nums1 is greater than or equal to the current element in nums2,
                                  // set the current position in nums1 to the element from nums1
            i--; // Move the pointer for nums1 to the previous element
        }
        cur--; // Move the pointer for the merged array to the previous position
    }
    
    // If there are remaining elements in nums2, copy them to the beginning of nums1
    for (let k = 0; k <= j; k++) {
        nums1[k] = nums2[k];
    }
};

var nums1 = [1, 2, 3, 0, 0, 0];
var m = 3;
var nums2 = [2, 5, 6];
var n = 3;

merge(nums1, m, nums2, n);

console.log("After merging:");
console.log("nums1 =", nums1); 
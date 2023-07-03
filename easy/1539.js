// 1539. Kth Missing Positive Number

var findKthPositive = function(arr, k) {
    let p = 1; // Initialize a pointer to count through the array
    let j = 0; // Initialize a counter for missed integers
    
    for (let elm of arr) { // Iterate through the elements of the array
        while (p !== elm) { // Check if there is a missing integer between p and the current element elm
            j++; // Increment the counter for missed integers
            if (j === k) return p; // If the k-th missing integer is found, return it
            p++; // Increment the pointer p to check the next integer
        }
        if (p === elm) { // If the pointer p matches the current element elm, increment p
            p++;
        }
    }
    
    while (++j < k) { // If there are still missing integers after iterating through the array, increment p until the k-th missing integer is found
        p++;
    }
    
    return p; // Return the k-th missing integer
};

console.log(findKthPositive([2, 3, 4, 7, 11], 5)); 
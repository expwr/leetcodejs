var findKthPositive = function(arr, k) {
    let p = 1; // counting through arr
    let j = 0; // missed integer
    for (let elm of arr) {
        while (p !== elm) {
            j++;
            if (j === k) return p;
            p++;
        }
        if (p == elm) {
            p++;
        }
    }
    while (++j < k) {
        p++;
    }
    return p;
};

console.log(findKthPositive([2, 3, 4,  7, 11], 5)); 
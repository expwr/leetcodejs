// 997. Find the Town Judge

var findJudge = function(n, trust) {
    let count = new Array(n + 1).fill(0); // Initialize an array to keep track of trust counts for each person

    for (let [a, b] of trust) { // Iterate through the trust relationships
        count[a]--; // Decrease the trust count for person a
        count[b]++; // Increase the trust count for person b
    }

    for (let i = 1; i < n + 1; i++) { // Iterate through each person
        if (count[i] == n - 1) return i; // If the trust count for a person is n-1, return that person as the judge
    }

    return -1; // If no judge is found, return -1
};

const n = 4
const trust = [[1, 3], [1, 4], [2, 4], [4,3]]
console.log(findJudge(n, trust));
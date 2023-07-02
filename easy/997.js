var findJudge = function(n, trust) {
    let count = new Array(n + 1).fill(0)

    for (let [a, b] of trust) {
        count[a]--;
        count[b]++;
    }
    for (let i = 1; i < n+1; i++) {
        if (count[i] == n-1) return i;
    }
    return -1;
};

const n = 4
const trust = [[1, 3], [1, 4], [2, 4], [4,3]]
console.log(findJudge(n, trust));
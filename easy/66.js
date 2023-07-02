var plusOne = function(digits) {
    for (let i = 0; i < digits.length; i++) {
        var lastItem = digits[digits.length - 1];
        lastItem++
        console.log(lastItem)
    }
};

const digits = [2, 4, 6]
plusOne(digits)
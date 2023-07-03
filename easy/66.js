// 66. Plus One

const plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) { // Iterate through the digits array in reverse order
        if (digits[i] < 9) { // If the current digit is less than 9
            digits[i] = digits[i] + 1; // Increment the digit by 1
            return digits; // Return the updated digits array
        } else {
            digits[i] = 0; // If the current digit is 9, set it to 0 and continue to the next digit
        }
    }

    digits.unshift(1); // If all digits were 9, add a new digit 1 at the beginning of the array
    return digits; // Return the updated digits array
}

const digits = [2, 4, 9]
console.log(plusOne(digits))
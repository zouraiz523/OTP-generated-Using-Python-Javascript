// Declare a function named generateOTP that takes a parameter 'limit'
function generateOTP(limit) {
    // Declare a variable 'digits' containing the string '0123456789'
    var digits = '0123456789';
    
    // Initialize an empty string variable 'OTP' to store the generated OTP
    let OTP = '';

    // Start a loop that runs 'limit' times
    for (let i = 0; i < limit; i++ ) {
        // Inside the loop, generate a random index to select a digit from 'digits'
        // Math.random() generates a random number between 0 (inclusive) and 1 (exclusive)
        // Math.floor() rounds down to the nearest integer
        let randomIndex = Math.floor(Math.random() * 10);

        // Append the randomly selected digit to the 'OTP' string
        OTP += digits[randomIndex];
    }

    // After the loop, return the generated OTP
    return OTP;
}

// Call the generateOTP function with an argument of 4 and print the result using console.log
console.log("Random Number Generator!", generateOTP(4));

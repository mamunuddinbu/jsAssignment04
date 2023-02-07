
// Problem 1 ///////////////////////////////////////

function mindGame(number) {
    //Error handling
    if (isNaN(number) || number <= 0) {
        return "Please provide a positive number.";
    }

    //Returning desired value
    else {
        return (number * 3 + 10) / 2 - 5;
    }
}



// Problem 2 ///////////////////////////////////////

function evenOdd(str) {
    //Error handling
    if (typeof str !== "string") {
        return "Error: Input should be a string.";
    }
    // Returning even if number of character of string is even else odd  
    else if (str.length % 2 === 0) {
        return "even";
    }
    else {
        return "0dd";
    }
}




// Problem 3 ///////////////////////////////////////

function isLGSeven(input) {
    //Error handling
    if (typeof input !== "number") {
        return "Error: Input should be a number.";
    } 
    //Returning desired value
    else {
        let number = input;
        let subtraction = number - 7;
        if (subtraction < 7) {
            return subtraction;
        } 
        else {
            return 2 * number;
        }
    }
}


// Problem 4 ///////////////////////////////////////

function findingBadData(input) {
    //Error handling
    if (!Array.isArray(input)) {
        return "Error: Input should be an array.";
    } 
    else {
        let count = 0;
        for (let i = 0; i < input.length; i++) {
            if (typeof input[i] !== "number") {
                return "Error: Array should contain only numbers.";//Showing error message if array elements are other than number
            }
            if (input[i] < 0) {
                count++;
            }
        }
        return count;
    }
}



// Problem 5 ///////////////////////////////////////

// Function to calculate total diamonds from gems
function gemsToDiamond(firstFriendGemsNumber, secondFriendGemsNumber, thirdFriendGemsNumber) {
    if (isNaN(firstFriendGemsNumber) || isNaN(secondFriendGemsNumber) || isNaN(thirdFriendGemsNumber)) {
        return "Error: Input is not a number.";    

        
    }
    else 
    {
        const firstFriendGemsPower = 21;
        const secondFriendGemsPower = 32;
        const thirdFriendGemsPower = 43;


        // Calculate total diamonds
        const totalDiamond = firstFriendGemsPower * firstFriendGemsNumber + secondFriendGemsPower * secondFriendGemsNumber + thirdFriendGemsPower * thirdFriendGemsNumber;

        // If total diamonds more than 2000, subtract 2000
        if (totalDiamond > 1000 * 2)
            return totalDiamond - 2000;
        else
            return totalDiamond;
    }

}


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


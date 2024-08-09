const palindromes = function (string) {

    // COMPARE EACH CHARACTER INSTEAD OF THE WHOLE WORD ITSELF BECAUSE THAT WONT WORK
    // if it gets to a punctuation mark or space just ignore it.

    //reverse string first and then compare each character

let newString = "";
let originString = string.toLowerCase();

for (let i = originString.length - 1; i >= 0; i--)
{
    for (let j = 0; j < originString.length; j++)
    {
        
        if (originString[i] != originString[j])
        {
            if (originString[i] === "!")
            {
                i--;
            }
            
        }
        else 
        {
            newString += string[j];
            i--
        }
        newString += string[j];

    }

}




    
};

palindromes("Racecar!");

// Do not edit below this line
module.exports = palindromes;

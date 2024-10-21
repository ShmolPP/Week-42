/*
    Hi.
    This is a set of practice exercises.
    The purpose is to focus on a few things at a time.
    You do this by writing your answer after a task is given (see the example).

    DO NOT change any code that is provided unless the task specifically says so.
*/

/* -----------------------------------------------------------------------------
    Task: Example
    Write the code to print all the names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}

/* -----------------------------------------------------------------------------
    Task: A
    Create a function that returns an array of length m-n, 
    n is the min value. 
    m is the max value. 
    if n = 5 and m is 10 the returned array sholuld be [5,6,7,8,9]
    Use loops and arrays to achive the goal. 
*/
console.log("Task: A");

function createRangeArray(n, m) {
    let resultArray = []; 
    for (let i = n; i < m; i++) {
        resultArray.push(i);  
    }

    return resultArray;  
}
console.log(createRangeArray(5, 10));  


/* -----------------------------------------------------------------------------
    Task: B
    Create two arrays using your function from task a.
    first array n = 5, m = 11
    second array n = 8, m = 23
    
    Create a function that combines the two arrays into one, but no duplicate values. 
    Use for loops
*/
console.log("Task: B");

function createRangeArray(n, m) {
    let resultArray = [];
    for (let i = n; i < m; i++) {
        resultArray.push(i);
    }
    return resultArray;
}


const array1 = createRangeArray(5, 11);  
const array2 = createRangeArray(8, 23); 

console.log("Array 1:", array1);
console.log("Array 2:", array2);


function combineArrays(arr1, arr2) {
    let combinedArray = [];


    for (let i = 0; i < arr1.length; i++) {
        combinedArray.push(arr1[i]);
    }
    for (let j = 0; j < arr2.length; j++) {
        let found = false;

        // Check if arr2[j] is already in combinedArray
        for (let k = 0; k < combinedArray.length; k++) {
            if (arr2[j] === combinedArray[k]) {
                found = true;
                break;  
            }
        }
        if (!found) {
            combinedArray.push(arr2[j]);
        }
    }

    return combinedArray;  
}

const combinedArray = combineArrays(array1, array2);
console.log("Combined Array:", combinedArray);


/* -----------------------------------------------------------------------------
    Task: C
    Following you will find an alphabet a encrypted text and a shift value. 
    The message is encrypted using a cesar chipher https://en.wikipedia.org/wiki/Caesar_cipher 
    Create a function that 
    - Takes three parameters message, alphabet and shift 
    - Creates the key based on the alphabet and the shift value. 
    - decrypts and returns the message.
    Use arrays and for loops. 
*/

console.log("Task: C");

const ALPHABET = "abcdefghijklmnopqrstuvwxyz"
const message = "ckrr jutk"
let shift = 6

function decryptCaesarCipher(message, alphabet, shift) {
 
    let key = "";
    for (let i = 0; i < alphabet.length; i++) {
        let newIndex = (i - shift + alphabet.length) % alphabet.length;
        key += alphabet[newIndex];
    }
    

    let decryptedMessage = "";
    for (let i = 0; i < message.length; i++) {
        let char = message[i];
        if (char === " ") {
            decryptedMessage += " ";
        } else {
            let index = key.indexOf(char);
            decryptedMessage += alphabet[index];
        }
    }
    
    return decryptedMessage;
}

const decryptedMessage = decryptCaesarCipher(message, ALPHABET, shift);
console.log("Encrypted message:", message);
console.log("Decrypted message:", decryptedMessage);





/* -----------------------------------------------------------------------------
    Task: D

    You are given a list of numbers.
    Write a function that takes the list and a target sum as input parameters
    The function is then to figure out what two numbers in the list that summed makes the provided sum.

    Example:
    [3,2,6,9]
    target 9
    -> [3,6]

*/
console.log("Task: D");

const numbers = [1, 23, 14, 56, 42, 33, 0, 3];
const target = 36;

function findTwoNumbersForSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [numbers[i], numbers[j]];
            }
        }
    }
    return null; 
}

const result = findTwoNumbersForSum(numbers, target);

if (result) {
    console.log(`The two numbers that sum to ${target} are: [${result[0]}, ${result[1]}]`);
} else {
    console.log(`No two numbers in the list sum to ${target}`);
}


/* -----------------------------------------------------------------------------
    Task: E
    Create a function that takes a number as inputt and returns the number of digits in that number. 
    123 -> 3
    2 -> 1
    42693 -> 5
*/
console.log("Task: E");

function countDigits(number) {
    // Convert the number to a string
    let numString = Math.abs(number).toString();
    
    // Return the length of the string
    return numString.length;
}

// Test the function
console.log("Number of digits in 123:", countDigits(123));
console.log("Number of digits in 2:", countDigits(2));
console.log("Number of digits in 42693:", countDigits(42693));
console.log("Number of digits in -1000:", countDigits(-1000));
// What will be the result of the following codes:

var a = isNaN("11"); // Output: false

var a = isNaN(2 - 10); // Output: true

// Explain your answers.
/* 
    isNaN () function checks if a value is Not a Number. It returns true if the value is not a number, otherwise it returns false.
    In the first case, "11" is a string, not a number, so isNaN() returns false.
    In the second case, 2 - 10 is -8, which is a number, so isNaN() returns true. 
*/

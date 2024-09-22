// var example
function varExample() {
    console.log(x); // Output: undefined
    var x = 5;
    }
    varExample();
    
    // let example
    function letExample() {
    console.log(y); // ReferenceError: y is not defined
    let y = 10;
    }
    letExample();
    
    // const example
    const PI = 3.14159;
    console.log(PI); // Output: 3.14159
    PI = 4; // TypeError: Assignment to constant variable

    /*In this example, we demonstrate the differences between 'var', 'let', and 'const':
1. 'var' is function-scoped and allows hoisting, leading to 'undefined output when accessing the variable before declaration.
2. "let" is block-scoped and does not hoist, resulting in a 'ReferenceError' when accessing the variable before declaration.
3. 'const' is block-scoped and cannot be reassigned, as shown by the 'TypeError' when attempting to assign a new value to the constant variable. */

// Falsy values in conditional statements
if (false) {
    console.log("This will not be logged");
    }
    
    if (0) {
    console.log("This will not be logged either");
    }
    
    if ("") {
    console.log("This will not be logged either");
    }
    
    if (null) {
    console.log("This will not be logged either");
    }
    
    if (undefined) {
    console.log("This will not be logged either");
    }
    
    if (NaN) {
    console.log("This will not be logged either");
    }

/* In this example, we demonstrate how falsy values behave in conditional statements. All the code blocks inside the "if' statements will not be executed because the conditions evaluate to false due to the falsy values.
References
1.https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
2.https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
3.https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
4.https://developer.mozilla.org/en-US/docs/Glossary/Falsy 
*/
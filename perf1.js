/*the differences between "let', 'const', and "var' in JavaScript, along with sample code snippets.
Additionally, I will cover the concept of falsy values with examples. */

/*Diferences between let, const, and var
1. Scope
• var: Function-scoped or globally scoped. If declared inside a function, it is accessible throughout that function.
• let: Block-scoped, meaning it is only accessible within the block (enclosed by '{}
') in which it is defined.
• const: Also block-scoped like "let'
, but it is
used for constants that should not be reassigned
2. Reassignment
• var: Can be reassigned and redeclared.
• let: Can be reassigned but not redeclared in the same scope.
• const: Cannot be reassigned or redeclared; it must be initialized at the time of
declaration.
3. Best Practices
• Prefer 'const' for variables that do not change, use "let' for variables that will change, and avoid var' to prevent potential issues with hoisting and scope. */

// Example of var
function varExample() {
    if (true) {
    var x = 10; // x is function-scoped
    }
    console.log(x); // Outputs: 10
    }
    
    varExample();
    
    // Example of let
    function letExample() {
    if (true) {
    let y = 20; // y is block-scoped
    console.log(y); // Outputs: 20
    }
    // console.log(y); // Uncaught ReferenceError: y is not defined
    }
    
    letExample();
    
    // Example of const
    function constExample() {
    const z = 30; // z cannot be reassigned
    console.log(z); // Outputs: 30
    
    // z = 40; // Uncaught TypeError: Assignment to constant variable.
    }
    
    constExample();

    /*Concept of Falsy Values in JavaScript In JavaScript, falsy values are values that evaluate to false when encountered in a Boolean context. The following are considered falsy values:
1. false: The Boolean value itself is falsy.
2. 0: The number zero is falsy because it represents "no quantity."
3. "' (empty string): An empty string has no characters, thus evaluates to false in conditions.
4. null: Represents the intentional absence of any object value.
5. undefined: Indicates a variable has been declared but has not yet been assigned a value.
6. NaN: Stands for "Not-a-Number" and represents an invalid number.
Examples of Falsy */

// Example of falsy values in conditional statements

// Example 1: false
if (false) {
    console.log("This will not execute.");
    } else {
    console.log("This is true."); // Outputs: This is true.
    }
    
    // Example 2: 0
    if (0) {
    console.log("This will not execute.");
    } else {
    console.log("Zero is falsy."); // Outputs: Zero is falsy.
    }
    
    // Example 3: "" (empty string)
    if ("") {
    console.log("This will not execute.");
    } else {
    console.log("Empty string is falsy."); // Outputs: Empty string is falsy.
    }
    
    // Example 4: null
    if (null) {
    console.log("This will not execute.");
    } else {
    console.log("Null is falsy."); // Outputs: Null is falsy.
    }
    
    // Example 5: undefined
    let variable;
    if (variable) {
    console.log("This will not execute.");
    } else {
    console.log("Undefined is falsy."); // Outputs: Undefined is falsy.
    }
    
    // Example 6: NaN
    if (NaN) {
    console.log("This will not execute.");
    } else {
    console.log("NaN is falsy."); // Outputs: NaN is falsy.
    }

    // My references
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var?utm_source=perplexity
    https://developer.mozilla.org/en-US/docs/Glossary/Falsy */
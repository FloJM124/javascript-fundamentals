// JAVASCRIPT SPECIALS 

// This chapter briefly recaps the features of JavaScript that we’ve learned by now, paying special attention to subtle moments.

// 1. CODE STRUCTURE 

// Statements are delimited (ended) with a semicolon:

console.log('Hello'); console.log('World');

// Usually, a line-break is also treated as a delimiter, so that would also work:

console.log('Hello')
console.log('World')

// That’s called “automatic semicolon insertion”. Sometimes it doesn’t work, for instance:

console.log("There will be an error after this message")
// [1, 2].forEach(console.log) // TypeError: Cannot read properties of undefined (reading '2')

/*
Most codestyle guides agree that we should put a semicolon after each statement.

Semicolons are not required after code blocks {...} and syntax constructs with them like loops:

function f() {
  // no semicolon needed after function declaration
}

for(;;) {
  // no semicolon needed after the loop
}

…But even if we can put an “extra” semicolon somewhere, that’s not an error. It will be ignored.

More in: Code Structure
*/

// 2. STRICT MODE 

/*
To fully enable all features of modern JavaScript, we should start scripts with "use strict".

'use strict';

...

The directive must be at the top of a script or at the beginning of a function body.

Without "use strict", everything still works, but some features behave in the old-fashioned, “compatible” way. We’d generally prefer the modern behavior.

Some modern features of the language (like classes) enable strict mode implicitly.

More in: The Modern Mode, "use strict".
*/

// 3. VARIABLES 

/*
Can be declared using:
- let
- const (constant, can’t be changed)
- var (old-style, will see later)

A variable name can include:
- Letters and digits, but the first character may not be a digit.
- Characters ($) and (_) are normal, on par with letters.
- Non-Latin alphabets and hieroglyphs are also allowed, but commonly not used.

Variables are dynamically typed. They can store any value:
*/

let x = 5; // <- number
x = "John"; // <- string
console.log(x); // John
console.log(typeof x); // string

/*
There are 8 data types:
- number (for both floating-point and integer numbers)
- bigint (for integer numbers of arbitrary length)
- string (for strings)
- boolean (for logical values: true/false)
- null (a type with a single value null, meaning “empty” or “does not exist”)
- undefined (a type with a single value undefined, meaning “not assigned”)
- object and symbol (for complex data structures and unique identifiers, we haven’t learnt them yet)

The typeof operator returns the type for a value, with two exceptions:
*/

console.log(typeof null); // object (error in the language)

console.log(typeof function(){}); // function (functions are treated specially)

// More in: Variables and Data types.

// 4 INTERACTION 

/*
We’re using a browser as a working environment, so basic UI functions will be:

  prompt(question, [default])
Ask a question, and return either what the visitor entered or null if they clicked “cancel”.

  confirm(question)
Ask a question and suggest to choose between Ok and Cancel. The choice is returned as true/false.

  alert(message) 
Output a message.

All these functions are modal, they pause the code execution and prevent the visitor from interacting with the page until they answer. 

For instance:
*/

let userName = prompt("Your name?", "Alice");
let isTeaWanted = confirm("Do you want some tea?");

console.log(`Visitor: ${userName}`); // Visitor: Alice
console.log(`Tea wanted: ${isTeaWanted}`); // Tea wanted: true

// More in: Interaction: alert, prompt, confirm.

// 5. OPERATORS 

/*
JavaScript supports the following operators:

  Arithmetical
Regular: * + - /, also % for the remainder and ** for power of a number.

The binary plus + concatenates strings. And if any of the operands is a string, the other one is converted to string too:
*/

console.log('1' + 2); // '12' (string)
console.log(1 + '2'); // '12' (string)

/*
  Assignments
There is a simple assignment: a = b and combined ones like a *= 2.

  Bitwise
Bitwise operators work with 32-bit integers at the lowest, bit-level: see the MDN Docs when they are needed.

  Conditional
The only operator with three parameters: condition ? resultA : resultB. If condition is truthy, returns resultA, otherwise resultB.

  Logical operators
Logical AND && and OR || perform short-circuit evaluation and then return the value where it stopped (not necessary true/false). Logical NOT ! converts the operand to boolean type and returns the inverse value.

  Nullish coalescing operator
The ?? operator provides a way to choose a defined value from a list of variables. The result of `a ?? b` is `a` unless it’s null/undefined, then `b`.

  Comparisons
Equality check == for values of different types converts them to a number (except null and undefined that equal each other and nothing else), so these are equal:
*/

console.log(0 == false); // true
console.log(0 == ''); // true

/*
Other comparisons convert to a number as well.

The strict equality operator === doesn’t do the conversion: different types always mean different values for it.

Values null and undefined are special: they equal == each other and don’t equal anything else.

Greater/less comparisons compare strings character-by-character, other types are converted to a number.

  Other operators
There are few others, like a comma operator.

More in: Basic Operators, Maths; Comparisons; Logical Operator; Nullish Coalescing Operator '??'.
*/

// 6. LOOPS 

/*
We covered 3 types of loops:

i. while loop

while (condition) { 
  ...
}
*/

let counter = 0
while (counter < 3) {
  console.log(counter); // 0, 1, 2
  counter++;
}

/*
ii. do...while loop

do { 
  ...
} while (condition);
*/

let index = 3

do {
  console.log(index); // 3, 2, 1
  index--;
} while (index > 0);

/*
iii. for loop

for(let i = 0; i < 5; i++) { 
  ...
}
*/

for(let i = 0; i < 5; i++) { 
  console.log(i); // 0, 1, 2, 3, 4
}

/*
- The variable declared in "for(let...)” loop is visible only inside the loop. But we can also omit 'let’ and reuse an existing variable.

- Directives break/continue allow to exit the whole loop/current iteration. Use labels to break nested loops.

Details in: Loops: while and for.
*/

// 7. THE "switch” CONSTRUCT

/*
The “switch” construct can replace multiple if checks. It uses === (strict equality) for comparisons. 

For instance:
*/

let age = prompt('Your age?', 18);

switch (age) {
  case 18:
    console.log("Won't work"); // the result of prompt is a string, not a number
    break;

  case "18":
    console.log("This works!");
    break;

  default:
    console.log("Any value not equal to one above");
}

// Details in: The "switch" Statement.

// 8. FUNCTIONS 

/* 
We covered three ways to create a function in JavaScript:

i. Function Declaration: the function in the main code flow
*/

function sum(a, b) {
  let result = a + b;

  return result;
}

console.log(sum(2, 3)); // 5

// ii. Function Expression: the function in the context of an expression

let sum2 = function(a, b) {
  let result = a + b;

  return result;
};

console.log(sum2(5, 5)); // 10

// iii. Arrow functions:

// expression on the right side
let sum3 = (a, b) => a + b;

console.log(sum3(2, 1)); // 3

// or multi-line syntax with { ... }, need return here:
let sum4 = (a, b) => {
  // ...

  return a + b;
}

console.log(sum4(8, 8)); // 16

// without arguments
let sayHi = () => console.log("Hi there!");

sayHi(); // Hi there!

// with a single argument
let double = n => n * 2;

console.log(double(2)); // 4

/*
- Functions may have local variables: those declared inside its body or its parameter list. Such variables are only visible inside the function.
- Parameters can have default values: function sum(a = 1, b = 2) {...}.
- Functions always return something. If there’s no return statement, then the result is undefined.

Details: see Functions; Arrow Functions, the basics.
*/

// 9. MORE TO COME 

// That was a brief list of JavaScript features. As of now we’ve studied only basics. Further in the tutorial you’ll find more specials and advanced features of JavaScript.
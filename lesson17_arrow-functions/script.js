// ARROW FUNCTIONS (BASICS)

/*
There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions. 

It’s called “arrow functions”, because it looks like this:

let func = (arg1, arg2, ..., argN) => expression;

This creates a function func that accepts arguments arg1..argN, then evaluates the expression on the right side with their use and returns its result.

In other words, it’s the shorter version of:

let func = function(arg1, arg2, ..., argN) {
  return expression;
};

Let’s see a concrete example:
*/

let sum = (a, b) => a + b;
/* This arrow function is a shorter form of:
let sum = function(a, b) {
  return a + b;
};
*/
console.log(sum(1, 2)); // 3

// As you can see, (a, b) => a + b means a function that accepts two arguments named `a` and `b`. Upon the execution, it evaluates the expression "a + b” and returns the result.

/*
- If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.

For example:
*/

let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }
console.log(double(3)); // 6

// - If there are no arguments, parentheses are empty, but they must be present:

let sayHi = () => console.log("Hello!");

sayHi(); // Hello!

/*
Arrow functions can be used in the same way as Function Expressions.

For instance, to dynamically create a function:
*/

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => console.log("Hello!") :
  () => console.log("Greetings!");

welcome(); 

/*
This code demonstrates function expressions, arrow functions, the conditional (ternary) operator, and calling a function stored in a variable.

The output depends on the age entered by the user in the prompt dialog.

    Age entered             Console output
    15                      Hello!
    17                      Hello!
    18                      Greetings!
    25                      Greetings!

- If you click Cancel in the prompt, 'age' becomes null. In this code, null is converted to 0 when compared numerically, so the output is "Hello!".

Step 1: Ask the user for their age
    let age = prompt("What is your age?", 18);

- 'let age' declares a variable named 'age'.
- prompt() displays a dialog asking the user a question.
- "What is your age?" is the message displayed.
- 18 is the default value shown in the input field.

Suppose the user enters 16.
The variable now contains the string "16".
    age = "16";
Note that prompt() returns a string, even when the user enters a number.

Step 2: Evaluate the condition
    let welcome = (age < 18) ?
      () => console.log("Hello!") :
      () => console.log("Greetings!");

This uses the ternary operator, which has three parts:
    condition ? valueIfTrue :
    valueIfFalse
So:
    condition       age < 18
    if true         () => console.log("Hello!")
    if false        () => console.log("Greetings!")

Let's assume the user entered 16.
Evaluates:
    "16" < 18
JavaScript converts the numeric string "16" to the number 16 for this comparison. Therefore:
    16 < 18 // true
The condition is true, so it selects:
  () => console.log("Hello!") 

This arrow function is assigned to the variable welcome. Conceptually, welcome now holds a function equivalent to:
    let welcome = () => 
    console.log("Hello!");

Notice: The function has been selected and stored, but it has not executed yet. No greeting has been printed at this stage.

Step 3: Call the selected function
    welcome();
The parentheses () call the function stored in welcome.

Because the user entered 16, JavaScript executes:
    console.log('Hello!');
The console displays:
    Hello!

Suppose the user is 18 or older, the condition becomes:
    18 < 18 // false
    20 < 18 // false
JavaScript therefore selects the second arrow function:
    () => console.log("Greetings!")
The variable welcome now holds that function.

When JavaScript reaches:
    welcome();
It executes the selected function and prints:
    Greetings!

Compare:
Approach A: Store an arrow function
    let welcome = (age < 18) 
      ? () => console.log("Hello!") 
      : () => console.log("Greetings!");

    welcome();

The ternary operator selects a function. The final line calls it.

Approach B: Use the ternary operator to select a message
    let welcome = (age < 18) 
      ? "Hello!"
      : "Greetings!";

    console.log(welcome);

The ternary operator selects a string instead of a function, and console.log() prints it directly. 

Both approaches can produce the same greeting, but they demonstrate different concepts.

The first approach is useful when you want to select which function to execute. Those functions could eventually perform different tasks, rather than simply print different messages.

The most important concept: selecting a function versus calling it.

    Code                      What it does
    () => 
    console.log("Hello!")     Creates a function 

    welcome = () => 
    console.log("Hello!")     Stores a function in a variable

    welcome                   Refers to the function

    welcome()                 Calls the function,     executing its body

Think of a function as a recipe: creating or storing the recipe does not prepare the dish. Calling the function is what makes the instructions run.

Remember: in this example, the ternary operator chooses which function to store in welcome, and welcome() executes the chosen function.
*/

/*
Arrow functions may appear unfamiliar and not very readable at first, but that quickly changes as the eyes get used to the structure.

They are very convenient for simple one-line actions, when we’re just too lazy to write many words.
*/

// 1. MULTILINE ARROW FUNCTIONS 

/*
The arrow functions that we’ve seen so far were very simple. They took arguments from the left of =>, evaluated and returned the right-side expression with them.

Sometimes we need a more complex function, with multiple expressions and statements. In that case, we can enclose them in curly braces. The major difference is that curly braces require a "return" within them to return a value (just like a regular function does). 

Like this:
*/

let sum2 = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};
console.log(sum2(1, 2)); // 3

/*
This code demonstrates an arrow function, parameters, local variables, a return statement, and passing arguments to a function. 

The output in the console is:
    3
Why? The function receives 1 and 2, adds them together, returns the result 3, and console.log() prints that returned value.

Step 1: Define the arrow function
    let sum = (a, b) => { 
      let result = a + b;
      return result; 
    };

Let's examine each part.
    Code                Explanation
    let sum            Declares a variable named sum2

    (a, b)              Defines two parameters: a and b

    =>                  The arrow-function operator

    { ... }             Contains the function body, where the instructions are written

    let result
    = a + b;            Declares a local variable named result and assigns it the sum of a and b

    return
    result;             Sends the value of result back to the place where the function was called

    ;                   Ends the variable assignment statement

At this point, JavaScript has created the function and assigned it to sum. The function has not executed yet.

Step 2: Call the function
    sum(1, 2)
The parentheses call the function, and the values 1 and 2 are passed as arguments.

The parameters receive those values:
    Parameter               Value received
    a                       1
    b                       2

You can think of the function as temporarily working with these values:
    let result = 1 + 2;
    return result;

Step 3: Calculate the result
Inside the function, JavaScript executes:
    let result = a + b;
Substituting the argument values gives:
    let result = 1 + 2;
Therefore, 
    result = 3;

The variable result is a local variable because it's declared inside the function body. It's available within that function, not directly outside it.

Step 4: Return the result
    return result;
Since result contains 3, the function returns the number 3.

This is important: return does not print anything to the console. It gives a value back to the code that called the function. Conceptually, the expression:
    sum(1, 2)
now evaluates to:
    3

Step 5: Print the returned value
    console.log(sum(1, 2));
JavaScript first evaluates the function call:
    sum(1, 2) // 3
Then it passes the returned value to console.log(). The statement effectively becomes:
    console.log(3);
The console displays:
    3

What happens if we remove return?
Consider this variation:
    let sum = (a, b) => {  
      let result = a + b;
    };
    console.log(sum(1, 2));

The console would display:
    undefined
- Why? The function calculates 3, but it never returns that value. JavaScript functions return undefined by default when no value is explicitly returned.
- The local variable result does not automatically become the function's return value.

A shorter version using an arrow function:
    let sum = (a, b) => a + b;
    console.log(sum(1, 2)); // 3

Why does this work without return?
- When an arrow function has a single expression without curly braces, it uses an implicit return. JavaScript automatically returns the expression's value.

Compare:
With curly braces:
    let sum = (a, b) => { return a + b; };
Requires explicit return

Without curly braces:
    let sum2 = (a, b) => a + b;
Returns the expression automatically

Remember: when you use curly braces {} for an arrow function's body, you generally need an explicit return if you want to send a value back.

The key takeaway: Our function adds two arguments, stores their sum in a local variable, returns the result, and passes that returned value to the console, which displays 3.
*/

/*
ℹ️ More to come

Here we praised arrow functions for brevity. But that’s not all!

Arrow functions have other interesting features.

To study them in-depth, we first need to get to know some other aspects of JavaScript, so we’ll return to arrow functions later in the chapter Arrow functions revisited.

For now, we can already use arrow functions for one-line actions and callbacks.
*/

// SUMMARY 

/*
Arrow functions are handy for simple actions, especially for one-liners. They come in two flavors:

1. Without curly braces: (...args) => expression – the right side is an expression: the function evaluates it and returns the result. Parentheses can be omitted, if there’s only a single argument, e.g. n => n*2.
2. With curly braces: (...args) => { body } – brackets allow us to write multiple statements inside the function, but we need an explicit return to return something.
*/


// TASKS 

/*
1. Rewrite with arrow functions

Replace Function Expressions with arrow functions in the code below:
*/

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { console.log("You agreed."); },
  function() { console.log("You canceled the execution."); }
);

// Solution:

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Again, do you agree?",
   () => console.log("Again, you agreed."),
   () => console.log("Again, you canceled the execution.")
);

// Looks short and clean, right?
// CONDITIONAL BRANCHING: IF, '?’

/*
Sometimes, we need to perform different actions based on different conditions.

To do that, we can use the if statement and the conditional operator ?, that’s also called a “question mark” operator.
*/

// 1. THE “if” STATEMENT

// The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code. For example:

let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) console.log('You are right!');

// In the example above, the condition is a simple equality check (year == 2015), but it can be much more complex.

// If we want to execute more than one statement, we have to wrap our code block inside curly braces:

if (year == 2015) {
  console.log("That's correct!");
  console.log("You're so smart!");
}

// We recommend wrapping your code block with curly braces {} every time you use an if statement, even if there is only one statement to execute. Doing so improves readability.

// 2. BOOLEAN CONVERSION 

/*
The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.

Let’s recall the conversion rules from the chapter Type Conversions:

- A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
- Other values become true, so they are called “truthy”.
*/

//So, the code under this condition would never execute:

if (0) { // 0 is falsy
  console.log(0); // does not execute
}

// …and inside this condition – it always will:

if (1) { // 1 is truthy
  console.log(1); // 1 (executes)
}

// We can also pass a pre-evaluated boolean value to if, like this:

let cond = (year == 2015); // equality evaluates to true or false

if (cond) {
  console.log(cond); // true
}

// 3. THE “else” CLAUSE

// The if statement may contain an optional else block. It executes when the condition is falsy. For example:

let year2 = prompt('Again, in which year was the ECMAScript-2015 specification published?', '');

if (year2 == 2015) {
  console.log('You guessed it right!');
} else {
  console.log('How can you be so wrong?'); // any value except 2015
}

// 4. SEVERAL CONDITIONS: “else if”

// Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that. For example:

let year3 = prompt('Once again, in which year was the ECMAScript-2015 specification published?', '');

if (year3 < 2015) {
  console.log('Too early...');
} else if (year3 > 2015) {
  console.log('Too late');
} else {
  console.log('Exactly!');
}

// In the code above, JavaScript first checks year3 < 2015. If that is falsy, it goes to the next condition year3 > 2015. If that is also falsy, it shows the else block.

// There can be more else if blocks. The final else is optional.

// 5. CONDITIONAL OPERATOR ‘?’

// Sometimes, we need to assign a variable depending on a condition. For instance:

let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

console.log(accessAllowed);

/*
The so-called “conditional” or “question mark” operator lets us do that in a shorter and simpler way.

The operator is represented by a question mark ?. Sometimes it’s called “ternary”, because the operator has three operands. It is actually the one and only operator in JavaScript which has that many.

The syntax is:

let result = condition ? value1 : value2;
*/

// The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2. For example:

let age2 = 20;
let accessAllowed2 = (age2 > 18) ? true : false;

console.log(accessAllowed2); // true (20 is greater than 18)

/*
Technically, we can omit the parentheses around age > 18. The question mark operator has a low precedence, so it executes after the comparison >.

This example will do the same thing as the previous one:
*/

// the comparison operator "age2 > 21" executes first anyway
// (no need to wrap it into parentheses)
let accessAllowed3 = age2 > 21 ? true : false;

console.log(accessAllowed3); // false (20 is not greater than 21)

// But parentheses make the code more readable, so we recommend using them.

// ℹ️ Please note:

// In the example above, you can avoid using the question mark operator because the comparison itself returns true/false:

// the same
let accessAllowed4 = age2 > 18;
console.log(accessAllowed4); // true (20 is greater than 18)

// 6. MULTIPLE ‘?’

// A sequence of question mark operators ? can return a value that depends on more than one condition. For instance:

let age3 = prompt('age?', 18);

let message = (age3 < 3) ? 'Hi, baby!' :
  (age3 < 18) ? 'Hello!' :
  (age3 < 100) ? 'Greetings!' :
  'What an unusual age!';

console.log(message);

/*
It may be difficult at first to grasp what’s going on. But after a closer look, we can see that it’s just an ordinary sequence of tests:

i. The first question mark checks whether age2 < 3.

ii. If true – it returns 'Hi, baby!'. Otherwise, it continues to the expression after the colon “:”, checking age2 < 18.

iii. If that’s true – it returns 'Hello!'. Otherwise, it continues to the expression after the next colon “:”, checking age2 < 100.

iv. If that’s true – it returns 'Greetings!'. Otherwise, it continues to the expression after the last colon “:”, returning 'What an unusual age!'.
*/

// Here’s how this looks using if..else:

let age4 = prompt('Enter your age:', 18);

if (age4 < 3) {
  message = 'Hi, baby!';
} else if (age4 < 18) {
  message = 'Hello!';
} else if (age4 < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}
console.log(message);

// 7. NON-TRADITIONAL USE OF ‘?’

// Sometimes the question mark ? is used as a replacement for if:

let company = prompt('Which company created JavaScript?', '');

(company == 'Netscape') ?
   console.log('Right!') : console.log('Wrong.');

/*
Depending on the condition company == 'Netscape', either the first or the second expression after the ? gets executed and shows in the console.

We don’t assign a result to a variable here. Instead, we execute different code depending on the condition.

It’s not recommended to use the question mark operator in this way.

The notation is shorter than the equivalent if statement, which appeals to some programmers. But it is less readable.

Here is the same code using if for comparison:
*/

let company2 = prompt('Again, which company created JavaScript?', '');

if (company2 == 'Netscape') {
  console.log('Right!');
} else {
  console.log('Wrong.');
}

// Our eyes scan the code vertically. Code blocks which span several lines are easier to understand than a long, horizontal instruction set.

// The purpose of the question mark operator ? is to return one value or another depending on its condition. Please use it for exactly that. Use if when you need to execute different branches of code.


// TASKS

/*
1. if (a string with zero) 

Will 'hello' be printed in the console?
*/

if ("0") {
  console.log('Hello');
}

/*
Answer: Yes, it will.

Any string except an empty one (and "0" is not empty) becomes true in the logical context.
*/

/*
2. The name of JavaScript

Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”
*/

// 'use strict';

let value = prompt('What is the "official" name of JavaScript?', '');

if (value == 'ECMAScript') {
  console.log('Right!');
} else {
  console.log("You don't know? ECMAScript!");
}

/*
3. Show the sign

Using if..else, write the code which gets a number via prompt and then shows in the console:

  1, if the value is greater than zero,

  -1, if less than zero,

  0, if equals zero.

In this task we assume that the input is always a number.
*/

let value2 = prompt('Type a number', 0);

if (value2 > 0) {
  console.log( 1 );
} else if (value2 < 0) {
  console.log( -1 );
} else {
  console.log( 0 );
}

/*
4. Rewrite 'if' into '?'

Rewrite this if using the conditional operator '?':
*/

let a = 10;
let b = 5;

let result2;

if (a + b < 4) {
  result2 = 'Below';
} else {
  result2 = 'Over';
}
console.log(result2); // Over (false, 10 + 5 is not less than 4)

// Solution:

let result3 = (a + b > 4) ? 'Below' : 'Over';
console.log(result3); // Below (true, 10 + 5 is greater than 4)

/*
5. Rewrite 'if..else' into '?'

Rewrite if..else using multiple ternary operators '?'.

For readability, it’s recommended to split the code into multiple lines.
*/

let login = prompt('Who is logging in?', 'Employee');
let message2;

if (login == 'Employee') {
  message2 = 'Hello, employee!';
} else if (login == 'Director') {
  message2 = 'Greetings, director!';
} else if (login == '') {
  message2 = 'No login';
} else {
  message2 = '';
}
console.log(message2);


// Solution:

let login2 = prompt('Again, who is logging in?', 'Employee');

let message3 = (login2 == 'Employee') ? 'Hello' :
  (login2 == 'Director') ? 'Greetings' :
  (login2 == '') ? 'No login' :
  '';
console.log(message3);
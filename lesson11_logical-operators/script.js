// LOGICAL OPERATORS 

/*
There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing). Here we cover the first three, the ?? operator is in the next article.

Although they are called “logical”, they can be applied to values of any type, not only boolean. Their result can also be of any type.

Let’s see the details.
*/

// 1. || (OR)

/*
The “OR” operator is represented with two vertical line symbols:

result = a || b;

In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false.

In JavaScript, the operator is a little bit trickier and more powerful. But first, let’s see what happens with boolean values.

There are four possible logical combinations:
*/

console.log(true || true);   // true
console.log(false || true);  // true
console.log(true || false);  // true
console.log(false || false); // false

/*
As we can see, the result is always true except for the case when both operands are false.

If an operand is not a boolean, it’s converted to a boolean for the evaluation.

For instance, the number 1 is treated as true, the number 0 as false:
*/

if (1 || 0) { // works just like if( true || false )
  console.log('truthy!'); // truthy!
}

// Most of the time, OR || is used in an if statement to test if any of the given conditions is true. For example:

let hour = 9;

if (hour < 10 || hour > 18) {
  console.log('The office is closed.'); // The office is closed.
}

// We can pass more conditions:

let hour2 = 12;
let isWeekend = true;

if (hour2 < 10 || hour2 > 18 || isWeekend) {
  console.log('Again, the office is closed.'); // Again, the office is closed. (it's the weekend)
}

// 1:1. OR "||" FINDS THE FIRST TRUTHY VALUE

/*
The logic described above is somewhat classical. Now, let’s bring in the “extra” features of JavaScript.

The extended algorithm works as follows.

Given multiple OR’ed values:

result = value1 || value2 || value3;

The OR || operator does the following:

- Evaluates operands from left to right.
- For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
- If all operands have been evaluated (i.e. all were false), returns the last operand.

A value is returned in its original form, without the conversion.

In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found.

For instance:
*/

console.log(1 || 0); // 1 (1 is truthy)

console.log(null || 1); // 1 (1 is the first truthy value)
console.log(null || 0 || 1); // 1 (the first truthy value)

console.log(undefined || null || 0); // 0 (all falsy, returns the last value)

// This leads to some interesting usage compared to a “pure, classical, boolean-only OR”.

// i. Getting the first truthy value from a list of variables or expressions.

/*
For instance, we have firstName, lastName, and nickName variables, all optional (i.e., can be undefined or have falsy values).

Let’s use OR || to choose the one that has the data and show it (or "Anonymous" if nothing set):
*/

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log(firstName || lastName || nickName || "Anonymous"); // SuperCoder

// If all variables were falsy, "Anonymous" would show up.

let firstName2 = "";
let lastName2 = "";
let nickName2 = "";

console.log(firstName2 || lastName2 || nickName2 || "Anonymous"); // Anonymous

// ii. Short-circuit evaluation.

/*
Another feature of OR || operator is the so-called “short-circuit” evaluation.

It means that || processes its arguments until the first truthy value is reached, and then the value is returned immediately, without even touching the other argument.

The importance of this feature becomes obvious if an operand isn’t just a value, but an expression with a side effect, such as a variable assignment or a function call.

In the example below, only the second message is printed:
*/

true || console.log("not printed");
false || console.log("printed"); // printed

/*
In the first line, the OR || operator stops the evaluation immediately upon seeing true, so it's not run.

Sometimes, people use this feature to execute commands only if the condition on the left part is falsy.
*/

// 2. && (AND)

/*
The AND operator is represented with two ampersands &&:

result = a && b;

In classical programming, AND returns true if both operands are truthy and false otherwise:
*/

console.log(true && true);   // true
console.log(false && true);  // false
console.log(true && false);  // false
console.log(false && false); // false

// An example with if:

let hour3 = 12;
let minute = 30;

if (hour3 == 12 && minute == 30) {
  console.log('The time is 12:30'); // The time is 12:30 (both are true)
}

// Just as with OR, any value is allowed as an operand of AND:

if (1 && 0) { // evaluated as true && false
  console.log("won't work, because the result is falsy");
}

// 2:1. AND “&&” finds the first falsy value

/*
Given multiple AND’ed values:

result = value1 && value2 && value3;

The AND && operator does the following:

- Evaluates operands from left to right.
- For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
- If all operands have been evaluated (i.e. all were truthy), returns the last operand.

In other words, AND returns the first falsy value or the last value if none were found.

The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one.

Examples:
*/

// if the first operand is truthy,
// AND returns the second operand:
console.log(1 && 0); // 0
console.log(1 && 5); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
console.log(null && 5); // null
console.log(0 && "no matter what"); // 0

// We can also pass several values in a row. See how the first falsy one is returned:

console.log(1 && 2 && null && 3); // null

// When all values are truthy, the last value is returned:

console.log(1 && 2 && 3); // 3 (the last one)

/*
ℹ️ Precedence of AND && is higher than OR ||

The precedence of AND && operator is higher than OR ||.

So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d).
*/

// ⚠️ Don’t replace if with || or &&

// Sometimes, people use the AND && operator as a “shorter way to write if”. For instance:

let x = 1;

(x > 0) && console.log('x is greater than zero!'); // x is greater than zero!

/*
The action in the right part of && would execute only if the evaluation reaches it. That is, only if (x > 0) is true.

So we basically have an analogue for:
*/

let y = 1;

if (y > 0) {
  console.log('y is greater than zero!'); // y is greater than zero   
}

// Although, the variant with && appears shorter, if is more obvious and tends to be a little bit more readable. So we recommend using every construct for its purpose: use if if we want if and use && if we want AND.

// 3. ! (NOT)

/*
The boolean NOT operator is represented with an exclamation sign !.

result = !value;

The operator accepts a single argument and does the following:

- Converts the operand to boolean type: true/false.
- Returns the inverse value.

For instance:
*/

console.log(!true); // false
console.log(!0); // true

// A double NOT !! is sometimes used for converting a value to boolean type:

console.log(!!"non-empty string"); // true
console.log(!!null); // false

/*
That is, the first NOT converts the value to boolean and returns the inverse, and the second NOT inverses it again. In the end, we have a plain value-to-boolean conversion.

There’s a little more verbose way to do the same thing – a built-in Boolean function:
*/

console.log(Boolean("non-empty string")); // true
console.log(Boolean(null)); // false

// The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||.


// TASKS

/*
1. What's the result of OR?

What is the code below going to output?
*/

console.log( null || 2 || undefined ); // 2

// The answer is 2, that’s the first truthy value.

/*
2. What's the result of OR'ed logs?

What will the code below output?
*/

console.log(console.log(1) || 2 || console.log(3)); // 1, 2

/*
The answer: first 1, then 2.

The call to console.log() does not return a value. Or, in other words, it returns undefined.

- The first OR || evaluates its left operand console.log(1). That shows the first message with 1.
- The console.log returns undefined, so OR goes on to the second operand searching for a truthy value.
- The second operand 2 is truthy, so the execution is halted, 2 is returned and then shown by the outer console.log().

There will be no 3, because the evaluation does not reach console.log(3).
*/

/*
3. What is the result of AND?

What is this code going to show?
*/

console.log(1 && null && 2); // null

// The answer: null, because it’s the first falsy value from the list.

/*
4. What is the result of AND'ed logs?

What will this code show?
*/

console.log(console.log(1) && console.log(2)); // 1, undefined

/*
The answer: 1, and then undefined.

The call to console.log() returns undefined (it just shows a message, so there’s no meaningful return).

Because of that, && evaluates the left operand (outputs 1), and immediately stops, because undefined is a falsy value. And && looks for a falsy value and returns it, so it’s done.
*/

/*
5. The result of OR AND OR

What will the result be?
*/

console.log(null || 2 && 3 || 4); // 3

/*
The answer: 3.

The precedence of AND && is higher than ||, so it executes first.

The result of 2 && 3 = 3, so the expression becomes:

null || 3 || 4

Now the result is the first truthy value: 3.
*/

/*
6. Check the range between

Write an if condition to check that age is between 14 and 90 inclusively.

“Inclusively” means that age can reach the edges 14 or 90.
*/

let age = 25;
if (age >= 14 && age <= 90);
console.log(age); // 25

/*
Why it works:
- age >= 14 -> checks that age is 14 or older
- age <= 90 -> checks that age is 90 or younger
- && -> requires both conditions to be true

Therefore, values from 14 through 90, including 14 and 90, pass the condition.

The console.log() outputs 25 because the variable age contains the value 25. The if condition doesn't change age; it only checks whether age is within the range 14-90.

So:

age >= 14 && age <= 90
25 >= 14 && 25 <= 90
true && true
true
*/

// If you want the result to be a Boolean(true or false), you don't need the if statement at all. The condition itself already produces a boolean.

let Age = 25;
console.log(Age >= 14 && Age <= 90); // true

let Age2 = 91;
console.log(Age2 >= 14 && Age2 <= 90); // false

// Key idea: An if statement uses a boolean to decide whether to execute code, while the expression `age >= 14 && age <= 90` itself evaluates to a boolean. 

/*
7. Check the range outside

Write an if condition to check that age is NOT between 14 and 90 inclusively.

Create two variants: the first one using NOT !, the second one – without it.
*/

// The first variant (with !): 
let Age3 = 10;

if (!(Age3 >= 14 && Age3 <= 90));

console.log(Age3); // 10
console.log(!(Age3 >= 14 && Age3 <= 90)); // true

/*
First, write the condition for being between 14 and 90, then negate the entire expression.

The ! reverses the boolean result, so the if block runs only when the age is outside the range.
*/

// The second variant (without !):

let Age4 = 35;

if (Age4 < 14 || Age4 > 90);

console.log(Age4); // 35 
console.log(Age4 < 14 || Age4 > 90); // false

/*
Here, the age is not between 14 and 90 if:
- Age4 < 14 OR
- Age4 > 90
*/

/*
8. A question about "if"

Which of these console.logs are going to execute?

What will the results of the expressions be inside if(...)?
*/

if (-1 || 0) console.log('first');
if (-1 && 0) console.log('second');
if (null || -1 && 1) console.log('third');

/*
The answer: the first and the third will execute.

Details:
*/

// Runs.
// The result of -1 || 0 = -1, truthy
if (-1 || 0) console.log('first');

// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) console.log('second');

// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) console.log('third');

/*
9. Check the login

Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

- If it equals “TheMaster”, then show “Welcome!”,
- Another string – show “Wrong password”,
- For an empty string or cancelled input, show “Canceled”

Please use nested if blocks. Mind the overall readability of the code.

Hint: passing an empty input to a prompt returns an empty string ''. Pressing ESC during a prompt returns null.
*/

let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    console.log('Welcome!');
  } else if (pass === '' || pass === null) {
    console.log('Canceled');
  } else {
    console.log('Wrong password');
  }

} else if (userName === '' || userName === null) {
  console.log('Canceled');
} else {
  console.log("I don't know you");
}

// Note the vertical indents inside the if blocks. They are technically not required, but make the code more readable.

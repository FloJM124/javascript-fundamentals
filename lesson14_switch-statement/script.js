// THE "switch" STATEMENT

/*
A switch statement can replace multiple if checks.

It gives a more descriptive way to compare a value with multiple variants.

# THE SYNTAX

The switch has one or more case blocks and an optional default.

It looks like this:

switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}

- The value of x is checked for a strict equality to the value from the first case (i.e., value1) then to the second (value2) and so on.
- If the equality is found, switch starts to execute the code starting from the corresponding case, until the nearest break (or until the end of switch).
- If no case is matched then the default code is executed (if it exists).
*/

// 1. AN EXAMPLE

// An example of switch with break:

let a = 2 + 2;

switch (a) {
  case 3:
    console.log('Too small');
    break;
  case 4:
    console.log('Exactly!');
    break;
  case 5:
    console.log('Too big');
    break;
  default:
    console.log("I don't know such values");
}

/*
Here the switch starts to compare a from the first case variant that is 3. The match fails.

Then 4. That’s a match, so the execution starts from case 4 until the nearest break.

If there is no break then the execution continues with the next case without any checks.
*/

// An example of switch without break:

let b = 2 + 2;

switch (b) {
  case 3:
    console.log('Too small');
  case 4:
    console.log('Exactly!');
  case 5:
    console.log('Too big');
  default:
    console.log("I don't know such values");
}

// In the example above, we’ll see sequential execution of three console.logs:

console.log('Exactly!'); // Exactly
console.log('Too big'); // Too big
console.log("I don't know such values"); // I don't know such values

/*
ℹ️ Any expression can be a switch/case argument

Both switch and case allow arbitrary expressions.

For example:
*/

let c = "1";
let d = 0;

switch (+c) {
  case d + 1:
    console.log("this runs, because +c is 1, exactly equals d+1");
    break;

  default:
    console.log("this doesn't run");
}

// Here +c gives 1, that’s compared with d + 1 in case, and the corresponding code is executed.

// 2. GROUPING OF “case”

/*
Several variants of case which share the same code can be grouped.

For example, if we want the same code to run for case 3 and case 5:
*/

let e = 3;

switch (e) {
  case 4:
    console.log('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    console.log('Wrong!');
    console.log("Why don't you take a math class?");
    break;

  default:
    console.log('The result is strange. Really.');
}

/*
Now both 3 and 5 show the same message.

The ability to “group” cases is a side effect of how switch/case works without break. Here the execution of case 3 starts from the line (*) and goes through case 5, because there’s no break.
*/

// 3. TYPE MATTERS

/*
Let’s emphasize that the equality check is always strict. The values must be of the same type to match.

For example, let’s consider the code:
*/

let arg = prompt("Enter a value?");

switch (arg) {
  case '0':
  case '1':
    console.log('One or zero');
    break;

  case '2':
    console.log('Two');
    break;

  case 3:
    console.log('Never executes!');
    break;

  default:
    console.log('An unknown value');
}

/*
- For 0, 1, the first console.log() runs.
- For 2, the second console.log() runs.
- But for 3, the result of the prompt is a string "3", which is not strictly equal === to the number 3. So we’ve got a dead code in case 3! The default variant will execute.
*/


// TASKS

/*
1: Rewrite the "switch" into an "if"

Write the code using if..else which would correspond to the following switch:
*/

let browser = 'Edge';

switch (browser) {
  case 'Edge':
    console.log("You've got the Edge!");
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    console.log('Okay we support these browsers too');
    break;

  default:
    console.log('We hope that this page looks ok!');
}

/*
Solution:

To precisely match the functionality of switch, the if must use a strict comparison '==='.

For given strings though, a simple '==' works too.
*/

if(browser == 'Edge') {
  console.log("You've got the Edge!");
} else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == 'Opera') {
  console.log('Okay we support these browsers too');
} else {
  console.log('We hope that this page looks ok!');
}

/*
Please note: the construct browser == 'Chrome' || browser == 'Firefox' … is split into multiple lines for better readability.

But the switch construct is still cleaner and more descriptive.
*/

/*
2: Rewrite "if" into "switch"

Rewrite the code below using a single switch statement:
*/

let x = +prompt('x?', '');

if (x == 0) {
  console.log(0);
}
if (x == 1) {
  console.log(1);
}

if (x == 2 || x == 3) {
  console.log('2,3');
}

/*
Solution:

The first two checks turn into two case. The third check is split into two cases:
*/

let y = +prompt('y?', '');

switch (y) {
  case 0:
    console.log(0);
    break;

  case 1:
    console.log(1);
    break;

  case 2:
  case 3:
    console.log('2,3');
    break;
}

/*
Please note: the break at the bottom is not required. But we put it to make the code future-proof.

In the future, there is a chance that we’d want to add one more case, for example case 4. And if we forget to add a break before it, at the end of case 3, there will be an error. So that’s a kind of self-insurance.
*/
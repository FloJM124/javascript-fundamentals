// LOOPS: "while" AND "for"

/*
We often need to repeat actions.

For example, outputting goods from a list one after another or just running the same code for each number from 1 to 10.

Loops are a way to repeat the same code multiple times.
*/

// ℹ️ This article covers only basic loops: while, do..while and for(..;..;..).

// 1. THE “while” LOOP

/*
The while loop has the following syntax:

while (condition) {
  // code
  // so-called "loop body"
}

While the condition is truthy, the code from the loop body is executed.

For instance, the loop below outputs i while i < 3:
*/

let i = 0;

while (i < 3) { // shows 0, then 1, then 2
  console.log(i); // 0, 1, 2
  i++;
}

/*
A single execution of the loop body is called an iteration. The loop in the example above makes three iterations.

If i++ was missing from the example above, the loop would repeat (in theory) forever. In practice, the browser provides ways to stop such loops, and in server-side JavaScript, we can kill the process.

Any expression or variable can be a loop condition, not just comparisons: the condition is evaluated and converted to a boolean by while.

For instance, a shorter way to write while (i != 0) is while (i):
*/

let index = 3;

while (index) { // when i becomes 0, the condition becomes falsy, and the loop stops
  console.log(index); // 3, 2, 1
  index--;
}

// ℹ️ Curly braces are not required for a single-line body

// If the loop body has a single statement, we can omit the curly braces {…}:

let index2 = 3;
while (index2) console.log(index2--); // 3, 2, 1

// 2. THE “do…while” LOOP

/*
The condition check can be moved below the loop body using the do..while syntax:

do {
  // loop body
} while (condition);

The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.

For example:
*/

let index3 = 0;

do {
  console.log(index3); // 0, 1, 2
  index3++;
} while (index3 < 3);

// This form of syntax should only be used when you want the body of the loop to execute at least once regardless of the condition being truthy. Usually, the other form is preferred: while(…) {…}.

// 3. THE “for” LOOP

/*
The for loop is more complex, but it’s also the most commonly used loop.

It looks like this:

for (begin; condition; step) {
  // ... loop body ...
}

Let’s learn the meaning of these parts by example. The loop below runs console.log(i) for i from 0 up to (but not including) 3:
*/

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  console.log(i); // 0, 1, 2
}

/*
Let’s examine the for statement part-by-part:
		
  begin	      
  let i = 0	    
  Executes once upon entering the loop.

  condition	  
  i < 3	        
  Checked before every loop iteration. If false, the loop stops.

  body	     
  console.log(i) 
  Runs again and again while the condition is truthy.

  step	
  i++	
  Executes after the body on each iteration.

The general loop algorithm works like this:

Run begin
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ ...

That is, begin executes once, and then it iterates: after each condition test, body and step are executed.

Here’s exactly what happens in our case:
*/

// for (let i = 0; i < 3; i++) console.log(i)

// run begin
let counter = 0

// if condition → run body and run step
if (counter < 3) { 
  console.log(counter); // 0
  counter++; 
}
// if condition → run body and run step
if (counter < 3) { 
  console.log(counter); // 1
  counter++; 
}
// if condition → run body and run step
if (counter < 3) { 
  console.log(counter); // 2
  counter++; 
}
// ...finish, because now i == 3

// ℹ️ Inline variable declaration

// Here, the “counter” variable i is declared right in the loop. This is called an “inline” variable declaration. Such variables are visible only inside the loop.

for (let inlineVariable = 0; inlineVariable < 3; inlineVariable++) {
  console.log(inlineVariable); // 0, 1, 2
}
// console.log(inlineVariable); // ReferenceError: inlineVariable is not defined

// Instead of defining a variable, we could use an existing one:

let existingVariable = 0;

for (existingVariable = 0; existingVariable < 3; existingVariable++) { // use an existing variable
  console.log(existingVariable); // 0, 1, 2
}
console.log(existingVariable); // 3 (visible, because declared outside of the loop)

/*
The key distinction is that the loop does not print 3 inside the loop, because the condition i < 3 is false when i becomes 3.

But i does have the value 3 after the loop because the final i++ changed it to 3.

So conceptually:
i = 0 -> print 0
i = 1 -> print 1
i = 2 -> print 2
i = 3 -> stop loop 
         print 3
Final output: 0, 1, 2, 3
*/

// # Skipping Parts

/*
Any part of the for loop can be skipped.

For example, we can omit "begin" if we don’t need to do anything at the loop start.

Like here:
*/

let counter2 = 0; // we have i already declared and assigned

for (; counter2 < 3; counter2++) { // no need for "begin"
  console.log(counter2); // 0, 1, 2
}

// We can also remove the "step" part:

let counter3 = 0;

for (; counter3 < 3;) {
  console.log(counter3++); // 0, 1, 2
}

// This makes the loop identical to while (i < 3).

/* 
We can actually remove everything, creating an infinite loop:

for (;;) {
  // repeats without limits
}

Please note that the two for semicolons (;;) must be present. Otherwise, there would be a syntax error.
*/

// 4. BREAKING THE LOOP 

/*
Normally, a loop exits when its condition becomes falsy.

But we can force the exit at any time using the special break directive.

For example, the loop below asks the user for a series of numbers, “breaking” when no number is entered:
*/

let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
console.log('Sum: ' + sum);

/*
Here, the loop keeps asking the user for a number. 
  let value = +prompt("Enter a number", '');
The + converts the user's input from a string into a number.

Then:
  if (!value) break; 
means if value is falsy, stop the loop.

For example:
  - Enter 5 -> value is 5 -> truthy -> add it to sum
  - Enter 10 -> value is 10 -> truthy -> add it to sum
  - Enter 0 -> value is 0 -> falsy -> stop
  - Enter nothing/cancel -> typically becomes 0 or NaN -> falsy -> stop

So, for example, if the user enters:
  5
  10
  20
  0
then:
  sum === 35
and:
  console.log('Sum: ' + sum);
displays:
  Sum: 35
*/

/*
The break directive is activated at the line (*) if the user enters an empty line or cancels the input. It stops the loop immediately, passing control to the first line after the loop. Namely, console.log().

The combination “infinite loop + break as needed” is great for situations when a loop’s condition must be checked not in the beginning or end of the loop, but in the middle or even in several places of its body.
*/

// 5. CONTINUE TO THE NEXT ITERATION

/*
The continue directive is a “lighter version” of break. It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).

We can use it if we’re done with the current iteration and would like to move on to the next one.

The loop below uses continue to output only odd values:
*/

for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  console.log(i); // 1, 3, 5, 7, 9
}

/*
Here, the loop runs with i from 0 through 9.
  let i = 0; i < 10; i++

This condition:
  i % 2 == 0
checks whether i is even
- % is the remainder operator.
- Even numbers have a remainder of 0 when divided by 2.

When i is even:
  if (i % 2 == 0) continue;
`continue` means skip the rest of the current iteration and go to the next iteration.

So:
  i   even?   continue?   console.log(i)
  0   Yes     Yes         Skip
  1   No      No          Print 1
  2   Yes     Yes         Skip
  3   No      No          Print 3
  4   Yes     Yes         Skip
  5   No      No          Print 5
  6   Yes     Yes         Skip
  7   No      No          Print 7
  8   Yes     Yes         Skip
  9   No      No          Print 9

So the purpose of the `continue` statement here is essentially:
  Skip even numbers and only execute console.log(i) for odd numbers.
*/

// For even values of i, the continue directive stops executing the body and passes control to the next iteration of for (with the next number). So console.log() is only called for odd values.

// ℹ️ The continue directive helps decrease nesting

// A loop that shows odd values could look like this:

for (let i = 0; i < 10; i++) {

  if (i % 2) {
    console.log(i); // 1, 3, 5, 7, 9
  }

}

/*
From a technical point of view, this is identical to the example above. Surely, we can just wrap the code in an if block instead of using continue.

But as a side effect, this created one more level of nesting (the console.log() call inside the curly braces). If the code inside of if is longer than a few lines, that may decrease the overall readability.
*/

/*
⚠️ No break/continue to the right side of ‘?’

Please note that syntax constructs that are not expressions cannot be used with the ternary operator ?. In particular, directives such as break/continue aren’t allowed there.

For example, if we take this code:

if (i > 5) {
  console.log(i);
} else {
  continue;
}

// …and rewrite it using a question mark:

(i > 5) ? console.log(i) : continue; // continue isn't allowed here

…it stops working: there’s a syntax error.

This is just another reason not to use the question mark operator ? instead of if.
*/

// 6. LABELS FOR break/continue

/*
Sometimes we need to break out from multiple nested loops at once.

For example, in the code below we loop over i and j, prompting for the coordinates (i, j) from (0,0) to (2,2):
*/

for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // what if we want to exit from here to Done (below)?
  }
}
console.log('Done!');

/*
Here, we have two nested loops.

The outer loop controls i:
  i = 0, 1, 2

For each value of i, the inner loop runs completely:
  j = 0, 1, 2

So prompt() is called 9 times:
  i     j     Prompt
  0     0     Value at coords (0,0)
  0     1     Value at coords (0,1)
  0     2     Value at coords (0,2)
  1     0     Value at coords (1,0)
  1     1     Value at coords (1,1)
  1     2     Value at coords (1,2)
  2     0     Value at coords (2,0)
  2     1     Value at coords (2,1)
  2     2     Value at coords (2,2)

The values entered are stored in:
  let input = ...
but nothing is done with input afterward. Each new iteration creates a new input variable.

After all 9 prompts have been completed, the code executes:
  console.log('Done!');
So the final result on the console is:
  Done!

The key idea: the nested loops work like this:
  i = 0
    j = 0
    j = 1
    j = 2
  i = 1
    j = 0
    j = 1
    j = 2
  i = 2
    j = 0
    j = 1
    j = 2
That's 3 x 3 = 9 iterations of the inner loop.
*/

/*
We need a way to stop the process if the user cancels the input.

The ordinary break after input would only break the inner loop. That’s not sufficient – labels, come to the rescue!

A label is an identifier with a colon before a loop:

labelName: for (...) {
  ...
}

The break <labelName> statement in the loop below breaks out to the label:
*/

outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}
console.log('Done!');

/*
This code does not have one fixed set of prompt values, because the result depends on what the user enters.

The important part: break outer
The label:
  outer;
gives the outer for loop a name.

Then:
  break outer;
means:
  immediately stop the loop labeled outer.

This is different from just:
  break;
A plain "break" would stop only the inner loop.

Example 1: User enters a value every time 
Suppose the user enters a non-empty value at every prompt.

The prompts occur in this order:
  (0,0)
  (0,1)
  (0,2)
  (1,0)
  (1,1)
  (1,2)
  (2,0)
  (2,1)
  (2,2)
That's 9 prompts.

Since input is truthy each time:
  if (!input) break outer;
doesn't execute.

After both loops finish normally:
  console.log('Done!');
displays:
  Done!

Example 2: User enters nothing at (1,1)
Suppose the user enters values at:

  (0,0) -> "A"
  (0,1) -> "B"
  (0,2) -> "C"
  (1,0) -> "D"
  (1,1) -> ""

At (1,1):
  input = ""

An empty string is falsy, so:
  !input
becomes:
  !"" // true
Therefore:
  break outer;
executes.

And because outer refers to the outer loop, JavaScript immediately exits both loops.

It does not continue to (1,2) or any of the (2,...) coordinates.

Then execution continues with:
  console.log('Done!');
Displays:
  Done!

Key distinction:
  break;
exits only the nearest loop.
  break outer;
exits the specific loop labeled outer, which here means both the inner and outer loops are terminated. 

So the final log is always "Done!" if the code reaches it; what changes is how many prompts appear before the loops terminate.
*/

/*
In the code above, break outer looks upwards for the label named outer and breaks out of that loop.

So the control goes straight from (*) to console.log('Done!').

We can also move the label onto a separate line:

outer:
for (let i = 0; i < 3; i++) { ... }

The continue directive can also be used with a label. In this case, code execution jumps to the next iteration of the labeled loop.
*/

/*
⚠️ Labels do not allow to “jump” anywhere

Labels do not allow us to jump into an arbitrary place in the code.

For example, it is impossible to do this:

break label; // jump to the label below (doesn't work)
label: for (...)

A break directive must be inside a code block. Technically, any labelled code block will do, e.g.:

label: {
  // ...
  break label; // works
  // ...
}

…Although, 99.9% of the time break is used inside loops, as we’ve seen in the examples above.

A continue is only possible from inside a loop.
*/

// SUMMARY

/*
We covered 3 types of loops:

- while – The condition is checked before each iteration.
- do..while – The condition is checked after each iteration.
- for (;;) – The condition is checked before each iteration, additional settings available.

To make an “infinite” loop, usually the while(true) construct is used. Such a loop, just like any other, can be stopped with the break directive.

If we don’t want to do anything in the current iteration and would like to forward to the next one, we can use the continue directive.

break/continue support labels before the loop. A label is the only way for break/continue to escape a nested loop to go to an outer one.
*/

// TASKS

/*
1: Last loop value

What is the last value logged by this code? Why?
*/

let Index = 3;

while (Index) {
  console.log(Index--); // 3, 2, 1
}

/*
The answer: 1.

Every loop iteration decreases i by 1. The check while(i) stops the loop when i = 0.

Hence, the steps of the loop form the following sequence (“loop unrolled”):

let i = 3;

console.log(i--); // shows 3, decreases i to 2

console.log(i--) // shows 2, decreases i to 1

console.log(i--) // shows 1, decreases i to 0

// done, while(i) check stops the loop
*/

/*
2: Which values does the while loop show?

For every loop iteration, write down which value it outputs and then compare it with the solution.

Both loops log the same values, or not?
*/

// The prefix form ++i:

let Index2 = 0;
while (++Index2 < 5) console.log(Index2); // 1, 2, 3, 4

// The postfix form i++

let Index3 = 0;
while (Index3++ < 5) console.log(Index3); // 1, 2, 3, 4, 5

/*
The task demonstrates how postfix/prefix forms can lead to different results when used in comparisons.

- From 1 to 4

let i = 0;
while (++i < 5) console.log(i);

The first value is i = 1, because ++i first increments i and then returns the new value. So the first comparison is 1 < 5 and the console shows 1.

Then follow 2, 3, 4… – the values show up one after another. The comparison always uses the incremented value, because ++ is before the variable.

Finally, i = 4 is incremented to 5, the comparison while(5 < 5) fails, and the loop stops. So 5 is not shown.

- From 1 to 5

let i = 0;
while (i++ < 5) console.log(i);

The first value is again i = 1. The postfix form of i++ increments i and then returns the old value, so the comparison i++ < 5 will use i = 0 (contrary to ++i < 5).

But the console.log() call is separate. It’s another statement which executes after the increment and the comparison. So it gets the current i = 1.

Then follow 2, 3, 4…

Let’s stop on i = 4. The prefix form ++i would increment it and use 5 in the comparison. But here we have the postfix form i++. So it increments i to 5, but returns the old value. Hence the comparison is actually while(4 < 5) – true, and the control goes on to console.

The value i = 5 is the last one, because on the next step while(5 < 5) is false.
*/

/*
3: Which values get shown by the "for" loop?

For each loop write down which values it is going to show. Then compare with the answer.

Both loops log same values or not?
*/

// The postfix form:

for (let i = 0; i < 5; i++) console.log(i); // 0, 1, 2, 3, 4

// The prefix form:

for (let i = 0; i < 5; ++i) console.log(i); // 0, 1, 2, 3, 4

/*
The answer: from 0 to 4 in both cases.

That can be easily deducted from the algorithm of for:

i. Execute once i = 0 before everything (begin).
ii. Check the condition i < 5
iii. If true – execute the loop body console.log(i), and then i++

The increment i++ is separated from the condition check (2). That’s just another statement.

The value returned by the increment is not used here, so there’s no difference between i++ and ++i.
*/

/*
4: Output even numbers in the loop

Use the for loop to output even numbers from 2 to 10.
*/

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i); // 2, 4, 6, 8, 10
  }
}

// We use the “modulo” operator % to get the remainder and check for the evenness here.

/*
5: Replace "for" with "while"

Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
*/

for (let i = 0; i < 3; i++) {
  console.log(`number ${i}!`); // number 0!, number 1!, number 2!
}

// Solution:

let Index4 = 0;
while (Index4 < 3) {
  console.log(`number ${Index4}!`); // number 0!, number 1!, number 2!
  Index4++;
}

/*
6: Repeat until the input is correct

Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.
*/

let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

/*
The loop do..while repeats while both checks are truthy:

i. The check for num <= 100 – that is, the entered value is still not greater than 100.
ii. The check && num is false when num is null or an empty string. Then the while loop stops too.

P.S. If num is null then num <= 100 is true, so without the 2nd check the loop wouldn’t stop if the user clicks CANCEL. Both checks are required.
*/

/*
7. Output prime numbers

An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.

In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.

For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.

Write the code which outputs prime numbers in the interval from 2 to n.

For n = 10 the result will be 2,3,5,7.

P.S. The code should work for any n, not be hard-tuned for any fixed value.

There are many algorithms for this task.

Let’s use a nested for loop:

For each i in the interval {
  check if i has a divisor from 1..i
  if yes => the value is not a prime
  if no => the value is a prime, show it
}

// The code using a label:
*/

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  console.log(i); // 2, 3, 5, 7 (a prime)
}

/*
The purpose of the code is to find and print all prime numbers from 2 through 10.

1. The outer loop
  for (let i = 2; i <= n; i++)
Since n = 10, i takes these values:
  2, 3, 4, 5, 6, 7, 8, 9, 10
For each i, the inner loop checks whether i is divided by any number between 2 and i - 1.
In other words, the inner loop tests whether any j from 2 up to i - 1 divides i evenly (i % j == 0).

2. The inner loop
  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }
This checks:
  i % j == 0
If the remainder is 0, then i is divisible by j, meaning i is not prime.

The interesting part is:
  continue nextPrime;
Because nextPrime labels the outer loop:
  nextPrime:
  for (...)
this doesn't merely continue the inner loop.
It means:
  Stop checking the current i and jump to the next iteration of the outer loop.

Let's trace the numbers
 i     What happens                      Result
 2     No j exists with 2 < j < 2        console.log(2)
 3     Checks 3 % 2 -> 1                 console.log(3)
 4     4 % 2 -> 0 -> continue nextPrime  Skip 4 
 5     5 % 2 -> 1;5 % 3 -> 2;5 % 4 -> 1  console.log(5)
 6     6 % 2 -> 0                        Skip 6 
 7     No divisor found                  console.log(7)
 8     8 % 2 -> 0                        Skip 8
 9     9 % 2 -> 1;9 % 3 -> 0             Skip 9
 10    10 % 2 -> 0                       Skip 10
Therefore: 2, 3, 5, 7

Note: for i = 2, inner loop doesn't run (j starts at 2, but needs j < 2), so 2 is logged.

The key idea
The label:
  nextPrime:
allows the inner loop to say:
  continue nextPrime;
which effectively means:
  "This number isn't prime. Stop checking it and move on to the next i."

So the overall structure is:
  i = 2 -> prime -> print 2
  i = 3 -> prime -> print 3
  i = 4 -> divisible by 2 -> skip
  i = 5 -> prime -> print 5
  i = 6 -> divisible by 2 -> skip
  i = 7 -> prime -> print 7
  i = 8 -> divisible by 2 -> skip
  i = 9 -> divisible by 3 -> skip
  i = 10 -> divisible by 2 -> skip
output: 2, 3, 5, 7.
*/

// There’s a lot of space to optimize it. For instance, we could look for the divisors from 2 to square root of i. But anyway, if we want to be really efficient for large intervals, we need to change the approach and rely on advanced maths and complex algorithms like Quadratic sieve, General number field sieve etc.

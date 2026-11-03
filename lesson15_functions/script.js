// FUNCTIONS IN JAVASCRIPT

/*
Quite often we need to perform a similar action in many places of the script.

For example, we need to show a nice-looking message when a visitor logs in, logs out and maybe somewhere else.

Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

We’ve already seen examples of built-in functions, like alert(message), prompt(message, default) and confirm(question). But we can create functions of our own as well.
*/

// 1. FUNCTION DECLARATION

/*
To create a function we can use a function declaration.

It looks like this:
*/

function showMessage() {
  console.log('Hello everyone!'); // Hello everyone!
}
showMessage(); 

/*
The function keyword goes first, then goes the name of the function, then a list of parameters between the parentheses (comma-separated, empty in the example above, we’ll see examples later) and finally the code of the function, also named “the function body”, between curly braces.

function name(parameter1, parameter2, ... parameterN) {
 // body
}

Our new function can be called by its name: showMessage().

For instance:
*/

function showMessage2() {
  console.log('How to call a function'); // How to call a function
}

showMessage2();
showMessage2();

/*
The call showMessage2() executes the code of the function. Here we will see the message two times.

This example clearly demonstrates one of the main purposes of functions: to avoid code duplication.

If we ever need to change the message or the way it is shown, it’s enough to modify the code in one place: the function which outputs it.
*/

// 2. LOCAL VARIABLES

/*
A variable declared inside a function is only visible inside that function.

For example:
*/

function showMessage3() {
  let message = "Hello, I'm JavaScript!"; // local variable 

  console.log(message);
}
showMessage3(); // Hello, I'm JavaScript!

// console.log(message); // ReferenceError: message is not defined (The variable is local to the function.)

// 3. OUTER VARIABLES

/*
A function can access an outer variable as well.

For example:
*/

let userName = 'John';

function showMessage4() {
  let message = `Hello, ${userName}!`;
  console.log(message); // Hello, John!
}
showMessage4(); // Hello, John!

/*
The function has full access to the outer variable. It can modify it as well.

For instance:
*/

let userName2 = 'John';

function showMessage5() {
  userName2 = "Bob"; // (1) changed the outer variable

  let message = `Hello, ${userName2}`;
  console.log(message); // Hello, Bob
}
console.log(userName2); // John (before the function call)

showMessage5(); // Hello, Bob

console.log(userName2); // Bob (the value was modified by the function)

/*
The outer variable is only used if there’s no local one.

If a same-named variable is declared inside the function then it shadows the outer one. For instance, in the code below the function uses the local userName. The outer one is ignored:
*/

let userName3 = 'John';

function showMessage6() {
  let userName3 = "Bob"; // declare a local variable

  let message = `Hello, ${userName3}!`; // Bob
  console.log(message); // Hello, Bob!
}

// the function will create and use its own userName
showMessage6(); // Hello, Bob!

console.log(userName3); // John (unchanged, the function did not access the outer variable)

/*
ℹ️ Global variables

Variables declared outside of any function, such as the outer userName in the code above, are called global.

Global variables are visible from any function (unless shadowed by locals).

It’s a good practice to minimize the use of global variables. Modern code has few or no globals. Most variables reside in their functions. Sometimes though, they can be useful to store project-level data.
*/

// 4. PARAMETERS

/*
We can pass arbitrary data to functions using parameters.

In the example below, the function has two parameters: from and text.
*/

function showMessage7(from, text) { // parameters: from, text
  console.log(`${from}: ${text}`);
}

showMessage7('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage7('Ann', "What's up?"); // Ann: What's up? (**)

/*
When the function is called in lines (*) and (**), the given values are copied to local variables from and text. Then the function uses them.

Here’s one more example: we have a variable from and pass it to the function. Please note: the function changes from, but the change is not seen outside, because a function always gets a copy of the value:
*/

function showMessage8(from, text) {
  from = '*' + from + '*'; // make "from" look nicer
  console.log(`${from}: ${text}`); // *Ann*: Hello
}

let from = "Ann";

showMessage8(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
console.log(from); // Ann

/*
When a value is passed as a function parameter, it’s also called an argument.

In other words, to put these terms straight:

- A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
- An argument is the value that is passed to the function when it's called (it’s a call time term).

We declare functions listing their parameters, then call them passing arguments.

In the example above, one might say: “the function showMessage is declared with two parameters, then called with two arguments: from and "Hello"”.
*/

// 5. DEFAULT VALUES

/*
If a function is called, but an argument is not provided, then the corresponding value becomes undefined.

For instance, the aforementioned function "showMessage(from, text)" can be called with a single argument:
*/

showMessage8("Ann"); // *Ann*: undefined

/*
That’s not an error. Such a call would output "*Ann*: undefined". As the value for text isn’t passed, it becomes undefined.

We can specify the so-called “default” (to use if omitted) value for a parameter in the function declaration, using an assignment operator (=):
*/

function showMessage9(from, text = "no text given") {
  console.log(`${from}: ${text}`); // Anne: no text given
}
showMessage9("Anne"); // Anne: no text given

/*
Now if the text parameter is not passed, it will get the value "no text given".

The default value also jumps in if the parameter exists, but strictly equals undefined, like this:
*/ 

showMessage9("Anne", undefined); // Anne: no text given

/*
Here "no text given" is a string, but it can be a more complex expression, which is only evaluated and assigned if the parameter is missing. So, this is also possible:

function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}
*/

function anotherFunction() {
  return "Hello!";
}

function showMessage10(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
  console.log(`${from}: ${text}`);
}

showMessage10("John"); // John: Hello!
showMessage10("Mary", "Good morning"); // Mary: Good morning 

/*
The important part here is that anotherFunction() is being used as a default parameter expression. 

Output
John: Hello! // anotherFunction() is executed
Mary: Good morning // anotherFunction() isn't executed

Why?
The parameter:
  text = anotherFunction()
means: if no value is provided for `text`, call anotherFunction() and use its return value as `text`.

showMessage("John")
only `from` is supplied:
  from = "John"
  text = undefined
Since text is undefined, the default expression is evaluated:
  anotherFunction()
which returns:
  "Hello!"
So the function effectively becomes:
  console.log("John: Hello!");

showMessage("Mary", "Good morning")
This time `text` already has a value:
  text = "Good morning"
Therefore, anotherFunction() does not get called, and the result is:
  Mary: Good morning
*/

/*
ℹ️ Evaluation of default parameters

In JavaScript, a default parameter is evaluated every time the function is called without the respective parameter.

In the example above, anotherFunction() isn’t called at all, if the text parameter is provided.

On the other hand, it’s independently called every time when "text" is missing.
*/

/*
ℹ️ Default parameters in old JavaScript code

Several years ago, JavaScript didn’t support the syntax for default parameters. So people used other ways to specify them.

Nowadays, we can come across them in old scripts.

For example, an explicit check for undefined:
*/

// Using the if statement
function showMessage11(from, text) {
  if (text === undefined) {
    text = 'no text given';
  }

  console.log(`${from}: ${text}`);
}
showMessage11(); // undefined: no text provided 

// …Or using the || operator:

function showMessage12(from, text) {
  // If the value of text is falsy, assign the default value
  // this assumes that text == "" is the same as no text at all
  text = text || 'no text given';
  console.log(`${from}: ${text}`);
}

showMessage12('John', 'Hello'); // John: Hello
showMessage12('Mary'); // Mary: no text given 
showMessage12('Peter', ''); // Peter: no text given 
showMessage12('Sarah', null); // Sarah: no text given 

// # Alternative Default Parameters

/*
Sometimes it makes sense to assign default values for parameters at a later stage after the function declaration.

We can check if the parameter is passed during the function execution, by comparing it with undefined:
*/

function showMessage13(text) {
  if (text === undefined) { // if the parameter is missing 
    text = 'empty message';
  }

  console.log(text);
}

showMessage13(); // empty message

// …Or we could use the || operator:

function showMessage14(text) {
  // if text is undefined or otherwise falsy, set it to 'empty'
  text = text || 'empty';
  console.log(text);
}

showMessage14('Hello'); // Hello
showMessage14(''); // empty
showMessage14(); // empty

/*
This line:
  text = text || 'empty';
uses the logical OR operator, which evaluates the left side first:
  text || 'empty';
- If text is truthy, its value is used.
- If text is falsy, 'empty' is used instead.
It's essentially saying: Use text if it has a truthy value; otherwise, use 'empty'.  
*/

// Modern JavaScript engines support the nullish coalescing operator ??, it’s better when most falsy values, such as 0, should be considered “normal”:

function showCount(count) {
  // if count is undefined or null, show "unknown"
  console.log(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown

// 6. RETURNING A VALUE

/*
A function can return a value back into the calling code as the result.

The simplest example would be a function that sums two values:
*/

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
console.log(result); // 3

/*
The directive "return" can be in any place of the function. When the execution reaches it, the function stops, and the value is returned to the calling code (assigned to "result" above).

There may be many occurrences of "return" in a single function. For instance:
*/

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

let age = prompt('How old are you?', 18);

if (checkAge(age)) {
  console.log('Access granted');
} else {
  console.log('Access denied');
}

/*
It's possible to use "return" without a value. That causes the function to exit immediately.

For example:
*/

function checkAge2(age) {
  return age >= 18;
}

function showMovie(age) {
  if (!checkAge2(age)) {
    return;
  }
  console.log("Showing you the movie"); 
}
showMovie(20); // prints, Showing you the movie
showMovie(16); // nothing gets printing

/*
In the code above, if checkAge(age) returns false, then showMovie won’t proceed to the console.log().

showMovie(20);
  if (!checkAge(age))
checkAge(20) evaluates to:
  20 >= 18 // true
So:
  !true // false
Therefore the if body doesn't execute, it continues to:
  console.log("Showing you the movie");
So it prints:
  Showing you the movie

showMovie(16);
  if (!checkAge(age))
checkAge(16) evaluates to:
  16 >= 18 // false
So:
  !false // true
Therefore the if condition is true:
  if (true) {
    return;
  }
return immediately exits showMovie(). Therefore, this line is never reached:
  console.log("Showing you the movie");
So nothing is printed for the 16 call. 

The important pattern
  if (!checkAge(age)) {
    return;
  }
means: if the age check fails, stop the function immediately. Otherwise, continue.
*/

// In the code above, if checkAge(age) returns false, then showMovie won’t proceed to the console.

/*
ℹ️ A function with an empty "return" or without it returns undefined

If a function does not return a value, it is the same as if it returns undefined:
*/

function doNothing() { 
  // empty 
}
console.log(doNothing() === undefined); // true

// An empty return is also the same as return undefined:

function doNothing2() {
  return;
}
console.log(doNothing2() === undefined); // true

/*
⚠️ Never add a newline between return and the value

For a long expression in "return", it might be tempting to put it on a separate line, like this:

return
 (some + long + expression + or + whatever * f(a) + f(b))

That doesn’t work, because JavaScript assumes a semicolon after "return". That’ll work the same as:

return;
 (some + long + expression + or + whatever * f(a) + f(b))

So, it effectively becomes an empty return.

If we want the returned expression to wrap across multiple lines, we should start it at the same line as "return". Or at least put the opening parentheses there as follows:

return (
  some + long + expression
  + or +
  whatever * f(a) + f(b)
  )

And it will work just as we expect it to.
*/

// 7. NAMING A FUNCTION

/*
Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.

It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.

For instance, functions that start with "show" usually show something.

Function starting with…

- "get…" – return a value,
- "calc…" – calculate something,
- "create…" – create something,
- "check…" – check something and return a boolean, etc.

Examples of such names:

showMessage(..)     // shows a message

getAge(..)          // returns the age (gets it somehow)

calcSum(..)         // calculates a sum and returns the result

createForm(..)      // creates a form (and usually returns it)

checkPermission(..) // checks a permission, returns true/false

With prefixes in place, a glance at a function name gives an understanding what kind of work it does and what kind of value it returns.
*/

/*
ℹ️ One function – one action

A function should do exactly what is suggested by its name, no more.

Two independent actions usually deserve two functions, even if they are usually called together (in that case we can make a 3rd function that calls those two).

A few examples of breaking this rule:

- getAge – would be bad if it shows a console.log() with the age (should only get).
- createForm – would be bad if it modifies the document, adding a form to it (should only create it and return).
- checkPermission – would be bad if it displays the access granted/denied message (should only perform the check and return the result).

These examples assume common meanings of prefixes. You and your team are free to agree on other meanings, but usually they’re not much different. In any case, you should have a firm understanding of what a prefix means, what a prefixed function can and cannot do. All same-prefixed functions should obey the rules. And the team should share the knowledge.
*/

/*
ℹ️ Ultrashort function names

Functions that are used very often sometimes have ultrashort names.

For example, the jQuery framework defines a function with ($). The Lodash library has its core function named (_).

These are exceptions. Generally, function names should be concise and descriptive.
*/

// 8. FUNCTIONS == COMMENTS

/*
Functions should be short and do exactly one thing. If that thing is big, maybe it’s worth it to split the function into a few smaller functions. Sometimes following this rule may not be that easy, but it’s definitely a good thing.

A separate function is not only easier to test and debug – its very existence is a great comment!

For instance, compare the two functions showPrimes(n) below. Each one outputs prime numbers up to n.
*/

// The first variant uses a label:

function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    console.log(i); // a prime
  }
}
showPrimes(10); // 2, 3, 5, 7

/*
The function checks every number from 2 up to, but not including, n.

With:
  showPrimes(10);
the outer loop produces:
  i = 2
  i = 3
  i = 4
  i = 5
  i = 6
  i = 7
  i = 8
  i = 9
The goal is to determine which of these numbers are prime.

A prime number is a number greater than 1 that has no divisors other than 1 and itself.

  i = 2
The inner loop is:
  for (let j = 2; j < i; j++)
Since j = 2 is not less than i = 2, the inner loop does not run. Therefore:
  console.log(i);
prints:
  2

 i = 3
j starts at 2. We check:
  3 % 2 == 0
This is false because the remainder is 1. So 3 is printed:
  3

  i = 4
The inner loop checks:
  4 % 2 == 0
This is true. Therefore:
  continue nextPrime;
is executed, which means stop the current iteration  of the inner loop and continue with the next iteration of the outer nextPrime loop. So 4 is not printed.

  i = 5
Check:
  5 % 2 == 0 // false (remainder 1)
  5 % 3 == 0 // false (remainder 2)
  5 % 4 == 0 // false (remainder 1)
No divisor is found, so:
  console.log(5);
prints:
  5
  
  i = 6
Immediately:
  6 % 2 == 0 
is true. So:
  continue nextPrime;
skips 6.

  i = 7
No number from 2 through 6 divides 7 evenly. Therefore:
  7
is printed.

  i = 8
Check:
  8 % 2 == 0  
is true, so 8 is skipped.

  i = 9
The inner loop eventually checks:
  9 % 3 == 0 
which is true, so 9 is skipped:

Therefore, the final output is:
  2, 3, 5 7
*/

// The second variant uses an additional function isPrime(n) to test for primality:

function showPrime(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;
    console.log(i);  // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }

  return true;
}

showPrime(10); // 2, 3, 5, 7

/*
The program has two functions, and they have different jobs:
- showPrime(n)-> goes through the numbers and prints the prime ones.
- isPrime(n) -> determines whether a particular number is prime.

The call:
  showPrime(10);
makes the outer loop run:
  for (let i = 2; i < 10; i++)
So i takes these values:
  2, 3, 4, 5, 6, 7, 8, 9
For each number, we execute:
  if (!isPrime(i)) continue;
This asks:
  "Is i not prime?"
If it isn't prime, continue skips the rest of the current iteration. If it's a prime, console.log(i) runs.

What does isPrime() do?
Consider:
  isPrime(5)
The function runs:
  for (let i = 2; i < n; i++) {
    if (5 % i == 0) return false;
  }
  return true;
It checks whether 5 can be divided evenly by any number from 2 up to 4.
  5 % 2 -> 1 (remainder)
  5 % 3 -> 2 (remainder)
  5 % 4 -> 1 (remainder)
None equals 0, so the loop finishes and:
  return true;
Therefore, isPrime(5) returns true.

What happens with 4?
  isPrime(4)
The loop starts with:
  i = 2
Then:
  4 % 2 == 0
is true, so:
  return false;
immediately ends the isPrime() function. We then return to:
  if(!isPrime(i)) continue;
Since:
  isPrime(4) // false
We have:
  !false // true
Therefore:
  continue;
runs, and 4 is not printed.

The complete process
  i     isPrime(i)      !isPrime(i)     Action
  2     true            false           print 2
  3     true            false           print 3
  4     false           true            continue 
  5     true            false           print 5
  6     false           true            continue 
  7     true            false           print 7
  8     false           true            continue 
  9     false           true            continue 
So the final output is:
  2
  3
  5
  7

The key difference from the previous example
Previously, the program used a labelled continue:
  continue nextPrime;
Here, we don't need a label because there's only one loop inside showPrime(): 
  if (!isPrime(i)) continue;
The continue simply means:
  Skip the rest of the current iteration of the showPrime() loop and move to the next i.
And isPrime() handles the actual prime-number testing separately.
*/

/*
The second variant is easier to understand. Instead of the code piece we see a name of the action (isPrime). Sometimes people refer to such code as self-describing.

So, functions can be created even if we don’t intend to reuse them. They structure the code and make it readable.
*/

// SUMMARY

/*
A function declaration looks like this:

function name(parameters, delimited, by, comma) {
  // code 
}

- Values passed to a function as parameters are copied to its local variables.
- A function may access outer variables. But it works only from inside out. The code outside of the function doesn’t see its local variables.
- A function can return a value. If it doesn’t, then its result is undefined.

To make the code clean and easy to understand, it’s recommended to use mainly local variables and parameters in the function, not outer variables.

It is always easier to understand a function which gets parameters, works with them and returns a result than a function which gets no parameters, but modifies outer variables as a side effect.

Function naming:

- A name should clearly describe what the function does. When we see a function call in the code, a good name instantly gives us an understanding what it does and returns.
- A function is an action, so function names are usually verbal.
- There exist many well-known function prefixes like create…, show…, get…, check… and so on. Use them to hint what a function does.

Functions are the main building blocks of scripts. Now we’ve covered the basics, so we actually can start creating and using them. But that’s only the beginning of the path. We are going to return to them many times, going more deeply into their advanced features.
*/

// TASKS

/*
1: Is "else" required?

The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result:
*/

function checkAge3(Age) {
  if (Age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

console.log(checkAge3(20)); // true
//console.log(checkAge3(16)); // false

/*
  console.log(checkAge(20)); // true
Since 20 > 18 is true, the if block executes:
  return true;
The function immediately ends and returns true. The else block is skipped, and the confirm() dialog does not appear.

console.log(checkAge(16)); // false
Since 16 > 18 is false, the else block executes:
  return confirm('Did parents allow you?');
A browser confirmation dialog appears with the message "Did parents allow you?" and two buttons: OK and Cancel.
- If the user clicks OK, confirm() returns true.
- If the user clicks Cancel, confirm() returns false.
The result is then returned by checkAge() and printed by console.log().
*/

// Will the function work differently if else is removed?

function checkAge4(Age) {
  if (Age > 18) {
    return true;
  }
  
  return confirm('Did parents allow you?');
}
console.log(checkAge4(20)); // true
// console.log(checkAge4(16)); // false

// Is there any difference in the behavior of these two variants?

/*
Answer: No difference!

In both cases, return confirm('Did parents allow you?') executes exactly when the if condition is falsy.
*/

/*
2: Rewrite the function using '?' or '||'

The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result.
*/

function checkAge5(Age) {
  if (Age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
console.log(checkAge5(20)); // true

/*
Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:

i. Using a question mark operator ?
ii. Using OR ||
*/

// Using a question mark operator '?':

function checkAge6(Age) {
  return (Age > 18) ? true : confirm('Did your parents allow you?');
}
console.log(checkAge6(20)); // true

/*
The function uses the ternary operator ? to choose between two expressions:
  condition ? valueIfTrue :
  valueIfFalse
In our example:
  (Age > 18) ? true : confirm('Did your parents allow you?');
Because the condition is true, the expression immediately after (?) is selected:
  true
The confirm() function is not executed. the function returns true, which console.log() prints.

If we change the function call, for instance to 16:
  console.log(checkAge(16)); 
The condition (16 > 18) is false, so the expression immediately after the colon (:) is selected:
  confirm('Did your parents allow you?');
A browser confirmation dialog appears:
   - If the user clicks OK, confirm() returns true, so the output is true.
   - If the user clicks Cancel, confirm() returns false, so the output is false.
Only the selected expression is evaluated.
*/

// Using OR || (the shortest variant):

function checkAge7(Age) {
  return (Age > 18) || confirm('Did your parents allow you?');
}
console.log(checkAge7(20)); // true

/*
The OR operator uses short-circuit evaluation. Its rule is:
  - If the left-hand operand is truthy, JavaScript returns that operand without evaluating the right-hand operand.
  - If the left-hand operand is falsy, JavaScript evaluates the right-hand operand and returns its value.
Since the left-hand operand is true, JavaScript does not execute confirm(). Therefore:
  true || confirm('Did your parents allow you?');
  // true
The function returns true, and console.log() prints it.

If we change the function call to let's say 16:
  console.log(checkAge(16)); 
Now the expression becomes:
  (16 > 18) || confirm('Did your parents allow you?');
First:
  (16 > 18) // false
The expression becomes:
    false || confirm('Did parents allow you?');
Because the left-hand operand is false, the right-hand operand must be evaluated, and a browser confirmation dialogue appears:
  - If the user clicks OK, confirm() returns true, so the function returns true.
   - If the user clicks Cancel, confirm() returns false, so the function returns false.
*/

// Note that the parentheses around Age > 18 are not required here. They exist for better readability.

/*
3: Function min(a, b)

Write a function min(a,b) which returns the least of two numbers a and b.

For instance:
*/

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

// A solution using if:

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(min(2, 5)); // 2
console.log(min(3, -1)); // -1
console.log(min(1, 1)); // 1

/*
  min(2, 5)
The function receives the arguments:
  a = 2
  b = 5
The if statement checks whether `a` is less than `b`:
  if (2 < 5) // true
Because the condition is true, the if block is executed:
  return a;
The function returns 2. Console output:
  2

  min(3, -1)
The function receives the arguments:
  a = 3
  b = -1
The if statement checks whether `a` is less than `b`:
  if (3 < -1) // false
Because the condition is false, the if block is skipped and the else block is executed:
  return b;
The function returns -1. Console output:
  -1

  min(1, 1)
The function receives the arguments:
  a = 1
  b = 1
The if statement checks whether `a` is less than `b`:
  if (1 < 1) // false
The condition is false because the two numbers are equal, so the else block is executed:
  return b;
The function returns 1. Console output:
  1
Note: The function returns the same result even though the else block returns `b` rather than `a`. When both numbers are equal, either value is the minimum.
*/

// A solution with a question mark operator '?':

function min2(a, b) {
  return a < b ? a : b;
}
console.log(min2(2, 5)); // 2
console.log(min2(3, -1)); // -1
console.log(min2(1, 1)); // 1

/*
The function works exactly like the previous if...else solution, but uses the ternary operator to make the decision in a single expression.

The ternary operator follows this syntax:
  condition ? valueIfTrue :
  valueIfFalse;
It evaluates the condition and chooses one of two values:
  - If the condition is true, it returns the value after (?).
  - If the condition is false, it returns the value after (:).

Understanding each function call:

  min(2, 5)
Substitute the arguments (a < b) ? a : b 
  return (2 < 5) ? 2 : 5
Evaluates:
  2 < 5 // true
Because the condition is true, it selects the value immediately after ?, which is 2.
The function returns 2. Console output:
  2

  min(3, -1)
The expression becomes:
  return (3 < -1) ? 3 : -1
Evaluates:
  3 < -1 // false
Because the condition is false, it selects the value after (:), which is -1.
The function returns -1. Console output:
  -1

  min(1, 1)
The expression becomes:
  return (1 < 1) ? 1 : 1
Evaluates:
  1 < 1 // false
Because the condition is false, it selects the value after (:), which is the second 1.
The function returns 1. Console output:
  1
*/

// P.S. In the case of an equality a == b it does not matter what to return.

/*
4: Function pow(x,n)

Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1

Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

P.S. In this task the function should support only natural values of n: integers up from 1.
*/

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}

let x = +prompt("x?", '');
let n = +prompt("n?", '');

if (n < 1) {
  console.log(`Power ${n} is not supported, use a positive integer`);
} else {
  console.log(pow(x, n));
}

/*
The purpose of this program is to calculate x raised to the power of n. For example:
  3² = 3 x 3 = 9
Here, x is the base number, and n is the exponent.

I. Understanding The pow() Function 

Step 1: Define the function
  function pow(x, n) {
This declares a function named "pow" with two parameters:
  - x: the base number.
  - n: the exponent, which determines how many times the base is multiplied by itself.
For example, calling pow(3, 2) assigns 3 to x and 2 to n.

Step 2: Initialize "result"
  let result = x;
This creates a variable called result and initializes it with the value of x.
Suppose we call:
  pow(3, 2);
Initially:
  result = 3;
Why start with x instead of 1? 
- Because the first multiplication has already been accounted for. The variable result begins with one copy of the base, and the loop multiplies it by x another n — 1times.
- For 3², we need two copies of 3. We already have one, so we only need one more multiplication.

Step 3: Understand the for loop
  for (let i = 1; i < n; i++) {
    result *= x;
  }
This loop repeatedly multiplies result by x.
  let i = 1
initializes the loop counter at 1.
  i < n
continues the loop while i is less than n.
  i++
increases i by 1 after each iteration.
The statement inside the loop is:
  result *= x;
This is shorthand for:
  result = result * x;
In other words, it multiplies the current value of result by x and stores the new value back in result.

Step 4: Return the result
  return result;
Once the loop finishes, the function returns the calculated power.
  For example, pow(3, 2) returns 9.
The return statement also ends the function immediately.

II. What Does The Program Output?

The program first asks you to enter two values using prompt().
  let x = +prompt("x?", '');
  let n = +prompt("n?", '');
- prompt("x?", '') asks you to enter the base.
- prompt("n?", '') asks you to enter the exponent.
- The + before prompt() converts the entered string to a number, assuming the input is a valid numeric string.

Example 1:
Enter x = 3 and n = 2
  x = 3, n = 2
Initial value
  result = 3

Loop execution
Iteration  i    Condition i < n   Calculation   result
1          1    1 < 2 -> true     3 * 3         9
Next check 2    2 < 2 -> false    Loop stops    9

Output:
  9

Why? The loop runs once, multiplying 3 by 3. the function then returns 9.

Example 2:
Enter x = 3 and n = 3
  x = 3, n = 3
Initial value
  result = 3

The loop runs twice because i takes the values 1 and 2, both of which are less than 3.

Iteration       i     Calculation     result
Initial value   -     result = x      9
1               1     3 * 3           9
2               2     9 * 3           27

Output:
  27

When i becomes 3, the condition 3 < 3 is false, so the loop stops. The functions returns 27.

Mathematically:
  3³ = 3 x 3 x 3 = 27

Example 3:
Enter x = 1 and n = 10
  x = 1, n = 100
Initial value
  result = 1

The loop runs 99 times because i goes from 1 through 99.

Each iteration performs:
  result = result * 1;
Since multiplying 1 by 1 always produces 1, the value of result never changes.
Output:
  1

When i becomes 3, the condition 3 < 3 is false, so the loop stops. The functions returns 27.

Mathematically:
  1¹⁰⁰ = 1

III. What Happens If n Is Less Than 1

Let's examine the conditional statement:
  if (n < 1) {
    console.log(`Power ${n} is not supported, use a positive integer`);
  } else {
      console.log(pow(x, n));
  }

This checks whether the exponent is less than 1.
- if n < 1 is true, the program prints an error message.
- Otherwise, the program calls pow(x, n) and prints the returned result.

For example, if you enter x = 3 and n = 0, the output is:
  Power 0 is not supported, use a positive integer
The function pow() is not called in this case because the first branch of the if statement executes instead.

Important distinction: This program deliberately rejects zero and negative exponents. Mathematically, zero and negative integer exponents can be defined, but this particular implementation does not support them.

Also, the condition n < 1 does not check whether n is an integer. A positive fractional value such as 2.5 passes the check, even though the loop does not calculate fractional powers correctly in general.

III. The Most Important Concept To Remember

The key to understanding this code is the relationship between the initial value and the loop:
- result = x accounts for the first copy of the base.
- The loop multiplies by x another n — 1times.
- return result sends the final calculated value back to the caller.
- The if...else statement determines whether to display an error message or calculate the power.

For a positive integer exponent n, the function performs n — 1multiplications after initialization to calculate xⁿ. 
*/
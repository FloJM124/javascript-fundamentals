// BASIC OPERATORS, MATHS

/*
We know many operators from school. They are things like addition +, multiplication *, subtraction -, and so on.

In this chapter, we’ll start with simple operators, then concentrate on JavaScript-specific aspects, not covered by school arithmetic.
*/

// 1. TERMS: “UNARY”, “BINARY”, “OPERAND”

/*
Before we move on, let’s grasp some common terminology.

- An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.

- An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:
*/

let x = 1;

x = -x;
console.log(x); // -1 (unary negation was applied)

// An operator is binary if it has two operands. The same minus exists in binary form as well:

let z = 1, y = 3;
console.log(y - z ); // 2 (binary minus subtracts values)

// Formally, in the examples above we have two different operators that share the same symbol: the negation operator, a unary operator that reverses the sign, and the subtraction operator, a binary operator that subtracts one number from another.

// 2. MATH

/*
The following math operations are supported:

- Addition +,
- Subtraction -,
- Multiplication *,
- Division /,
- Remainder %,
- Exponentiation **.

The first four are straightforward, while % and ** need a few words about them.
*/

/*
# Remainder %

The remainder operator %, despite its appearance, is not related to percents.

The result of a % b is the remainder of the integer division of a by b.

For instance:
*/

console.log(5 % 2); // 1 (the remainder of 5 divided by 2)
console.log(8 % 3); // 2 (the remainder of 8 divided by 3)
console.log(8 % 4); // 0 (the remainder of 8 divided by 4)

/*
# Exponentiation **

The exponentiation operator a ** b raises a to the power of b.

In school maths, we write that as aᵇ.

For instance:
*/

console.log(2 ** 2); // 4 (2² = 4)
console.log(2 ** 3); // 8 (2³ = 8)
console.log(2 ** 4); // 16 (2⁴ = 16)

/*
Just like in maths, the exponentiation operator is defined for non-integer numbers as well.

For example, a square root is an exponentiation by ½:
*/

console.log(4 ** (1/2)); // 2 (power of 1/2 is the same as a square root)
console.log(8 ** (1/3)); // 2 (power of 1/3 is the same as a cubic root)

// 3. STRING CONCATENATION WITH BINARY +

/*
Let’s meet the features of JavaScript operators that are beyond school arithmetics.

Usually, the plus operator + sums numbers.

But, if the binary + is applied to strings, it merges (concatenates) them:
*/

let str = "my" + "string";
console.log(str); // mystring

let str2 = "my " + "" + "string";
console.log(str2); // my string (with a space added)

// Note that if any of the operands is a string, then the other one is converted to a string too. For example:

console.log('1' + 2); // 12
console.log(2 + '1'); // 21

// It doesn’t matter whether the first operand is a string or the second one.

// Here’s a more complex example:

console.log(2 + 2 + '1'); // 41 (and not 221)

// Here, operators work one after another. The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'.

console.log('1' + 2 + 2); // 122 (and not 14)

// Here, the first operand is a string, the compiler treats the other two operands as strings too. The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".

// The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.

// Here’s the demo for subtraction and division:

console.log(6 - '2'); // 4 (converts '2' to a number)
console.log('6' / '2'); // 3 (converts both operands to numbers)

// 4. NUMERIC CONVERSION, UNARY +

/*
The plus + exists in two forms: the binary form that we used above and the unary form.

The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.

For example:
*/

// No effect on numbers
let number = 1;
console.log(+number); // 1

let num = -2;
console.log(+num); // -2

// Converts non-numbers
console.log(+true); // 1
console.log(+"");   // 0

/*
It actually does the same thing as Number(...), but is shorter.

The need to convert strings to numbers arises very often. For example, if we are getting values from HTML form fields, they are usually strings. What if we want to sum them?

The binary plus would add them as strings:
*/

let bananas = "2";
let mangoes = "3";

console.log(bananas + mangoes); // 23 (the binary plus concatenates strings)

// If we want to treat them as numbers, we need to convert and then sum them:

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
console.log(+apples + +oranges); // 5

// the longer variant
console.log(Number(apples) + Number(oranges)); // 5

/*
From a mathematician’s standpoint, the abundance of pluses may seem strange. But from a programmer’s standpoint, there’s nothing special: unary pluses are applied first, they convert strings to numbers, and then the binary plus sums them up.

Why are unary pluses applied to values before the binary ones? As we’re going to see, that’s because of their higher precedence.
*/

// 5. OPERATOR PRECEDENCE

/*
If an expression has more than one operator, the execution order is defined by their precedence, or, in other words, the default priority order of operators.

From school, we all know that the multiplication in the expression 1 + 2 * 2 should be calculated before the addition. That’s exactly the precedence thing. The multiplication is said to have a higher precedence than the addition.

Parentheses override any precedence, so if we’re not satisfied with the default order, we can use them to change it. For example, write (1 + 2) * 2.

There are many operators in JavaScript. Every operator has a corresponding precedence number. The one with the larger number executes first. If the precedence is the same, the execution order is from left to right.

Here’s an extract from the precedence table (you don’t need to remember this, but note that unary operators are higher than corresponding binary ones):

    Precedence	      Name	            Sign
    …	              …	                …
    14	              unary plus	    +
    14	              unary negation	-
    13	              exponentiation	**
    12	              multiplication	*
    12	              division	        /
    11	              addition	        +
    11	              subtraction	    -
    …	              …	                …
    2	              assignment	    =
    …	              …	                …

As we can see, the “unary plus” has a priority of 14 which is higher than the 11 of “addition” (binary plus). That’s why, in the expression "+apples + +oranges", unary pluses work before the addition.
*/

// 6. ASSIGNMENT

/*
Let’s note that an assignment = is also an operator. It is listed in the precedence table with the very low priority of 2.

That’s why, when we assign a variable, like result = 2 * 2 + 1, the calculations are done first and then the = is evaluated, storing the result in result.
*/

let result = 2 * 2 + 1;
console.log(result); // 5

// # Assignment = returns a value

/*
The fact of = being an operator has an interesting implication.

All operators in JavaScript return a value. That’s obvious for + and -, but also true for =.

The call x = value writes the value into x and then returns it.

Here’s a demo that uses an assignment as part of a more complex expression:
*/

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

console.log(a); // 3
console.log(c); // 0

/*
In the example above, the result of expression (a = b + 1) is the value which was assigned to 'a' (that's 3). It is then used for further evaluations.

Funny code, isn’t it? We should understand how it works, because sometimes we see it in JavaScript libraries.

Although, please don’t write the code like that. Such tricks definitely don’t make code clearer or readable.
*/

// # Chaining assignments

// Another interesting feature is the ability to chain assignments:

let d, e, f;

d = e = f = 2 + 2;

console.log(d); // 4
console.log(e); // 4
console.log(f); // 4

// Chained assignments evaluate from right to left. First, the rightmost expression 2 + 2 is evaluated and then assigned to the variables on the left: f, e and d. At the end, all the variables share a single value.

// Once again, for the purposes of readability it’s better to split such code into a few lines:

c = 2 + 2;
b = c;
a = c;

// That’s easier to read, especially when eye-scanning the code fast.

// 7. MODIFY-IN-PLACE

// We often need to apply an operator to a variable and store the new result in that same variable. For example:

let n = 2;
n = n + 5;
n = n * 2;

// This notation can be shortened using the operators += and *=:

let m = 2;
m += 5; // now m = 7 (same as m = m + 5)
m *= 2; // now m = 14 (same as m = m * 2)

console.log(m); // 14

// Short “modify-and-assign” operators exist for all arithmetical and bitwise operators: /=, -=, etc.

// Such operators have the same precedence as a normal assignment, so they run after most other calculations:

let s = 2;
s *= 3 + 5; // right part evaluated first, same as s *= 8

console.log(s); // 16

// 8. INCREMENT/DECREMENT

// Increasing or decreasing a number by one is among the most common numerical operations. So, there are special operators for it:

// - Increment ++ increases a variable by 1:

let counter = 2;
counter++; // works the same as, counter = counter + 1, but is shorter

console.log(counter); // 3

// - Decrement -- decreases a variable by 1:

let index = 2;
index--; // works the same as, index = index - 1, but is shorter

console.log(index); // 1

/*
⚠️ Important:

Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.
*/

/*
The operators ++ and -- can be placed either before or after a variable.

- When the operator goes after the variable, it is in “postfix form”: counter++.
- The “prefix form” is when the operator goes before the variable: ++counter.

Both of these statements do the same thing: increase counter by 1.

Is there any difference? Yes, but we can only see it if we use the returned value of ++/--.

Let’s clarify. As we know, all operators return a value. Increment/decrement is no exception. The prefix form returns the new value while the postfix form returns the old value (prior to increment/decrement).

To see the difference, here’s an example:
*/

let i = 1;
let value = ++i; // (*)

console.log(value); // 2

// In the line (*), the prefix form ++i increments counter and returns the new value, 2. 

// Now, let’s use the postfix form:

let counter2 = 1;
let value2 = counter2++; // (*) changed ++counter2 to counter2++

console.log(value2); // 1

// In the line (*), the postfix form counter++ also increments counter but returns the old value (prior to increment).

// To summarize:

// i. If the result of increment/decrement is not used, there is no difference in which form to use:

let counter3 = 0;
counter3++;
++counter3;

console.log(counter3); // 2 (the lines above did the same)

// ii. If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:

let counter4 = 0;
console.log(++counter4); // 1

// iii. If we’d like to increment a value but use its previous value, we need the postfix form:

let counter5 = 0;
console.log(counter5++); // 0

// ℹ️ Increment/decrement among other operators

// The operators ++/-- can be used inside expressions as well. Their precedence is higher than most other arithmetical operations. For instance:

let counter6 = 1;
console.log(2 * ++counter6); // 4

// Compare with:

let counter7 = 1;
console.log(2 * counter7++); // 2 (because counter7++ returns the "old" value)

/*
Though technically okay, such notation usually makes code less readable. One line does multiple things – not good.

While reading code, a fast “vertical” eye-scan can easily miss something like counter++ and it won’t be obvious that the variable increased.

We advise a style of “one line – one action”:
*/

let counter8 = 1;
console.log(2 * counter8);
counter8++;

// 9. BITWISE OPERATORS

/*
Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

These operators are not JavaScript-specific. They are supported in most programming languages.

The list of operators:

- AND (&)
- OR (|)
- XOR (^)
- NOT (~)
- LEFT SHIFT (<<)
- RIGHT SHIFT (>>)
- ZERO-FILL RIGHT SHIFT (>>>)

These operators are used very rarely, when we need to fiddle with numbers on the very lowest (bitwise) level. We won’t need these operators any time soon, as web development has little use of them, but in some special areas, such as cryptography, they are useful. You can read the Bitwise Operators chapter on MDN when a need arises.
*/

// 10. COMMA

/*
The comma operator (,) is one of the rarest and most unusual operators. Sometimes, it’s used to write shorter code, so we need to know it in order to understand what’s going on.

The comma operator allows us to evaluate several expressions, dividing them with a comma (,). Each of them is evaluated but only the result of the last one is returned.

For example:
*/

let comma = (1 + 2, 3 + 4);
console.log(comma); // 7 (the result of 3 + 4)

// Here, the first expression 1 + 2 is evaluated and its result is thrown away. Then, 3 + 4 is evaluated and returned as the result.

/*
ℹ️ Comma has a very low precedence

Please note that the comma operator has very low precedence, lower than =, so parentheses are important in the example above.

Without them: a = 1 + 2, 3 + 4 evaluates + first, summing the numbers into a = 3, 7, then the assignment operator = assigns a = 3, and the rest is ignored. It’s like (a = 1 + 2), 3 + 4.
*/

/*
Why do we need an operator that throws away everything except the last expression?

Sometimes, people use it in more complex constructs to put several actions in one line.

For example:
*/

// three operations in one line
for (a = 1, b = 3, c = a * b; a < 5; a++) {
 console.log(a); // 1, 2, 3, 4
}

// Such tricks are used in many JavaScript frameworks. That’s why we’re mentioning them. But usually they don’t improve code readability so we should think well before using them.


// TASKS

/*
I. THE POSTFIX AND PREFIX FORMS 

What are the final values of all variables a, b, c and d after the code below?
*/

let l = 1, k = 1;

let o = ++l; // ?
let w = k++; // ?

/*
The answer is:

- l = 2
- b = 2
- o = 2
- w = 1
*/

let p = 1, j = 1;

console.log(++p); // 2 (prefix form returns the new value)
console.log( j++ ); // 1 (postfix form returns the old value)

console.log(p); // 2 (incremented once)
console.log(j); // 2 (incremented once)

/*
II. ASSIGNMENT RESULT 

What are the values of A and X after the code below?
*/

let A = 2;
let X = 1 + (A *= 2);

console.log(A); // 4
console.log(X); // 5

/*
The answer is:

A = 4 (multiplied by 2)
X = 5 (calculated as 1 + 4)
*/

/*
III. TYPE CONVERSIONS 

What are results of these expressions?

"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2

Think well, write down and then compare with the answer.
*/

// Solution:

console.log("" + 1 + 0); // 10 (1)
console.log("" - 1 + 0); // -1 (2)
console.log(true + false); // 1
console.log(6 / "3"); // 2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); // "9px"
console.log("$" + 4 + 5); // "$45"
console.log("4" - 2); // 2
console.log("4px" - 2); // NaN
console.log("  -9  " + 5); // "  -9  5" // (3)
console.log("  -9  " - 5); // -14 (4)
console.log(null + 1); // 1  (5)
console.log(undefined + 1); // NaN  (6)
console.log(" \t \n" - 2); // -2  (7)

/*
1. The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1", and then we have "1" + 0, the same rule is applied.
2. The subtraction - (like most math operations) only works with numbers, it converts an empty string "" to 0.
3. The addition with a string appends the number 5 to the string.
4. The subtraction always converts to numbers, so it makes " -9 " a number -9 (ignoring spaces around it).
5. null becomes 0 after the numeric conversion.
6. undefined becomes NaN after the numeric conversion.
7. Space characters are trimmed off string start and end when a string is converted to a number. Here the whole string consists of space characters, such as \t, \n and a “regular” space between them. So, similarly to an empty string, it becomes 0.

/*
IV. FIX THE ADDITION 

Here’s a code that asks the user for two numbers and shows their sum.

It works incorrectly. The output in the example below is 12 (for default prompt values).

Why? Fix it. The result should be 3.
*/

let C = prompt("First number?", 1);
let D = prompt("Second number?", 2);

console.log(C + D); // 12

// Solution:

// The reason is that prompt returns user input as a string. So variables have values "1" and "2" respectively.

// What we should do is to convert strings to numbers before +. For example, using Number() or prepending them with +. For example, right before prompt:

let E = +prompt("First number?", 1);
let F = +prompt("Second number?", 2);

console.log(E + F); // 3

// Or in the console.log:

let G = prompt("First number?", 1);
let H = prompt("Second number?", 2);

console.log(+G + +H); // 3

// Using both unary and binary + in the latest code. Looks funny, doesn’t it?

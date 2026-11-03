// NULLISH COALESCING OPERATOR '??'

/*
The nullish coalescing operator is written as two question marks ??.

As it treats null and undefined similarly, we’ll use a special term here, in this article. For brevity, we’ll say that a value is “defined” when it’s neither null nor undefined.

The result of a ?? b is:

- if a is defined, then a,
- if a isn’t defined, then b.

In other words, ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.

The nullish coalescing operator isn’t anything completely new. It’s just a nice syntax to get the first “defined” value of the two.

We can rewrite result = a ?? b using the operators that we already know, like this:
*/

let a = null;
let b = 2;

console.log(result = (a !== null && a !== undefined) ? a : b); // 2

/*
The common use case for ?? is to provide a default value.

For example, here we show user if its value isn’t null/undefined, otherwise Anonymous:
*/

let user;

console.log(user ?? "Anonymous"); // Anonymous (user is undefined)

// Here’s the example with user assigned to a name:

let user2 = "John";

console.log(user2 ?? "Anonymous"); // John (user is not null/undefined)

/*
We can also use a sequence of ?? to select the first value from a list that isn’t null/undefined.

Let’s say we have a user’s data in variables firstName, lastName or nickName. All of them may be not defined, if the user decided not to fill in the corresponding values.

We’d like to display the user name using one of these variables, or show “Anonymous” if all of them are null/undefined.

Let’s use the ?? operator for that:
*/

// shows the first defined value:
let firstName = null;
let lastName = null;
let nickName = "SuperCoder";

console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // SuperCoder

// shows "Anonymous2" if no value is the defined:
let firstName2 = null;
let lastName2 = null;
let nickName2 = undefined;

console.log(firstName2 ?? lastName2 ?? nickName2 ?? "Anonymous2"); // Anonymous2

// 1. COMPARISON WITH OR ||

/*
The OR || operator can be used in the same way as ??, as it was described in the previous chapter.

For example, in the code above we could replace ?? with || and still get the same result:
*/

let firstName3 = null;
let lastName3 = null;
let nickName3 = "SuperCoder";

// shows the first truthy value:
console.log(firstName3 || lastName3 || nickName3 || "Anonymous"); // SuperCoder

/*
Historically, the OR || operator was there first. It’s been there since the beginning of JavaScript, so developers were using it for such purposes for a long time.

On the other hand, the nullish coalescing operator ?? was added to JavaScript only recently, and the reason for that was that people weren’t quite happy with ||.

The important difference between them is that:

- || returns the first truthy value.
- ?? returns the first defined value.

In other words, || doesn’t distinguish between false, 0, an empty string "" and null/undefined. They are all the same – falsy values. If any of these is the first argument of ||, then we’ll get the second argument as the result.

In practice though, we may want to use default value only when the variable is null/undefined. That is, when the value is really unknown/not set.

For example, consider this:
*/

let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0

/*
- The height || 100 checks height for being a falsy value, and it’s 0, falsy indeed.
  - so the result of || is the second argument, 100.
- The height ?? 100 checks height for being null/undefined, and it’s not,
  - so the result is height “as is”, that is 0.

In practice, the zero height is often a valid value, that shouldn’t be replaced with the default. So ?? does just the right thing.
*/

// 2. PRECEDENCE 

/*
The precedence of the ?? operator is the same as ||. They both equal 3 in the MDN table.

That means that, just like ||, the nullish coalescing operator ?? is evaluated before = and ?, but after most other operations, such as +, *.

So we may need to add parentheses in expressions like this:
*/

let height2 = null;
let width = null;

// important: use parentheses
let area = (height2 ?? 100) * (width ?? 50);

console.log(area); // 5000

// Otherwise, if we omit parentheses, then as * has the higher precedence than ??, it would execute first, leading to incorrect results.

// without parentheses
let area2 = height ?? 100 * width ?? 50;
console.log(area2); // 0 (100 x 0)

// ...works this way (not what we want):
let area3 = height ?? (100 * width) ?? 50;
console.log(area3); // 0 (100 x 0)

// i. Using ?? with && or ||

/*
Due to safety reasons, JavaScript forbids using ?? together with && and || operators, unless the precedence is explicitly specified with parentheses.

The code below triggers a syntax error:

let x = 1 && 2 ?? 3; // SyntaxError: Unexpected token '??'

The limitation is surely debatable, it was added to the language specification with the purpose to avoid programming mistakes, when people start to switch from || to ??.

Use explicit parentheses to work around it:
*/

let x = (1 && 2) ?? 3; // Works

console.log(x); // 2

/*
For: 1 && 2
- 1 is truthy
- Therefore, the second operand is returned: 2
So: (1 && 2) becomes 2

Now we have: 2 ?? 3
- Since the ?? operator returns the right-hand value only if the left-hand value is null or undefined, it returns 2 because it's neither
*/

// SUMMARY 

/*
- The nullish coalescing operator ?? provides a short way to choose the first “defined” value from a list.

It’s used to assign default values to variables:
*/

// set height=100, if height is null or undefined
setHeight = null;
setHeight = setHeight ?? 100;

console.log(setHeight); // 100

/*
- The operator ?? has a very low precedence, only a bit higher than ? and =, so consider adding parentheses when using it in an expression.

- It’s forbidden to use it with || or && without explicit parentheses.
*/
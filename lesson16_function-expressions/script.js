// FUNCTION EXPRESSIONS

/*
In JavaScript, a function is a special kind of value. 

The syntax below is called a Function Declaration:
*/

function sayHi() {
  console.log("Hello!");
}
sayHi(); // Hello!

/*
There is another syntax for creating a function that is called a Function Expression. 

It allows us to create a new function in the middle of any expression.

For example:
*/

let sayHi2 = function() {
  console.log("Hello again!");
};
sayHi2(); // Hello again!

/*
The function is assigned to a variable called sayHi2, and then sayHi2() calls that function, which executes console.log("Hello again!").

This is called a function expression because a function is created as an expression and assigned to a variable. And notice the function has no name after the function keyword: 
    function()

The variable sayHi2 provides a way to refer to and call that function. The the function's body is executed:
    console.log("Hello again!");
This prints:
    Hello again!

Note: The parentheses () are important because they tell JavaScript to execute the function referenced by sayHi2:
    sayHi2();
*/

/*
Here we can see a variable sayHi2 getting a value, the new function, created as function() { console.log("Hello again"); }.

As the function creation happens in the context of the assignment expression (to the right side of =), this is a Function Expression.

Please note, there’s no name after the function keyword. Omitting a name is allowed for Function Expressions.

Here we immediately assign it to the variable, so the meaning of these code samples is the same: “create a function and put it into the variable sayHi2”.

In more advanced situations, that we’ll come across later, a function may be created and immediately called or scheduled for a later execution, not stored anywhere, thus remaining anonymous.
*/

// 1. FUNCTION IS A VALUE 

/*
Let's reiterate: no matter how the function is created, a function is a value. Both examples above store a function in the sayHi variable.

We can even print out that value using console.log():
*/

function showMessage() {
  console.log("I'm a function");
}
console.log(showMessage); // shows the function code

/*
The last line does not run the function because there are no parentheses after 'showMessage':
    console.log(showMessage);
In JavaScript, a function is a value, so we can deal with it as a value. The code above shows its string representation, which is the source code:
    function showMessage() {
      console.log("I'm a function");
    }
*/

/*
Please note that the last line does not run the function, because there are no parentheses after showMessage. There are programming languages where any mention of a function name causes its execution, but JavaScript is not like that.

In JavaScript, a function is a value, so we can deal with it as a value. The code above shows its string representation, which is the source code.

A function is a special value, but it’s still a value. So we can work with it like with other kinds of values.

If we want to call the aforementioned function, we just need to add the parentheses on the showMessage:
*/

function showMessage2() { 
  console.log("I'm a function"); // I'm a function
}
console.log(showMessage2()); // undefined (because it cannot see inside the function)

// We can copy a function to another variable:

function saySomething() { // (1) create
  console.log("Copy a function to another variable.");
}

let func = saySomething; // (2) copy

func(); // Copy a function to another variable. (3)
saySomething(); // Copy a function to another variable.

/*
Here’s what happens above in detail:

1. The Function Declaration (1) creates the function and puts it into the variable named saySomething.
2. Line (2) copies it into the variable func. Please note again: there are no parentheses after saySomething. If there were, then func = saySomething() would write the result of the call saySomething() into func, not the function saySomething itself.
3. Now the function can be called as both saySomething() and func().
*/

/*
The code prints "Copy a function to another variable." twice to the console because the same function is called two times: first through func() and then through saySomething().

Step 1: Declare a function
  function saySomething() { 
    console.log("Copy a function to another variable.");
  }
- At this stage, the function is defined, but its body has not executed. So, nothing has been printed yet.

Step 2: Assign the function to another variable
  let func = saySomething;
- This is the most important line to understand. We declare a variable named "func" and assign it to the value of the existing function "saySomething".
- Note that saySomething has no parentheses here because we're assigning the function itself to "func", rather than calling the function.
- Both variables now refer to the same function. This illustrates an important JavaScript concept: functions are values. Just like strings and numbers, functions can be assigned to variables and passed around in a program.

Step 3: Call the function using func()
  func();
- Because "func" references the function originally named "saySomething", calling func() executes that function's body. 
  console.log("Copy a function to another variable.");
- The first message appears in the console:
  Copy a function to another variable.

Step 4: Call the original function
  saySomething();
- This calls the same function again, this time using its original name. The function body executes once more, printing a second message:
  Copy a function to another variable.

The complete output is therefore:
  Copy a function to another variable.
  Copy a function to another variable.

The reason why func() works even though the function is named saySomething is because "func" is a reference to the function, not a separate copy of its code.

Compare:
  let func = saySomething;
- Assigns a reference to the function to func.

  let func = saySomething();
- Calls the function and assigns its return value to func.

In our example, the function has no explicit return statement, so it returns undefined by default. If we instead wrote:
  let func = saySomething();
-JavaScript would immediately execute saySomething() once, print "Copy a function to another variable", and assign undefined to func.
- Then attempting to run func() would produce a TypeError, because func would contain undefined, not a function.

You can think of it this way:
- saySomething — the original reference to the function.
- func — another reference to that same function.
- func() — executes the function.
- saySomething() — executes the function again.

Remember the distinction:
- saySomething means refer to the function.
- saySomething() means call the function.

The distinction is fundamental to understanding function expressions, callbacks, and higher-order functions in JavaScript.
*/

// We could also have used a Function Expression to declare saySomething, in the first line:

let saySomething2 = function() { // (1) create
  console.log("This is also a copy");
};

let func2 = saySomething2; // (2) copy

func2(); // This is also a copy
saySomething2(); // This is also a copy

// Everything would work the same.

/*
ℹ️ Why is there a semicolon at the end?

You might wonder, why do Function Expressions have a semicolon ; at the end, but Function Declarations do not:

function sayHi() {
  // ...
}

let sayHi = function() {
  // ...
};

The answer is simple: a Function Expression is created here as function(…) {…} inside the assignment statement: let sayHi = …;. The semicolon ; is recommended at the end of the statement, it’s not a part of the function syntax.

The semicolon would be there for a simpler assignment, such as, let sayHi = 5;, and it’s also there for a function assignment.
*/

/* 
The key is that a function expression is usually part of an assignment statement, whereas a function declaration is a statement on its own.

The semicolon comes after the closing brace } because it terminates the variable assignment statement.

The semicolon does not belong to the function itself. It belongs to the statement that assigns the function to the variable.

But a function declaration is complete. The closing brace } marks the end of the function's body and the declaration. A semicolon is not required after it. 
*/

// 2. CALLBACK FUNCTIONS 

/*
Let’s look at more examples of passing functions as values and using function expressions. 

We’ll write a function, "ask(question, yes, no)", with three parameters:

question
Text of the question

yes
Function to run if the answer is “Yes”

no
Function to run if the answer is “No”

The function should ask the question and, depending on the user’s answer, call yes() or no():
*/

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  console.log("You agreed.");
}

function showCancel() {
  console.log("You canceled the execution.");
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

/*
This code demonstrates callback functions in JavaScript. The ask() function asks the user a question and then executes one of two functions depending on whether the user confirms or cancels.

The output depends on the user's response to the confirmation dialog.
- If the user clicks OK, console output:
    You agreed.
- If the user clicks Cancel, console output:
    You canceled the execution.
The confirm() function displays a browser dialog with OK and Cancel buttons. It returns true if the user clicks OK and false if the user clicks Cancel.

Step 1: Define the ask() function
  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }

This function accepts three parameters:
  question — The message displayed in the confirmation dialogue
  yes — A function to execute if the user clicks OK.
  no — A function to execute if the user clicks Cancel.

Notice that "yes" and "no" are parameters that will receive other functions as arguments. Inside ask(), the condition is:
  if (confirm(question)) yes();
  else no();

- confirm(question) displays the dialog.
- If it returns true, yes() is executed.
- Otherwise, no() is executed.

The parentheses in yes() and no() are important because they call the functions.

Step 2: Define the showOk() function
  function showOk() {
    console.log("You agreed.");
  }

- This function prints the message "You agreed." to the console when it's called.
- Defining the function does not execute it. It simply makes the function available for later use.

Step 3: Define the showCancel() function
  function showCancel() {
    console.log("You canceled the execution.");
  }

- This function prints "You canceled the execution." when called.
- Again, defining the function does not execute it immediately.

Step 4: Call ask()
  ask("Do you agree?", showOk, showCancel);

This is where everything comes together. Three arguments are passed to ask():

  Argument            Parameter receiving it
  "Do you agree?"     question
  showOk              yes
  showCancel          no

Notice that showOk and showCancel do not have parentheses. That means we are passing references to the functions rather than calling them immediately.

You can think of the call as temporarily assigning these values:
  question = "Do you agree?";
  yes = showOk;
  no = showCancel;

- These assignments illustrate the relationship between the arguments and parameters; they are not additional statements you need to write.
- When ask() executes, it decides which function to call based on the user's response.

Why is this called a callback? 
A callback function is a function passed to another function as an argument so that the receiving function can call it later. In this example:
- showOk is a callback function.
- showCancel is also a callback function.
- ask() decides which callback to execute.

Compare:
  ask("Do you agree?", showOk, showCancel);
Here, showOk and showCancel are passed as functions, and ask() chooses when to execute them.

  ask("Do you agree?", showOk(), showCancel());
Here, both functions are called immediately while JavaScript evaluates the arguments. Their return values, rather than the function references, are passed to ask(). Since neither function explicitly returns a value, each returns undefined, and the behavior is different from what was intended.

Remember:
  showOk — refers to the function
  showOk() — calls the function

This distinction is fundamental to understanding callback functions in JavaScript.
*/

/*
In practice, such functions are quite useful. The major difference between a real-life ask and the example above is that real-life functions use more complex ways to interact with the user than a simple confirm. In the browser, such functions usually draw a nice-looking question window. But that’s another story.

The arguments showOk and showCancel of ask are called callback functions or just callbacks.

The idea is that we pass a function and expect it to be “called back” later if necessary. In our case, showOk becomes the callback for “yes” answer, and showCancel for “no” answer.

We can use Function Expressions to write an equivalent, shorter function:
*/

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Again, do you agree?",
  function() { console.log("Again, you agreed."); },
  function() { console.log("Again, you canceled the execution."); }
);

/*
This works similarly to the previous example, but instead of passing named functions such as showOk and showCancel, it passes two anonymous functions directly into ask().

# Pass the question and two anonymous functions:
  ask(
    "Do you agree?",
    function() { console.log("You agreed."); },
    function() { console.log("You canceled the execution."); }
  );

The three arguments correspond to the three parameters in ask().

  Argument                                    Parameter
  "Do you agree?"                             question

  function() 
  { console.log("You agreed."); }                 yes

  function() 
  { console.log("You canceled the execution."); }  no

First anonymous function:
  function() { 
    console.log("You agreed."); 
  }
This function prints "You agreed." when it's called. It's assigned to the 'yes' parameter when ask() is invoked.

Second anonymous function:
  function() { 
    console.log("You canceled the execution."); 
  }
This function prints "You canceled the execution." when it's called. It's assigned to the 'no' parameter.

Neither function runs simply because it's passed as an argument. The ask() function decides which one to call.

# Follow the execution:
Suppose the user clicks OK. The condition becomes:
  if (true) yes();
  else no();
It calls the function referenced by 'yes', producing: 
  You agreed.
The else branch is skipped.

If the user clicks Cancel, the condition becomes:
  if (false) yes();
  else no();
It calls the function referenced by 'no', producing:
  You canceled the execution.
The yes() branch is skipped.

The previous code used named function declarations, while this code uses anonymous function expressions directly as arguments. Both versions achieve the same result. The difference is how the callback functions are defined and passed.
*/

/*
Here, functions are declared right inside the ask(...) call. They have no name, and so are called anonymous. Such functions are not accessible outside of ask (because they are not assigned to variables), but that’s just what we want here.

Such code appears in our scripts very naturally, it’s in the spirit of JavaScript.
*/

/*
ℹ️ A function is a value representing an “action”

Regular values like strings or numbers represent the data.

A function can be perceived as an action.

We can pass it between variables and run when we want.
*/

// 3. FUNCTION EXPRESSION vs FUNCTION DECLARATION 

/*
Let’s formulate the key differences between Function Declarations and Expressions.

First, the syntax: how to differentiate between them in the code.
*/

/* 
i. Function Declaration

It's a function, declared as a separate statement, in the main code flow.
*/

// Function Declaration
function sum(a, b) {
  return a + b;
}
console.log(sum(5, 5)); // 10

/*
ii. Function Expression

It's a function, created inside an expression or inside another syntax construct. Here, the function is created on the right side of the “assignment expression” =:
*/

// Function Expression
let sum2 = function(a, b) {
  return a + b;};
console.log(sum2(4, 4)); // 8

/*
The more subtle difference is when a function is created by the JavaScript engine.

=> A Function Expression is created when the execution reaches it and is usable only from that moment.

Once the execution flow passes to the right side of the assignment, let sum = function…, – here we go, the function is created and can be used (assigned, called, etc. ) from now on.

Function Declarations are different.

=> A Function Declaration can be called earlier than it is defined.

For example, a global Function Declaration is visible in the whole script, no matter where it is.

That’s due to internal algorithms. When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”.

And after all Function Declarations are processed, the code is executed. So it has access to these functions.

For example, this works:
*/

username("John"); // Hello, John (global)

function username(name) {
  console.log(`Hello, ${name}`);
}

/*
The Function Declaration username is created when JavaScript is preparing to start the script and is visible everywhere in it. 

...If it were a Function Expression, then it wouldn’t work:

username("John"); // ReferenceError: Cannot access 'username' before initialization

let username = function(name) {  // (*) 
  console.log(`Hello, ${name}`);
};
*/

/*
Function Expressions are created when the execution reaches them. That would happen only in the line (*). Too late.

Another special feature of Function Declarations is their block scope.

=> In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.

For instance, let’s imagine that we need to declare a function welcome() depending on the 'age' variable that we get during runtime. And then we plan to use it some time later.

If we use Function Declaration, it won’t work as intended:
*/

/*
let age = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {
  function welcome() {
    console.log("Hello!");
  }

} else {
  function welcome() {
    console.log("Greetings!");
  }
}
// ...use it later
welcome(); // ReferenceError: Cannot access 'welcome' before initialization
*/

/*
That’s because a Function Declaration is only visible inside the code block in which it resides. 

Here’s another example:
*/

/*
let age2 = 16; // take 16 as an example

if (age2 < 18) {
  welcome();                  // \   (runs)
                              //  |
  function welcome() {        //  |
    console.log("Hello!");    //  |  Function Declaration is available
  }                           //  |  everywhere in the block where it's declared
                              //  |
  welcome();                  // /   (runs)

} else {
  function welcome() {
    console.log("Greetings!");
  }
}
// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.
welcome(); // ReferenceError: Cannot access 'welcome' before initialization
*/

/*
What can we do to make 'welcome’ visible outside of if statement? 

The correct approach would be to use a Function Expression and assign 'welcome’ to the variable that is declared outside of if() and has the proper visibility.

This code works as intended:
*/

let age3 = prompt("What is your age?", 18);

let welcome;

if (age3 < 18) {
  welcome = function() {
    console.log("Hello!");
  };

} else {
  welcome = function() {
    console.log("Greetings!");
  };
}
welcome(); // ok now

// Or we could simplify it even further using a question mark operator ?:

let age4 = prompt("Again, what's your age?", 18);

let welcome2 = (age4 < 18) ?
  function() { console.log("Hello, again!"); } :
  function() { console.log("Greetings, again!"); };
welcome2(); // ok now

/*
ℹ️ When to choose Function Declaration versus Function Expression?

As a rule of thumb, when we need to declare a function, the first thing to consider is Function Declaration syntax. It gives more freedom in how to organize our code, because we can call such functions before they are declared.

That’s also better for readability, as it’s easier to look up "function f(…) {…}" in the code than "let f = function(…) {…};". Function Declarations are more eye-catching.

…But if a Function Declaration does not suit us for some reason, or we need a conditional declaration (we’ve just seen an example), then Function Expression should be used.
*/

// SUMMARY 

/*
- Functions are values. They can be assigned, copied or declared in any place of the code.
- If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.
- If the function is created as a part of an expression, it’s called a “Function Expression”.
- Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
- Function Expressions are created when the execution flow reaches them.

In most cases when we need to declare a function, a Function Declaration is preferable, because it is visible prior to the declaration itself. That gives us more flexibility in code organization, and is usually more readable.

So we should use a Function Expression only when a Function Declaration is not fit for the task. We’ve seen a couple of examples of that in this chapter, and will see more in the future.
*/
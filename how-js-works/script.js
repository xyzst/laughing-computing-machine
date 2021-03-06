/**
 * Hoisting
 */
// calculateAge(1965); // this still works due to hoisting of the fx declration
// function calculateAge(year) {
//   console.log(2018 - year);
// }
// // calculateAge(1990);

// // retirement(1965); // wont work -- hoisting only works with function declarations, not fx expressions
// var retirement = function(y) {
//   console.log(65 - (2018 - y));
// };
// // retirement(1990);

// // variables
// // console.log(age); // undefined -- scanned and variable set to undefined but the execution has not completed with assignment
// var age = 23; // stored in global exec context
// // console.log(23);

// function foo() {
//   console.log(age); // undefined!
//   var age = 65; // stored in separate exec context
//   console.log(age); // 65
// }

// foo();
// console.log(age); // 23

/**
 * Scoping
 */

// var a = "hello";
// first();

// function first() {
//   var b = "ni hao"; // has access to global scope at this point since line 35 execs fx (lexical scoping)
//   second();

//   function second() {
//     var c = "heya"; // has access to global, and first() func scopes
//     // console.log(a + b + c);
//     third(); // can access due to scoping!
//   }
// }

// function third() {
//   var d = "john";
//   //   console.log(c); // Reference Error -- c is not defined (DIFFERENT EXEC STACK!)
//   console.log(a, d); // access to global scope and function scope
// }

/**
 * "this" keyword
 */

// console.log(this); // prints window context
// calcAge(1985);
// function calcAge(year) {
//   console.log(2018 - year);
//   console.log(this); // still prints global window context/object
// }

var john = {
  name: "john",
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this);
    console.log(2018 - this.yearOfBirth);
    /*
    function inner() {
      console.log(this); // points to global window context/object.
    }
    inner(); // Still a regular function call and not a someObject.innerFunction()
    */
  }
};

john.calculateAge(); // prints the john object

var michael = {
  name: "Michael",
  yearOfBirth: 1984
};

// "method borrowing"
michael.calculateAge = john.calculateAge; // does not include (), so it's just the fx object
michael.calculateAge(); // this keyword is now assigned to the michael object, and not the john object

/**
 * Hoisting
 */
calculateAge(1965); // this still works due to hoisting of the fx declration
function calculateAge(year) {
  console.log(2018 - year);
}
// calculateAge(1990);

// retirement(1965); // wont work -- hoisting only works with function declarations, not fx expressions
var retirement = function(y) {
  console.log(65 - (2018 - y));
};
// retirement(1990);

// variables
// console.log(age); // undefined -- scanned and variable set to undefined but the execution has not completed with assignment
var age = 23; // stored in global exec context
// console.log(23);

function foo() {
  console.log(age); // undefined!
  var age = 65; // stored in separate exec context
  console.log(age); // 65
}

foo();
console.log(age); // 23

/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. if ‘this’ keyword is being used in a function that is being called in the global scope, this will refer back to the window object 
* 2. If ‘this’ keyword is being used inside of an object, ’this’ will refer back to the object that its inside of.
* 3. If ‘this’ keyword is being used inside of a constructor function, ’this’ will refer back to the specific instance of the object that the constructor function is referring to.
* 4. When using .apply or .call methods, their argument tells ‘this’ keyword what to refer to.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayHello (name) {
	console.log(this)
	// this will refer back to the global/window object
};	

// Principle 2

// code example for Implicit Binding
const name = {
	name: 'David',
	greet: function() {
		console.log(`Hello my name is ${this.name}`);
	}
};

name.greet();

// Principle 3

// code example for New Binding
function User (username){
    this.businessName = 'Facebook'
    this.username = username;
};

User.prototype.hello = function() {
    console.log(`${this.username}, welcome to ${this.businessName}`)
};
User.prototype.goodBye = function() {
    console.log(`Goodbye ${this.username}`);
};

const david = new User('dbarrios');
david.hello();


// Principle 4

// code example for Explicit Binding
const john = new User('john26');

david.goodBye.call(john);
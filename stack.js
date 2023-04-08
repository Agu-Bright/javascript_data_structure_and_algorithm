let Stack = function () {
  this.count = 0;
  this.storage = {};

  //Add a value onto the end of the stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  //Remove and return the valus at the end of the stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  //getting the size of the stack
  this.size = function () {
    return this.count;
  };

  //return the value at the end of the stack
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("Brysontech");
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());

//STACKS

//functions: push, pop, peek, length

let letter = []; //This is the stack

let word = "brysontech";
let rword = "";

//put letters of word into ths stack
for (let i = 0; i < word.length; i++) {
  letter.push(word[i]);
}

//pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
  rword += letter.pop();
}

if (rword === word) {
  console.log(word + " is a palindrome.");
} else {
  console.log(word + " is not a palendrome");
}

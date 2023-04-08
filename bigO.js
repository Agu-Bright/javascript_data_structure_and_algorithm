// The Big o notation
// >> analsing the effectiveness of algorithms
// >> Time and algorithmic space complexity alnalysis

// The Big-O notation measures the worst case complexity of an algorithm.

// >O-1 IS HOLY
// O(1) does not change with respect to input space. Time is constant. An example of O(1) algorithm is accessing an item in the array by its index.
const array = [1, 2, 3, 4, 5, 6];
const thirdIndex = array[2];

// O(n) is linear time and applies to algorithms that must do n operation in worst case scinario
const exampleLinear = (n) => {
  console.log("O(n)");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
};
exampleLinear(10);
// similary O(n^2) is quadratic time and O(n^3) is cubic time
const exampleQuadratic = (n) => {
  console.log("O(n^2)");
  for (let i = 0; i < n; i++) {
    console.log("split");
    console.log(i);
    for (let j = i; j < n; j++) {
      console.log(j);
    }
  }
};
exampleQuadratic(10);
const exampleCubic = (n) => {
  console.log("cubic");
  for (let i = 0; i < n; i++) {
    console.log("sectionA");
    console.log(i);
    for (let j = i; j < n; j++) {
      console.log("sectionB");
      console.log(j);
      for (let k = j; k < n; k++) {
        console.log("sectionC");
        console.log(k);
      }
    }
  }
};
exampleCubic(10);
// A logarithms time complexity is printing elements  that are power of 2 between 2 and n.
//The efficiency of logarithmic time complexity is apprantely with large inputs log(n)
const exampleLogarithmic = (n) => {
  console.log("LOGARITHMIC");
  for (let i = 2; i <= n; i = i * 2) {
    console.log(i);
  }
};
exampleLogarithmic(1000000);

/*
=========================================================================
RULES OF BIG-O NOTATION
=========================================================================
let an algotithm's complexity be represented as f(n)
where,
==> n represents the number of inputs,
==> f(n)time represents the time needed
==> f(n)space represents the space needed for the algorithm
The goal of algorithm analysis is to understand the algorithms efficiency by calculating f(n)
BIG-O notation provides some fundamental rules that help developers compute for f(n)

1)  COEFFICIENT RULE: IF f(n) IS O(g(n)), then kf(n) is O(g(n)) for any constant k > 0.
    The first rule is the coefficient rule, which eliminates coefficeint not related to the input size, n.
    This is because as n approaches infinity, the other coefficient becomes negligible.

2)  SUM RULE: if f(n) is O(h(n)) and g(n) is O(p(n)), then f(n) + g(n) is O(h(n) + p(n))
    The rule simply states that if a resultant time complexity is a sum of two different time complexities, 
    the resultant Big-O notation is also the sum of two different Big-O notation.

3) PRODUCT RULE: if f(n) is O(h(n)) and g(n) is O(p(n)), then f(n).g(n) is O(h(n)p(n)).

4) TRANSITIVE RULE: if f(n) is O(g(n)) and g(n) is O(h(n)), then f(n) is O(h(n)). The transitive rule is a simple way
    to state that thesame time complexity has thesame Big-O

5) POLYNOMIAL RULE: if f(n) is a polynomial of degree K, then f(n) is O(n^k).
    intuitively, the polynomial rule states that polynomial time complexitises have Big-O of thesame polynomial degree.

6> LOG OF POWER RULE: log(nk) is O(log(n)) for any constant k>0. With the log of power rule, constant with a log function are also ignored

*/

//example of coefficient rule, This means that both 5f(n) have thesame big-O notation
const a = (n) => {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += 1;
    console.log(count);
  }
  return count;
};
a(5);

const b = (n) => {
  let count = 0;
  for (let i = 0; i < 5 * n; i++) {
    count += 1;
    console.log(count);
  }
  return count;
};
b(5);

//example of sum rule "Add Big-O up"
//the two time complexities must be calculated independently
const c = (n) => {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += 1;
  }
  //f(n) = n
  for (let i = 0; i < 5 * n; i++) {
    count += 1;
  }
  //f(n) = 5n
  return count;
  //f(n) = n + 5n = 6n ==> O(6n)
};

//example of Product rule:
const d = (n) => {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += 1;
    //f(n) = n
    for (let i = 0; i < 5 * n; i++) {
      count += 1;
      //f(n) = 5n
    }
  }
  return count;
  //f(n) = 5n*n = 5n^2
  //O(n) = n^2
};

//POLYNOMIAL RULE: Big-O of the power K
const e = (n) => {
  let count = 0;
  for (let i = 0; i < n * n; i++) {
    count += 1;
  }
  return count;
};

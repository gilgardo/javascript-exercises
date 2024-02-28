const add = function(a,b) {
	let sum = a+b;
  return sum;
};

const subtract = function(a,b) {
	let dif = a-b;
  return dif;
};

const sum = function(arr) {
	let sum =0;
  arr.map((num)=>sum+=num);
  return sum;
};

const multiply = function(arr) {
  let prod=1;
  arr.map((num)=>prod*=num);
  return prod;
};

const power = function(a,b) {
	let pow=1;
  for(let i=0;i<b;i++){
    pow*=a;
  }
  return pow;
};

const factorial = function(a) {
	let fact=1;
  for(let i=1;i<=a;i++){
    fact*=i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

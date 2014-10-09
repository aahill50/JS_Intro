var fib = function (num) {
  if (num <= 2){
    return [0,1].slice(0,num);
  }
  last_fib = fib(num - 1);
  return last_fib.concat([last_fib.slice(-1)[0] + last_fib.slice(-2)[0]])
};

console.log(fib(10));
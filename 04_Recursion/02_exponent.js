var exp1 = function(base,exp){
  if (exp === 0){
    return 1;
  }

  return base * exp1(base, exp - 1);
};

// console.log(exp1(2,2));


var exp2 = function(base, exp) {
  if(exp === 0){
    return 1;
  } else if (exp === 1) {
    return base;
  } else if (exp % 2 === 0) {
    return exp2(base,exp / 2) * exp2(base,exp / 2);
  } else {
    return base * exp2(base,(exp - 1) / 2) * exp2(base,(exp - 1) / 2)
  }

};

console.log(exp2(2,3));
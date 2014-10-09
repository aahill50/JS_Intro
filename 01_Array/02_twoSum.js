Array.prototype.twoSum = function () {
  twoSums = [];

  for( var i = 0; i < this.length; i++) {
    for( var j = i+1; j < this.length; j++) {
      if( (this[i] + this[j]) === 0) {
        twoSums.push([i,j])
      };
    };
  };
  return twoSums;
};

console.log([-1,0,2,-2,1].twoSum());
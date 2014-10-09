a = [1,2,3,4] // => 10

Array.prototype.arraySum = function () {
  if (this.length <= 1) {
    return this[0];
  }

  return this.slice(0,-1).arraySum() + this.slice(-1)[0]
};

console.log(a.arraySum());
Array.prototype.doubleArray = function () {
  double = [];

  for( i = 0; i < this.length ; i++) {
    double.push(this[i]*2);
  }
  return double;
}

a = [1,2,3,4,5,6];
console.log(a.doubleArray());

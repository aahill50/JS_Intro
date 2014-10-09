Array.prototype.bsearch = function (target) {
  var half = parseInt(this.length / 2);
  if (target === this[half]) {
    return half;
  }
  if (target > this[half]) {
    return half + this.slice(half,this.length).bsearch(target);
  } else {
    return this.slice(0, half).bsearch(target);
  }
};

a = [0,1,2,3,4,5,6]

console.log(a.bsearch(5));
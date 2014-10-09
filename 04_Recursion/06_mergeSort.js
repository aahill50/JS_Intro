Array.prototype.mergeSort = function () {
  if (this.length <= 1) {
    return this;
  }

  var half = parseInt(this.length / 2);

  var left = this.slice(0, half).mergeSort();
  var right = this.slice(half, this.length).mergeSort();

  var merge = function (left, right) {
  var ary = [];

    while (left.length > 0 && right.length > 0) {
      ary.push((left[0] <= right[0]) ? left.shift() : right.shift());
    };

    return ary.concat(left).concat(right);
  };

  return merge(left, right);
};


var a = [12,5,23,432,5,62];
console.log(a.mergeSort());

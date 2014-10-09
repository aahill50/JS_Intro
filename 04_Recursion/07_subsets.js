Array.prototype.valueCount = function (value) {
  var count = 0;

  for( var i = 0; i < this.length; i++) {
    if ( this[i] === value) {
      count++;
    };
  };
  return count;
};

Array.prototype.myUniq = function () {
  var uniqArray = [];

  for( var i = 0; i < this.length; i++) {
    if( uniqArray.valueCount(this[i]) === 0  ) {
      uniqArray[uniqArray.length] = this[i];
    };
  };

  return uniqArray;
};

Array.prototype.subsets = function () {
  if (this.length === 0) {
    return this;
  }
  var subs = [];

  for (var i = 0; i < this.length; i++) {
    subs.push(this);
    new_arr = this.slice();
    // console.log(this);
    new_arr.splice(i,1);
    // console.log(new_arr);
    // console.log(new_arr);
    subs.push(new_arr)
    // subs.concat(new_arr.subsets())
  }
  return subs.myUniq();
};
a = [1,2,3]
console.log(a.subsets());
a = [1,2,3,4,5]

Array.prototype.myEach = function (callback) {
  for( i = 0; i < this.length; i++) {
    callback(this[i]);
  };

  return this;
};


// a.myEach( function (value) {
//   console.log(value * 10);
// } );
//
// console.log(a);

Array.prototype.myMap = function (callback) {
  var mappedArray = [];

  this.myEach(function (value) {
    mappedArray.push(callback(value))
  })

  return mappedArray;
}

// b = a.myMap( function (value) {
//   return value * 10;
// } );
//
// console.log(b)

Array.prototype.myInject = function (accum, callback) {
  injectedValue = accum;

  this.myEach( function (value) {
    injectedValue += callback(value);
  })

  return injectedValue;
};

c = a.myInject(0, function(value) {
  return value
});

console.log(c)
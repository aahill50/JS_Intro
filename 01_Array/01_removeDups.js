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






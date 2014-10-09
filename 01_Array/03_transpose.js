Array.prototype.transpose = function () {
  var transposed = [[],[],[]];

  for( var i = 0; i < this.length; i++) {
    for( var j = 0; j < this[i].length; j++) {
      var new_val = this[j][i]
      transposed[i][j] = new_val;
    };
  };

  return transposed;
};

a = [[0,1,2],[3,4,5],[6,7,8]]

console.log(a.transpose());
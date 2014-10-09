a = [21,3,23,7,3,2]

Array.prototype.bubbleSort = function () {
  var sorted = false;

  do {
    sorted = true;

    for( var i = 0; i < this.length - 1; i++){
      if(this[i] > this[i+1]) {
        sorted = false;
        temp = this[i];
        this[i] = this[i+1];
        this[i+1] = temp;
      };
    };
  } while(!sorted);

  return this;
};

console.log(a.bubbleSort());

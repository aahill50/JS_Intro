a = "superbowl"

String.prototype.substrings = function () {
  subs = [];

  for(var i = 0; i < this.length; i++) {
    for( var j = i+1; j < this.length+1; j++) {
      subs.push(this.slice(i,j));
    };
  };

  return subs;
};

console.log(a.substrings());
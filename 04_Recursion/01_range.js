var range = function(start, end) {
  if (end === start) {
    return [start];
  };

  return range(start, end - 1).concat([end])

};

console.log(range(4,8));

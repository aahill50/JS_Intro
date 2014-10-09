// var makeChange = function (amount, coins) {
//   if (amount === 0){
//     return [];
//   }
//   var purse = [];
//
//   while (amount >= coins[0]) {
//     purse.push(coins[0]);
//     amount -= coins[0];
//   };
//   coins.shift();
//   return purse.concat(makeChange(amount, coins));
// };
//
// console.log(makeChange(14, [10, 7, 1]));

var makeChange = function (amount, coins) {
  if (amount === 0){
    return [];
  }
  var purse = [];
  coins.sort().reverse();
  var best_change = []

  for (var i = 0; i < coins.length; i++) {

    if (amount >= coins[i]) {
      var remainder = amount - coins[i];
      var best_remainder = makeChange(remainder, coins.slice(i + 1, coins.length))

      if (best_remainder) {
        this_change = [coins[i]].concat(best_remainder);

        if (best_change.length === 0 || (this_change.length < best_change.length)){
          best_change = this_change;
        }
      }
    };
  }
  return best_change;
};

console.log(makeChange(14, [10, 7, 1]));
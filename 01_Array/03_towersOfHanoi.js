function TowersOfHanoi(size) {
  this.towers = [[],[],[]];
  this.initializeTowers = function () {
    tempTowers = [[],[],[]];

    for( i = 1; i <= size; i++) {
      tempTowers[0].push(i);
    };
    return tempTowers
  };

  this.moveCount = 0;

  this.moveDisc = function (fromTower, toTower) {
    var tFrom = this.towers[fromTower];
    var tTo = this.towers[toTower];
    var fromSize = tFrom.length;
    var toSize = tTo.length;


    // console.log("Attempting to move from tower " + fromTower +
    //             " to tower " + toTower);


    if(fromSize > 0 && toSize === 0) {
      // console.log("Valid move!")
      tTo.unshift(tFrom.shift());
      this.moveCount++;
    } else if((fromSize > 0 && toSize > 0) && (tFrom[0] < tTo[0])) {
      // console.log("Valid move!")
      tTo.unshift(tFrom.shift());
      this.moveCount++;
    } else {
      console.log("Invalid move!")
    }
    // tTo.push(tFrom.shift());

  };

  this.won = function() {
    if(this.towers[0].length === 0) {

      if(this.towers[1].length === 0 || this.towers[2].length === 0) {
        return true;
      }
    }

    return false;
  };

  this.draw = function () {
    console.log(this.towers);
  };
};
//
// var game = new TowersOfHanoi(3);
// game.towers = game.initializeTowers();
// console.log(game.towers);
//
// game.moveDisc(0,1);
// console.log(game.towers);
//
// game.moveDisc(0,2);
// console.log(game.towers);
//
// game.moveDisc(1,2);
// console.log(game.towers);
//
// game.moveDisc(0,1);
// console.log(game.towers);
//
// game.moveDisc(2,0);
// console.log(game.towers);
//
// game.moveDisc(2,1);
// console.log(game.towers);
//
// game.moveDisc(0,1);
// console.log(game.towers);
// console.log(game.won());
// //
// // game.moveDisc(0,1);
// // console.log(game.towers);
// // console.log(game.won());
//
// //
// // game.moveDisc(1,2);
// g = new TowersOfHanoi(3);
// g.run();
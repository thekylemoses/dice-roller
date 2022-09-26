var dice = {
    numSides: 6,
    roll:function () {
      var randNum = Math.floor(Math.random()*this.numSides)+1;
      return randNum;
    }
  }
  function printNumber(number) {
    var theResult = document.getElementById('theResult').autofocus;
    theResult.innerHTML = number;
  }
  var button = document.getElementById('button');
  button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
  };
  
  var diceTwo = {
    numSides: 6,
    roll:function () {
      var randNum = Math.floor(Math.random()*this.numSides)+1;
      return randNum;
    }
  }
  function printNumber(number) {
    var theResult = document.getElementById('theResult').autofocus;
    theResult.innerHTML = number;
  }
  var button = document.getElementById('button');
  button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
  };
  
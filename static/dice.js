var dice = {
    numSides: 6,
    roll: function () {
      var randNum = Math.floor(Math.random() * this.numSides) + 1;
      return randNum;
    }
  }
  
  function printNumber(number) {
    var theResult = document.getElementById('theResult');
    theResult.innerHTML = number;
  }
  
  var rollButton = document.getElementById('rollButton');
  
  rollButton.onclick = function() {
    var result = dice.roll();
    printNumber(result);
  };
  
var countdownGenerator = function (x) {

  var counter = x + 1;

  // console.log(counter);

  return function () {

      counter--;
      if (counter > 0) {
        return "T-minus " + counter;
      }else if (counter === 0) {
        return "Blast Off!";
      } else {
        return "Rockets already gone, bub!";
      }
  }
}


var countdown = countdownGenerator(5);

console.log(countdown());
console.log(countdown());
console.log(countdown());
console.log(countdown());
console.log(countdown());
console.log(countdown());
console.log(countdown());
console.log(countdown());

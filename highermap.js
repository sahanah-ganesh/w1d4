var words = ["ground", "control", "to", "major", "tom"];

function map (words, callback) {
  var arr = [];
  for (word of words) {
    arr.push(callback(word));
  }
  return arr;
}


console.log(map(words, function(word) {
  return word.length;
}));

console.log(map(words, function(word) {
  return word.toUpperCase();
}));

console.log(map(words, function(word) {
  return word.split("").reverse().join("");
}));



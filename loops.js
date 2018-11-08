function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i !== 0) {
      console.log(array);
      array = `I am `(${i} + 1)` strange loops.`;
      console.log(array);
    }
    else {
      array = "I am 1 strange loop.";
    }
  }
  return array;
}

function whileLoop(n) {
  while (n !== 0) {
    console.log(--n);
  }
  return "done";
}

var j = 0;
function incrementVariable() {
  j = j - 1;
  if (j !== 0) {
    return true;
  }
  return false;
}

function doWhileLoop(array) {
  do {
    j = array.length;
    incrementVariable();
    array.pop();
  } while (array.length > 0 && incrementVariable());
  return array;
}
function forLoop(array) {
  for (var i = 0; i < 26; i++) {
    if (i !== 0) {
      if (i === 1) {
        array = "I am 1 strange loop.";
      }
      else {
        array = `I am ${i} strange loops.`;
      }
    }
    else {
    }
  }
  console.log(array);
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
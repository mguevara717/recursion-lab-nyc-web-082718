
function printString(myString) {
  console.log(myString[0]);

  if(myString.length > 1) {
    let subString = myString.substring(1, myString.length)
    printString(subString);
  } else {
    return null;
  }
}

function reverseString(myString) {
  console.log(myString)
  if(myString.length === 0) {
    return myString;
  } else {
    return reverseString(myString.substr(1)) + myString.charAt(0);

  }
}

function isPalindrome(myString) {
  // console.log(myString)
  let length = myString.length;

  if(length < 2 ) {
    return true;
  } else if (myString[length - 1] === myString[0]) {
    return isPalindrome(myString.substring(1, length - 1));
  } else {
    return false;
  }
}


//Given an array and an index, write a recursive function to add up the elements of an array.
function addUpTo(arr, element) {
  if (element > 0) {
    return arr[element] + addUpTo(arr, --element);
  } else {
    return arr[element];
  }
}

//Write a recursive function to find the largest integer in an array.
function maxOf(arr) {
  if(arr.length === 1) {
    return arr[0]
  } else {
    return Math.max(arr.pop(), maxOf(arr));
  }
}

//Write out a function to see if an array includes a given element
function includesNumber(arr, num) {
  if(!arr.length){
    return false;
  } else if(arr[0] === num) {
    return true;
  } else {
    return includesNumber(arr.slice(1), num)
  }
}

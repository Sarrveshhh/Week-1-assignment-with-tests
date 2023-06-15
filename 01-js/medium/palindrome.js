/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  let str3 = str.replace(/\s{2,}/g," ").toLowerCase().replace(/\s/g, '');
  let n = str3.length;
  let str2 = "";
  for(let i=(n-1);i>=0;i--){
    str2 = str2 + str3[i];
  }

  if(str3 === str2){
    return true;
  }
  else{
    return false;
  }
}

module.exports = isPalindrome;

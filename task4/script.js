/* 01-----------------------Power---------------------------------------------------------------------
Write a function called power which accepts a base and an exponent. 
The function should return the power of the base to the exponent. 
This function should mimic the functionality of Math.pow()  
        - do not worry about negative bases and exponents.
*/
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exp) {
  if (exp === 0) return 1;

  let total = base ** exp;
  return total;
}
console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));

const power2 = (base, exp) => {
  if (exp == 0) return 1;
  if (exp === 1) return base;

  let total = power2(base, exp / 2);
  return total * total * power2(base, 0);
};
console.log(power2(2, 0));
console.log(power2(2, 2));
console.log(power2(2, 4));
/* 02-----------------------productOfArray---------------------------------------------------------------------
Write a function called 'productOfArray' which takes in an array of numbers and 
returns the product of them all.
*/
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(num) {
  let total = 1;
  for (let i of num) {
    total = total * i;
  }
  return total;
}
console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([1, 2, 3, 10]));

function productOfArray2(array) {
  if (array.length === 0) return 1;

  return array.shift() * productOfArray2(array);
}
console.log(productOfArray2([1, 2, 3]));
console.log(productOfArray2([1, 2, 3, 10]));

/* 03-----------------------reverse---------------------------------------------------------------------
Write a recursive function called 'reverse' which accepts a string and returns 
a new string in reverse.
*/
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(str) {
  return str.split("").reverse().join("");
}
console.log(reverse("awesome"));

function reverse2(str) {
  if (str === "") {
    return "";
  } else {
    return reverse2(str.substr(1)) + str.charAt(0);
  }
}
console.log(reverse2("awesome"));

/* 04-----------------------isPalindrome---------------------------------------------------------------------
Write a recursive function called 'isPalindrome' which returns true if the string 
passed to it is a palindrome (reads the same forward and backward). 
Otherwise it returns false.
*/
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
  const reverse = str.split("").reverse().join("");
  if (str === reverse) {
    return true;
  } else {
    return false;
  }
  // add whatever parameters you deem necessary - good luck!
}
console.log(isPalindrome("awesome"));
console.log(isPalindrome("tacocat"));

function isPalindrome2(str) {
  return reverse(str) === str;
}
console.log(isPalindrome2("awesome"));
console.log(isPalindrome2("tacocat"));

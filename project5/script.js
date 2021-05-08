//print odd numbers in an array:
console.log("print odd numbers in an array:");
function getoddNumbers() {
    var arr = [1, 2, 3, 4, 5, 6,7,8,9,10];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
}
getoddNumbers();

//sum of all numbers in an array:
console.log("sum of all numbers in an array:")
var array = [1, 2, 3, 4, 5,6,7,8,9,10];
var total = array.reduce(function(acc, item){
    return acc+item;
}, 0);
console.log(total);

//remove duplicates from an array:
console.log("remove duplicates from an array:");
let arr = ['Banana', 'Apple', 'orange', 'lemon', 'Apple','lemon'];
let data = arr.filter((value, index) => {
    return arr.indexOf(value) === index;
});
console.log(data);

//Convert all the strings to title caps in a string array
function titleCase(str){

  str = str.toLowerCase().split(' ');

  let final = [ ];

   for(let  word of str){
     final.push(word.charAt(0).toUpperCase()+ word.slice(1));
   }

 return final.join(' ')

}
console.log(titleCase("this is a title case string'")); 


//Return all the palindromes in an array
console.log(checkPalindrome([1, 3, 5, 3, 1]));
function checkPalindrome(arr) {
const len = arr.length;
if (len % 2 == 0) return false;

for (let i = 0; i < len / 2; i++) {
  if (arr[i] !== arr[len - i - 1]) return false;
}
return true;
}

//Return all the prime numbers in an array:
console.log("Return all the prime numbers in an array:");
const numArray= [2, 3, 4, 5, 6, 7, 8, 9, 10,11,12]
function isPrime(num) {
    if(num < 2) return false;
  
    for (let i = 2; i < num; i++){
      if( num % i== 0){
        return false;
      }
    }
    return true;
  }
const filterPrime = numArray=> {
    const filtered = numArray.filter(el => isPrime(el));
    return filtered;
 };
 console.log(filterPrime(numArray));



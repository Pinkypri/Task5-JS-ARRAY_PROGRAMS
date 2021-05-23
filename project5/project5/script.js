//print odd numbers in an array:

    let arr= [1, 2, 3, 4, 5, 6,7,8,9,10];
    let anonymous=[];
    let iife=[];

//print odd numbers in an array(anonymous function)
console.log("print odd numbers in an array(anonymous function)");
 const oddnum1=()=>{
   arr.forEach((x)=>{
     if(x%2!==0){
       anonymous.push(x);
       
     }
   });
 };
oddnum1();
console.log(anonymous);
 
//print odd numbers in an array(iffe function)
console.log("print odd numbers in an array(iffe function)");
const oddnum2=(function(){
  arr.forEach((x)=>{
    if(x%2!==0){
      iife.push(x);
     
    }
  });
  console.log(iife);
})();


//sum of all numbers in an array:

let arrsum= [1, 2, 3, 4, 5, 6,7,8,9,10];
let anon=[];
let iffe1=[];

//sum of all numbers in an array(anonymous function)
console.log("sum of all numbers in an array(anonymous function)");
let sum =()=>{
let sum1=   arrsum.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
  });
anon.push(sum1);
};
sum();
console.log(anon);
 
//sum of all numbers in an array(iffe function)
console.log("sum of all numbers in an array(iffe function)");
let sumarr=( function () {
  let sum1=arrsum.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
    });
  iffe1.push(sum1);
  console.log(iffe1);
  })();
  
  


// //remove duplicates from an array:


 let array = ['Banana', 'Apple', 'orange', 'lemon', 'Apple','lemon','Banana', 'Apple', 'orange', 'lemon', 'Apple','lemon'];
 let elementanon=[];
 let elementiife=[];

 //remove duplicates from an array(anonymous function)
 console.log("remove duplicates from an array(anonymous function)");
let removedublicate =()=>{ 

  let data =array.filter(function(value, index)  {
    return array.indexOf(value) === index;
});
elementanon.push(data);
};
console.log(elementanon);
removedublicate();
 
//remove duplicates from an array(iffe function)
console.log("remove duplicates from an array(iffe function)");
let removedublicateiife =(function(){ 

  let data =array.filter(function(value, index)  {
    return array.indexOf(value) === index;
});
elementiife.push(data);
console.log(elementiife);
})();





// //Convert all the strings to title caps in a string array(anonymous function)
console.log("Convert all the strings to title caps in a string array(anonymous function)");

const string=()=>{
  function titleCase(str){
  str = str.toLowerCase().split(' ');
  let final = [ ];
  for(let  word of str){
     final.push(word.charAt(0).toUpperCase()+ word.slice(1));
   }
      return final.join(' ')
  }
  console.log(titleCase("this is a title case string'")); 
  };
  string();
   

  //Convert all the strings to title caps in a string array(iffe function
  console.log("Convert all the strings to title caps in a string array(iffe function)");
  const sting=(function(){
    function titleCase(str){
    str = str.toLowerCase().split(' ');
  
    let final = [ ];
  
     for(let  word of str){
       final.push(word.charAt(0).toUpperCase()+ word.slice(1));
     }
  
   return final.join(' ')
    }
    console.log(titleCase("this is a title case string'")); 
    })();
    



// //Return all the palindromes in an array (anonymous function)

const arr1 = ['carecar', 1344, 12321, 'did', 'cannot'];

console.log(" Return all the palindromes in an array (anonymous function)");

const palindromes=()=>{
const isPalindrome = el => {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
const findPalindrome = arr => {
   return arr1.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arr1));
};
palindromes();

// //Return all the palindromes in an array (IIFE function)

console.log(" Return all the palindromes in an array (IFFE function)");

const palindromeNum=(function(){
  const isPalindrome = el => {
     const str = String(el);
     let i = 0;
     let j = str.length - 1;
     while(i < j) {
        if(str[i] === str[j]) {
           i++;
           j--;
        }
        else {
           return false;
        }
     }
     return true;
  };
  const findPalindrome = arr => {
     return arr1.filter(el => isPalindrome(el));
  };
  console.log(findPalindrome(arr1));
  })();
  
  

// //Return all the prime numbers in an array:
 
const numArray= [2, 3, 4, 5, 6, 7, 8, 9, 10,11,12]
const isprimeanon=[];
const isprimeiife=[];
 
//Return all the prime numbers in an array (anonymous function)
console.log("Return all the prime numbers in an array (anonymous function)");
const primeanon=()=> {
  numArray.forEach((num)=>{
    if (num % 2 !== 0 || num===2)
      {
       isprimeanon.push(num);
        return false; 
      }
  return num>1 ;
 }
  )};
  primeanon();
  console.log(isprimeanon);

  //Return all the prime numbers in an array (IIFE function)
  console.log("Return all the prime numbers in an array (IIFE function)");
  const primeiife=(function() {
    numArray.forEach((num)=>{
      if (num % 2 !== 0 || num===2)
        {
         isprimeiife.push(num);
          return false; 
        }
    return num ;
   });
 console.log(isprimeiife)
  })();
    

  


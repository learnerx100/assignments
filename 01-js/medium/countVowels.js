/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str){
 let count = 0;
 str = str.toLowerCase();
 let hashset = new Set();

 hashset.add('a');
 hashset.add('e');
 hashset.add('i');
 hashset.add('o');
 hashset.add('u');

 for(i=0 ; i<str.length ;i++){
   if(hashset.has(str.charAt(i))){
     count++;
   }
 }
 return count;
}


module.exports = countVowels;




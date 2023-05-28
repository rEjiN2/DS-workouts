


const nums = -121;
let pal = 0;
let qot;
let rem;
const isPalindrome = (num) => {
  let numLength = Math.floor(Math.log10(num));
  if (num < 10) {
   if((pal+qot)===nums){
    return true;
   }
   return false;
  }
  qot = Math.floor(num / 10);
  rem = num % 10;
  pal = pal + (rem * Math.pow(10, numLength));
  return isPalindrome(qot);
};

console.log(isPalindrome(nums));

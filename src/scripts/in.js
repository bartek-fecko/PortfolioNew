function roman(number) {
   const numbers = {
      1: 'I',
      4: 'IV',
      5: 'V',
      9: 'IX',
      10: 'X',
      40: 'XL',
      50: 'L',
      90: 'XC',
      100: 'C',
      400: 'CD',
      500: 'D',
      900: 'CM',
      1000: 'M',
   };

   const numbersMap = Object.entries(numbers).map(([key]) => key).reverse();
   let output = '';


   for (let val of numbersMap) {
      if (val <= number) {
         const repeats = Math.floor(number / val) || 1;
         output += numbers[val].repeat(repeats);
         number -= repeats * val;
      }
   }


   return output;
}

module.exports = roman;

console.log(roman(7));

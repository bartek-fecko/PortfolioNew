const roman = require('./in');

describe('roman tests', () => {
   it('should return simple value', () => {
      expect(roman(4)).toEqual('IV');
   });

   it('should return added value', () => {
      expect(roman(6)).toEqual('VI');
   });

   it('should return 2 digital value', () => {
      expect(roman(44)).toEqual('XLIV');
   });

   it('should return 2 digital value', () => {
      expect(roman(76)).toEqual('LXXVI');
   });

   it('should return big number', () => {
      expect(roman(3999)).toEqual('MMMCMXCIX');
   })

   it('should return random number', () => {
      expect(roman(666)).toEqual('DCLXVI');
   })
   
   it('should end', () => {
      expect(roman(-1)).toEqual('');
   })
});

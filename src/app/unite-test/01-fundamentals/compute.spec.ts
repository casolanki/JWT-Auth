import {compute} from './compute';

describe('compute', () => {
   it('should be 0 when input negative number' , () => {
      const result = compute(1);
      expect(result).toBe(0);
   })
})
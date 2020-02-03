import MergeSort from './index';
import { randomInteger } from '../../../utils';

describe('sorting', function() {
  let NUM_TESTS: number = 100;
  it(`merge sort with ${NUM_TESTS} sample`, function() {
    for(let i: number = 1; i < NUM_TESTS; i++){
      let testAr: number[] = new Array<number>(i);
      for(let j: number = 0; j < i; j++) testAr[j] = randomInteger(-1000000, +1000000);

      expect(MergeSort(testAr)).toStrictEqual(testAr.sort((a, b) => {
        if(a > b) return 1;
        if(b > a) return -1;
        return 0;
      }));
    }
  })
});
import CountingSort from './index';

describe('sorting', function() {
    it(`counting sort`, function() {
        let MIN: number = -10;
        let MAX: number = 10;

        let nums: number[] = [+4, -10, +0, +6, +1, -5, -5, +1, +1, -2, 0, +6, +8, -7, +10];

        expect(CountingSort(nums, MIN, MAX)).toStrictEqual(nums.sort((a, b) => {
            if(a > b) return 1;
            if(b > a) return -1;
            return 0;
          }));
    })
});
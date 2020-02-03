import BubbleSort from './index';

const randomInteger = (min: number, max: number) =>  Math.floor(Math.random() * (max - min + 1)) + min;

describe('sorting', function() {
  let NUM_TESTS: number = 1000;
  it(`bubble sort ${NUM_TESTS} sample`, function() {
    for(let i: number = 1; i < NUM_TESTS; i++){
      let testArr: number[] = new Array<number>(i);
      for(let j: number = 0; j < i; j++) testArr[j] = randomInteger(-1000000, +1000000);

      expect(BubbleSort(testArr)).toStrictEqual(testArr.sort());
    }
    let result: number[] = BubbleSort([7, 4, 5, 6, 1]);
    expect(result).toStrictEqual([1, 4, 5, 6, 7]);   
  })
});
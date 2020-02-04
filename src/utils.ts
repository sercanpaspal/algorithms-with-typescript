export const randomInteger = (min: number, max: number) : number =>  Math.floor(Math.random() * (max - min + 1)) + min;

export const sortAsc = (a: number, b: number) => {
    if(a > b) return 1;
    if(b > a) return -1;
    return 0;
}

export const multipleRandomSortingTest = (NUM_TESTS: number = 100, name: string, AlgorithmFn: any) => {
    return () => {
        it(`${name} with ${NUM_TESTS} samples`, function() {
            for(let i: number = 1; i < NUM_TESTS; i++){
                let testAr: number[] = new Array<number>(i);
                for(let j: number = 0; j < i; j++) testAr[j] = randomInteger(-1000000, +1000000);
                
                expect(AlgorithmFn(testAr)).toStrictEqual(testAr.sort(sortAsc));
            }
        })
    }
}
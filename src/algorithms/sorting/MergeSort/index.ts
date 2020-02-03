export default function MergeSort(inputAr: number[]): number[] {
    let ar: number[] = [...inputAr];
    let N: number = ar.length;

    if (N === 1) return ar;

    let left: number[] = MergeSort(ar.slice(0, N / 2));
    let right: number[] = MergeSort(ar.slice(N / 2, N));

    return Merge(left, right);
}

const Merge = (leftAr: number[], rightAr: number[]) : number[] => {
    let leftN: number = leftAr.length;
    let rightN: number = rightAr.length;
    let n = leftN + rightN;
    let i1: number = 0;
    let i2: number = 0;
    let resultAr: number[] = new Array<number>(n);

    for (let i: number = 0; i < n; i++) {
        if (i1 === leftN) {
            resultAr[i] = rightAr[i2++];
        }else if (i2 === rightN){
            resultAr[i] = leftAr[i1++];
        }else{
            resultAr[i] = leftAr[i1] < rightAr[i2] ? leftAr[i1++] : rightAr[i2++];
        }
      }
    
    return resultAr;
}
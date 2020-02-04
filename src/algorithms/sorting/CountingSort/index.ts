export default function MergeSort(inputAr: number[], minVal: number, maxVal: number): number[] {
    let ar: number[] = [...inputAr];
    let size: number = maxVal - minVal + 1;
    let B: number[] = new Array<number>(size);

    for (let i: number = 0; i < ar.length; i++) B[ar[i] - minVal] = 0

    for (let i: number = 0; i < ar.length; i++) B[ar[i] - minVal]++;

    let k: number = 0
    for (let j: number = 0; j < size; j++) while (B[j]-- > 0) ar[k++] = j + minVal;

    return ar;
}
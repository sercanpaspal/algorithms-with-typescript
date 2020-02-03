export default function BubbleSort(inputAr: number[]): number[] {
    let ar: number[] = [...inputAr];
    let N: number = ar.length;
    let sorted: boolean;

    do {
        sorted = true;

        for(let i: number = 0; i < N; i++){
            if(ar[i] < ar[i-1]){
                let tmp: number = ar[i - 1];
                ar[i - 1] = ar[i];
                ar[i] = tmp;
                sorted = false;
            }
        }
    }while(!sorted)

    return ar;
}
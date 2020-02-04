const Partition = (A: number[], p: number, r: number) => {
    let tmp: number;
    let x: number = A[r];
    let i: number = p - 1;

    for(let j: number = p; j<=r-1; j++){
        if(A[j]<=x){
            i++;
            tmp = A[i];
            A[i] = A[j];
            A[j] = tmp;
        }
    }

    tmp = A[i+1];
    A[i+1] = A[r];
    A[r] = tmp;
    return i + 1;
}

const Sort = (A: number[], p: number, r: number) => {
    let q: number;
    if(p<r){
        q = Partition(A, p, r);
        Sort(A, p, q-1);
        Sort(A, q+1, r);
    }
}

export default function QuickSort(inputAr: number[]){
    let ar: number[] = [...inputAr];
    
    Sort(ar, 0, ar.length - 1);
    
    return ar;
}
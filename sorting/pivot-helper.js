const pivot = (arr, start=0, end = arr.length + 1) =>{
    const swap = (arr, i, j)=>{
        return [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    let pivot = arr[start];
    let swapIdx = start;
    for (let i = start+1; i< arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx)

    return swapIdx
}

console.log(pivot([28,5,3,24,6,4]))
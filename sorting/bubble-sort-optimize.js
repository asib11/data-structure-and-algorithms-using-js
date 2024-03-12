const bubbleSort =arr =>{
    let noSwap
    for (let i = arr.length; i>0 ; i--){
        noSwap = true;
        for (j = 0 ; j < i - 1; j++){
            if(arr[j] > arr[j + 1]){
                // swap
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp;
                noSwap = false
            }
        }
        if(noSwap) break;
    }
    return arr;
}

console.log(bubbleSort([8,1,2,3,4,5]))
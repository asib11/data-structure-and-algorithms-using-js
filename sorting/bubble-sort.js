const bubbleSort =arr =>{
    for (let i = arr.length; i>0 ; i--){
        for (j = 0 ; j < i - 1; j++){
            if(arr[j] > arr[j + 1]){
                // swap
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

console.log(bubbleSort([32,12,45,21,6,-3]))

// const swap = (arr, inx1, inx2) =>{
//     [arr[inx1], arr[inx2]] = [arr[inx1], arr[inx2]]
// }
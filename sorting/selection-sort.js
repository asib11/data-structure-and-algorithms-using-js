// const selectionSort = arr => {
//     for (let i = 0; i < arr.length; i++) {
//         let lowest = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[lowest]) lowest = j;
//         }
//         if (i !== lowest) {
//             let temp = arr[i];
//             arr[i] = arr[lowest];
//             arr[lowest] = temp;
//         }
//     }
//     return arr;
// }

const selectionSort = arr => {
    const swap =(arr, indx1, indx2) =>{
        return [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]]
    }
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) lowest = j;
        }
        if (i !== lowest) swap(arr, i, lowest)
    }
    return arr;
}

console.log(selectionSort([23, 43, 32, -3, 15]))
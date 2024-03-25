const marge = (arr1, arr2) =>{
    const arr3 = [];
    let i = 0
    let j = 0
    while(i< arr1.length && j< arr2.length){
        if(arr2[j]> arr1[i]){
            arr3.push(arr1[i]);
            i++;
        } else{
            arr3.push(arr2[j]);
            j++
        }
    }

    while(i < arr1.length){
        arr3.push(arr1[i]);
        i++;
    }

    while(j < arr2.length){
        arr3.push(arr2[j]);
        j++;
    }
    return arr3
}


const margeSort = arr =>{
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length /2);
    let left = margeSort(arr.slice(0,mid));
    let right = margeSort(arr.slice(mid));
    return marge(left,right)
}

console.log(margeSort([3,2,5,76,8]))
const sortedArrary = (arr1, arr2) =>{
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

console.log(sortedArrary([2,3,6],[1,5,7,8]))
const getDigit = (num,i) =>{
    return Math.floor(Math.abs(num)/ Math.pow(10,i))%10;
}

const digitCount = num => {
    if( num === 0) return 1; // because log10(0) gets -infinity
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const mostDigit = nums =>{
    let maxtDigit = 0;
    for(let i = 0; i < nums.length ; i++){
        maxtDigit = Math.max(maxtDigit, digitCount(nums[i]))
    }
    return maxtDigit;
}

console.log(getDigit(1234,2))
console.log(digitCount(1234))
console.log(mostDigit([2,54,675,44,644446,33]))
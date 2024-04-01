const getDigit = (num,i) =>{
    return Math.floor(Math.abs(num)/ Math.pow(10,i))%10;
}

const digitCount = num => {
    if( num === 0) return 1; // because log10(0) gets -infinity
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(getDigit(1234,2))
console.log(digitCount(1234))
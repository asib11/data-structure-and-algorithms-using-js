const getDigit = (num,i) =>{
    return Math.floor(Math.abs(num)/ Math.pow(10,i))%10;
}


console.log(getDigit(1234,2))
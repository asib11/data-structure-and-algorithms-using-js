function hash(key, arrLength){
    let total = 0;
    for(let char of key){
        let value = char.charCodeAt(0) -96
        total = (total + value) % arrLength
    }
    return total;
}

console.log(hash('asib', 10))
console.log(hash('ahmed', 10))
console.log(hash('tanveer', 10))
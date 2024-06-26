class HashTable{
    constructor(size=4){
        this.keyMap = new Array(size)
    }

    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }
        return total
    }

    set(key, value){
        let index = this._hash(key);
        if(!this.keyMap[index]) this.keyMap[index] = []
        this.keyMap[index].push([key,value])
    }

    get(key){
        let index = this._hash(key)
        if(this.keyMap[index]){
            for(let i = 0; i< this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0] === key) return this.keyMap[index][i][1]
            }
        }
        return undefined;
    }

    keys(){
        let keyArr = [];
        for(let i = 0; i< this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j< this.keyMap[i].length; j++){
                    if(!keyArr.includes(this.keyMap[i][j][0])) keyArr.push(this.keyMap[i][j][0])
                }
            }
        }
        return keyArr
    }

    value(){
        let valueArr = [];
        for(let i = 0; i< this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j< this.keyMap[i].length; j++){
                    if(!valueArr.includes(this.keyMap[i][j][1])) valueArr.push(this.keyMap[i][j][1])
                }
            }
        }
        return valueArr
    }
}

let ht = new HashTable();
ht.set('name', 'asib')
ht.set('fname', 'tanveer')
ht.set('lname', 'tayeb')
ht.set('middleName', 'kushtia')
ht.set('fourthName', 'kushtia')
console.log(ht)
console.log(ht.get('lname'))
console.log(ht.value())
console.log(ht.keys())
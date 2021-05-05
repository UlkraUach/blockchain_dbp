const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(index, data, previousHash = ''){
        this.index = index;
        this.data = data;
        this.previousHash = previousHash;
        this.date = new Date();
        this.nonce = 0;
        this.hash = this.createdHash();
    }

    createdHash(){
        return SHA256(`${this.index} ${this.data} ${this.date} ${this.nonce}`).toString();
    }

    //Inicie con un cero el hash
    mine(difficulty){
        while (!this.hash.startsWith(difficulty)){
            this.nonce++;
            this.hash = this.createdHash();
        }
    }
}

module.exports = Block;
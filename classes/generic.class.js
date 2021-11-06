class Generic {

    constructor() {}

    spliceArr() {
        return new Promise((resolve, reject) => {
            const randomNumber = Math.floor(Math.random() * 5);
            const myArr = ['Ntokozo', 'Majozi', 'Is', 'A', 'Beast!!'];
            myArr.splice(randomNumber,1);
            return resolve({ success: false, message: 'The array', data: myArr });
        });
    }

    async findMatch() {
        return await new Promise((resolve, reject) => {
            const firstArr = ['Ntokozo', 'Majozi', 'Is', 'A', 'Beast'];
            const secondArr = ['Majozi', 'For', 'President'];
            const thirdArr = [];

            for (var i = 0; i < firstArr.length; i++) {
                for (var x = 0; x < secondArr.length; x++) {
                    if (firstArr[i] === secondArr[x]) {
                        thirdArr.push(firstArr[i]);
                    }
                }
            }

            return resolve({ success: false, message: 'word found!', data: thirdArr });
        });
    }

};

module.exports = Generic;
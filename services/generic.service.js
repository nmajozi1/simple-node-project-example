const GenerickClass = require('../classes/generic.class');

const getClass = new GenerickClass();

exports.getSpliced = () => {

    return new Promise((resolve, reject) => {
        getClass.spliceArr()
        .then(response => {
            return resolve(response);
        })
        .catch(error => {
            return reject(error);
        });
    });
}

exports.getMatchingWord = async () => {
    return await new Promise(async (resolve, reject) => {
        await getClass.findMatch()
        .then(response => {
            return resolve(response);
        })
        .catch(error => {
            return reject(error);
        });
    });
}

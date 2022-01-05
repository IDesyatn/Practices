module.exports = checkObjectEmptiness;

function checkObjectEmptiness(obj) {
    if (typeof obj !== 'object') {
        return 'Incorrect input data';
    }

    if (obj === null) {
        return true; 
    }

    const ref = Reflect.ownKeys(obj);
    let result = true;
    if (ref.length > 0) {
        for (let item in ref) {
            if (obj[ref[item]] !== undefined) {
                return false
            }
        }
    }
    return true; 
}
module.exports = compObjSuperficial;

function compObjSuperficial(obj1, obj2) {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return 'Incorrect input data';
    }
    let result = {};
     for (let key in obj1) {
        if (obj1[key] === obj2[key]) {
            result[key] = obj1[key];
        }
    }
    return result;
} 
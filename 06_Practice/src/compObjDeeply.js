//2.Напишите функцию, которая делает глубокое сравнение объектов.

module.exports = compObjDeeply;

function compObjDeeply(obj1, obj2) {

    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return 'Incorrect input data';
    }

    if ( obj1 === null && obj2 === null) {
        return true;
    }

    let keyNames1 = Reflect.ownKeys(obj1); 
    let keyNames2 = Reflect.ownKeys(obj2); 
    let tmp = [];

    if (keyNames1.length === 0  || keyNames2.length === 0) {
        return 'Object is empty';
    }
    if (keyNames1.length !== keyNames2.length) {
        return false; 
    }

    let bool = false;

    for (let i = 0; i < keyNames1.length; i++){ 
        for (let j = 0; j < keyNames2.length; j++){
            if (keyNames1[i] === keyNames2[j]) {
                tmp.push(keyNames1[i]);
                bool = true;
                break;
            }
        }
        if (bool === false) {
            return false;
        }
    }
    
    for (let i = 0; i < tmp.length; i++) {
        if (typeof obj1[tmp[i]] === 'object') {
            
            if (!compObjDeeply(obj1[tmp[i]], obj2[tmp[i]])) {
                return false;
            }
        }
        else if (obj1[tmp[i]] !== obj2[tmp[i]]) {
            return false; 
        }
    }

    return true;
}

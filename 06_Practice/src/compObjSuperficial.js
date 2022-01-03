//1.Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.

module.exports = compObjSuperficial;

function compObjSuperficial(obj1, obj2) {
    if ((typeof obj1 !== 'object' || typeof obj2 !== 'object') || (obj1 === null) || (obj2 === null)) {
        return 'Incorrect input data';
    }

    let result = {};
    let tmp = [];
    let ref1 = Reflect.ownKeys(obj1);
    let ref2 = Reflect.ownKeys(obj2);
    

    for (let i = 0; i < ref1.length; i++){
        for (let j = 0; j < ref2.length; j++){
            if (ref1[i] === ref2[j]) {
                tmp.push(ref1[i]);
            }
        }
    }
     
    for (let i = 0; i < tmp.length; i++) {
            if (obj1[tmp[i]] === obj2[tmp[i]]) {
                result[tmp[i]] = obj1[tmp[i]];
            }
        }

    return result;
} 
//1.Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.

module.exports = compObjSuperficial;

function compObjSuperficial(obj1, obj2) {
    if ((typeof obj1 !== 'object' || typeof obj2 !== 'object')||(obj1 === null) || (obj2 === null)) {
        return 'Incorrect input data';
    }

    let result = {};
   /*let prop1 = Object.getOwnPropertyNames(obj1);
    let propSymb1 = Object.getOwnPropertySymbols(obj1);
    let prop2 = Object.getOwnPropertyNames(obj2);
    let propSymb2 = Object.getOwnPropertySymbols(obj2);*/
    console.log(Object.getOwnPropertyNames(obj1).length + "   ##################");
   
     for (let key in obj1) {
        if (obj1[key] === obj2[key]) {
            result[key] = obj1[key];
        }
    }

    /*if (prop1.length > 0) {
        for (let key in prop1) {
            if (obj1[key] === obj2[key]) {
                result[key] = obj1[key];
            }
        }
    }*/

    if (propSymb1.length > 0) {
        for (let key in propSymb1) {
            if (obj1[key] === obj2[key]) {
                result[key] = obj1[key];
            }
        }
    }
    return result;
} 
compObjSuperficial({ a: 1, b: 2 }, { c: 1, b: 2 }); 
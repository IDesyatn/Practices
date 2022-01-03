//2.Напишите функцию, которая делает глубокое сравнение объектов.

module.exports = compObjDeeply;

function compObjDeeply(obj1, obj2) {

    /*let objectSymbols1 = Object.getOwnPropertySymbols(obj1);
    let objectSymbols2 = Object.getOwnPropertySymbols(obj2);

    console.log(objectSymbols1);
    console.log(objectSymbols2);

    for (let i = 0; i < objectSymbols1.length; i++){
        for (let j = 0; j < objectSymbols2.length; j++){
            if(obj1[])
        }
    }*/

    let objectSymbols1 = Reflect.ownKeys(obj1); 
    let objectSymbols2 = Reflect.ownKeys(obj2); 

    console.log(objectSymbols1);
    console.log(objectSymbols2);

    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || !obj1 || !obj2) {
        return 'Incorrect input data';
    }
    if (objectSymbols2.length === 0  || objectSymbols1.length === 0) {
        return 'Object is empty';
    }
    if (objectSymbols2.length !== objectSymbols2.length) {
        return false; 
    }

    for (var key in obj2) {
        if (typeof obj1[key] === 'object') {
            if (!compObjDeeply(obj1[key], obj2[key])) {
                return false;
            }
        }
        else if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

    let b = Symbol('b');
    let c = Symbol('c');
    let t = Symbol('t');
//console.log(compObjDeeply({ a: 1, [b]: { [c]: 3 }, [t]: 4 }, { a: 1, [b]: { [t]: 3 }, [t]: 4 }));
console.log(compObjDeeply({  [b]: { [c]: 3 }, [t]:4 }, { [b]: { [t]: 3 }, [t]:4 }));
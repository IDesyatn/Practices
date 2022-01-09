/*Создать функцию, которая возвращает true или false, в зависмости от того, может ли 
сумма любых двух чисел из массива быть равной заданному значению*/
function isSumTwoNumEqual(n, arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = i+1; j < arr.length; j++){
            if (arr[i] + arr[j] == n)
                return true; 
        }
    }
    return false; 
}

/*Напишите функцию, которая преобразует глубокий массив в одномерный*/ 

function convDeepArrToUnivarArr(deepArr) {
    let univarArr = [];
    univarArr = deepArr.join().split(",");
    return univarArr;
}

function convDeepArrToUnivarArr2(deepArr, arr) {
    for (let i = 0; i < deepArr.length; i++)
        if (typeof deepArr[i] === 'object') {
            convDeepArrToUnivarArr2(deepArr[i], arr);
        }
        else {
            arr.push(deepArr[i]); 
        }
    return arr; 
}

function convDeepArrToUnivarArr3(deepArr) {
    let univarArr = []
    for (let i = 0; i < deepArr.length; i++)
        if (typeof deepArr[i] === 'object') {
            univarArr = univarArr.concat(convDeepArrToUnivarArr3(deepArr[i]));
        }
        else {
            univarArr.push(deepArr[i]); 
        }
    return univarArr; 
}

/*Напишите функцию, которая разделяет массив на части заданного размера*/

function convDeepArrToArrFixLength(arr,n) {
    arr = arr.join().split(",");
    console.log(arr);
    let newArr = [];
    let tmpArr = []; 
    for (let i = 0; i < arr.length; i++){
        tmpArr.push(arr[i]);
        if (( i + 1) % n == 0) {
            newArr.push(tmpArr);
            tmpArr = []; 
        }
    }
    if (tmpArr) {
        newArr.push(tmpArr);
    }
    return newArr; 
}


/*Напишите функцию, которая поверхностно сравнивает два объекта*/

function comparOfTwoObj(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false; 
    }

    for (let key in obj1) {
        if (!obj2[key]) {
            return false;
        }
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true; 
}





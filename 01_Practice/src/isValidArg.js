module.exports = { isValidArg , isSymbol };

function isSymbol(str) {
    if (typeof str !== 'string'||!str) {
        return false;
    }
    return ',!:-?. '.includes(str);
}

function isValidArg(str) {
    if (typeof str !== 'string') {
        return 'Incorrect input data'
    }

    let sStr = str.toString();
    let arr = sStr.split('');
    let isValid = false;
    let isValidArr = [ false, false ]
    
    if (arr.length < 2 || arr.length > 20|| arr[0] !== arr[0].toUpperCase() || isSymbol(arr[0])) {
        return 'INVALID';
    }
    
    for (let i = 0; i < arr.length; i++){
        isValid = false;
        if (arr[i].toLowerCase() != arr[i].toUpperCase()) {
            isValid = true;
            isValidArr[0] = true;
            continue;
        }
               
        if (isSymbol(arr[i])) {          
            isValid = true;
            isValidArr[1] = true;
            continue;
        }
        
        return 'INVALID';
    }

    if (isValidArr[0] === false || isValidArr[1] === false) {
        return 'INVALID'; 
    }
    
    return 'VALID'
    
}

console.log(isValidArg('!hfke-'));
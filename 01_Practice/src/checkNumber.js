module.exports = checkNumber;

function checkNumber(num) {
    if (typeof num !=='number') {
        return 'Incorrect data'; 
    }

    if (num ===0 || num === 1) {
        return [false,false,false]
    }
    
    for (let i = 2; i < num; i++) {
        if (num % i === 0 || num < 0) {
            break;
        }

        if (i === num - 1) {
            return [true,false,false]
        }
    }

    if (num % 10 == 0) {
        return [false, true,true]
    }
    
    if (num % 2 == 0) {
        return [false, true, false]
    }
    return [false, false, false]
}



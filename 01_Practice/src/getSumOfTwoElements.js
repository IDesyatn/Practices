module.exports = getSumOfTwoElements;

function getSumOfTwoElements(str, num) {

    if (typeof num !=='number'|| typeof str !=='string'|| !Number(str)) {
        return 'Incorrect data'; 
    }

    if (num % 3 === 0 && num % 5 === 0 && num % 15 === 0) {
        num = num * (-1); 
    }

    let numStr = Number(str);
    
    return numStr + num;
}
console.log(getSumOfTwoElements('28', 30));
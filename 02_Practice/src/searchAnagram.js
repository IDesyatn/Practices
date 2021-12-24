/*Функция проверяет яляются ли строки анаграммами, регистр букв не имеет значения. Учитываются лишь символы
пробелы и знаки препинания в расчет не берутся*/

module.exports = searchAnagram;

function isPunctuationMarks(str) {
    return ',.;:!?-()\"'.includes(str);
}

function searchAnagram(str1, str2) {
    if (!str1 || !str2) {
        return 'Неправильно введены значения'
    }
    let sStr1 = str1.toString().toLowerCase();
    let arrStrFirst = sStr1.split('');
    let sStr2 = str2.toString().toLowerCase();
    let arrStrSecond = sStr2.split('');
    let checkAnagram = false; 
    

    for (let i = 0; i < arrStrFirst.length; i++) {
        if (isPunctuationMarks(arrStrFirst[i])) {
            arrStrFirst.splice(i, 1);
        }
    }

    for (let i = 0; i < arrStrSecond.length; i++) {
        if (isPunctuationMarks(arrStrSecond[i])) {
            arrStrSecond.splice(i, 1);
        }
    }

    if (arrStrFirst.length !== arrStrSecond.length) {
        return 'Строки не являются анаграммами';
    }

    for (let i = 0; i < arrStrFirst.length; i++){
        checkAnagram = false;
        for (let j = 0; j < arrStrSecond.length; j++){
            if (arrStrFirst[i] === arrStrSecond[j]) {
                checkAnagram = true;
                delete arrStrSecond[j];
                break;
            }
        }
        if (checkAnagram === false) {
            return 'Строки не являются анаграммами';
        } 
    }

    return 'Строки являются анаграммами';
    
}

console.log(searchAnagram('я2зеМ%', 'зм%е2я'));
console.log(searchAnagram('я2', '.2я'));
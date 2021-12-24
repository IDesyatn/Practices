/* Функция выводящая в консоль числа от 1 до n, которая принимает в качестве параметра, с условиями
вывод three вместо чисел кратных 3;
вывод five вместо чисел кратных 5;
вывод threeFive вместо чисел кратных как 3, так и 5;*/

module.exports = searchMultipleThreeOrFive;

function searchMultipleThreeOrFive(n) {
    if (typeof n !== 'number' || Number.isInteger(n) === false || n < 1) {
        return 'Incorrect data';
    } 
    let result = ''; 
    for (let i = 1; i <= n; i++){
        if (i % 3 === 0 && i % 5 === 0) {
            result = result.concat('threeFive ');
        }
        else if (i % 3 === 0) {
            result = result.concat('three '); 
        }
        else if (i % 5 === 0) {
           result = result.concat('five ');
        }
        else {
            result = result.concat(i +' ');
        }
    }
    return result;
} 
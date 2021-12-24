// Нужно выйти из цикла, изменив только отмеченные строки. Результат в консоли должен останавливаться на 15 14

module.exports = modifyСycle;

function modifyСycle() {
    let result = ''
    for (let i = 0; i < 16; i++){
        for (let j = 0; j < 20; j++){ 
            if (i === 15 && j === 15) {
                break; 
            }
            result = i + ' ' + j;
            //console.log(i, j); 
        }
    }
    return result; 
}
console.log(modifyСycle());
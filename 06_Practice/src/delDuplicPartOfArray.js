// Напишите функцию, которая убирает повторяющиеся значения в массиве.

module.exports = delDuplicPartOfArray;

function delDuplicPartOfArray(arr) {
    if (typeof arr !== 'object' || !arr) {
        return 'Incorrect input data';
    }
    var seen = {};
    return arr.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

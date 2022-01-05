const delDuplicPartOfArray = require('.././delDuplicPartOfArray.js');

describe('delDuplicPartOfArray', () => {
    test('There are duplicate elements', () => {
        expect(delDuplicPartOfArray( [1, 2, 3, 1, 2])).toEqual([1, 2, 3]);
    });

    test('The array consists of repeating elements only', () => {
        expect(delDuplicPartOfArray( [1, 1, 1, 1, 1])).toEqual([1]);
    });

    test('There are no duplicate elements in the array', () => {
        expect(delDuplicPartOfArray( [1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('Argument is null', () => {
        expect(delDuplicPartOfArray(null)).toBe('Incorrect input data');
    });

    test('Argument is str', () => {
        expect(delDuplicPartOfArray('str')).toBe('Incorrect input data');
    });

    test('String array elements', () => {
        expect(delDuplicPartOfArray(['str', 'str','str2'])).toEqual(['str', 'str2']);
    });

    test('Array is empty', () => {
        expect(delDuplicPartOfArray([])).toEqual([]);
    });

    test('Array with just one element', () => {
        expect(delDuplicPartOfArray([1])).toEqual([1]);
    });
})
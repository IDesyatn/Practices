const checkObjectEmptiness = require('.././checkObjectEmptiness.js');

describe('checkObjectEmptiness', () => {
    test('Object is empty', () => {
        expect(checkObjectEmptiness({})).toBe(true);
    });

    test('Object element is undefined', () => {
        expect(checkObjectEmptiness({ a: undefined })).toBe(true);
    });

    test('Object is not empty', () => {
        expect(checkObjectEmptiness({ a: 1 })).toBe(false);
    });

    test('Argument is null', () => {
        expect(checkObjectEmptiness(null)).toBe(true);
    });

    test('Argument is str', () => {
        expect(checkObjectEmptiness('str')).toBe('Incorrect input data');
    });

    test('Obect contains only symbols', () => {
        let b = Symbol('b');
        expect(checkObjectEmptiness({ [b]: 3 })).toBe(false);
    });
})
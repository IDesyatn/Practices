const checkNumber = require('.././checkNumber.js');

describe('checkNumber', () => {
    test('Negative number divisible by 3 and 5', () => {
        expect(checkNumber(-60)).toEqual([false, true, true]);
    });

    test('Prime number', () => {
        expect(checkNumber(41)).toEqual([true, false, false]);
    });

    test('Divisible by 2, not divisible by 10', () => {
        expect(checkNumber(6)).toEqual([false, true, false]);
    });

    test('Divisible by 2 and 10', () => {
        expect(checkNumber(20)).toEqual([false, true, true]);
    });

     test('Not divisible by 2 and 10', () => {
        expect(checkNumber(9)).toEqual([false, false, false]);
     });
    
    test('Number is 0', () => {
        expect(checkNumber(0)).toEqual([false, false, false]);
    });
    
    test('Number is 1', () => {
        expect(checkNumber(1)).toEqual([false, false, false]);
    });
    
    test('Not a number', () => {
        expect(checkNumber('str')).toEqual('Incorrect data');
    });

    test('Null', () => {
        expect(checkNumber(null)).toEqual('Incorrect data');
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
})

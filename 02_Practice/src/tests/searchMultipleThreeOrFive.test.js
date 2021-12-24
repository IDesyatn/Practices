const searchMultipleThreeOrFive = require('.././searchMultipleThreeOrFive.js');

describe('searchMultipleThreeOrFive', () => {
    test('Span from 1 to 15', () => {
        expect(searchMultipleThreeOrFive(15)).toBe('1 2 three 4 five three 7 8 three five 11 three 13 14 threeFive ');
    });
    
    test('Negative number', () => {
        expect(searchMultipleThreeOrFive(-15)).toBe('Incorrect data');
    });

    test('Null', () => {
        expect(searchMultipleThreeOrFive(null)).toBe('Incorrect data');
    });

    test('Undefined', () => {
        expect(searchMultipleThreeOrFive(undefined)).toBe('Incorrect data');
    });

    test('String', () => {
        expect(searchMultipleThreeOrFive('str')).toBe('Incorrect data');
    });

    test('Number is 0', () => {
        expect(searchMultipleThreeOrFive(0)).toBe('Incorrect data');
    });

     test('Number is 1', () => {
        expect(searchMultipleThreeOrFive(1)).toBe('1 ');
     });
    
    test('Empty line', () => {
        expect(searchMultipleThreeOrFive('')).toBe('Incorrect data');
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
})
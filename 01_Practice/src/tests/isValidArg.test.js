const isValid = require('.././isValidArg.js');


describe('isValidArg', () => {
    test('Valid data', () => {
        expect(isValid.isValidArg('Hhfke!')).toBe('VALID');
    });

    test('Contains number', () => {
       expect(isValid.isValidArg('Hhfke5-')).toBe('INVALID');
    });

    test('Without symbol', () => {
       expect(isValid.isValidArg('Hhfke')).toBe('INVALID');
    });

    test('Without letters', () => {
       expect(isValid.isValidArg('!.,')).toBe('INVALID');
    });

     test('Less than 2 characters', () => {
       expect(isValid.isValidArg('!')).toBe('INVALID');
     });
    
    test('More than 20 characters', () => {
       expect(isValid.isValidArg('Qwertyuiopasdfghjkl!,')).toBe('INVALID');
    });

    test('The first letter is not capitalized', () => {
       expect(isValid.isValidArg('hfke?')).toBe('INVALID');
    });

    test('Not a string', () => {
       expect(isValid.isValidArg(45)).toBe('Incorrect input data');
    });

     test('Null', () => {
       expect(isValid.isValidArg(null)).toBe('Incorrect input data');
     });
    
     test('Empty line', () => {
       expect(isValid.isValidArg('')).toBe('INVALID');
     });
})

describe('isSymbol', () => {
    test('Symbol', () => {
        expect(isValid.isSymbol('!')).toBe(true);
    });

    test('Not symbol', () => {
        expect(isValid.isSymbol('a')).toBe(false);
    });

    test('Not symbol', () => {
        expect(isValid.isSymbol(6)).toBe(false);
    });

    test('Null', () => {
        expect(isValid.isSymbol(null)).toBe(false);
    });

    test('Empy line', () => {
        expect(isValid.isSymbol('')).toBe(false);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
})
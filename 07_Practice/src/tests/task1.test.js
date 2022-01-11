const MyString = require('.././task1.js');
const str = new MyString();

describe('MyString', () => {
    test('Example 1 reverse', () => {
        expect(str.reverse('abcde')).toBe('edcba');
    });

    test('Example 2 reverse', () => {
        expect(str.reverse('IhdUy')).toBe('yUdhI');
    });

     test('Reverse with null', () => {
        expect(str.reverse(null)).toBe('Incorrect input data');
    });


    test('Example 1 ucFirst', () => {
        expect(str.ucFirst('abcde')).toBe('Abcde');
    });

    test('Example 2 ucFirst', () => {
        expect(str.ucFirst('2hdUy')).toBe('2hdUy');
    });

    test('UcFirst with null', () => {
        expect(str.ucFirst(null)).toBe('Incorrect input data');
    });

    
    test('Example 1 ucWords', () => {
        expect(str.ucWords('abcde abcde abcde')).toBe('Abcde Abcde Abcde');
    });

    test('Example 2 ucWords', () => {
        expect(str.ucWords('srx 2uf ha')).toBe('Srx 2uf Ha');
    });

    test('UcWords with null', () => {
        expect(str.ucWords(null)).toBe('Incorrect input data');
    });
})
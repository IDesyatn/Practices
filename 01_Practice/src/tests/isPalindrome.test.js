const isPalindrome = require('.././isPalindrome');

describe('isPalindrome', () => {
    test('Is palindrome', () => {
       expect(isPalindrome('RhIHr')).toBe(true);
    });
  
    test('Is not palindrome', () => {
        expect(isPalindrome('RhIHrj')).toBe(false);
    });
    
    test('Null', () => {
        expect(isPalindrome(null)).toBe(false);
    });
  
    test('Empty line', () => {
        expect(isPalindrome("")).toBe(false);
    });
  
    test('Number', () => {
        expect(isPalindrome(4)).toBe(false);
    });
  
    afterEach(() => {
        jest.clearAllMocks();
    });
})
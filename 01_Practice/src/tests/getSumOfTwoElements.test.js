const getSumOfTwoElements = require('.././getSumOfTwoElements.js');

describe('getSumOfTwoElements', () => {
    test('Divisible by 3,5,15', () => {
        expect(getSumOfTwoElements('28', 30)).toBe(-2);
    });

    test('Not divisible by 3,5,15', () => {
        expect(getSumOfTwoElements('30', 8)).toBe(38);
    });

    test('Number is 0', () => {
        expect(getSumOfTwoElements('2', 0)).toBe(2);
    });

    test('Number is negative and divisible by 3, 5, 15', () => {
        expect(getSumOfTwoElements('2', -60)).toBe(62);
    });

     test('Number is divisible by 5, but not by 3, 15', () => {
        expect(getSumOfTwoElements('2', 10)).toBe(12);
    });

    test('Number is null', () => {
        expect(getSumOfTwoElements('2', null)).toBe('Incorrect data');
    });

    test('String is undefined', () => {
        expect(getSumOfTwoElements(undefined, 2)).toBe('Incorrect data');
    });

    test('String is not a number', () => {
        expect(getSumOfTwoElements("str", 2)).toBe('Incorrect data');
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
})
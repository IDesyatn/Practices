const searchAnagram = require('.././searchAnagram.js');

describe('searchAnagram', () => {
    test('Anagram', () => {
        expect(searchAnagram('я2зеМ%', 'зм%е2я')).toBe('Строки являются анаграммами');
    });

    test('Not anagram, more letters', () => {
        expect(searchAnagram('я2зеМ%', 'зм%ен2я')).toBe('Строки не являются анаграммами');
    })

    test('Not anagram', () => {
        expect(searchAnagram('я2зеМ', 'зменя')).toBe('Строки не являются анаграммами');
    })

    test('Contains punctuation mark', () => {
        expect(searchAnagram('яно.', 'ноя')).toBe('Строки являются анаграммами');
    })

    test('Contains special character ', () => {
        expect(searchAnagram('яно', 'ноя%')).toBe('Строки не являются анаграммами');
    })

    test('Emty line', () => {
        expect(searchAnagram('яно', '')).toBe('Неправильно введены значения');
    })

     test('Null', () => {
        expect(searchAnagram('яно', null)).toBe('Неправильно введены значения');
    })

    afterEach(() => {
        jest.clearAllMocks();
    });
})
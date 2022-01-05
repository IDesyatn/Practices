const delDuplicPartOfArray = require('.././delDuplicPartOfArray.js');

describe('delDuplicPartOfArray', () => {
    test('There is one intersection ', () => {
        expect(delDuplicPartOfArray( [1, 2, 3, 1, 2])).toEqual([1, 2, 3]);
    });
})
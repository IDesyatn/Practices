const checkObjectEmptiness = require('.././checkObjectEmptiness.js');

describe('checkObjectEmptiness', () => {
    test(' ', () => {
        expect(checkObjectEmptiness({})).toBe(true);
    });

    test(' ', () => {
        expect(checkObjectEmptiness({ a: undefined })).toBe(true);
    });

    test(' ', () => {
        expect(checkObjectEmptiness({ a: 1 })).toBe(false);
    });
})
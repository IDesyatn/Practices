const modifyСycle = require('.././modifyСycle.js');

describe('modifyСycle', () => {
    test('End of output', () => {
        expect(modifyСycle()).toBe('15 14');
    })

    afterEach(() => {
        jest.clearAllMocks();
    });
})
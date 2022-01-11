const Validator = require('.././task2.js');
var validator = new Validator();

describe('isEmail', () => {
    test('Valid email', () => {
        expect(validator.isEmail('phphtml@mail.ru')).toBe(true);
    });

    test('Inalid email', () => {
        expect(validator.isEmail('phph&tml@mail.ru')).toBe(false);
    });
})

describe('isDomain', () => {
    test('Valid domain', () => {
        expect(validator.isDomain('phphtml.net')).toBe(true);
    });

    test('Invalid domain', () => {
        expect(validator.isDomain('phphtmlnet')).toBe(false);
    });
})


describe('isDate', () => {
    test('Valid date with .', () => {
        expect(validator.isDate('12.05.2020')).toBe(true);
    });
    test('Valid date with -', () => {
        expect(validator.isDate('12-05-2020')).toBe(true);
    });
    test('Invalid date', () => {
        expect(validator.isDate('12052020')).toBe(false);
    });
})


describe('isPhone', () => {
    test('Valid number with +380...', () => {
        expect(validator.isPhone('+380298176892')).toBe(true);
    });

    test('Valid number without +380', () => {
        expect(validator.isPhone('0298176892')).toBe(true);
    });


    test('Valid number with spaces and round brackets', () => {
        expect(validator.isPhone('+380 (29) 817-68-92')).toBe(true);
    });

    test('Valid number with round brackets, but without spaces', () => {
        expect(validator.isPhone('+380(29)817-68-92')).toBe(true);
    });

    test('Invalid number', () => {
        expect(validator.isPhone('123')).toBe(false);
    });
})

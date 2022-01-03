/*const compObjDeeply = require('.././compObjDeeply.js');

describe('compObjDeeply', () => {
    test('There is one intersection ', () => {
        expect(compObjDeeply({ a:1, b:{c:1} }, { a:1, b:{c:2} })).toBe( false );
    });

    test('Objects are same', () => {
        expect(compObjDeeply({ a:1, b:{c:1} }, { a:1, b:{c:1} })).toBe( true );
    });

     test('Different lengths', () => {
        expect(compObjDeeply({ a:1 }, { a:1, b:{c:2} })).toBe( false );
    });

    test('No intersections', () => {
        expect(compObjDeeply({ a:2, b:{c:1} }, { a:1, b:{c:2} })).toBe(false);
    });

    test('Empty objects', () => {
        expect(compObjDeeply({}, {})).toBe('Object is empty');
    });

    test('Arguments are not objects', () => {
        expect(compObjDeeply('a', 2)).toBe('Incorrect input data');
    });

    test('Keys are numbers', () => {
        expect(compObjDeeply({ 1: 'a', 2: {3:'c'} }, { 1: 'a', 2: {3:'c'} })).toBe(true);
    });

    test('Elements are null', () => {
        expect(compObjDeeply({ a:null, b:undefined }, { a:null, b:undefined })).toBe(true);
    });

    test('Arguments are null', () => {
        expect(compObjDeeply(null, null)).toBe('Incorrect input data');
    });

    test('Keys are symbols', () => {
        let b = Symbol('b');
        let c = Symbol('c');
        let t = Symbol('t');
        expect(compObjDeeply({ a: 1, [b]: { [c]: 3 } }, { a: 1, [b]: { [t]: 3 } })).toBe(false);
    });

    test('Keys are symbols', () => {
        let b = Symbol('b');
        let c = Symbol('c');
        expect(compObjDeeply({ a: 1, [b]: { [c]: 3 } }, { a: 1, [b]: { [c]: 3 } })).toBe(true);
    });

})*/
const compObjSuperficial = require('.././compObjSuperficial.js');

describe('compObjSuperficial', () => {
    test('There is one intersection ', () => {
        expect(compObjSuperficial({ a: 1, b: 2 }, { c: 1, b: 2 })).toEqual({ b: 2 });
    });

    test('Objects are same', () => {
        expect(compObjSuperficial({ a: 1, b: 2 }, { a: 1, b: 2 })).toEqual({ a: 1, b: 2 });
    });

    test('No intersections', () => {
        expect(compObjSuperficial({ a: 1, b: 2 }, { c: 1, d: 2 })).toEqual({});
    });

    test('Empty objects', () => {
        expect(compObjSuperficial({}, {})).toEqual({});
    });

    test('Arguments are not objects', () => {
        expect(compObjSuperficial('a', 2)).toBe('Incorrect input data');
    });

    test('Arguments are numbers', () => {
        expect(compObjSuperficial({ 1: 'a' , 2: 'b' }, { 3: 'c', 1: 'a' })).toEqual({ 1:'a' });
    });

     test('Deeply objects', () => {
        expect(compObjSuperficial({ a:1, b:{c:1} }, { a:1, b:{c:1} })).toEqual({ a:1 });
     });
    
    test('Keys are symbols and they are same', () => {
        let b = Symbol('b');
        expect(compObjSuperficial({ a: 1, [b]: 3 }, { a: 1, [b]: 3 })).toEqual({ a: 1, [b]: 3 });
    });

    test('Keys are symbols and they are not same', () => {
        let b = Symbol('b');
        let c = Symbol('c');
        expect(compObjSuperficial({ a: 1, [b]: 3 }, { a: 1, [c]: 3 })).toEqual({a: 1});
    });
})
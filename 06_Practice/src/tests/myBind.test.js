const myBind = require('.././myBind.js');

const testObj = {
    a: 5, 
    getValue() {
        return 'Your num is ' + this.a ;
    }
}

describe('myBind', () => {
    test('No argumets', () => {
        expect(myBind()).toEqual('Incorrect input data');
    })
    test('Function is null', () => {
        expect(myBind(null, testObj)).toEqual('Incorrect input data');
    })
    test('Object is null', () => {
        expect(myBind(testObj.getValue, null)).toEqual('Incorrect input data');
    })
    test('Function and object',() => {
        expect(myBind(testObj.getValue, testObj)()).toEqual('Your num is 5');
    })
    test('Only function', () => {
        expect(myBind(testObj.getValue())).toEqual('Incorrect input data');
    })
    test('11', () => {
        expect(myBind(testObj.getValue, 11)()).toEqual('Your num is undefined');
    })
})
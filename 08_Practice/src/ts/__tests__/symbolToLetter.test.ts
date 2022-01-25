import {decodeMorse, symbolToLetter} from '../symbolToLetter';

describe('decode', () => {
    test('Morse SOS', () => {
        expect(decodeMorse('... --- ...')).toBe('SOS');
    });

    test('Morse HEY JUDE', () => {
        expect(decodeMorse('.... . -.--   .--- ..- -.. .')).toBe('HEY JUDE');
    });

});

describe('symbolToLetter', () => {
    test('Find special word', () => {
        expect(symbolToLetter('... --- ...')).toBe('SOS');
    });

    test('find letter H', () => {
        expect(symbolToLetter('....')).toBe('H');
    });
});
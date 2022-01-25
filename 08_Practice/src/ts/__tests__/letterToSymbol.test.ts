import {encodeMorse, letterToSymbol} from "../letterToSymbol";

describe('encodeMorse', () => {
    test('Encode SOS', () => {
        expect(encodeMorse('SOS')).toBe('... --- ...');
    });

    test('Encode HeY JuDE', () => {
        expect(encodeMorse('HeY JuDE')).toBe('.... . -.--   .--- ..- -.. .');
    });
});

describe('letterToSymbol', () => {
    test('Special word SOS', () => {
        expect(letterToSymbol('SOS')).toBe('... --- ...');
    });

    test('Morse symbol for letter H', () => {
        expect(letterToSymbol('H')).toBe('....');
    });

    test('synmbol is undefined', () => {
        expect(letterToSymbol(undefined)).toBe('');
    });
});
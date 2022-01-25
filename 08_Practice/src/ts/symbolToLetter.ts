import { mappings } from './morseSymbol';
import { specialMappings } from './morseSymbol';

function decodeMorse(str:string) {
    str = str.trim();  

    let result = ''; 
    let symbols = []; 
    let words = str.split('   ');
    
    for (let i = 0; i < words.length; i++) {
        symbols = words[i].split(' ');
        for (let j = 0; j < symbols.length; j++){
            result += symbolToLetter(symbols[j]);
        }
        result += ' ';
    } 
    return result.trim();
}

function symbolToLetter(symbol) {
    let result = '';
    specialMappings.forEach(item => {
        if (item.symbol === symbol) {
             result += item.translation;
        }
    })

    mappings.forEach(item => {
        if (item.symbol === symbol) {
             result += item.translation;
        }
    })
    return result;
}

export{decodeMorse, symbolToLetter}


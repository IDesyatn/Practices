import { mappings } from './morseSymbol';
import { specialMappings } from './morseSymbol';

function encodeMorse(str) {
    str = str.toUpperCase().trim();  

    let result = ''; 
    let letters = []; 
    let words = str.split(' ');
   
    for (let i = 0; i < words.length; i++) {
        letters = words[i].split('');
       
        for (let j = 0; j < letters.length; j++){
            result = result + letterToSymbol(letters[j]) + ' ';
        }
        result += '  ';
    } 
    return result.trim();
}


function letterToSymbol(letter) {
    let result = '';
    specialMappings.forEach(item => {
        if (item.translation === letter) {
            result += item.symbol;
        }
    })
    
    mappings.forEach(item => {
        if (item.translation === letter) {
            result += item.symbol;
        }
    })
     
    return result;
}

export{encodeMorse,letterToSymbol}

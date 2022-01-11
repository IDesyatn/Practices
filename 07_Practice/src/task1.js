class MyString{
    reverse(str) {
        if (!str || typeof str !== 'string') {
           return 'Incorrect input data';
        }
        return String(str).split('').reverse().join('');
    }

    ucFirst(str) {
        if (!str || typeof str !== 'string') {
            return 'Incorrect input data';
        }
        return str[0].toUpperCase() + str.slice(1);
    }

    ucWords(str) {
        if (!str || typeof str !== 'string') {
            return 'Incorrect input data';
        }
         return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()});
    }
};

module.exports = MyString;

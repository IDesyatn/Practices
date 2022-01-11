class Validator{
    isEmail(str) {
        return /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[A-Za-z]{2,6}$/.test(String(str));
    }

    isDomain(str) {
        return /^(?!\-)(?:[a-zA-Z\d\-]{0,62}[a-zA-Z\d]\.){1,126}(?!\d+)[a-zA-Z\d]{1,63}$/.test(String(str));
    }

    isDate(str) {
        return /^\d{2}([./-])\d{2}\1\d{4}$/.test(String(str));
    }

    isPhone(str) {
        return /^(\s*)?(\+)?([- _():=+ ]?\d[- _():=+ ]?){10,14}(\s*)?$/.test(String(str));
    }
}; 


module.exports = Validator;



module.exports = isPalindrome;

function isPalindrome(str) {
    if (!str || typeof str !== 'string') {
        return false;
    }
    let sStr = str.toLowerCase();
    let arr = sStr.split(''); 
    for (let i = 0; i < (arr.length / 2); i++){
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome(null));
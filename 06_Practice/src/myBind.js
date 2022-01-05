module.exports = myBind;

function myBind(fn, cont) {
    if(typeof fn !== 'function'|| !fn || !cont){
        return 'Incorrect input data';
    }

    let bindArg = [].slice.call(arguments, 2);
    return function() {
        let fnArg = [].slice.call(arguments);
        return fn.apply(cont, bindArg.concat(fnArg));
    }
}
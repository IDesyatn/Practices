function sum (a, b) {
  return sum + a + b;
}

function myBind() {
    if(typeof fn !== 'function'){
        return undefined;
    }
    let bindArgs = [].slice.call(arguments, 2);
    return function() {
        let fnArgs = [].slice.call(arguments);
        return fn.apply(context, bindArgs.concat(fnArgs));
    };
}
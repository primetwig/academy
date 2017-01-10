//function add(a, b) {
//    return a + b;
//}


function add(a, b) {
    var result;

    [].forEach.call(arguments, function (arg) {
        if (typeof arg != "number") {
            throw new Error("Every argument should be a number");
        }
    });

    result = a + b;

    var str = result + '';
    if (str.length - str.indexOf('.') > 3) {
        result = Math.round(result * 100) / 100;
    }

    return result;
}



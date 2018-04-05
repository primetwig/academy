// cookie
console.log(document.cookie.split('; '));

function getCookie(name) {
    var list = document.cookie.split('; ');
    var match = list.find(function (item) {
        var pair = item.split('=');
        return pair[0] === name;
    });
    return match ? decodeURIComponent(match) : void(0);
}

document.cookie = "user=Andy";

var date = new Date(1);
document.cookie = "name=; path=/; expires=" + date.toUTCString() + "; secure";


function setCookie(name, value, options) {
    options = options || {};

    var expires = options.expires;
    // as number
    if (typeof expires == "number" && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }
    // as Date
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    var cookie = name + "=" + encodeURIComponent(value);

    for (var prop in options) {
        var val = options[prop];
        cookie += "; " + prop + (val !== true ? '='+val : '');
    }

    document.cookie = cookie;
}



// cache
//var cache = window.applicationCache;
//
//window.applicationCache.addEventListener('updateready', function (e) {
//
//    //window.location.reload();
//
//    if (cache.status === cache.UPDATEREADY) {
//        confirm("Your page has a new version. Update?") &&
//        window.location.reload();
//    }
//});



//// OOP
//var user = {
//    name: "Andy",
//    _age: 18,
//    get age() {
//        return this._age;
//    },
//    set age(value) {
//        this._age = value < 0
//            ? 0
//            : value > 100
//                ? 100
//                : value;
//    }
//};
//
//Object.getOwnPropertyDescriptor(user, "name");
//// {value: "Andy", writable: true, enumerable: true, configurable: true};
//
//Object.getOwnPropertyDescriptor(user, "age");
//// {get: function, set: function, enumerable: true, configurable: true};
//
//
//Object.defineProperty(user, "gender", {
//    value: "boy",
//    writable: false,
//    enumerable: false,
//    configurable: false
//});
//
//for (var prop in user) {}
//Object.keys(user);
//user.propertyIsEnumerable("gender");
//user.hasOwnProperty("gender");
//
//Object.defineProperties(user, {
//    mom: {
//        value: "Erika",
//        writable: false
//    },
//    dad: {
//        value: "Harry",
//        writable: false
//    },
//    family: {
//        get: function() {
//            return [
//                this.name,
//                this.mom,
//                this.dad
//            ].join(' ');
//        }
//    }
//});
//
//Object.preventExtensions(user);
//Object.isExtensible(user);
//// can not add new props
//
//Object.seal(user);
//Object.isSealed(user);
//// all existent props get { configurable: false }
//
//Object.freeze(user);
//Object.isFrozen(user);
//// all existent props get { writable: false, configurable: false }
//


//// proto
//var shape = {
//    material: "paper"
//};
//
//var triangle = Object.create(shape);
//
//
//shape.isPrototypeOf(triangle);


//var Shape = {
//    constructor: function (angles) {
//        this.angles = angles;
//        return this;
//    },
//    material: "paper"
//};
//
//var UserShape = Object.create(Shape);
//UserShape.constructor = function (angles, owner) {
//    Shape.constructor.apply(this, arguments);
//    this.owner = owner;
//};
//
//var userCircle = Object.create(UserShape).constructor(0, "Andy");
//console.log(userCircle);



//// Factory
//function shapeFactory() {
//    return {
//        material: "paper"
//    };
//}
//
//function shapeFactory(options) {
//    var result = {
//        material: "paper"
//    };
//    for (var prop in options) {
//        result[prop] = options[prop];
//    }
//    return result;
//}
//
//function clone(obj) {
//    if (typeof obj != "object" || !obj) {
//        return obj;
//    }
//
//    var result = {};
//    for (var prop in options) {
//        var value = options[prop];
//
//        if (typeof value == "object") {
//            result[prop] = clone(value);
//        } else {
//            result[prop] = value;
//        }
//    }
//    return result;
//}



//// class
//var Person = function (name) {
//    console.log(this);
//    this.name = name;
//};
//
//var user1 = new Person("Andy");
//var user2 = new Person("Harry");
//
//console.log(user1 instanceof Person);
//Person.prototype.isPrototypeOf(user1);
//
//user1.constructor;
//Person.prototype.constructor;
//
//
//console.log(user1.name);
//
//
//
//var Developer = function (name, skills) {
//    Person.apply(this, arguments);
//    this.skills = skills || [];
//};
//
//Developer.prototype = Object.create(Person.prototype);
//Developer.prototype.constructor = Developer;
//
//var user3 = new Developer("Oliver", ["html", "css", "js"]);
//console.log(user3 instanceof Developer);
//console.log(user3 instanceof Person);





//// toString
//Object.prototype.toString;
//({}).toString;
//
//Object.prototype.valueOf;
//Object.prototype.toJSON;
//
//function classOf(target) {
//    return ({}).toString.call(target).slice(8, -1);
//}
//
//console.log(classOf(null)); // Null
//console.log(classOf(123)); // Number
//console.log(classOf({})); // Object
//console.log(classOf([])); // Array





//// closure
//var someFunc = function () {
//    var value = 10;
//
//    return function () {
//        return value;
//    };
//};
//var callFunction = someFunc();
//
//var anotherFunction = function () {
//    var value = 20;
//    console.log(callFunction());
//};
//anotherFunction();
//
//
//
//var counter = (function () {
//    var i = 0;
//    return function (num) {
//        if (typeof num != "undefined") i = num;
//        return i++;
//    };
//})();
//console.log( counter() );
//console.log( counter() );
//console.log( counter(5) );
//console.log( counter() );
//console.log( counter() );



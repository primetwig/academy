

/* VARS */
//console.log(a); // error
//let a = 1;
//
//if (true) {
//    let a = 2;
//    console.log(a); // 2
//}
//
//console.log(a); // 1
//
//
//const b = 1;
//b = 2; // error
//
//const user = {
//    name: "Andy"
//};
//user.name = "Harry"; // ok
//user = {}; // error


/* Destructing */
//let [a, b] = [10, 15];
//console.log(a); // 10
//console.log(b); // 15
//
//let [, lastName] = "Andy Davidson".split(" ");
//console.log(lastName); // Davidson
//
//let [one, two, ...other] = [1, 2, 3, 4, 5];
//console.log(one);   // 1
//console.log(two);   // 2
//console.log(other); // [3, 4, 5]
//
//let [a, b, c = 20] = [10];
//console.log(a); // 10
//console.log(b); // undefined
//console.log(c); // 20
//
//let user = {
//    name:   "Andy",
//    gender: "male",
//    age:    20,
//    school: {
//        title: "High",
//        good: false
//    }
//};
//let { name, gender, age: old, school: { title } } = user;
//console.log(name, gender, old, title);


/* Default arguments */
//function add(a, b = 5) {
//    return a + b;
//}
//
//console.log( add(3) ); // 8
//console.log( add(3, void(0)) ); // 8
//
//
//function log(first, ...args) {
//    console.warn(first);
//    console.log(args);
//}
//
//function createUser({ name = "Andy", gender }) {
//    let user = {
//        name: name,
//        gender: gender
//    };
//    console.log(user);
//}
//let options = {
//    name: "Harry"
//};
//createUser(options);
//createUser({ gender: "male" });


/* Spread */
//let numbers = [1, 2, 3, 4];
//let moreNums = [...numbers, 5, 6];
//console.log(moreNums);
//
//let max = Math.max(...numbers);
//console.log(max);
//
//let nums = [6, -4, 8, -3, 7, 9];
//let min = Math.min( ...nums.map(function(n) { return n*n }) );
//console.log(min);
//
//
//let userProto = {
//    name:   "Andy",
//    gender: "male",
//    age:    20
//};
//
//let user1 = {
//    ...userProto,
//    name: "Harry"
//};
//
//console.log(user1); // { name: "Harry", gender: "male", age: 20 }
//user1.name = "Tom";
//console.log(userProto.name); // Andy


/* Arrow functions */
//let increment = x => x + 1;
////let increment = function (x) { return x + 1; };
//
//let add = (a, b) => a + b;
//
//let getYear = () => new Date().getFullYear();
//
//let addAndLog = (a, b) => {
//    let result = a + b;
//    console.log(result);
//    return result; // return
//};
//
//let doubles = [1, 2, 3, 4, 5].map(n => n*2);
//let hasFive = [1, 2, 3, 4, 5].filter(n => n==5);
//
//
//let team = {
//    name:   "Super team",
//    people: ["Andy", "Tom"],
//
//    sayHi: function () {
//        console.log(this.name); // Super team
//
//        this.people.forEach(function (person) {
//            console.log(person + ' is in team: ' + this.name);
//            // error: this == undefined
//        });
//    },
//    sayHello: function () {
//        console.log(this.name); // Super team
//
//        this.people.forEach(person => {
//            console.log(person + ' is in team: ' + this.name);
//            // Andy is in team: Super team
//            // Tom is in team: Super team
//        });
//    }
//};
//
//team.sayHi();
//team.sayHello();


/* String templates */
//let str = `Some string`;
//
//let name = "Andy";
//let age = 20;
//let about = `My name is ${name}.
//I was born in ${new Date().getFullYear() - age}`;
//
//console.log(about);
//
//let info = prepare`Name: ${name}. Age: ${age}`;
//function prepare(parts, ...values) {
//    console.log(parts);  // ["Name: ", ". Age: ", ""]
//    console.log(values); // ["Andy", 20]
//}


/* Short notations */
//let name = "Andy";
//let user = {
//    name,
//    logName() {
//        console.log(this.name);
//    }
//};


//let prop = "name";
//let user = {};
//user[prop] = "Andy";
//
//
//let user = {
//    [prop]: "Andy"
//};



/* Classes */
//class User {
//    constructor(name, age) {
//        this.name = name;
//        this.age = age;
//    }
//    grow() {
//        this.age++;
//        console.log(this.grow);
//    }
//}
//let user = new User("Andy", 20);
//user.grow();
//
//
//class Animal {
//    constructor(name) {
//        this.name = name;
//    }
//    walk() {
//        console.log("I walk: " + this.name);
//    }
//}
//class Rabbit extends Animal {
//    walk() {
//        super.walk();
//        console.log("...and jump!");
//    }
//}



/* for..of */
//let nums = [1, 2, 3];
//
//for (let i of nums) {
//    console.log(i);
//}
//
//let str = "Hello";
//
//for (let ch of str) {
//    console.log(ch);
//}
//
//let users = [
//    { name: "Tom", age: 20 },
//    { name: "Bob", age: 15 }
//];
//
//for (let { name, age } of users) {
//    console.log(name, age);
//}



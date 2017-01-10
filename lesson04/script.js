function log(str) {
    console.log('num: '+str);
}
function scream(str) {
    console.log('num: '+str+'!!!!!!');
}

function doSomeMath(callback) {
    var a = 14;
    var b = 15;

    var c = a + b;

    callback(c);
}

doSomeMath(log);
doSomeMath(scream);





var names, total, sorted;
var users = [
    { name: "Alex", cash: 43 },
    { name: "John", cash: 274 },
    { name: "Carl", cash: 82 },
    { name: "Bill", cash: 14 }
];

names = users.map(function (user) {
    return user.name;
});

total = users.reduce(function (sum, user) {
    return sum + user.cash;
}, 0);

sorted = users.slice(0).sort(function (user1, user2) {
    return user1.cash - user2.cash;
}, 0);



console.log(names);
console.log(total);
console.log(sorted);
console.log(users);


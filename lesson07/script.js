/*
 REST - Representational State Transfer
 Это архитектура, исходя из которой нужно строить запросы.
 Запрос выглядит так:
 GET /users?role=moderator
 Ответ в виде JSON:
 [{"id": 14, "phone": "+380671234567"},{"id": 27, "phone": "+380637654321"}]

 SOAP - Simple Object Access Protocol
 Это протокол доступа к объектам сервера с клиента.
 Запрос передается через POST в виде xml-структуры.
 Ответ приходит тоже в виде xml-структуры.
*/



// localStorage
localStorage.setItem('name', 'value');
localStorage.getItem('name');
localStorage.removeItem('name');

localStorage.length;
localStorage.key(0);

var i, len = localStorage.length;
var exclude = ['name1', 'name2'];
for (i = 0; i < len; i++) {
    var key = localStorage.key(i);
    if (exclude.indexOf(key) == -1) {
        localStorage.removeItem(key);
    }
}



//// throw
//throw "Super error";
//
//var error = new Error("This is a custom error");
//error.name; // Error
//error.message; // This is a custom error
//throw error;
//console.log(error);
//
////123 = "some string";
//var a = 5;
//a();
//
//var num = 5;
//function throws() {
//    throw "Super error";
//}
//throws();
//num = 7;



//// try {} catch (err) {}
//var data = localStorage.getItem('user');
//
//try {
//    data = JSON.parse(data);
//} catch (err) {
//    console.log(err.message);
//    data = {};
//    localStorage.removeItem('user');
//}



//// new Promise
//var promise = new Promise(function (resolve, reject) {
//    setTimeout(function () {
//        if (Math.random() > 0.5) {
//            resolve("Greater");
//        } else {
//            reject("Error");
//        }
//    }, 2000);
//});
//
//promise.then(function (r) {
//    console.log(r); // Greater
//    return "Cool";
//}).then(function (r) {
//    console.log(r); // Cool
//}).catch(function (error) {
//    console.log(error); // Error
//});
//
//function getUser(id) {
//    var result = new Promise(function (resolve, reject) {
//        var http = new XMLHttpRequest();
//        http.open('GET', 'http://site.com');
//
//        http.addEventListener('onreadystatechange', function () {
//            if (this.readyState == 4) {
//                var data = JSON.parse(this.responseText);
//                this.status == 200 ? resolve(data) : reject(data);
//            }
//        });
//
//        http.send('userId='+id);
//    });
//
//    return result;
//}
//
//getUser(14).then(function (data) {
//    // got user here
//}).catch(function (err) {
//    // got error
//});



//// Promise.all
//function getUserNews(id) {}
//function getUserImages(id) {}
//function getUserVideos(id) {}
//
//var id = 5;
//var waitFor = [
//    getUserNews(id),
//    getUserImages(id),
//    getUserVideos(id)
//];
//
//Promise.all(waitFor).then(function () {
//    document.body.classList.remove('is-loading');
//});

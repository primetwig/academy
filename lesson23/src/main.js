var app = angular.module('app', ['ngRoute']);


app.controller('SomeController', function ($q) {

    this.user = null;

    var getUser = function (id) {
        var delay = $q.defer();

        setTimeout(function () {
            delay.resolve({ name: 'Andy' });
        }, 3000);

        return delay.promise;
    };

    getUser(13).then(r => {
        console.log(r);
        this.user = r;
    });

});












//app.controller('SomeController', function (config) {
//    console.log(config);
//
//    //config.lang = 'UA';
//    //console.log(config);
//});
//
//app.constant('config', {
//    lang: 'EN',
//    slider: {
//        auto: true,
//        autoDelay: 5000
//    }
//});









//app.controller('SomeController', function (notifications) {
//    this.message = '';
//
//    this.submit = function () {
//        if (this.message.length) {
//            notifications.show(this.message);
//            this.message = '';
//        }
//    }
//});
//
//app.controller('ModalController', function (notifications) {
//    this.getModal = function () {
//        return notifications.get();
//    };
//
//    this.closeModal = notifications.close;
//});
//
//app.factory('notifications', function() {
//    var message = null;
//
//    return {
//        get: function () {
//            return message;
//        },
//        show: function (value) {
//            message = value;
//        },
//        close: function () {
//            message = null;
//        }
//    };
//});








//app.controller('SomeController', function (products) {
//
//    this.submit = function () {
//        if (this.name.length) {
//            products.add(this.name);
//            this.name = '';
//        }
//    };
//
//    this.getProducts = function () {
//        return products.get();
//    };
//});
//
//app.service('products', function() {
//    var products = [];
//
//    this.get = function () {
//        return products;
//    };
//    this.add = function (value) {
//        products.push(value);
//    };
//    this.reset = function () {
//        products = [];
//    };
//});









//app.controller('SomeController', function (Products) {
//
//    var list = new Products();
//
//    this.submit = function () {
//        if (this.name.length) {
//            list.add(this.name);
//            this.name = '';
//        }
//    };
//
//    this.getProducts = function () {
//        return list.get();
//    };
//});
//
//app.factory('Products', function() {
//    var Factory = function () {
//        var products = [];
//
//        this.get = function () {
//            return products;
//        };
//        this.add = function (value) {
//            products.push(value);
//        };
//        this.reset = function () {
//            products = [];
//        };
//    };
//
//    return Factory;
//});







//app.config(function($routeProvider, $locationProvider) {
//    $routeProvider
//        .when('/about', {
//            template: '<div>This is about page</div>',
//            controller: 'AboutController'
//        })
//        .when('/news', {
//            template: '<div>This is news page</div>',
//            controller: 'NewsController'
//        })
//        .when('/news/:newsId', {
//            template: '<div>This is a single news page with id {{ newsId }}</div>',
//            controller: 'NewsController'
//        });
//
//    // configure html5 to get links working on jsfiddle
//    $locationProvider.html5Mode(true);
//});
//
//app.controller('MainController', function () {
//
//});
//
//app.controller('AboutController', function () {
//
//});
//
//app.controller('NewsController', function ($scope, $routeParams) {
//    $scope.newsId = $routeParams.newsId;
//});









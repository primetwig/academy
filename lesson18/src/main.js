var app = angular.module('app', []);

//app.controller('StoreController', function ($scope) {
//    this.product = {
//        name: "Emerald",
//        price: 5.30,
//        description: "Some text goes here"
//    };
//
//    $scope.merchant = {
//        name: "Dealer name"
//    };
//});


//app.controller('StoreController', function () {
//    this.product = {
//        name: "Emerald",
//        price: 5.30,
//        description: "Some text goes here",
//        canPurchase: true,
//        soldOut: true
//    };
//});


app.controller('StoreController', function () {
    this.products = [
        {
            name: "Emerald",
            price: 5.30,
            description: "Some text goes here",
            canPurchase: true
        },
        {
            name: "Sapphire",
            price: 12,
            description: "Some text goes here as well",
            canPurchase: false
        }
    ];
});



























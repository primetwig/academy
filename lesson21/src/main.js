var random = {
    name:     function () {
        return chance.pickone([
            "Agate",
            "Amber",
            "Amethyst",
            "Aquamarine",
            "Emerald",
            "Malachite",
            "Moonstone",
            "Obsidian",
            "Onyx",
            "Sapphire"
        ]);
    },
    price:    function () {
        return chance.floating({
            min:   3,
            max:   80,
            fixed: chance.natural({ max: 2 })
        });
    },
    sentence: function () {
        return chance.sentence({
            words: chance.natural({ min: 5, max: 20 })
        });
    },
    image:    function (num) {
        num = num || chance.natural({ min: 1, max: 10 });
        return "src/images/gem-" + num + ".jpg";
    },
    images:    function () {
        var numbers = (new Array(9)).join('a').split('a').map((v, i) => i+1);
        var indexes = chance.shuffle(numbers).slice(0, chance.natural({ min: 2, max: 4 }));
        return indexes.map(this.image);
    },
    boolean:  function () {
        return chance.bool();
    },
    stars: function () {
        return chance.natural({ min: 1, max: 5 });
    },
    email: function () {
        return chance.email();
    }
};


var app = angular.module('app', []);



app.controller('StoreController', function () {
    this.products = (new Array(2))
        .join('a')
        .split('a')
        .map(v => {
            return {
                name:        random.name(),
                price:       random.price(),
                description: random.sentence(),
                canPurchase: random.boolean(),
                soldOut:     random.boolean(),
                image:       random.image(),
                images:      random.images(),
                reviews:     [{
                    stars:  random.stars(),
                    body:   random.sentence(),
                    author: random.email()
                }, {
                    stars:  random.stars(),
                    body:   random.sentence(),
                    author: random.email()
                }, {
                    stars:  random.stars(),
                    body:   random.sentence(),
                    author: random.email()
                }]
            };
        });
});

app.controller('PanelController', function () {
    this.tab = 1;

    this.selectTab = function (tab) {
        this.tab = tab;
    };

    this.isSelected = function (tab) {
        return this.tab == tab;
    };

});

app.controller('GalleryController', function () {
    this.current = 0;

    this.setCurrent = function(index){
        this.current = index || 0;
    };
});

app.controller('ReviewController', function () {
    this.review = {};

    this.addReview = function(product){
        product.reviews.push(this.review);
        this.review = {};
    };
});



app.directive('productTitle', function () {
    return {
        restrict:    'E',
        templateUrl: 'src/product-title.html'
    };
});

app.directive('productPanels', function () {
    return {
        restrict:     'E',
        templateUrl:  'src/product-panels.html',
        controller:   function () {
            this.tab = 1;

            this.selectTab = function (tab) {
                this.tab = tab;
            };

            this.isSelected = function (tab) {
                return this.tab == tab;
            };

        },
        controllerAs: 'panel'
    };
});






app.controller('CustomersController', function() {
    this.regularCustomer = { name: 'Andy', pet: 'dog' };
    this.vipCustomer = { name: 'Harry', pet: 'cat' };
});

app.directive('customerInfo', function() {
    return {
        restrict: 'E',
        scope: {
            info: '=info'
        },
        template: '<div>I am {{ info.name }} and I have a {{ info.pet }}</div>'
    };
});


















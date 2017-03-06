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
    this.products = (new Array(1))
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

    this.colors = [
        { id: 1, name:'black',  shade:'dark' },
        { id: 2, name:'white',  shade:'light' },
        { id: 3, name:'red',    shade:'dark' },
        { id: 4, name:'blue',   shade:'dark' },
        { id: 5, name:'yellow', shade:'light' }
    ];

});

app.controller('PanelController', function () {
    this.tab = 3;

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























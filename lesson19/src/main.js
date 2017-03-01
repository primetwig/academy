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
    image:    function () {
        return "src/images/gem-" + chance.natural({ min: 1, max: 10 }) + ".jpg";
    },
    boolean:  function () {
        return chance.bool();
    }
};


var app = angular.module('app', []);


app.controller('StoreController', function () {
    this.products = (new Array(10))
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
                images:      [random.image(), random.image(), random.image()]
            };
        });

    this.numbers = [5, 6, 1, 2, 3, 4];
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























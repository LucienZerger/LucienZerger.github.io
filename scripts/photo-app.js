(function () {
    var app = angular.module('photoAPP', []);


    app.controller('albumController', function () {
        this.sortByAscending = false;
        this.list = [
            { name: '2016.09', url: 'https://goo.gl/photos/SHvTAYVbQjhTpFzr8', tags: ['melody', 'castlemaine', 'playground'] },
            { name: '2016.08', url: 'https://goo.gl/photos/xuD93TdGjK9PkKXG7', tags: ['melody', 'home', 'book week dress up', 'iPad', 'school', 'science project'] },
            { name: '2016.07', url: 'https://goo.gl/photos/69H1zMXCBvqH234w5', tags: ['melody', 'shopkins', 'hand rash'] },
            { name: '2016.06', url: 'https://goo.gl/photos/qtchMYyGE1wajbv98', tags: ['melody', 'school photos', 'semester 1 report'] },
            { name: '2016.05', url: 'https://goo.gl/photos/sMLUWERxCqf65czx5', tags: ['melody', 'lego', 'school', 'grandparent day'] },
            { name: '2016.04', url: 'https://goo.gl/photos/eVAPumWJccxeFcAQ9', tags: ['melody', 'play-doh', 'skype', 'cats', 'dryerase activity center'] },
            { name: '2016.03', url: 'https://goo.gl/photos/UzDeGfUssqSbtPsu5', tags: ['melody', 'uniquely awesome kids', 'school book club', 'fallen tree', 'face paint'] },
            { name: '2016.02', url: 'https://goo.gl/photos/4hxnUE4GCuzZR1XMA', tags: ['melody', 'home', 'jigsaw'] },
            { name: '2016.01', url: 'https://goo.gl/photos/BnQERDqk3rx82iFT6', tags: ['melody', 'home', 'school', 'prep first day'] },
            { name: '2015.12', url: 'https://goo.gl/photos/hJ5RC57NyHqWhJ8z9', tags: ['melody', 'home', 'school', 'prep orientation'] },
            { name: '2015.11', url: 'https://goo.gl/photos/H1CQUViukSkgViBG8', tags: ['melody', 'lake eppalock caravan park', '5th birthday', 'dress up', 'home'] },
            { name: '2015.10', url: 'https://goo.gl/photos/RWJHCUhDvzzKU2958', tags: ['melody', 'hospital', 'chess table', 'home', 'random'] },
            { name: '2015.09', url: 'https://goo.gl/photos/MkBmQJ6gKbUN8z938', tags: ['herbalife', 'melody', 'home'] },
            { name: '2015.08', url: 'https://goo.gl/photos/ZomJzhvbRQtGBWVTA', tags: ['melody', 'home'] },
            { name: '2015.07', url: 'https://goo.gl/photos/ptsjhpWwRoQkraDz5', tags: ['melody', 'home', 'cat', 'hair'] },
            { name: '2015.06', url: 'https://goo.gl/photos/2RPFozyyynseTRHf8', tags: ['melody', 'home', 'allingham', 'lake weeroona', 'playground'] },
            { name: '2015.05', url: 'https://goo.gl/photos/SMq5Lwp6kcb54Fsc7', tags: ['melody', 'home', 'grandpa'] },
            { name: '2014.05', url: 'https://goo.gl/photos/S6a9M9R7SgExu35c6', tags: ['melody', 'home', 'swimming'] },
            { name: '2014.04', url: 'https://goo.gl/photos/RQdYKCv8PXn3y4hz5', tags: ['melody', 'home', 'swimming', 'notebook'] },
            { name: '2014.03', url: 'https://goo.gl/photos/gL9QJk2DxJNu4Y988', tags: ['melody', 'home', 'glasses', 'swimming', 'cats', 'rocks', 'face paint', 'mega blocks'] },
            { name: '2014.02', url: 'https://goo.gl/photos/tZeMz7q5f7ciptiP8', tags: ['melody', 'allingham', 'playground'] },
            { name: '2014.01', url: 'https://goo.gl/photos/c68Y5jxgcTgC95p3A', tags: ['melody', 'home', 'swimming', 'bath', 'pizza', 'pram'] },
            { name: '2013.12', url: 'https://goo.gl/photos/KQjn5PcBzEyjL5a86', tags: ['melody', 'home', 'swimming', 'bunk bed', 'ymca'] },
            { name: '2013.11', url: 'https://goo.gl/photos/U5pCMNHh2gQLD6rBA', tags: ['melody', 'home', 'swimming', 'bunk bed', 'ymca', 'lake eppalock caravan park', '3rd birthday', 'lake weeroona', 'playground', 'bath'] },
            { name: '', url: '', tags: ['', ''] }
        ];


    });
})();


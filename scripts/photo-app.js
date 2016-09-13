(function () {
    var app = angular.module('photoAPP', []);

    var albumArray = [
      { date: '2016.09.04 - Castlemaine', url: 'https://goo.gl/photos/SHvTAYVbQjhTpFzr8' },
      { date: 'My Phone Wallpapers', url: 'https://goo.gl/photos/HxZQ5yRAKVMbwoUF6' },
      { date: '2016.08.26 - GSPS - Book week dress up', url: 'https://goo.gl/photos/xuD93TdGjK9PkKXG7' },
      { date: '2014.05', url: 'https://goo.gl/photos/S6a9M9R7SgExu35c6' },
      { date: '2014.04', url: 'https://goo.gl/photos/RQdYKCv8PXn3y4hz5' },
      { date: '2014.03', url: 'https://goo.gl/photos/gL9QJk2DxJNu4Y988' },
      { date: '2014.02.17.Allingham Playground', url: 'https://goo.gl/photos/tZeMz7q5f7ciptiP8' },
      { date: '2014.01', url: 'https://goo.gl/photos/c68Y5jxgcTgC95p3A' },
      { date: '2013.12.18.Swimming', url: 'https://goo.gl/photos/CVHMwghUiPMcszoG9' },
      { date: '2013.12.11.Swimming', url: 'https://goo.gl/photos/rEVWQZbKSHRAZcUF9' },
      { date: '2013.12.07.Bunk bed (part 4)', url: 'https://goo.gl/photos/A39sPSXQLoTwjyoC8' },
      { date: '2013.12.04.Swimming', url: 'https://goo.gl/photos/xCvAp68HUNWqFiiU7' },
      { date: '2013.12.02.Swimming', url: 'https://goo.gl/photos/QSXK7JT7wUTj3nmX8' },
      { date: '2013.11.29.Bunk bed (part 3)', url: 'https://goo.gl/photos/2ZPBXZpA2sna5C9GA' },
      { date: '2013.11.28.Bath', url: 'https://goo.gl/photos/6t7L64dNxxTo8Gbj6' },
      { date: '2013.11.27.Swimming', url: 'https://goo.gl/photos/fFE9GhdKMq8LfYWXA' },
      { date: '2013.11.26.Bunk bed (part 2)', url: 'https://goo.gl/photos/cEuRqVK9UfEV6XbU9' },
      { date: '2013.11', url: 'https://goo.gl/photos/U5pCMNHh2gQLD6rBA' },
      { date: '2013.11.25.Bath', url: 'https://goo.gl/photos/ZpZcm3DbA6QTnkSd9' },
      { date: '2013.11.20.Swimming', url: 'https://goo.gl/photos/7PEoynbddhF29Lso9' },
      { date: '2013.11.19.Bunk bed (part 1)', url: 'https://goo.gl/photos/XRLE4k2yb5yhFUBv5' },
      { date: '2013.11.17.Lake Weeroona', url: 'https://goo.gl/photos/BfD4g2nB3iT47P1C9' },
      { date: '2013.11.14.Melody 3rd birthday', url: 'https://goo.gl/photos/e2phVUzUU2aNWUbz9' },
      { date: '2013.11.13.Swimming', url: 'https://goo.gl/photos/SnomvqyTiQ6UhSbj7' }
    ];

    app.controller('albumCTL', function () {
      this.albums = albumArray;


    });
})();


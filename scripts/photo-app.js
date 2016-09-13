(function () {
    var app = angular.module('photoAPP', []);

    var albumArray = [
      { date: '2013.11', url: 'https://goo.gl/photos/U5pCMNHh2gQLD6rBA', tags: ['', ''] },
      { date: '2013.12', url: 'https://goo.gl/photos/bbhRSkLs7gdVXZCG6', tags: ['', ''] },
      { date: '2014.01', url: 'https://goo.gl/photos/c68Y5jxgcTgC95p3A', tags: ['', ''] },
      { date: '2014.02', url: 'https://goo.gl/photos/tZeMz7q5f7ciptiP8', tags: ['', ''] },
      { date: '2014.03', url: 'https://goo.gl/photos/gL9QJk2DxJNu4Y988', tags: ['', ''] },
      { date: '2014.04', url: 'https://goo.gl/photos/RQdYKCv8PXn3y4hz5', tags: ['', ''] },
      { date: '2014.05', url: 'https://goo.gl/photos/S6a9M9R7SgExu35c6', tags: ['', ''] },
      { date: '2016.08', url: 'https://goo.gl/photos/xuD93TdGjK9PkKXG7', tags: ['book week', 'dress up'] },
      { date: 'My Phone Wallpapers', url: 'https://goo.gl/photos/HxZQ5yRAKVMbwoUF6', tags: ['', ''] },
      { date: '2016.09', url: 'https://goo.gl/photos/SHvTAYVbQjhTpFzr8', tags: ['castlemaine', ''] }
    ];

    app.controller('albumCTL', function () {
      this.albums = albumArray;


    });
})();


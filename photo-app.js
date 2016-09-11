// Code goes here
(function () {
    var app = angular.module('photoAPP', []);

    var albumArray = [
      { name: '2016.09.04 - Castlemaine', url: 'https://goo.gl/photos/SHvTAYVbQjhTpFzr8' },
      { name: 'My Phone Wallpapers', url: 'https://goo.gl/photos/HxZQ5yRAKVMbwoUF6' }
    ];

    app.controller('albumCTL', function () {
      this.albums = albumArray;


    });
})();


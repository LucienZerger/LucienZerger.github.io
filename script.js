// Code goes here
(function () {
    var app = angular.module('photoAPP', []);

    var gem = {
        name: 'Dodecahedron',
        price: 2.95,
        description: '. . .',
    }
    
    var albumArray = [
      {
      date: '2012.01',
      url: 'https://hithere1.com',
      tags: ['swimming', 'kinder']
      },
      {
      date: '2016.06',
      url: 'https://hithere5.com',
      tags: ['bath', 'school']
      }
    ];

    app.controller('albumCTL', function () {
      this.albums = albumArray;


    });
})();


angular.module('PhotoAlbum')

.controller('AlbumsIndexController', function ($http) {
  var controller = this;
  $http({ method: 'GET', url: './js/albums.json' }).success(function (data) {
    controller.notes = data;
  });
});

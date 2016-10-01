angular.module('PhotoAlbum')

.controller('AlbumIndexController', function ($http) {
  var controller = this;
  $http({ method: 'GET', url: 'albums.json' }).success(function (data) {
    controller.notes = data;
  });
});

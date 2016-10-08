(function(){
  angular.module('PhotoAlbumNav')

  .config() {
  })

  .controller('NewsletterIndexController', function ($http) {
    var controller = this;
    $http({ method: 'GET', url: 'albums.json' }).success(function (data) {
      controller.notes = data;
    });
  });
})();

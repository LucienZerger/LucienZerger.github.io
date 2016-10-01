angular.module('PhotoAlbumApp', ['ngRoute'])

.config(function ($routeProvider) {
  $routeProvider
    .when('/albums', {
      templateUrl: 'index-albums.html',
      controller: 'AlbumIndexController',
      controllerAs: 'albumController'
    })

    .when('/newsletters', {
      templateUrl: 'index-newsletters.html',
      controller: 'NewsletterIndexController',
      controllerAs: 'newsletterController'
    })

    .when('/', {
      templateUrl: 'index-albums.html'
    })

    .otherwise({ redirectTo: '/' });
});

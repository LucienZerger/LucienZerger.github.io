angular.module("PhotoAlbum")

.config(function ($routeProvider) {
    $routeProvider.when('/albums', {
        templateUrl: './templates/pages/albums/index.html',
        controller: 'AlbumsIndexController',
        controllerAs: 'albumsController'
    })

    .when('/newsletters', {
        templateUrl: './templates/pages/newsletters/index.html'
    })

    .when('/', {
        templateUrl: './templates/pages/albums/index.html'
    })

    .otherwise({ redirectTo: '/' });
});


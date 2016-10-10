angular.module('PhotoAlbum.Nav')
.controller('navController', function () {
  this.tab = 1;

  this.selectTab = function(_){
    this.tab = _;
  };

  this.isSelected = function(_){
    return this.tab === _;
  };

  this.getNavItemColour = function(_){
    switch (expression) {
      case 1: return "";
      default:

    }
  };
});

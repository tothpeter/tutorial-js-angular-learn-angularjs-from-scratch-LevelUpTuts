angular.module('directoryApp', [])
  .controller('directoryController', function($scope) {
    $scope.list = [
      {name: 'Toma', age: 11},
      {name: 'Kalina.tech', age: 1}
    ];
  });

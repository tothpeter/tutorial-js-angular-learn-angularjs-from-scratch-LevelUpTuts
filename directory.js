angular.module('directoryApp', [])
  .controller('directoryController', function($scope) {
    $scope.list = [
      {name: 'Toma', age: 11},
      {name: 'Kalina.tech', age: 1}
    ];

    $scope.addPerson = function() {
      $scope.list.push({
        name: $scope.name,
        age: $scope.age
      });

      $scope.name = '';
      $scope.age = '';
    }
  });

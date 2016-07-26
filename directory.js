angular.module('directoryApp', [])
  .controller('directoryController', function() {
    var dirList = this;

    dirList.toggle = false;

    dirList.list = [
      {name: 'Toma', age: 35},
      {name: 'Kalina.tech', age: 1}
    ];

    dirList.addPerson = function() {
      dirList.list.push({
        name: dirList.name,
        age: dirList.age
      });

      dirList.name = '';
      dirList.age = '';
    }
  });

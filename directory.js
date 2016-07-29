angular.module('directoryApp', ['ngAnimate', 'ui.router'])
  .controller('directoryController', function() {
    var dirList = this;

    dirList.toggle = true;

    dirList.list = [
      {name: 'Toma', age: 35, img: 'https://s3.amazonaws.com/uifaces/faces/twitter/jollynutlet/73.jpg'},
      {name: 'Kalina.tech', age: 1, img: 'https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/73.jpg'}
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

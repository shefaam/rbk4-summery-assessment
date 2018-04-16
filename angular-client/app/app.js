var app  = angular.module('pokemon', ['pokemon.services', 'pokemon.controllers']);


app.controller('myCtrl', function($scope, $http) {
    $http({
        method : "GET",
        url : "/name"
    }).then(function mySuccess(response) {
        $scope.pok = response.data;
    	
    }, function myError(response) {
        $scope.pok = response.statusText;
    });
  
    $scope.Done = function (dat) {
    	console.log($scope.name)
    	   $http({
        method : "POST",
        url : "/name",
        data : {name : $scope.dat},
    }).then(function mySuccess(response) {
        console.log(response.data);
    	
    }, function myError(response) {
        $scope.pok = response.statusText;
    });
    }
});
var app  = angular.module('pokemon', ['pokemon.services', 'pokemon.controllers']);


app.controller('myCtrl', function($scope, $http) {
    $http({
        method : "GET",
        url : "/name"
    }).then(function mySuccess(response) {
        $scope.pok = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
});
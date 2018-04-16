var app  = angular.module('pokemon', ['pokemon.services', 'pokemon.controllers']);


app.controller('myCtrl', function($scope, $http) {
    $http({
        method : "GET",
        url : "/"
    }).then(function mySuccess(response) {
        $scope.myWelcome = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
});
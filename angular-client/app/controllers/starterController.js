angular.module('pokemon.controllers', ['pokemon.services'])
.controller('StarterController', function($scope,$http ,StarterFactory) {
  $scope.starter = 'Hello there!';
  console.log('Should be 15', StarterFactory.sampleFunction(10));
  /// 1. i need to get all the data from database
  /// 2. i need to post and get data for the same time!
  /// 3. post method for add a new Pokemon and save it in the database
  


$scope.addClick= function(){
	console.log($scope.name, $scope.number, $scope.imageUrl)
		var req = {
    method: 'POST',
    url: '/',
    data:{
    	name: $scope.name,
    	number: $scope.number,
    	imageUrl: $scope.imageUrl
    }
}

$http(req).then(function(data){
		console.log(data)
	}, 
	function(){console.log('error')});
	

  // getAll()
	
}


//   $scope.getAll= function(){
  	
//     var fetch = {
//     method: 'GET',
//     url: '/'
// }

// $http(fetch).then(function(data){
// 		console.log(data)
// 	}, 
// 	function(){console.log('error')});

//   }

  // $scope.init= function(){
  // 		getAll()
  // }

});






// Your front end should be served from Express and should allow the user to:
// - [ ] Display all Pokémon (with their images)
// - [ ] Add a new Pokémon
// - [ ] Filter Pokémon based on their type (but NOT on other properties)
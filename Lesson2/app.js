function TweetCtrl($scope){
	$scope.term = "angularjs";
	$scope.doSearch = function(term){
		//You could get the term from the scope, or as a function arg
		//Method easier to unit test when accepting as an argument
		//var term = $scope.term;
		console.debug(term);

		$scope.results = [
			{name: "Mike", age: 32},
			{name: "John", age: 18}];
	}
}
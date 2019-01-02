var app = angular.module("Celebrities", []);
app.controller("CelebritiesController", function ($scope, $http) {
	$scope.CelebrityImageUrls = [];
	$scope.CelebrityImageUrl = "";
	$scope.CelebrityName = "";
	$scope.loading = "false";
	$scope.GetCelebrityImages = function () {
		alert($scope.CelebrityName);
 		if ($scope.CelebrityName !== "") {
 			var httpcall = {
 				method: 'GET',
 				url: "getcelebrityimages", // + $scope.CelebrityName
 				params: { CelebrityName: $scope.CelebrityName }
 			};
 			$scope.loading = true;
 			$http(httpcall)
 				.then(function (rsp) {
 					//$scope.CelebrityImageUrls = rsp.data;
 					$scope.CelebrityImageUrl = rsp.data;
 					$scope.loading = false;
 				}, function (err) {
 					console.error(err);
 					$scope.loading = false;
 				});
 		}
	};

	$scope.loopCount = Math.ceil($scope.CelebrityImageUrls.length / 4);
	$scope.getNumber = function (num) {
		var arr = [];
		for (i = 0; i < num; i++) {
			arr.push(i);
		}
		return arr;
	};
});
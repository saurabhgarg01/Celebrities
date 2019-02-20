var app = angular.module("Celebrities", []);
app.controller("CelebritiesController", function ($scope, $http) {
	$scope.CelebrityImageUrls = [];
	$scope.CelebrityImageUrl = "";
	$scope.CelebrityName = "";
	$scope.CelebrityId = "";
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
 					$scope.CelebrityImageUrl = rsp[0];
 					alert($scope.CelebrityImageUrl);
 					$scope.loading = false;
 				}, function (err) {
 					console.error(err);
 					$scope.loading = false;
 				});
 		}
	};
	
	function GetCelebrityId(callback) {
        if ($scope.CelebrityId === "") {
            var httpcall = {
                method: 'GET',
                url: "getcelebrityid",
                data: { UserId: $scope.UserId, ANID: $scope.ANID, Email: $rootScope.userInfo.userName, FirstName: $rootScope.userInfo.profile.given_name, LastName: $rootScope.userInfo.profile.family_name }
            }
            $scope.loading = true;
            $http(httpcall)
                .then(function (rsp) {
                        $scope.UserId = rsp.data;
                        $scope.loading = false;
                        callback();
                },function (err) {
                    console.error(err);
                    $scope.loading = false;
                    callback();
                });
        }
        else {
            callback();
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
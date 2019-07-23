var app = angular.module("myApp", []);

app.controller("myController", function ($scope) {

	"use strict";

	$scope.users = [

		{
			name: "John",
			number: "9475632348"
        },
		{
			name: "Alex",
			number: "7439392047"
        },
		{
			name: "Jack",
			number: "9745274528"
        },
		{
			name: "Bob",
			number: "8932673293"
        },
		{
			name: "Danny",
			number: "7325324623"
        },
		{
			name: "James",
			number: "8324423748"
        }
        ];
	
	$scope.errorText = "Create new contact";


	$scope.addUser = function () {

		$scope.flag = false;

		$scope.errorText = "Create new contact";

		angular.forEach($scope.users, function (user) {

			if (angular.lowercase(user.name) == angular.lowercase($scope.newUser.name)) {
				$scope.errorText="Error: User already Exists";
				$scope.flag = true;
			}
		});

		if (!$scope.flag) {
			$scope.users.push($scope.newUser);
			$scope.flag = false;
		}
		$scope.newUser = null;
	};

	$scope.removeItem = function () {
		$scope.users.splice(this.$index, 1);
	};

});

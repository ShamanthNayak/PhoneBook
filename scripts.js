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


    $scope.addUser = function () {
        $scope.users.push($scope.newUser);
        $scope.newUser = {};
    };

    $scope.removeItem = function () {
        $scope.users.splice(this.$index, 1);
    };

    $scope.getTemplate = function (user) {
        if(user.name === $scope.selected.name) {
            return 'edit';
        }
        else 
            return 'display';
    }

});

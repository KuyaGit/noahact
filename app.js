var app = angular.module('BasicApp', []);
    app.controller('CalCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.ComputeVal = function() {
            const prelim = Number($scope.prelim || 0);
            const midterm = Number($scope.midterm || 0);
            const semis = Number($scope.semis || 0);
            const finals = Number($scope.finals || 0);
            const average = (prelim + midterm + semis + finals)/4;
            $scope.average = average;
        };

    }]);
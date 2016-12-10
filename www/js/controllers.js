angular.module('starter.controllers', ['ngAnimate'])

.controller('DashCtrl', function ($scope) {})

/*.controller('ChatsCtrl', function ($scope, Chats) {
    $scope.chats = Chats.all();
    $scope.getsome = 'Collect coins';
})*/

.controller('ChatsCtrl', function($scope, candleStickService) {
    $scope.indices = null;
    candleStickService.getData(function(dataResponse) {
        $scope.chats = dataResponse;
    });
})


.controller('ChatDetailCtrl', function ($scope, $http, $stateParams, Chats) {
    $http.get("http://www.google.com/finance/info?q=" + $stateParams.code, {
        isArray: false
    }).
    then(function (response) {
        $scope.items = angular.fromJson(response.data.slice(3));
    });
})
/*
.controller('repeatController', function ($scope, $http, $stateParams, Indices) {
	$scope.indices = Indices.getAll();
})*/

.controller('repeatController', function($scope, indiceService) {
    $scope.indices = null;
    indiceService.getData(function(dataResponse) {
        $scope.indices = dataResponse;
    });
})

.controller("LineCtrl", ['$scope', '$timeout', function ($scope, $timeout) {
    
    $scope.labels = ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];
    $scope.series = ['YHOO', 'Series B'];
    $scope.data = [[65, 59, 80, 81, 56, 50,62],[50,65, 59, 80, 81, 56,74]];
    
    angular.forEach($scope.items, function(value, key){
         
        if(key = "ltt")
           $scope.labels.push(value.ltt);
         });
    $scope.onClick = function (points, evt) {
        
        console.log(points, evt);
    };

    // Simulate async data update
    //$timeout(function () {
    //    $scope.data = [
    //  [65, 59, 80, 81, 56, 55]
    //];
    //}, 3000);
}])

.controller('AccountCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };



});
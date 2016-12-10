var serviceModule = angular.module('starter.services', [])

/*serviceModule.factory('Indices', function Hello($http) {
    var ticks;

    $http.get("http://localhost:8090/").
        success(function(data) {
        	ticks = data;
        });

    
	return {
		getAll: function(){        
            return ticks;
		} 
        
	}
})*/

serviceModule.service('indiceService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];
    this.getData = function(callbackFunc) {
        $http({
            method: 'GET',
            url: 'http://localhost:8090/',
            params: '',
            headers: ''
        }).success(function(data){            
            callbackFunc(data);
        }).error(function(){
            alert("error");
        });
     }
})

serviceModule.service('candleStickService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];
    this.getData = function(callbackFunc) {
        $http({
            method: 'GET',
            url: 'http://localhost:8090/candle',
            params: '',
            headers: ''
        }).success(function(data){            
            callbackFunc(data);
        }).error(function(){
            alert("error");
        });
     }
});

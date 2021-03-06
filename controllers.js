// CONTROLLERS
// HOME CONTROLLER
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {
    $scope.city = cityService.city;
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });
    $scope.submit = function() {
        $location.path("/forecast");
    };
}]);

// FORECAST CONTROLLER
weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService) {
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '5';
    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);
    //console.log($scope.weatherResult);
    $scope.convertToFahrenheit = function(degK) {
        return Math.round((1.8 * (degK - 273)) + 32);
    }
    $scope.convertToDate = function(dt) {
        return new Date(dt * 1000);
    }

}]);

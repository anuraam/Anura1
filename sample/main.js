// fe43bead-b7b1-4e6c-b273-5a101ba16b9c
/*global angular: true */

(function () {
    "use strict";

    angular.module('insightsApp', ['ngRoute', 'ApplicationInsightsModule'])
        .config(['$routeProvider', 'applicationInsightsServiceProvider', function ($routeProvider, applicationInsightsServiceProvider) {

            var options = {applicationName:'insightsApp'};
            applicationInsightsServiceProvider.configure('295bc8b8-b3fb-4efb-b1ff-dca0fe05b120', options );

            $routeProvider
                .when('/', {
                    templateUrl: "page1.html",
                    controller: 'page1Controller'
                })
                .when('/page2', {
                    templateUrl: "page2.html"
                });

            // Add application insights id here
            // 295bc8b8-b3fb-4efb-b1ff-dca0fe05b120

        }])
        .controller('page1Controller', ['$scope', 'applicationInsightsService', function($scope, applicationInsightsService) {

            applicationInsightsService.trackEvent('Page 1 Controller Activated');

            $scope.exit = function () {
                applicationInsightsService.trackEvent('User clicked the exit button');
            };
        }]);

}());

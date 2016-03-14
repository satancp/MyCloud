'use strict';

angular.module('cloudApp')
  .directive('timeUpdate', ['$interval', 'dateFilter',
      function($interval, dateFilter) {
    return {
      restrict: 'EA',
      link: function (scope, element, attrs) {
      	var format;
      	var stopTime;
      	function updateTime() {
        	element.text(dateFilter(new Date(), format));
        }
		scope.$watch(attrs.timeUpdate, function(value) {
        	format = value;
            updateTime();
        });
		stopTime = $interval(updateTime, 1000);
		element.on('$destroy', function() {
        	$interval.cancel(stopTime);
        });
      }
    };
  }]);
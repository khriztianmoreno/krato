(function (){
	'use strict';
	angular.module('kratosApp')
		.directive('rating', rating);

	function rating(){
		return {
            restrict: "E",
            priority: 0,
            transclude: true,
            template: "<div>Hola {{data}}</div>",
            replace: false,
            scope: {
                maxValue: "=maxValue",
                value: "=value"
            }

        };
	};
})();
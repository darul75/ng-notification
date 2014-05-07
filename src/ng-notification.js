(function (angular) {
'use strict';
	angular.module('ngNotification', []).directive('notification', ['$compile', function ($compile) {	

		var classes = {
			primary : 'bg-primary',
			success: 'bg-success',
			info: 'bg-info',
			warning: 'bg-warning',
			danger: 'bg-danger'
		};

		return {
			restrict: 'AE',
			template: '',
			replace: true,
			link:function (scope, elm, attr) {				

				scope.boot_class = classes.primary;

				var isDef = angular.isDefined;

				scope.$on('notification', function(event, o) {

					if (!isDef(o) || !isDef(o.type) || !isDef(classes[o.type]))
						return;
					var type = o.type;
					scope.boot_class = classes[type];
					scope.msg = o.msg;

					elm.html(template);
					$compile(elm.contents())(scope);

				});

				var template = '<div id="message_container">' +
				// '<div id="point" ng-class="boot_class"></span></div>'	+
				// '<div id="circle1" ng-class="boot_class"></div>' +
				// '<div id="circle2" ng-class="boot_class"></div>' +
			 	'<div id="message" ng-class="boot_class" class="animation">{{msg}}</div></div>';
				
			
			}
		};
	}]);
})(angular);
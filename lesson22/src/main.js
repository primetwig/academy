var app = angular.module('app', []);



app.directive('boost', function () {
    return {
        restrict: 'A',
        transclude: true,
        template: 'Big <span ng-transclude></span>'
    };
});









//app.directive('quote', function () {
//    return {
//        restrict: 'A',
//        link: function (scope, element, attrs) {
//
//            var hint = angular.element('<span></span>');
//            hint.html(' - said ' + attrs.quote);
//            element.append(hint);
//
//        }
//    };
//});











//app.controller('FormController', function ($filter) {
//    this.format = 'MMMM dd, yyyy';
//
//    //this.getFormat = function () {
//    //    console.log('digest');
//    //    return this.format;
//    //}
//});
//
//app.directive('date', function ($filter) {
//    return {
//        restrict: 'A',
//        link: function (scope, element, attrs) {
//
//            var today = new Date();
//            var formatted = $filter('date')(today, attrs.date);
//            element.text(formatted);
//
//
//
//            //function update(format) {
//            //    var today = new Date();
//            //    var formatted = $filter('date')(today, format);
//            //    element.text(formatted);
//            //}
//            //update(attrs.date);
//            //
//            //scope.$watch(
//            //    function () {
//            //        return someVariable;
//            //    },
//            //    function(newValue, oldValue) {
//            //        update(newValue);
//            //    }
//            //);
//        }
//    };
//});









//app.controller('FormController', function ($scope) {
//    var ctrl = this;
//    ctrl.format = 'MMMM dd, yyyy';
//
//    setTimeout(function () {
//        ctrl.format = 'yyyy-dd-MM';
//        console.log(ctrl.format);
//
//
//        $scope.$digest();
//
//        $scope.$apply(function () {
//            ctrl.format = 'yyyy-dd-MM';
//            console.log(ctrl.format);
//        });
//    }, 1000);
//});













//app.controller('FormController', function ($scope, $rootScope, $timeout) {
//
//    $timeout(function () {
//        $rootScope.theme = 'steelblue';
//        // $scope.$root
//    }, 2000);
//
//    this.getTheme = function () {
//        return $rootScope.theme;
//    }
//
//});
//
//app.controller('AnotherController', function ($scope, $rootScope) {
//
//    this.getTheme = function () {
//        return $rootScope.theme;
//    }
//
//});













//app.controller('ParentController', function ($scope, $rootScope, $timeout) {
//
//    // firing an event upwards
//    $scope.$emit('MY_CUSTOM_EVENT', 'Data to send');
//
//    // firing an event downwards
//    $scope.$broadcast('MY_CUSTOM_EVENT', {
//        someProp: 'Sending you an Object!' // send whatever you want
//    });
//
//    // listen for the event in the relevant $scope
//    $scope.$on('MY_CUSTOM_EVENT', function (event, data) {
//        console.log('parent', data); // 'Data to send'
//    });
//
//
//    //$rootScope.$broadcast
//    //$timeout(function () {}, 2000);
//
//});
//
//app.controller('ChildController', function ($scope, $rootScope) {
//
//    $scope.$on('MY_CUSTOM_EVENT', function (event, data) {
//        console.log('child', data); // 'Data to send'
//    });
//
//});

































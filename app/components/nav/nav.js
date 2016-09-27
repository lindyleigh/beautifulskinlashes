; (function () {

    angular.module('beautiful')
        .component('navComponent', {
            templateUrl: 'app/components/nav/nav.html',
            controller: NavController
        })

    function NavController() {
        var $ctrl = this;

    }


} ());
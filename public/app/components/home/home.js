; (function () {

    angular.module('beautiful')
        .component('homeComponent', {
            templateUrl: 'app/components/home/home.html',
            controller: HomeController
        })

    function HomeController() {
        var $ctrl = this;

    }

} ());
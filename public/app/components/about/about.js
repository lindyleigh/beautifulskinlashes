; (function () {

    angular.module('beautiful')
        .component('aboutComponent', {
            templateUrl: 'app/components/about/about.html',
            controller: AboutController
        })

    function AboutController() {
        var $ctrl = this;

    }

} ());
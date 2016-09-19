; (function () {

    angular.module('beautiful')
        .component('navComponent', {
            templateUrl: 'app/components/nav/nav.html',
            controller: NavController
        })

    function NavController() {
        var $ctrl = this;

        $ctrl.responsiveNavbar = function () {
            $ctrl.x = angular.element(document.getElementById("navbar"));
            if ($ctrl.x.className === "navbar") {
                $ctrl.x.className += " responsive";
            } else {
                $ctrl.x.className = "navbar";
            }
        }

    }

} ());
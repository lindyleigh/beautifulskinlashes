; (function () {

    angular.module('beautiful')
        .component('navComponent', {
            templateUrl: 'app/components/nav/nav.html',
            controller: NavController
        })

    function NavController() {
        var $ctrl = this;

        $ctrl.openMenu= function() {
            angular.element(document.getElementById("hamburger").style.width = "250px");
            angular.element(document.body.style.backgroundColor = "rgba(0,0,0,0.4)");
        }

        $ctrl.closeMenu= function() {
            angular.element(document.getElementById("hamburger").style.width = "0");
            angular.element(document.body.style.backgroundColor = "white");
    }

    }


} ());
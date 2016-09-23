; (function () {

    angular.module('beautiful')
        .component('footerComponent', {
            templateUrl: 'app/components/footer/footer.html',
            controller: FooterController
        })

    function FooterController() {
        var $ctrl = this;

    }

} ());
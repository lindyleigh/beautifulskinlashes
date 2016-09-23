; (function () {

    angular.module('beautiful')
        .component('contactComponent', {
            templateUrl: 'app/components/contact/contact.html',
            controller: ContactController
        })

    function ContactController() {
        var $ctrl = this;

    }

} ());
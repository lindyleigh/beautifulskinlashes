; (function () {

    angular.module('beautiful')
        .component('contactComponent', {
            templateUrl: 'app/components/contact/contact.html',
            controller: ContactController
        })

    function ContactController() {
        var $ctrl = this;

        function $initMap() {
        $ctrl.uluru = {lat: 43.5896444, lng: -116.2564094};
        $ctrl.map = new google.maps.Map(angular.element(document.getElementById('map')), {
          zoom: 4,
          center: uluru
        });
        $ctrl.marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

    }

} ());
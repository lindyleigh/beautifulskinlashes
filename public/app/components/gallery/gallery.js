; (function () {

    angular.module('beautiful')
        .component('galleryComponent', {
            templateUrl: 'app/components/gallery/gallery.html',
            controller: GalleryController
        })

    function GalleryController() {
        var $ctrl = this;

    }

} ());
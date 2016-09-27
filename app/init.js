;(function(){

    angular.module('beautiful', ['ui.router'])
    
        //ROUTING CONFIG
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state('home', {
                    url: '/home',
                    component: 'homeComponent'
                })
                .state('about', {
                    url: '/about',
                    component: 'aboutComponent'
                })
                .state('services', {
                    url: '/services',
                    component: 'servicesComponent'
                })
                .state('booking', {
                    url: '/booking',
                    component: 'bookingComponent'
                })
                .state('gallery', {
                    url: '/gallery',
                    component: 'galleryComponent'
                })
                .state('contact', {
                    url: '/contact',
                    component: 'contactComponent'
                })

                $locationProvider.html5Mode(true);
		})         

}());
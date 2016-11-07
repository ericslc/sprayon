angular.module('spray', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/views/home.html',
      controller: 'sprayctrl',
    })
    .state('about', {
      url: '/about',
      templateUrl: '/views/about.html',
      controller: 'sprayctrl'
    })
    .state('fireproofing', {
      url: '/fireproofing',
      templateUrl: './views/fireproofing.html',
      controller: 'sprayctrl'
    })
    .state('intumescent', {
      url: '/intumescent',
      templateUrl: './views/intumescent.html',
      controller: 'sprayctrl'
    })
    .state('insulation', {
      url: '/insulation',
      templateUrl: './views/insulation.html',
      controller: 'sprayctrl'
    })
    .state('portfolio', {
      url: '/portfolio',
      templateUrl:'./views/portfolio.html',
      controller: 'sprayctrl'
    })
    .state('elizabeth', {
      url: '/elizabeth',
      templateUrl:'./views/elizabeth.html',
      controller: 'sprayctrl'
    })
    .state('jvhospital', {
      url: '/jvhospital',
      templateUrl:'./views/jvhospital.html',
      controller: 'sprayctrl'
    })
    .state('livingplanet', {
      url: '/livingplanet',
      templateUrl:'./views/livingplanet.html',
      controller: 'sprayctrl'
    })
    .state('performingarts', {
      url: '/performingarts',
      templateUrl:'./views/performingarts.html',
      controller: 'sprayctrl'
    })
    .state('usurec', {
      url: '/usurec',
      templateUrl:'./views/usurec.html',
      controller: 'sprayctrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl:'./views/contact.html',
      controller: 'sprayctrl'
    })
    $urlRouterProvider.otherwise('/');
});

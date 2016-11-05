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
      templateUrl: './views/intumescent/html',
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
    .state('contact', {
      url: '/contact',
      templateUrl:'./views/contact.html',
      controller: 'sprayctrl'
    })
    $urlRouterProvider.otherwise('/');
});

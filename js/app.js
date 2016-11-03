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
    .state('product1', {
      url: '/product1',
      templateUrl: './views/product1.html',
      controller: 'sprayctrl'
    })
    .state('product2', {
      url: '/product2',
      templateUrl: './views/product2/html',
      controller: 'sprayctrl'
    })
    .state('product3', {
      url: '/product3',
      templateUrl: './views/product3.html',
      controller: 'sprayctrl'
    })
    .state('portfolio', {
      url: '/portfolio',
      templateUrl:'./views/portfolio.html',
      controller: 'sprayctrl'
    })
    $urlRouterProvider.otherwise('/');
});

'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers', 'myApp.runs']).
        config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/perso', {templateUrl: 'partials/perso.html', controller: 'CtrPerso'});
                $routeProvider.when('/type', {templateUrl: 'partials/type.html', controller: 'CtrType'});
                $routeProvider.when('/faction', {templateUrl: 'partials/faction.html', controller: 'CtrFaction'});
                $routeProvider.when('/allegeance', {templateUrl: 'partials/allegeance.html', controller: 'CtrAllegeance'});
                $routeProvider.when('/specialite', {templateUrl: 'partials/specialite.html', controller: 'CtrSpecialite'});
                $routeProvider.when('/competences', {templateUrl: 'partials/competences.html', controller: 'CtrCompetences'});
                $routeProvider.when('/pouvoir_inhumain', {templateUrl: 'partials/pouvoir_inhumain.html', controller: 'CtrPouvoirInhumain'});
                $routeProvider.otherwise({redirectTo: '/perso'});
            }]);

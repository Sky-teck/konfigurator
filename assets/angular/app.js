//Angular-JS-App intialisieren
angular.module('conf', ["ngAnimate", "ngSanitize", "ngRoute", "controllers", "komponenten"/*, "filter"*/])
//Route konfigurieren
        .config(['$routeProvider', "$locationProvider",
            function ($routeProvider, $locationProvider) {
                var res = $(document).width();
                if (res > 480) {
                    $routeProvider.when('/', {
                        templateUrl: 'views/start.html',
                        title: 'Herzlich Willkommen',
                        controller: 'startctrl'
                    }).when('/error/:code/', {
                        templateUrl: 'views/error.html',
                        title: 'Fehler',
                        controller: 'errorctrl'
                    }).when('/gehauese/', {
                        templateUrl: 'views/gehauese.html',
                        title: 'Schritt 1: Gehäuse auswählen',
                        controller: 'gehausectrl'
                    }).when('/motherboard/', {
                        templateUrl: 'views/motherboard.html',
                        title: 'Schritt 2: Motherboard auswählen',
                        controller: 'motherboardctrl'
                    }).when('/result/', {
                        templateUrl: 'views/result.html',
                        title: 'Fertig! Übersicht über die Komponenten',
                        controller: 'ergebnisctrl'
                    }).when('/cpu/', {
                        templateUrl: 'views/cpu.html',
                        title: 'Schritt 3: CPU auswählen',
                        controller: 'cpuctrl'
                    }).when('/cpucooler/', {
                        templateUrl: 'views/cpucooler.html',
                        title: 'Schritt 4: CPU-Kühler auswählen',
                        controller: 'cpucoolerctrl'
                    }).otherwise({
                        redirectTo: '/'
                    });
                } else {
                    $routeProvider.when('/', {
                        templateUrl: 'views/low_screen.html',
                        title: 'Auflösung zu gering',
                        controller: 'low_screen'
                    }).otherwise({
                        redirectTo: '/'
                    });
                }

            }
        ]).run(['$rootScope', function ($rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            Debug("route");
            $rootScope.title = current.$$route.title;
        });
    }]);





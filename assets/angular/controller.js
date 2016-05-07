angular.module("controllers", [])

        //-- Ergebnis unten + am Ende  --
        .controller('ergebnisctrl', function ($scope, $rootScope) {
            //Ausgabe frei machen
            ClearOutput();
            //kein next button da letzter schritt
            $rootScope.next_invisible = true;
            //Fortschritt setzen
            $rootScope.status = 100;
            //Globales Scope in Global speichern
            $scope.global = $rootScope;
            //Zurück-button setzen
            $rootScope.prev = "#/cpucooler/";

            //Alles zusammenrechnen
            $scope.preis = function () {

                var preis_gesamt;
                var preis_motherboard = parseFloat($rootScope.motherboard.Preis);
                var preis_gehauese = parseFloat($rootScope.gehauese.Preis);
                var preis_cpu = parseFloat($rootScope.cpu.Preis);
                var preis_cpucooler = parseFloat($rootScope.cpucooler.Preis);
                preis_gesamt = preis_gehauese + preis_motherboard + preis_cpu + preis_cpucooler;
                Debug("Gesamtpreis berechnet");
                return preis_gesamt;
            };
        })

        //-- Weiter/Zurück --
        .controller('navigationctrl', function ($scope, $rootScope) {
            //Globales Scope in Global speichern
            $scope.global = $rootScope;
        })

        //-- Status --
        .controller('statusctrl', function ($scope, $rootScope) {
            //Globales Scope in Global speichern
            $scope.global = $rootScope;
        })

        //-- Startseite --
        .controller('startctrl', function ($scope, $rootScope) {
            //Globales Scope in Global speichern
            $scope.global = $rootScope;
            //Fortschritt setzen
            $rootScope.status = 0;
            //prev-button ausbleden
            $rootScope.prev_invisible = true;
            $rootScope.next_invisible = false;
            //next-link
            $rootScope.next = "#/gehauese";
        })

        //-- Fehler --
        .controller('errorctrl', function ($scope, $routeParams, $rootScope) {
            //Globales Scope in Global speichern
            $scope.global = $rootScope;
            //Route-code speichern
            $scope.code = $routeParams.code;
            //nach routcode texte entwerfen
            if ($scope.code === 404)
                $scope.message = "Ihre gesuchte Seite wurde nicht gefunden.";
            else if ($scope.code === 503)
                $scope.message = "Sie haben keinen Zugriff auf diese Seite";
            else {
                $scope.code = "Unbekannter Fehler";
                $scope.message = "Ein unbehandelter Fehler wurde verursacht, bitte versuchen Sie es später erneut, \n\					      sollte es dann immer noch nicht funktionieren wenden Sie sich bitte per Mail an den Seitenbetreiber";
            }
        })
        //-- Bildschirm zu klein --
        .controller('low_screen', function ($scope, $routeParams, $rootScope) {
            //Route-code speichern
            $scope.global = $rootScope;
            //buttons ausblenden
            $rootScope.prev_invisible = true;
            $rootScope.next_invisible = true;
            //zu_klein auf true
            $rootScope.mobile = true;

        });

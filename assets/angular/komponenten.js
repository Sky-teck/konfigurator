//Debug-Info-Funktion
function Debug(text) {
    console.log("[DEBUG] " + text + " | Zeit: " + new Date().toString());
}
function ClearOutput() {
    console.clear();
}

//PC-Komponenten
angular.module("komponenten", [])

//-- Gehäuse --
        .controller('gehausectrl', function ($scope, $http, $rootScope) {
            //Konsolenausgabe leeren
            ClearOutput();
            //globale kopie von rootscope
            $scope.global = $rootScope;
            //status aktualisieren
            $rootScope.status = 5;
            //Prev verbergen
            $rootScope.prev_invisible = false;
            //next-buttons-link setzen
            $rootScope.prev = "#/";
            $rootScope.next = "#/motherboard/";
            //kein gehäuse ausgewählt
            if (typeof $rootScope.gehauese === "undefined") {
                //standardwert setzen
                $scope.global.gehauese = -1;
                //navigation zum nächsten schritt verhindern
                $rootScope.next_invisible = true;
                //Debug
                Debug("Standardwert für aktuelles Gehäuse gesetzt");
            } else {
                //Next-Button anzeigen
                $rootScope.next_invisible = false;
            }

            //Gehäusedaten
            $http({
                method: 'GET',
                url: "komponenten/?teil=case"
            }).then(function (antwort) {
                //Response speichern
                $rootScope.alle_gehauese = antwort.data;
                //Debug
                Debug("Gehäuse geladen");
            });
            //Formfaktoren
            $http({
                method: 'GET',
                url: 'komponenten/?teil=formfaktor'
            }).then(function (antwort) {
                //Reponse speichern
                $rootScope.formfaktoren = antwort.data;
                //Debug
                Debug("Formfaktoren geladen");
            });
            //Funktion für Gehäusewahl
            $scope.WaehleGehauese = function (gehauese) {
                //Motherboard resetten
                $rootScope.motherboard = -1;
                //Kopie
                $rootScope.gehauese = gehauese;
                //next-button anzeigen
                $rootScope.next_invisible = false;
                //Debug
                Debug("Gehäuse ausgewählt");
            };
        })

//-- Motherboard --
        .controller('motherboardctrl', function ($scope, $http, $rootScope) {
            //Konsolenausgabe leeren
            ClearOutput();
            //Globales Scope in Global speichern
            $scope.global = $rootScope;
            //status aktualisieren
            $rootScope.status = 10;
            //prev-button anzeigen
            $rootScope.prev_invisible = false;
            //LInk für den Next-Button setzen
            $rootScope.next = "#/cpu/";
            $rootScope.prev = "#/gehauese/";
            //Wenn kein Motherboard ausgewählt auf -1 setzen und dann nicht auf anderen seiten durchlassen
            if (typeof $rootScope.motherboard === "undefined" || $rootScope.motherboard == -1) {
                $rootScope.motherboard = -1;
                $rootScope.next_invisible = true;
            } else {
                $rootScope.next_invisible = false;
            }

            //Motherboards
            $http({
                method: 'GET',
                url: "komponenten/?teil=motherboard"
            }).then(function (antwort) {
                $rootScope.motherboards = antwort.data;
                Debug("Motherboards geladen.");
            });
            //Filterfunktion für die Suche passt Formfaktor von Gehäuse und Mainboard
            $scope.PasstForm = function () {

                return function (item) {
                    //Passt-Wert sezten
                    var passt = false;
                    //alle formfaktoren iterieren
                    angular.forEach($rootScope.formfaktoren, function (val, key) {

                        //case-id des formfaktors gleich des AKTUELLEN gehäuses
                        if (val.case_id === $rootScope.gehauese.ID) {

                            //ist eine passform dabei von aktuellen gehäuse?
                            if (item.Formfaktor === val.form) {
                                //Rückgabe auf true setzen
                                passt = true;
                                //Debug
                                Debug("Pasendes Motherboard gefunden");
                            }
                        }
                    });
                    //In Suchergebnis (true/False)
                    return passt;
                };
            };
            //Funktion für Mainboardwahl
            $scope.WaehleMotherboard = function (motherboard) {
                //CPUs resetten
                $rootScope.cpu = -1;
                //PK speichern
                $rootScope.motherboard = motherboard;
                //next-button anzeigen
                $rootScope.next_invisible = false;
                //Debug
                Debug("Motherboard ausgwählt");
            };
        })
//-- CPU --
        .controller('cpuctrl', function ($rootScope, $scope, $http) {
            //Konsolenausgabe leeren
            ClearOutput();
            //globale kopie von rootscope
            $scope.global = $rootScope;
            //status aktualisieren
            $rootScope.status = 15;
            //prev-button anzeigen
            $rootScope.prev_invisible = false;
            //LInk für den Next-Button setzen
            $rootScope.next = "#/cpucooler/";
            $rootScope.prev = "#/motherboard/";
            //CPUs
            $http({
                method: 'GET',
                url: "komponenten/?teil=cpu"
            }).then(function (antwort) {
                $rootScope.cpus = antwort.data;
                Debug("CPUs geladen.");
            });
            //Wenn kein CPU ausgewählt auf -1 setzen und dann nicht auf anderen seiten durchlassen
            if (typeof $rootScope.cpu === "undefined" || $rootScope.cpu == -1) {
                $rootScope.cpu = -1;
                $rootScope.next_invisible = true;
            } else {
                $rootScope.next_invisible = false;
            }

            //Funktion für Mainboardwahl
            $scope.Waehlecpu = function (cpu) {
                //PK speichern
                $rootScope.cpu = cpu;
                //next-button anzeigen
                $rootScope.next_invisible = false;
                //Debug
                Debug("CPU ausgwählt");
            };
            //Filter
            $scope.PasstForm = function () {

                return function (item) {
                    //Passt-Wert sezten
                    var passt = false;
                    //ist eine passform dabei von aktuellen motherboard?
                    if (item.Sockel === $rootScope.motherboard.Sockel) {
                        //Rückgabe auf true setzen
                        passt = true;
                        //Debug
                        Debug("Pasende CPU gefunden");
                    }

                    //In Suchergebnis (true/False)
                    return passt;
                };
            };
        })
//-- CPUcooler --
        .controller('cpucoolerctrl', function ($rootScope, $scope, $http) {
            //Konsolenausgabe leeren
            ClearOutput();
            //globale kopie von rootscope
            $scope.global = $rootScope;
            //status aktualisieren
            $rootScope.status = 15;
            //prev-button anzeigen
            $rootScope.prev_invisible = false;
            //LInk für den Next-Button setzen
            $rootScope.next = "#/result/";
            $rootScope.prev = "#/cpu/";
            //CPUs
            $http({
                method: 'GET',
                url: "komponenten/?teil=cpucooler"
            }).then(function (antwort) {
                $rootScope.cpucoolers = antwort.data;
                Debug("CPUcoolers geladen.");
            });

            //sockel
            $http({
                method: 'GET',
                url: 'komponenten/?teil=cpucoolersock'
            }).then(function (antwort) {
                //Reponse speichern
                $rootScope.cpucoolersock = antwort.data;
                //Debug
                Debug("CPUcoolersockel geladen");
            });

            //Wenn kein CPU ausgewählt auf -1 setzen und dann nicht auf anderen seiten durchlassen
            if (typeof $rootScope.cpucooler === "undefined" || $rootScope.cpucooler == -1) {
                $rootScope.cpucooler = -1;
                $rootScope.next_invisible = true;
            } else {
                $rootScope.next_invisible = false;
            }

            //Filterfunktion für die Suche passt Formfaktor von Gehäuse und Mainboard
            $scope.PasstKuehler = function () {

                return function (item) {
                    //Passt-Wert sezten
                    var passt = false;
                    //alle formfaktoren iterieren
                    angular.forEach($rootScope.cpucoolersock, function (val, key) {
                        //case-id des formfaktors gleich des AKTUELLEN gehäuses
                        if (val.sockel === $rootScope.cpu.Sockel) {
                            if (val.id_cpucooler === item.ID) {
                                //Rückgabe auf true setzen
                                passt = true;
                                //Debug
                                Debug("Pasender CPU-Kühler gefunden");
                            }
                        }
                    });
                    //In Suchergebnis (true/False)
                    return passt;
                };
            };

            //Funktion für Mainboardwahl
            $scope.Waehlecpucooler = function (cpucooler) {
                //PK speichern
                $rootScope.cpucooler = cpucooler;
                //next-button anzeigen
                $rootScope.next_invisible = false;
                //Debug
                Debug("CPUcooler ausgwählt");
            };


        });

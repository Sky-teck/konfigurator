/*//Filter
 angular.module("filter", [])
 //Passt Mainboard zu Gehäuse Filter
 .filter('gehauese_mainboard', function ($rootScope) {
 return function (items, search) {
 if (!search) {
 return items;
 }
 
 return items.filter(function (element) {
 return element.Formfaktor === "mini";
 });
 };
 });*/